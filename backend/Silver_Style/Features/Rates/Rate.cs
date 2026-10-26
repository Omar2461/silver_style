using Silver_Style.Features.Clients;
using Silver_Style.Features.Products;

namespace Silver_Style.Features.Rates
{
    public class Rate
    {
        public int Id { get; set; }
        public int Value { get; set; }

        public string? Comment { get; set; }
        public int Client_Id { get; set; }
        public Client Client{ get; set; }
        public int Product_Id { get; set; }
        public Product Product { get; set; }
    }
}
