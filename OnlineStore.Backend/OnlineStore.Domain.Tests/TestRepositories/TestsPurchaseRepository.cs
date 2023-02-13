using OnlineStore.Domain.Contracts.Repositories;
using OnlineStore.Domain.Entities;

namespace OnlineStore.Domain.Tests.TestRepositories
{
    public class TestsPurchaseRepository : IPurchaseRepository
    {
        private static readonly Guid _token = Guid.NewGuid();

        private readonly List<PurchasedItem> _purchasedItems = new List<PurchasedItem>
        {
            new PurchasedItem
            {
                Id = 0,
                LaptopId = 0,
                Date = DateTime.Now,
                PurchaseToken = _token,
            },
            new PurchasedItem
            {
                Id = 1,
                LaptopId = 1,
                Date = DateTime.Now,
                PurchaseToken = _token,
            },
            new PurchasedItem
            {
                Id = 2,
                LaptopId = 2,
                Date = DateTime.Now,
                PurchaseToken = _token,
            },
        };

        public Task<int> CreateAsync(PurchasedItem entity)
        {
            _purchasedItems.AddRange(Enumerable.Repeat(entity, entity.Count));

            int affectedRows = entity.Count;
            return Task.FromResult(affectedRows);
        }

        public async Task<int> CreateRangeAsync(IEnumerable<PurchasedItem> entities)
        {
            var tasks = entities.Select(async e => await CreateAsync(e));
            await Task.WhenAll(tasks);

            int affectedRows = entities.Count();
            return affectedRows;
        }

        public Task<int> DeleteAsync(int id)
        {
            PurchasedItem item = _purchasedItems.Where(i => i.Id == id).First();
            int index = _purchasedItems.IndexOf(item);

            int affectedRows = 0;
            if (index != -1)
            {
                _purchasedItems.RemoveAt(index);
                affectedRows++;
            }

            return Task.FromResult(affectedRows);
        }

        public Task<IEnumerable<PurchasedItem>> GetAllAsync()
        {
            return Task.FromResult<IEnumerable<PurchasedItem>>(_purchasedItems);
        }

        public Task<PurchasedItem> GetByIdAsync(int id)
        {
            PurchasedItem item = _purchasedItems.Where(i => i.Id == id).SingleOrDefault();
            return Task.FromResult(item);
        }

        public Task<IEnumerable<PurchasedItem>> GetByToken(Guid token)
        {
            IEnumerable<PurchasedItem> items = _purchasedItems.Where(i => i.PurchaseToken == token);
            return Task.FromResult(items);
        }

        public Task<int> UpdateAsync(PurchasedItem entity)
        {
            PurchasedItem previousItem = _purchasedItems.Where(i => i.Id == entity.Id).First();
            int index = _purchasedItems.IndexOf(previousItem);

            int affectedRows = 0;
            if (index != -1)
            {
                _purchasedItems[index] = entity;
                affectedRows++;
            }

            return Task.FromResult(affectedRows);
        }
    }
}
