using OnlineStore.Domain.Entities;

namespace OnlineStore.Domain.Contracts.Services
{
    public interface IHomeService
    {
        Task<IEnumerable<Laptop>> GetAllLaptopsAsync();
    }
}