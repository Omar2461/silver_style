using Silver_Style.Features.Orders;
namespace Silver_Style.Features.OrderItems
{
    public class OrderItem
    {

        public int Id { get; set; }

        public int OrderId { get; set; }
        public Order Order { get; set; } = null!;

        public int ProductId { get; set; }

        public int Quntity { get; set; }
        public decimal UniePrice { get; set; }
    }
}
