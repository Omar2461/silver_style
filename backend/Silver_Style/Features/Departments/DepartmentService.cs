namespace Silver_Style.Features.Departments
{
    public class DepartmentService
    {
        IDepartmentRepository _repository;

        public DepartmentService(IDepartmentRepository repository) {
            _repository = repository;
        }

        public async Task<IEnumerable<Department>> GetAllAsync() {
            var departments = await _repository.GetAllAsync();
            return departments ?? Enumerable.Empty<Department>();
        }
        public async Task<Department?> GetByIdAsync(int id) {
            var existDepartment = await _repository.GetByIdAsync(id);
            return existDepartment == null ? null : existDepartment;
        }
        public async Task<Department?> UpdateAsync(int id,Department department) {
            var existDepartment = await GetByIdAsync(id);
            if (existDepartment==null) {
                return null;
            }
            existDepartment.Name = department.Name;
            return await _repository.UpdateAsync(existDepartment);
        }

        public async Task<Department?> Delete(int id) {
            var existDepartment = await _repository.Delete(id);
            return existDepartment == null ? null : existDepartment;
        }

    }
}
