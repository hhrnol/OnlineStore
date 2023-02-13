using FluentAssertions;
using OnlineStore.Domain.Contracts.Repositories;
using OnlineStore.Domain.Contracts.Services;
using OnlineStore.Domain.Entities;
using OnlineStore.Domain.Services;
using StructureMap;
using Xunit;

namespace OnlineStore.Domain.Tests
{
    public class ShoppingCartServiceTests
    {
        private readonly IPurchaseRepository _purchaseRepository;
        private readonly IShoppingCartService _shoppingCartService;

        public ShoppingCartServiceTests()
        {
            var container = new Container();
            container.RegisterTypes();

            _purchaseRepository = container.GetInstance<IPurchaseRepository>();

            _shoppingCartService = new ShoppingCartSevice(_purchaseRepository);
        }

        [Fact]
        public async void ShouldReturnItemsByToken()
        {
            IEnumerable<PurchasedItem> items = await _purchaseRepository.GetAllAsync();
            Guid token = items.GroupBy(i => i.PurchaseToken).Select(g => g.Key).First();

            var expected = await _purchaseRepository.GetByToken(token);
            var actual = await _shoppingCartService.GetItemsByPurchaseToken(token);

            actual.Should().BeEquivalentTo(expected);
        }

        [Fact]
        public async void ShouldProcessPurchase()
        {
            const int userId = 1;
            var data = new List<(int Id, int Count)>()
            {
                (Id: 0, Count: 1),
                (Id: 1, Count: 1),
                (Id: 2, Count: 2),
            };
            int totalCountOfItems = data.Sum(i => i.Count);

            Guid token = await _shoppingCartService.ProcessPurchaseAsync(data, userId);

            var purchasedItemsByToken = await _purchaseRepository.GetByToken(token);

            purchasedItemsByToken.Should().HaveCount(totalCountOfItems);
            purchasedItemsByToken.Should().Contain(i => i.PurchaseToken == token && i.UserId == userId && i.LaptopId == 1);
        }
    }
}
