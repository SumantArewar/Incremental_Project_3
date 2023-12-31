﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace dotnetapp.Models
{
    public class Player
    {
        [Key]
        public int Id{get;set;}
        [Required(ErrorMessage ="Name is REquired")]
        public string Name{get;set;}
        public int Age{get;set;}
        public string Category{get;set;}
        public decimal BiddingPrice{get;set;}
        [ForeignKey("Team")]
        public int TeamId{get;set;}
        public Team? Team{get;set;}

    }
}
