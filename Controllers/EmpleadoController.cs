using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using wayner_de_la_cruz.Database;
using wayner_de_la_cruz.Models;

namespace wayner_de_la_cruz.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmpleadoController : ControllerBase
{
    private DatabaseContext database;
    public EmpleadoController(DatabaseContext database)
    {
        this.database = database;
    }

    [HttpGet]
    public async Task<IEnumerable<Empleado>> Get()
    {
        List<Empleado> empleados = await this.database.Empleados.ToListAsync();
        return empleados;
    }
}