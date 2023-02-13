using OnlineStore.Data.Repositories;
using OnlineStore.Data.Repositories.Core;
using OnlineStore.Domain.Contracts.Repositories;

namespace OnlineStore.API.Extensions
{
    public static class Repositories
    {
        public static void AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<DbSession>()
                    .AddTransient<IUnitOfWork, UnitOfWork>()
                    .AddTransient<ILaptopRepository, LaptopRepository>()
                    .AddTransient<IUserRepository, UserRepository>()
                    .AddTransient<IPurchaseRepository, PurchaseRepository>();
        }
    }
}
