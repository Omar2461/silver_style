namespace Silver_Style.Features.Products
{
    public class ProductService
    {
        private readonly IProductRepository _repository;

        public ProductService(IProductRepository repository) {
            _repository = repository;
        }

        public async Task<Product?> GetProductById(int id) {
            return  await _repository.GetByIdAsync(id);
        }

        public async Task<IEnumerable<Product>> GetAll() {
            var products = await _repository.GetAllAsync();
            return products ?? Enumerable.Empty<Product>();
        }

        public async Task Add(Product product) {
            await _repository.AddAsync(product);
        }

        public async Task<Product?> Delete(int id) {
            return await _repository.DeleteAsync(id);
        }
    }
}
