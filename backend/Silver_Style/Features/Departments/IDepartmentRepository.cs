namespace Silver_Style.Features.Departments
{
    public interface IDepartmentRepository
    {
        Task<IEnumerable<Department>> GetAllAsync();
        Task<Department?> GetByIdAsync(int id);
        Task<Department> UpdateAsync(Department department);
        Task<Department?> Delete(int id);
    }
}
