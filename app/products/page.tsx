import Container from "@/components/General/Container";
import Header from "@/components/productsPage/Header";
import ProductsSeaction from "@/components/productsPage/ProductsSeaction";
import SideBar from "@/components/productsPage/SideBar";
import CategoriesSeaction from "@/components/productsPage/categoriesSeaction";

function Products() {
  return (
    <Container>
      {/* Header */}
      <Header />

      {/* Categories */}
      <CategoriesSeaction />

      <div className="grid grid-cols-12 gap-6 mt-4">
        {/* Sidebar */}
        <SideBar />

        {/* Products Grid */}
        <ProductsSeaction/>
      </div>
    </Container>
  );
}

export default Products;
