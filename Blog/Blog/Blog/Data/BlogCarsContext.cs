using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Blog.Models
{
    public class BlogCarsContext : DbContext
    {
        public BlogCarsContext(DbContextOptions<BlogCarsContext> options)
            : base(options)
        {
        }

        public DbSet<BlogCar> BlogCars { get; set; }
    }
}
