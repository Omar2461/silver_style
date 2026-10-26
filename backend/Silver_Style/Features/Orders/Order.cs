using Silver_Style.Features.OrderItems;

using Silver_Style.Features.Clients;

namespace Silver_Style.Features.Orders
{

    public enum OrderStatus
    {
        Pending,
        Placed,
        Paid,
        Shipped,
        Cancelled
    }
    public class Order
    {
        public int Id { get; set; }
        public Client client { get; set; } = null!;
        public DateTime date { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Pending;

        public List<OrderItem> OrderItems { get; set; } = new();

        public decimal TotalAmount => OrderItems.Sum(item => item.Quntity * item.UniePrice);
    }
}
