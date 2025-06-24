using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Usuarios
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string Usuario { get; set; } = string.Empty;

        [MaxLength(200)]
        public string Senha { get; set; } = string.Empty;
    }
}