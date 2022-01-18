using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp.Models
{
    public class GradeCalcModel
    {
        [Range(0, 100)]
        public int assignmentsGrade { get; set; }
        [Range(0, 100)]
        public int groupProjectGrade { get; set; }
        [Range(0, 100)]
        public int quizzesGrade { get; set; }
        [Range(0, 100)]
        public int examsGrade { get; set; }
        [Range(0, 100)]
        public int intexGrade { get; set; }
    }
}
