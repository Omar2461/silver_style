using ProductType = Silver_Style.Features.Type;

namespace Silver_Style.Features.Type
{
    public class TypeServices
    {
        private readonly ITypeRepository _repository;
        public TypeServices(ITypeRepository repository) {
            _repository = repository;
        }

        public async Task<IEnumerable<ProductType>> GetAllAsync() {
            var types = await _repository.GetAllAsync();
            return types ?? Enumerable.Empty<ProductType>();
        }

        public async Task<ProductType?> GetByIdAsync(int id) {
            return await _repository.GetByIdAsync(id);
        }

        public async Task<ProductType?> AddAsync(ProductType type) {
            var existType = await GetByIdAsync(type.Id);
            if (existType == null) {
                await _repository.AddAsync(type);
                return type;
            }
            return null;
        }

        public async Task<ProductType?> DeleteAsync(ProductType type) {
            var existType = await GetByIdAsync(type.Id);
            if (existType == null)
            {
                return null;
            }
            else {
                await _repository.DeleteAsync(type);
                return type;
            }
        }
    }
}
