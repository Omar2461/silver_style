using Microsoft.AspNetCore.Mvc;
using ProductType = Silver_Style.Features.Type;

namespace Silver_Style.Features.Type
{
    [ApiController]
    [Route("[controller]")]
    public class TypeController : ControllerBase
    {
        private readonly TypeServices _typeServices;
        public TypeController(TypeServices typeServices) {
            _typeServices = typeServices;
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<IEnumerable<ProductType>>> GetAll() {
            var Types =await _typeServices.GetAllAsync();
            return Ok(Types);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<ProductType>> GetById(int id) {
            var Type = await _typeServices.GetByIdAsync(id);
            return Type == null ? NotFound() : Ok(Type);
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult> Add(ProductType Type) {
            var existType=await _typeServices.AddAsync(Type);
            return existType == null ? Conflict("A type with this id/name already exists.") 
                : Ok("Added Successfully !!!");
        }
        [HttpDelete]
        [Route("id")]
        public async Task<ActionResult<ProductType>> Delete(ProductType Type) {
            var DeletedType = await _typeServices.DeleteAsync(Type);
            return DeletedType == null ? NotFound("This type id/name not found to delete") : Ok(DeletedType);
        }
    }
}
