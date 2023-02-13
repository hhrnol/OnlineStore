using OnlineStore.Domain.Entities;

namespace OnlineStore.Domain.Contracts.Services
{
    public interface IProductDetailsService
    {
        Task<int> AddLaptopDetailsAsync(Laptop laptop);

        Task DeleteLaptopDetailsAsync(int id);

        Task<Laptop> GetLaptopDetailsAsync(int id);

        Task UpdateLaptopDetailsAsync(Laptop laptop);
    }
}
