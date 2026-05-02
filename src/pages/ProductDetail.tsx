import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft } from "lucide-react";
import { ShopifyProduct, PRODUCT_BY_HANDLE_QUERY, storefrontApiRequest } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(s => s.addItem);
  const isAdding = useCartStore(s => s.isLoading);

  useEffect(() => {
    if (!handle) return;
    storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle })
      .then(d => setProduct(d?.data?.product || null))
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading) return <div className="flex justify-center py-32"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;
  if (!product) return (
    <div className="container py-32 text-center">
      <h1 className="font-display text-4xl mb-4">Course not found</h1>
      <Button variant="soft" asChild><Link to="/courses">Back to library</Link></Button>
    </div>
  );

  const img = product.images?.edges?.[0]?.node;
  const variant = product.variants.edges[0]?.node;

  const handleAdd = async () => {
    if (!variant) return;
    await addItem({
      product: { node: product } as ShopifyProduct,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Added to cart", { position: "top-center" });
  };

  return (
    <section className="container py-12 md:py-20">
      <Link to="/courses" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to library
      </Link>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="aspect-square rounded-3xl overflow-hidden bg-secondary">
          {img && <img src={img.url} alt={img.altText || product.title} className="w-full h-full object-cover" />}
        </div>
        <div className="space-y-6">
          <h1 className="font-display text-5xl">{product.title}</h1>
          <div className="font-display text-3xl text-primary">
            {variant?.price.currencyCode} {parseFloat(variant?.price.amount || "0").toFixed(2)}
          </div>
          <p className="text-foreground/70 leading-relaxed whitespace-pre-line">{product.description}</p>
          <Button variant="coral" size="lg" onClick={handleAdd} disabled={isAdding || !variant?.availableForSale}>
            {variant?.availableForSale ? "Add to cart" : "Sold out"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
