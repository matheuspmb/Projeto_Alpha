using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Clientes
    {
 public int Id { get; set; }

        [Required]
        public int Codigo { get; set; }

        [Required]
        [MaxLength(100)]
        public string Nome { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Fantasia { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Documento { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Endereco { get; set; } = string.Empty;
    }
}
