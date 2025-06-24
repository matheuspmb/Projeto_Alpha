using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;

namespace Backend.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Clientes>> GetTodos()
        {
            return Ok(_context.Clientes.ToList());
        }

        [HttpGet("{id}")]
        public ActionResult<Clientes> GetPorId(int id)
        {
            var cliente = _context.Clientes.Find(id); 
            if (cliente == null) return NotFound();
            return Ok(cliente);
        }

        [HttpPost]
        public ActionResult<Clientes> Criar(Clientes cliente)
        {
            if (!ModelState.IsValid) // validação de ModelState
                return BadRequest(ModelState);

            _context.Clientes.Add(cliente);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetPorId), new { id = cliente.Id }, cliente);
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Clientes cliente)
        {
            if (!ModelState.IsValid) // validação de ModelState
                return BadRequest(ModelState);

            var existente = _context.Clientes.Find(id);
            if (existente == null) return NotFound();

            existente.Codigo = cliente.Codigo;
            existente.Nome = cliente.Nome;
            existente.Fantasia = cliente.Fantasia;
            existente.Documento = cliente.Documento;
            existente.Endereco = cliente.Endereco;

            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            var cliente = _context.Clientes.Find(id);
            if (cliente == null) return NotFound();

            _context.Clientes.Remove(cliente);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
