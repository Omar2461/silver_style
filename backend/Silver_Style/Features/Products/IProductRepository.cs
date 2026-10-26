namespace Silver_Style.Features.Products
{

    public interface IProductRepository
    {
    Task<IEnumerable<Product>>GetAllAsync();
    Task<Product?>GetByIdAsync(int id);
    Task AddAsync(Product product);
    Task<Product?> DeleteAsync(int id);
        //void Update(Product product);

    }
}
