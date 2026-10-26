using System.ComponentModel.DataAnnotations;
using Silver_Style.Features.Products;

namespace Silver_Style.Features.Departments
{
    public class Department
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public DateTime CreateAt { get; set; } = DateTime.Now;

        public List<Product>? Products { get; set; }
    }
}
