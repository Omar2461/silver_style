using Microsoft.EntityFrameworkCore;
using Silver_Style.Data;
namespace Silver_Style.Features.Departments
{
    public class DepartmentRepository:IDepartmentRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public DepartmentRepository(ApplicationDbContext dbContext) {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Department>> GetAllAsync() {
            var departments = await _dbContext.Set<Department>().ToListAsync();
            return departments;
        }
        public async Task<Department?> GetByIdAsync(int id){
            var existDepartment = await _dbContext.Set<Department>().FindAsync(id);
            return existDepartment;
        }
        public async Task<Department> UpdateAsync(Department department) {
            _dbContext.Set<Department>().Update(department);
            await _dbContext.SaveChangesAsync();
            return department;
        }
        public async Task<Department?> Delete(int id) {
            var existDepartment = await GetByIdAsync(id);

            if (existDepartment == null)
            {
                return null;
            }

            _dbContext.Set<Department>().Remove(existDepartment);
            await _dbContext.SaveChangesAsync();
            return existDepartment;
        }
    }
}
