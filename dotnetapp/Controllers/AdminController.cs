﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult GetTeams()
        {
            var data = _context.Players.ToList();
            return Ok(data);
        }
        [HttpGet]
        [Route("ShowMovies")]
        public IActionResult GetPlayers()
        {
            var data = _context.Players.ToList();
            return Ok(data);
        }

        [HttpPost]
        [Route("AddMovie")]
        public IActionResult Post(Player movie)
        {
            if(ModelState.IsValid)
            {
                try
                {
                    _context.Players.Add(movie);
                    _context.SaveChanges();
                }
                catch(System.Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Added", movie);
        }
        
        [HttpPut]
        [Route("EditMovie/{id}")]
        public IActionResult PutPlayer(int id ,Player player)
        {
            var data = _context.Players.Find(id);

            if(ModelState.IsValid)
            {
                Player players = _context.Players.Find(player.Id);
                players.Age = player.Age;
                players.Name = player.Name;
                players.Category = player.Category;
                players.BiddingPrice = player.BiddingPrice;
                _context.SaveChanges();
                return Ok();                
            }
            return BadRequest("Unable to Edit Record");
        }

        [HttpDelete]
        [Route("DeleteMovie/{id}")]
        public IActionResult DeletePlayer(int id)
        {
            try
            {
                var detail = _context.Players.Where(d=>d.Id==id);
                if(detail.Count() != 0)
                {
                    throw new Exception("Cannot Delete Player");
                }
                var data = _context.Players.Find(id);
                _context.Players.Remove(data);
                _context.SaveChanges();
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
    }
}