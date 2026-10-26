using System.ComponentModel.DataAnnotations;
using Silver_Style.Features.Products;

namespace Silver_Style.Features.Type
{
    public class ProductType
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public DateTime CreateAt { set; get; } = DateTime.Now;
        public List<Product>? products { get; set; } = new();
    }
}
