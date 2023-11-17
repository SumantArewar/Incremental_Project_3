using System.Collections.Generic;
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
        public IActionResult PutPlayer(int id ,Player movie)
        {
            if(ModelState.IsValid)
            {
                Player omovie = _context.Players.Find(movie.Id);
                omovie.Age = movie.Age;
                omovie.Name = movie.Name;
                omovie.Category = movie.Category;
                omovie.BiddingPrice = movie.BiddingPrice;
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