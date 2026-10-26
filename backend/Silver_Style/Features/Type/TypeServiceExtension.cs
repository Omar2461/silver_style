namespace Silver_Style.Features.Type
{
    public static class TypeServiceExtension
    {
        public static IServiceCollection AddTypeFeature(this IServiceCollection services) {
            services.AddScoped<ITypeRepository,TypeRepository>();
            services.AddScoped<TypeServices>();
            return services;
        }
    }
}
