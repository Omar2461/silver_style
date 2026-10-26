using Microsoft.EntityFrameworkCore;
using Silver_Style.Data;
using Silver_Style.Features.Products;
using Silver_Style.Features.Departments;
using Silver_Style.Features.Type;

namespace Silver_Style
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowFrontend", policy =>
                {
                    policy.WithOrigins("http://localhost:3000")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(connectionString));

            builder.Services.AddProductFeature();
            builder.Services.AddDepartmentFeature();
            builder.Services.AddTypeFeature();
            builder.Services.AddSwaggerGen();
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
                //app.MapOpenApi();
            }

            app.UseCors("AllowFrontend");

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
