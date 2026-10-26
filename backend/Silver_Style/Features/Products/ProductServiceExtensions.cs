namespace Silver_Style.Features.Products
{
    public static class ProductServiceExtensions
    {
        public static IServiceCollection AddProductFeature(this IServiceCollection services) { 
        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<ProductService>();
            return services;
        }
    }
}
