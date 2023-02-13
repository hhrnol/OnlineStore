using OnlineStore.Domain.Contracts.Repositories;
using OnlineStore.Domain.Contracts.Services;
using OnlineStore.Domain.Entities;

namespace OnlineStore.Domain.Services
{
    public class ProductDetailsService : IProductDetailsService
    {
        private readonly ILaptopRepository _laptopRepository;

        public ProductDetailsService(ILaptopRepository laptopRepository)
        {
            _laptopRepository = laptopRepository;
        }

        public async Task<Laptop> GetLaptopDetailsAsync(int id)
        {
            return await _laptopRepository.GetByIdAsync(id);
        }

        public async Task<int> AddLaptopDetailsAsync(Laptop laptop)
        {
            // Validation here.
            return await _laptopRepository.CreateAsync(laptop);
        }

        public async Task DeleteLaptopDetailsAsync(int id)
        {
            await _laptopRepository.DeleteAsync(id);
        }

        public async Task UpdateLaptopDetailsAsync(Laptop laptop)
        {
            // Validaion here.
            await _laptopRepository.UpdateAsync(laptop);
        }
    }
}
