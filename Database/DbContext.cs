using Microsoft.EntityFrameworkCore;
using wayner_de_la_cruz.Models;

namespace wayner_de_la_cruz.Database;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

    public DbSet<Empleado> Empleados { get; set; }
    public DbSet<Departamento> Departamentos { get; set; }
}