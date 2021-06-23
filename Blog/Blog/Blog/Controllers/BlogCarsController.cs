using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Blog.Models;

namespace Blog.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class BlogCarsController : ControllerBase
    {
        private readonly BlogCarsContext _context;

        public BlogCarsController(BlogCarsContext context)
        {
            _context = context;
        }

        // GET: api/BlogCars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogCar>>> GetBlogCar()
        {
            return await _context.BlogCars.ToListAsync();
        }

        // GET: api/BlogCars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogCar>> GetBlogCar(int id)
        {
            var blogCar = await _context.BlogCars.FindAsync(id);

            if (blogCar == null)
            {
                return NotFound();
            }

            return blogCar;
        }

        // PUT: api/BlogCars/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogCar(int id, BlogCar blogCar)
        {
            if (id != blogCar.CarId)
            {
                return BadRequest();
            }

            _context.Entry(blogCar).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogCarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BlogCars
        [HttpPost]
        public async Task<ActionResult<BlogCar>> PostBlogCar(BlogCar blogCar)
        {
            _context.BlogCars.Add(blogCar);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogCar", new { id = blogCar.CarId }, blogCar);
        }

        // DELETE: api/BlogCars/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BlogCar>> DeleteBlogCar(int id)
        {
            var blogCar = await _context.BlogCars.FindAsync(id);
            if (blogCar == null)
            {
                return NotFound();
            }

            _context.BlogCars.Remove(blogCar);
            await _context.SaveChangesAsync();

            return blogCar;
        }

        private bool BlogCarExists(int id)
        {
            return _context.BlogCars.Any(e => e.CarId == id);
        }
    }
}
