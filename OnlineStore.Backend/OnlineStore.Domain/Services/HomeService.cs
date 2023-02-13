using OnlineStore.Domain.Contracts.Repositories;
using OnlineStore.Domain.Contracts.Services;
using OnlineStore.Domain.Entities;

namespace OnlineStore.Domain.Services
{
    public class HomeService : IHomeService
    {
        private readonly ILaptopRepository _laptopRepository;

        public HomeService(ILaptopRepository laptopRepository)
        {
            _laptopRepository = laptopRepository;
        }

        public async Task<IEnumerable<Laptop>> GetAllLaptopsAsync()
        {
            return await _laptopRepository.GetAllAsync();
        }
    }
}
