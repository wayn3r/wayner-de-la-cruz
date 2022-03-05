﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using wayner_de_la_cruz.Database;
using wayner_de_la_cruz.Models;

namespace wayner_de_la_cruz.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{
    private DatabaseContext database;
    public WeatherForecastController(DatabaseContext database)
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
