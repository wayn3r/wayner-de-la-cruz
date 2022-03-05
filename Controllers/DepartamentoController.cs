using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using wayner_de_la_cruz.Database;
using wayner_de_la_cruz.Models;

namespace wayner_de_la_cruz.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DepartamentoController : ControllerBase
{
    private DatabaseContext database;
    public DepartamentoController(DatabaseContext database)
    {
        this.database = database;
    }

    [HttpGet]
    public async Task<IEnumerable<Departamento>> Get()
    {
        List<Departamento> departamentos = await this.database.Departamentos.ToListAsync();
        return departamentos;
    }
}