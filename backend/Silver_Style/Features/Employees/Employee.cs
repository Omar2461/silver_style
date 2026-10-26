using Silver_Style.Features.Orders;

namespace Silver_Style.Features.Employee
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public List<Order> Orders { get; set; } = new();
    }
}
