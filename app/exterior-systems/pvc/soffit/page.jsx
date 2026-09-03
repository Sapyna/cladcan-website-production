import ProductPage from "@/components/ProductPage";
import { pvcProducts } from "@/data/pvcProducts";

export const metadata = pvcProducts.soffit.metadata;

export default function Page() {
  return <ProductPage {...pvcProducts.soffit.props} />;
}