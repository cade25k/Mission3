using Microsoft.AspNetCore.Mvc;
using MyFirstASPNETWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Controllers
{
    public class indexController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult gradeCalculator ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult gradeCalculator (GradeCalcModel model)
        {
            return View();
        }
    }
}
