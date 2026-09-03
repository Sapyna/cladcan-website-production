import ProductPage from "@/components/ProductPage";
import { pvcProducts } from "@/data/pvcProducts";

export const metadata = pvcProducts.shadowSeries.metadata;

export default function Page() {
  return <ProductPage {...pvcProducts.shadowSeries.props} />;
}