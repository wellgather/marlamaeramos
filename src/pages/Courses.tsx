import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { ShopifyProduct, STOREFRONT_QUERY, storefrontApiRequest } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const Courses = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(s => s.addItem);
  const isAdding = useCartStore(s => s.isLoading);

  useEffect(() => {
    storefrontApiRequest(STOREFRONT_QUERY, { first: 24, query: null })
      .then(d => setProducts(d?.data?.products?.edges || []))
      .catch(e => console.error(e))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = async (p: ShopifyProduct) => {
    const variant = p.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product: p,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { position: "top-center" });
  };

  return (
    <>
      <section className="bg-gradient-hero">
        <div className="container py-20 md:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary px-4 py-2 rounded-full bg-primary-soft/60 mb-6">
              <Sparkles className="w-3 h-3" /> Digital Library
            </span>
            <h1 className="font-display text-5xl md:text-7xl mb-5">
              Courses & <em className="text-primary not-italic">practices</em>
            </h1>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto">
              Self-paced practices to return to, again and again. Use code at checkout for any active offers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container py-16">
        {loading ? (
          <div className="flex justify-center py-24"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 max-w-md mx-auto">
            <div className="text-6xl mb-4">🌿</div>
            <h2 className="font-display text-3xl mb-3">No courses yet</h2>
            <p className="text-muted-foreground mb-6">
              The library is being prepared. Add your first course by telling Lovable the title, price, and description.
            </p>
            <Button variant="soft" asChild><Link to="/consultancy">Explore Consultancy</Link></Button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => {
              const img = p.node.images?.edges?.[0]?.node;
              const price = p.node.priceRange.minVariantPrice;
              return (
                <motion.div
                  key={p.node.id}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-border/40 shadow-card hover:shadow-soft transition-all hover:-translate-y-1"
                >
                  <Link to={`/product/${p.node.handle}`} className="block aspect-[4/5] overflow-hidden bg-secondary">
                    {img ? (
                      <img src={img.url} alt={img.altText || p.node.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full bg-gradient-soft flex items-center justify-center text-primary/40 font-display text-6xl">✦</div>
                    )}
                  </Link>
                  <div className="p-6 space-y-3">
                    <Link to={`/product/${p.node.handle}`}>
                      <h3 className="font-display text-2xl group-hover:text-primary transition-colors">{p.node.title}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.node.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-display text-xl text-primary">
                        {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                      </span>
                      <Button variant="coral" size="sm" onClick={() => handleAdd(p)} disabled={isAdding}>
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default Courses;
