using Microsoft.AspNetCore.Mvc;

namespace Silver_Style.Features.Departments
{
    [ApiController]
    [Route("[controller]")]
    public class DepartmentController : ControllerBase
    {
        private readonly DepartmentService _departmentService;

        public DepartmentController(DepartmentService departmentService) {
            _departmentService = departmentService;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetAllAsync() {
            var departments = await _departmentService.GetAllAsync();
            if (!departments.Any()) {
                return NoContent();
            }
            return Ok(departments);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GeyByIdAsync(int id) {
            var existDepartment = await _departmentService.GetByIdAsync(id);
            return existDepartment == null ? NotFound() : Ok(existDepartment);
        }
        [HttpPut]
        [Route("")]
        public async Task<IActionResult> UpdateAsync(int id,Department department) {
            var existDepartment = await _departmentService.UpdateAsync(id, department);
            return existDepartment == null ? NotFound() : Ok("Updated successfuly!!!");
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id) {
            var deletedDepartment = await _departmentService.Delete(id);
            return deletedDepartment == null ? NotFound() : Ok(deletedDepartment);
        }

    }
}
