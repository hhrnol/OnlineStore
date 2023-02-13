using Dapper;
using OnlineStore.Data.Repositories.Core;
using OnlineStore.Domain.Contracts.Repositories;
using OnlineStore.Domain.Entities;
using static Dapper.SqlMapper;

namespace OnlineStore.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DbSession _session;

        public UserRepository(DbSession session)
        {
            _session = session;
        }

        public async Task<int> CreateAsync(User entity)
        {
            const string sql =
                "INSERT INTO \"user\"" +
                "(first_name, last_name, email, password)" +
                "VALUES" +
                "(@FirstName, @LastName, @Email, @Password)" +
                "RETURNING id";

            return await _session.Connection.ExecuteScalarAsync<int>(sql, entity, _session.Transaction);
        }

        public async Task<int> CreateRangeAsync(IEnumerable<User> entities)
        {
            const string sql =
                "INSERT INTO \"user\"" +
                "(first_name, last_name, email, password)" +
                "VALUES" +
                "(@FirstName, @LastName, @Email, @Password)" +
                "RETURNING id";

            return await _session.Connection.ExecuteScalarAsync<int>(sql, entities, _session.Transaction);
        }

        public async Task<int> DeleteAsync(int id)
        {
            const string sql = "DELETE FROM \"user\" WHERE id=@id";

            return await _session.Connection.ExecuteAsync(sql, new { id }, _session.Transaction);
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            const string sql = "SELECT * FROM \"user\"";

            return await _session.Connection.QueryAsync<User>(sql);
        }

        public async Task<User> GetByIdAsync(int id)
        {
            const string sql = "SELECT * FROM \"user\" WHERE id=@id";

            return await _session.Connection.QuerySingleOrDefaultAsync<User>(sql, new { id });
        }

        public async Task<int> UpdateAsync(User entity)
        {
            const string sql =
                "UPDATE \"user\" SET " +
                "first_name=@FirstName," +
                "last_name=@LastName," +
                "email=@Email," +
                "password=@Password" +
                "WHERE id=@Id";

            return await _session.Connection.ExecuteAsync(sql, entity, _session.Transaction);
        }
    }
}
