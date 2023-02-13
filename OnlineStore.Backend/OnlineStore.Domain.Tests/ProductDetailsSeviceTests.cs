using FluentAssertions;
using OnlineStore.Domain.Contracts.Repositories;
using OnlineStore.Domain.Contracts.Services;
using OnlineStore.Domain.Entities;
using OnlineStore.Domain.Services;
using StructureMap;
using Xunit;

namespace OnlineStore.Domain.Tests
{
    public class ProductDetailsSeviceTests
    {
        private readonly ILaptopRepository _laptopRepository;
        private readonly IProductDetailsService _productDetailsService;

        public ProductDetailsSeviceTests()
        {
            var container = new Container();
            container.RegisterTypes();

            _laptopRepository = container.GetInstance<ILaptopRepository>();

            _productDetailsService = new ProductDetailsService(_laptopRepository);
        }

        [Fact]
        public async void ShouldReturnCorrectLaptopById()
        {
            const int id = 1;

            Laptop expected = await _laptopRepository.GetByIdAsync(id);
            Laptop actual = await _productDetailsService.GetLaptopDetailsAsync(id);

            actual.Should().Be(expected);
        }

        [Fact]
        public async void ShouldDeleteLaptop()
        {
            const int idToDelete = 2;
            await _productDetailsService.DeleteLaptopDetailsAsync(idToDelete);

            IEnumerable<Laptop> laptops = await _laptopRepository.GetAllAsync();
            bool result = laptops.Any(l => l.Id == idToDelete);

            result.Should().BeFalse();
        }

        [Fact]
        public async void ShouldAddLaptop()
        {
            Laptop laptopToAdd = new Laptop
            {
                Id = -30,
                Model = "new model",
                Price = 10000,
            };

            int createdId = await _productDetailsService.AddLaptopDetailsAsync(laptopToAdd);

            IEnumerable<Laptop> laptops = await _laptopRepository.GetAllAsync();
            Laptop addedLaptop = laptops.Single(l => l.Id == createdId);

            addedLaptop.Should().Be(laptopToAdd);
            addedLaptop.Id.Should().BePositive("because Id is autoincremented in repository");
        }
    }
}
