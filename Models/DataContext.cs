using Microsoft.EntityFrameworkCore;


namespace myCalendar.Models
{
    public class DataContext :DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }    
            /** 
               Class sets up the connection to DB,
            you specify (dbSets) which of your models will be tables on the DB

            Important:
            If you modify anything on your models, you need to run migrations:
            - dotnet ef migrations add <someName>
            - dotnet ef database update          
            */
       

        //specify which of your models will become tables in the DB
        public DbSet<Task> TasksTable {get; set;}

        // public DbSet<User> UsersTable {get; set;}
        // public DbSet<Product> ProductsTable {get; set;}
    }
}

/**Personal Projects

- Organization app using:
* DbContext Core 3
* EntityFramework Core
* Linq
* JQUery Ajax
*/