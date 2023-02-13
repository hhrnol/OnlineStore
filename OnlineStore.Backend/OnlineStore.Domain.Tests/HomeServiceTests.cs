using FluentAssertions;
using OnlineStore.Domain.Contracts.Repositories;
using OnlineStore.Domain.Contracts.Services;
using OnlineStore.Domain.Entities;
using OnlineStore.Domain.Services;
using StructureMap;
using Xunit;

namespace OnlineStore.Domain.Tests
{
    public class HomeServiceTests
    {
        private readonly IHomeService _homeService;
        private readonly ILaptopRepository _laptopRepository;

        public HomeServiceTests()
        {
            var container = new Container();
            container.RegisterTypes();

            _laptopRepository = container.GetInstance<ILaptopRepository>();

            _homeService = new HomeService(_laptopRepository);
        }

        [Fact]
        public async void ShouldReturnAllLaptops()
        {
            IEnumerable<Laptop> expected = await _laptopRepository.GetAllAsync();
            IEnumerable<Laptop> actual = await _homeService.GetAllLaptopsAsync();

            actual.Should().BeEquivalentTo(expected);
        }
    }
}
