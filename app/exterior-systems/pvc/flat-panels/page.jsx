import ProductPage from "@/components/ProductPage";
import { pvcProducts } from "@/data/pvcProducts";

export const metadata = pvcProducts.flatPanels.metadata;

export default function Page() {
  return <ProductPage {...pvcProducts.flatPanels.props} />;
}