using OnlineStore.Domain.Entities;

namespace OnlineStore.Domain.Contracts.Services
{
    public interface IShoppingCartService
    {
        Task<Guid> ProcessPurchaseAsync(IEnumerable<(int Id, int Count)> data, int userId);

        Task<IEnumerable<PurchasedItem>> GetItemsByPurchaseToken(Guid token);
    }
}
