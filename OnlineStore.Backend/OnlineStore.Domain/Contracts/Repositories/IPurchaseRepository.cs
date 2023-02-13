using OnlineStore.Domain.Entities;

namespace OnlineStore.Domain.Contracts.Repositories
{
    public interface IPurchaseRepository : IRepository<PurchasedItem>
    {
        Task<IEnumerable<PurchasedItem>> GetByToken(Guid token);
    }
}
