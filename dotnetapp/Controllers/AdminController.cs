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
            var data = _context.Players.FromSqlInterpolated<Movie_VM>($"MovieInfo");
            return Ok(data);
        }

        [HttpPost]
        [Route("AddMovie")]
        public IActionResult Post(Movie movie)
        {
            if(ModelState.IsValid)
            {
                try
                {
                    _context.Movies.Add(movie);
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
        public IActionResult Put(int id ,Movie movie)
        {
            if(ModelState.IsValid)
            {
                Movie omovie = context.Movies.Find(movie.Id);
                omovie.Name = movie.Name;
                omovie.Rating = movie.Rating;
                omovie.YearRelease = movie.YearRelease;
                context.SaveChanges();
                return Ok();                
            }
            return BadRequest("Unable to Edit Record");
        }

        [HttpDelete]
        [Route("DeleteMovie/{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var detail = context.Details.Where(d=>d.MovieId==id);
                if(detail.Count() != 0)
                {
                    throw new Exception("Cannot Delete Movie");
                }
                var data = context.Movies.Find(id);
                context.Movies.Remove(data);
                context.SaveChanges();
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
    }
}