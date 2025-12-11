import Container from "@/components/General/Container";
import Menu from "@/components/General/Menu";
import Header from "@/components/productsPage/Header";
import ProductsSeaction from "@/components/productsPage/ProductsSeaction";
import SideBarPro from "@/components/productsPage/SideBar";
import CategoriesSeaction from "@/components/productsPage/categoriesSeaction";

function Products() {
  return (
    <Container>
      {/* Header */}
      <Header />

      {/* Categories */}
      <CategoriesSeaction />
      <div className="flex gap-6 mt-4 ">
        {/* Sidebar */}
        <SideBarPro className="hidden md:block" />

        <Menu className="md:hidden -mr-5" Component={SideBarPro}/>


        {/* Products Grid */}
        <ProductsSeaction />
      </div>
    </Container>
  );
}

export default Products;
