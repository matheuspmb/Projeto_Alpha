using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Produtos
    {
public int Id { get; set; }

        [Required]
        public int Codigo { get; set; }

        [Required]
        [MaxLength(100)]
        public string Descricao { get; set; } = string.Empty;

        [MaxLength(100)]
        public string CodigoBarras { get; set; } = string.Empty;

        public decimal ValorVenda { get; set; }
        public decimal PesoBruto { get; set; }
        public decimal PesoLiquido { get; set; }
    }
}
