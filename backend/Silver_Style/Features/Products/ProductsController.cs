using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Silver_Style.Features.Products
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductsController(ProductService productService) {
            _productService = productService;
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult> GetAll() {
            var records = await _productService.GetAll();
            return Ok(records);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult> GetProductById(int id) {
            var existProduct = await _productService.GetProductById(id);
            return existProduct == null ? NotFound() : Ok(existProduct);
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult> Add(Product product) {
            await _productService.Add(product);
            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> Delete(int id){
            var result =await _productService.Delete(id);
            return result == null ? NotFound() : Ok(result);
        }
    }
}
