import Dropdown from "@/components/myFiles/Dropdown";
import Container from "@/components/General/Container";
import Input from "@/components/General/Input";
import Panel from "@/components/General/Panel";

function Page() {
  const types = [{ name: "Silver" }, { name: "Gold" }, { name: "Platinum" }];
  const categories = [
    { name: "Necklaces" },
    { name: "Rings" },
    { name: "Earrings" },
    { name: "Bracelets" },
  ];

  return (
    <Container className="bg-white">
      <h1 className=" text-xl font-bold lg:text-3xl lg:font-bold md:text-3xl md:font-bold transtion duration-400">
        Create New Product
      </h1>

      <form className="flex flex-col mt-5 gap-5">
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <Input
            className={`bg-gray-200 text-black md:w-90 lg:w-90 rounded-xl lg:pl-3 pr-3`}
            placeholder="Enter Product name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Type</label>
          <Dropdown className="bg-gray-200 p-5" options={types} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Category</label>
          <Dropdown className="bg-gray-200 p-5" options={categories} />
        </div>

        <div className="flex flex-col gap-2">
          <label>Price</label>
          <Input
            className={`bg-gray-200 text-black md:w-90 lg:w-90 rounded-xl lg:pl-3 pr-3`}
            placeholder="Enter product price"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>
          <Panel className="bg-gray-200 text-black md:w-90 lg:w-90 rounded-xl">
            <textarea
              className="w-full h-30 p-4 transtion duration-400"
              placeholder="Enter product description"
              name=""
              id=""
            ></textarea>
          </Panel>
        </div>
      </form>
    </Container>
  );
}

export default Page;
