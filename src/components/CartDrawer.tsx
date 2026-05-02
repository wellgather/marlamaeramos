import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag, Minus, Plus, Trash2, ExternalLink, Loader2, Check, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("");
  const {
    items, isLoading, isSyncing, updateQuantity, removeItem,
    getCheckoutUrl, syncCart, applyDiscount, discountCode, discountApplicable,
  } = useCartStore();
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + parseFloat(i.price.amount) * i.quantity, 0);
  const currency = items[0]?.price.currencyCode || '';

  useEffect(() => { if (isOpen) syncCart(); }, [isOpen, syncCart]);
  useEffect(() => { if (discountCode) setCode(discountCode); }, [discountCode]);

  const handleCheckout = () => {
    const url = getCheckoutUrl();
    if (url) {
      window.open(url, '_blank');
      setIsOpen(false);
    }
  };

  const handleApply = async () => {
    const res = await applyDiscount(code.trim());
    if (!res.ok) toast.error("Couldn't apply code");
    else if (!res.applicable && code.trim()) toast.error("Code not applicable");
    else if (res.applicable) toast.success("Discount applied");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative rounded-full hover:bg-primary-soft">
          <ShoppingBag className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full bg-background">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-center">
              <div>
                <ShoppingBag className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0 space-y-4">
                {items.map(item => (
                  <div key={item.variantId} className="flex gap-4 p-3 rounded-2xl bg-muted/40">
                    <div className="w-20 h-20 bg-secondary rounded-xl overflow-hidden flex-shrink-0">
                      {item.product.node.images?.edges?.[0]?.node && (
                        <img src={item.product.node.images.edges[0].node.url} alt={item.product.node.title} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{item.product.node.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.selectedOptions.map(o => o.value).join(' • ')}</p>
                      <p className="font-semibold text-primary mt-1">{currency} {parseFloat(item.price.amount).toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => removeItem(item.variantId)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                      <div className="flex items-center gap-1">
                        <Button variant="outline" size="icon" className="h-7 w-7 rounded-full" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-7 w-7 rounded-full" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-shrink-0 space-y-4 pt-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Discount code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="rounded-full"
                  />
                  <Button onClick={handleApply} variant="outline" className="rounded-full" disabled={isLoading}>
                    Apply
                  </Button>
                </div>
                {discountCode && (
                  <div className="flex items-center gap-2 text-sm">
                    {discountApplicable
                      ? <><Check className="h-4 w-4 text-primary" /> Code <strong>{discountCode}</strong> applied at checkout</>
                      : <><X className="h-4 w-4 text-destructive" /> Code <strong>{discountCode}</strong> not applicable</>}
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-lg">Subtotal</span>
                  <span className="text-2xl font-display">{currency} {totalPrice.toFixed(2)}</span>
                </div>
                <Button onClick={handleCheckout} variant="coral" className="w-full" size="lg" disabled={items.length === 0 || isLoading || isSyncing}>
                  {isLoading || isSyncing ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ExternalLink className="w-4 h-4 mr-2" />Secure Checkout</>}
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
