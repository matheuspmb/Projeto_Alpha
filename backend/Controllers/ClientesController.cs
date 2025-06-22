using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;

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

        // GET: api/clientes
        [HttpGet]
        public ActionResult<IEnumerable<Clientes>> GetTodos()
        {
            return Ok(_context.Clientes.ToList());
        }

        // GET: api/clientes/5
        [HttpGet("{id}")]
        public ActionResult<Clientes> GetPorId(int id)
        {
            var cliente = _context.Clientes.Find(id);
            if (cliente == null)
                return NotFound();

            return Ok(cliente);
        }

        // POST: api/clientes
        [HttpPost]
        public ActionResult<Clientes> Criar(Clientes cliente)
        {
            _context.Clientes.Add(cliente);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetPorId), new { id = cliente.Id }, cliente);
        }

        // PUT: api/clientes/5
        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, Clientes cliente)
        {
            var existente = _context.Clientes.Find(id);
            if (existente == null)
                return NotFound();

            existente.Codigo = cliente.Codigo;
            existente.Nome = cliente.Nome;
            existente.Fantasia = cliente.Fantasia;
            existente.Documento = cliente.Documento;
            existente.Endereco = cliente.Endereco;

            _context.SaveChanges();
            return NoContent();
        }

        // DELETE: api/clientes/5
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            var cliente = _context.Clientes.Find(id);
            if (cliente == null)
                return NotFound();

            _context.Clientes.Remove(cliente);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
