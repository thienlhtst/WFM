﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.Allowance
{
    public class AllowanceCreateRequest
    {
        public string ID { get; set; }

        [Required(ErrorMessage = "First Name is required"), StringLength(50, MinimumLength = 2)]
        [RegularExpression(@"^[A-Z][a-zA-Z""'\s-]*$"), Display(Name = "First Name")]
        public string Name { get; set; }

        [RegularExpression("^[0-9]+$")]
        public int Money { get; set; }
    }
}