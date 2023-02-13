using OnlineStore.Domain.Contracts.Repositories;
using OnlineStore.Domain.Entities;

namespace OnlineStore.Domain.Tests.TestRepositories
{
    public class TestsUserRepository : IUserRepository
    {
        private readonly List<User> _users = new List<User>
        {
            new User
            {
                Id = 0,
                FirstName = "FirstName1",
                LastName = "LastName1",
                Email = "some.mail@gmail.com",
                Password = "1111",
            },
            new User
            {
                Id = 1,
                FirstName = "FirstName2",
                LastName = "LastName2",
                Email = "another.mail@ukr.net",
                Password = "1111",
            },
        };

        public Task<int> CreateAsync(User entity)
        {
            int nextId = _users.Max(u => u.Id) + 1;
            entity.Id = nextId;

            _users.Add(entity);
            return Task.FromResult(nextId);
        }

        public async Task<int> CreateRangeAsync(IEnumerable<User> entities)
        {
            var tasks = entities.Select(async e => await CreateAsync(e));
            await Task.WhenAll(tasks);

            int affectedRows = entities.Count();
            return affectedRows;
        }

        public Task<int> DeleteAsync(int id)
        {
            User user = _users.Where(u => u.Id == id).First();
            int index = _users.IndexOf(user);

            int affectedRows = 0;
            if (index != -1)
            {
                _users.RemoveAt(index);
                affectedRows++;
            }

            return Task.FromResult(affectedRows);
        }

        public Task<IEnumerable<User>> GetAllAsync()
        {
            return Task.FromResult<IEnumerable<User>>(_users);
        }

        public Task<User> GetByIdAsync(int id)
        {
            User user = _users.Where(u => u.Id == id).SingleOrDefault();
            return Task.FromResult(user);
        }

        public Task<int> UpdateAsync(User entity)
        {
            User previousUser = _users.Where(u => u.Id == entity.Id).First();
            int index = _users.IndexOf(entity);

            int rowsAffected = 0;
            if (index != -1)
            {
                _users[index] = entity;
                rowsAffected = 1;
            }

            return Task.FromResult(rowsAffected);
        }
    }
}
