using OnlineStore.Domain.Entities;

namespace OnlineStore.Domain.Contracts.Repositories
{
    public interface ILaptopRepository : IRepository<Laptop>
    {
        Task<Laptop> GetByModelAsync(string model);
    }
}
