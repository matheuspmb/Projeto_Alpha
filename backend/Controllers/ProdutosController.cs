using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;

namespace Backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProdutosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Produtos>> GetTodos()
        {
            return Ok(_context.Produtos.ToList());
        }

        [HttpGet("{id}")]
        public ActionResult<Produtos> GetPorId(int id)
        {
            var produto = _context.Produtos.Find(id);
            if (produto == null) return NotFound();
            return Ok(produto);
        }

        [HttpPost]
        public ActionResult<Produtos> Criar(Produtos produto)
        {
            if (!ModelState.IsValid) // validação de ModelState
                return BadRequest(ModelState); 

            _context.Produtos.Add(produto);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetPorId), new { id = produto.Id }, produto);
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Produtos produto)
        {
            if (!ModelState.IsValid) // validação de ModelState
                return BadRequest(ModelState);

            var existente = _context.Produtos.Find(id);
            if (existente == null) return NotFound();

            existente.Codigo = produto.Codigo;
            existente.Descricao = produto.Descricao;
            existente.CodigoBarras = produto.CodigoBarras;
            existente.ValorVenda = produto.ValorVenda;
            existente.PesoBruto = produto.PesoBruto;
            existente.PesoLiquido = produto.PesoLiquido;

            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            var produto = _context.Produtos.Find(id);
            if (produto == null) return NotFound();

            _context.Produtos.Remove(produto);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
