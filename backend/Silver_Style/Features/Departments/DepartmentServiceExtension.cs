namespace Silver_Style.Features.Departments
{
    public static class DepartmentServiceExtension
    {
        public static IServiceCollection AddDepartmentFeature(this IServiceCollection services) {
            services.AddScoped<IDepartmentRepository, DepartmentRepository>();
            services.AddScoped<DepartmentService>();
            return services;
        }
    }
}
