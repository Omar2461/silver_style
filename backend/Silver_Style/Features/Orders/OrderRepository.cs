using Microsoft.EntityFrameworkCore;
using Silver_Style.Data;

namespace Silver_Style.Features.Orders
{
    public class OrderRepository:IOrderRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public OrderRepository(ApplicationDbContext dbContext) {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Order>> GetAllAsync() {
            return await _dbContext.Set<Order>().ToListAsync();
        }
        public async Task<Order?> GetByIdAsync(int id) {
            return await _dbContext.Set<Order>().FindAsync(id);       
        }
        public async Task AddAsync(Order order) {
            await _dbContext.Set<Order>().AddAsync(order);
            await _dbContext.SaveChangesAsync();
        }
    }
}
