namespace Silver_Style.Features.Orders
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> GetAllAsync();
        Task<Order?> GetByIdAsync(int id);
        //Task<IEnumerable<Order>> GetByClientIdAsync(int clientId);
        Task AddAsync(Order order);
        //Task UpdateAsync(Order order);
        //Task<Order?> DeleteAsync(int id);
    }
}
