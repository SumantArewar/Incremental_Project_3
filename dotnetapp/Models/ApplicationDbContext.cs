using Microsoft.EntityFrameworkCore;
// using dotnetapp.Models;

namespace dotnetapp.Models
{
    public class ApplicationDbContext : DbContext
    {
        public virtual DbSet<Player>Players {get;set;}
        public virtual DbSet<Team> Teams {get;set;}
        public virtual DbSet<User> Users {get;set;}

        public ApplicationDbContext(){}

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("");
            }
        } 

        // Add DbSet properties for other entities as needed
    }
}
