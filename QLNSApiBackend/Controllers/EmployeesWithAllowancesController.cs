﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.Services.Catalog.EmployeesWithAllowances;
using QLNS.ViewModel.Catalogs.EmployeesWithAllowances;
using System.Data.OleDb;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesWithAllowancesController : ControllerBase
    {
        private readonly IEmployeesWithAllowancesService _employeesWithAllowancesService;
        public EmployeesWithAllowancesController(IEmployeesWithAllowancesService employeesWithAllowancesService)
        {
            _employeesWithAllowancesService = employeesWithAllowancesService;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var model = await _employeesWithAllowancesService.GetList();
            return Ok(model);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID (string id)
        {
            var emal = await _employeesWithAllowancesService.GetByID(id);
            return Ok(emal);
        }
        [HttpPost("createemployeeswithallowances")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Create([FromForm] CreateEWA request)
        {
            var emal = await _employeesWithAllowancesService.Create(request);
            return Ok(emal);
        }

        [HttpPut("{id}")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromForm] EmployeesWithAllowancesEditRequest request)
        {
            request.ID = id;
            var emal = await _employeesWithAllowancesService.Update(request);
            return Ok(emal);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _employeesWithAllowancesService.Delete(id);
            return Ok();
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPaging([FromQuery] GetEmployeesWithAllowancesPagingRequest request)
        {
            var emal = await _employeesWithAllowancesService.GetAllPage(request);
            return Ok(emal);
        }

        [HttpGet("autoNow")]
        public async Task<IActionResult> GetAutoPaging([FromQuery] GetEwaRequest request)
        {
            var emal = await _employeesWithAllowancesService.EWANow(request);
            return Ok(emal);
        }

        [HttpPost("auto")]
        public async Task<IActionResult> auto([FromForm] EwaAutoCheckRequest request)
        {
            var emal = await _employeesWithAllowancesService.auto(request);
            return Ok(emal);
        }

        [HttpGet("check")]
        public async Task<IActionResult> check([FromQuery] EwaAutoCheckRequest request)
        {
            var emal = await _employeesWithAllowancesService.check(request);
            return Ok(emal);
        }
     
    }
}
