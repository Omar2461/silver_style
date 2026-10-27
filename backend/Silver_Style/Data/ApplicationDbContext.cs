using Microsoft.EntityFrameworkCore;
using Silver_Style.Features.Clients;
using Silver_Style.Features.Departments;
using Silver_Style.Features.Employee;
using Silver_Style.Features.OrderItems;
using Silver_Style.Features.Orders;
using Silver_Style.Features.Products;
using Silver_Style.Features.Rates;
using Silver_Style.Features.Type;
using System.Reflection.Emit;

namespace Silver_Style.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>().HasIndex(e => e.Phone).IsUnique();
            modelBuilder.Entity<Client>().HasIndex(e => e.Email).IsUnique();
            modelBuilder.Entity<Client>().HasIndex(e => e.Password).IsUnique();

            modelBuilder.Entity<Employee>().HasIndex(e => e.Phone).IsUnique();
            modelBuilder.Entity<Employee>().HasIndex(e => e.Email).IsUnique();
            modelBuilder.Entity<Employee>().HasIndex(e => e.Password).IsUnique();

            modelBuilder.Entity<OrderItem>().HasKey(oi => new { oi.Id, oi.ProductId });

            modelBuilder.Entity<Department>().HasData(
                new ProductType
                {
                    Id = 1,
                    Name = "Rings",
                    CreateAt = new DateTime(2026, 1, 1)

                }
                );

            modelBuilder.Entity<Product>().HasData(
    new Product
    {
        Id = 1,
        Name = "Silver Ring",
        Price = 150.00m,
        Details = "Handmade silver ring",
        Weight = 5.2f,
        Color = "Silver",
        DepartmentId = 1,          
        ProductTypeId = 1,         
        CreateAt = new DateTime(2026, 1, 1)
    }
);

            modelBuilder.Entity<ProductType>().HasData(
                new ProductType
                {
                    Id = 1,
                    Name = "silver",
                    CreateAt = new DateTime(2026, 1, 1)
                }
                );

            modelBuilder.Entity<Order>()
            .Property(o => o.Status)
            .HasConversion<string>();
        }
        DbSet<Client> Clients { get; set; }
        DbSet<Department> Departments { get; set; }
        DbSet<Employee> Employees { get; set; }
        DbSet<Order> Orders { get; set; }
        DbSet<OrderItem> OrderItems { get; set; }
        DbSet<Product> Products { get; set; }
        DbSet<Rate> Rates { get; set; }
        DbSet<ProductType> Types { get; set; }
    }
}
