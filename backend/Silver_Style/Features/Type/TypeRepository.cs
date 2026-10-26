using Microsoft.EntityFrameworkCore;
using Silver_Style.Data;

using Producttype = Silver_Style.Features.Type;

namespace Silver_Style.Features.Type
{
    public class TypeRepository:ITypeRepository
    {
        private readonly ApplicationDbContext _dbContext;
        public TypeRepository(ApplicationDbContext dbContext) {
            _dbContext = dbContext;
        }

       public async Task<IEnumerable<ProductType>> GetAllAsync() {
            return await _dbContext.Set<ProductType>().ToListAsync();
        }

        public async Task<ProductType?> GetByIdAsync(int id) {
            return await _dbContext.Set<ProductType>().FindAsync(id);
        }

        public async Task<ProductType?> AddAsync(ProductType type) {
            await _dbContext.Set<ProductType>().AddAsync(type);
            await _dbContext.SaveChangesAsync();
            return type;
        }

        public async Task<ProductType?> DeleteAsync(ProductType type ) {
             _dbContext.Set<ProductType>().Remove(type);
            await _dbContext.SaveChangesAsync();
            return type;
        }

    }
}
