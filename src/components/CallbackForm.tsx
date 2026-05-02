import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(254),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

interface Props {
  variant?: "glass" | "card";
  title?: string;
  subtitle?: string;
  cta?: string;
  showLocation?: boolean;
  showMessage?: boolean;
}

export const CallbackForm = ({
  variant = "glass",
  title = "Begin Your Journey",
  subtitle = "Request a callback — I'll personally reach out within 24h.",
  cta = "Request a Callback",
  showLocation = true,
  showMessage = true,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ name: "", email: "", phone: "", location: "", message: "" });

  const onChange = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData(d => ({ ...d, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("callback_requests").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      location: parsed.data.location || null,
      message: parsed.data.message || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Couldn't send your request. Please try again.");
      return;
    }
    toast.success("Thank you — I'll be in touch shortly.");
    setData({ name: "", email: "", phone: "", location: "", message: "" });
  };

  const wrap =
    variant === "glass"
      ? "backdrop-blur-xl bg-white/75 border border-white/60 shadow-coral"
      : "bg-white border border-border/40 shadow-card";

  return (
    <form onSubmit={onSubmit} className={`${wrap} rounded-3xl p-6 md:p-8 w-full max-w-md`}>
      <div className="text-center mb-5">
        <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
      </div>
      <div className="space-y-3">
        <Input placeholder="Full Name" value={data.name} onChange={onChange("name")} required maxLength={120} />
        <Input type="email" placeholder="Email" value={data.email} onChange={onChange("email")} required maxLength={254} />
        <Input placeholder="Phone (optional)" value={data.phone} onChange={onChange("phone")} maxLength={40} />
        {showLocation && (
          <Input placeholder="Brand / Property / Location" value={data.location} onChange={onChange("location")} maxLength={120} />
        )}
        {showMessage && (
          <Textarea placeholder="A few words about what you're looking for…" value={data.message} onChange={onChange("message")} rows={3} maxLength={2000} />
        )}
        <Button type="submit" variant="coral" className="w-full" disabled={loading}>
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : cta}
        </Button>
      </div>
    </form>
  );
};
