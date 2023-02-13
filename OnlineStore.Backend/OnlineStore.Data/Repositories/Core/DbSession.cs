using System.Data;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace OnlineStore.Data.Repositories.Core
{
    public sealed class DbSession : IDisposable
    {
        public DbSession(IConfiguration configuration)
        {
            Connection = new NpgsqlConnection(configuration.GetConnectionString("DefaultConnection"));
            Connection.Open();
        }

        public IDbConnection Connection { get; }

        public IDbTransaction Transaction { get; set; }

        public void Dispose() => Connection?.Dispose();
    }
}
