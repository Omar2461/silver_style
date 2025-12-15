import Container from "@/components/General/Container";
import Header from "@/components/productsPage/Header";
import ProductsSeaction from "@/components/productsPage/ProductsSeaction";
import SideBarPro from "@/components/productsPage/SideBar";
import CategoriesSeaction from "@/components/productsPage/categoriesSeaction";

function Products() {
  return (
    <Container>
      <Header />
      <CategoriesSeaction />
      <div className="flex gap-6 mt-4 ">
        <SideBarPro className="hidden md:block" />
        <ProductsSeaction />
      </div>
    </Container>
  );
}

export default Products;
