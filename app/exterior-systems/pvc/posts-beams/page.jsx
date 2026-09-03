import ProductPage from "@/components/ProductPage";
import { pvcProducts } from "@/data/pvcProducts";

export const metadata = pvcProducts.postsBeams.metadata;

export default function Page() {
  return <ProductPage {...pvcProducts.postsBeams.props} />;
}