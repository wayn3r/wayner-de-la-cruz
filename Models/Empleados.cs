namespace wayner_de_la_cruz.Models;

public class Empleado
{
    public int Id { get; set; }
    public string? Nombres { get; set; }

    public string? Apellidos { get; set; }

    public string? Cedula { get; set; }

    public DateTime FechaNacimiento { get; set; }

    public DateTime FechaCreacion { get; set; }

    public string? Posicion { get; set; }

    public int DepartamentoId { get; set; }

    public Departamento? Departamento { get; set; }
}
