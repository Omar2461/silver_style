using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Silver_Style.Data;

namespace Silver_Style.Features.Products
{
    public class ProductRepository:IProductRepository
    {
        private readonly ApplicationDbContext _dbContext;
        public ProductRepository(ApplicationDbContext dbContext) {
            _dbContext = dbContext;
        }
        public async Task<IEnumerable<Product>> GetAllAsync() {
            var FetchedProducts = await _dbContext.Set<Product>().ToListAsync();
            return FetchedProducts;
        }
        public async Task<Product?> GetByIdAsync(int id) {
                var existProduct = await _dbContext.Set<Product>().FindAsync(id);
            return existProduct;
            }
        public async Task AddAsync(Product product) {
            await _dbContext.Set<Product>().AddAsync(product);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<Product?> DeleteAsync(int id) {
            var product = await GetByIdAsync(id);

            if (product== null) {
                return null;
            }
             _dbContext.Set<Product>().Remove(product);
             await _dbContext.SaveChangesAsync();
            return product;
        }
    }
}
