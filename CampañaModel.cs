using System;
using System.ComponentModel.DataAnnotations;

public class CampañaModel
{
    [Required]
    public string Nombre { get; set; } = string.Empty;

    [Required]
    public string Asunto { get; set; } = string.Empty;

    [Required]
    public string Cuerpo { get; set; } = string.Empty;

    [Required]
    public DateTime FechaInicio { get; set; } = DateTime.Today;

    [Required]
    public TimeSpan HoraEnvio { get; set; } = new TimeSpan(9, 0, 0); // 9:00 AM

    [Range(1, 30, ErrorMessage = "La duración debe ser entre 1 y 30 días")]
    public int DuracionDias { get; set; } = 1;
}
