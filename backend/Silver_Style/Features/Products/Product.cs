using Silver_Style.Features.OrderItems;
using Silver_Style.Features.Rates;
using Silver_Style.Features.Type;
using System.ComponentModel.DataAnnotations;

namespace Silver_Style.Features.Products
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public decimal Price { get; set; }
        [Required]
        public string Details { get; set; } = string.Empty;
        [Required]
        public float Weight { get; set; }
        [Required]
        public string Color { get; set; } = string.Empty;
        [Required]
        public int DepartmentId { get; set; }
        public string? Image { get; set; }
        [Required]
        public DateTime CreateAt { get; set; }

        [Required]
        public int ProductTypeId { get; set; }
        public ProductType? ProductType { get; set; }

        public List<OrderItem> OrderItems { get; set; } = new();

        public List<Rate> Rates { get; set; } = new();
    }
}
