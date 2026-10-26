using ProductType = Silver_Style.Features.Type;
namespace Silver_Style.Features.Type
{
    public interface ITypeRepository
    {
        Task<IEnumerable<ProductType>> GetAllAsync();

        Task<ProductType?> GetByIdAsync(int id);

        Task<ProductType?> AddAsync(ProductType type);

        Task<ProductType?> DeleteAsync(ProductType type);
    }
}
