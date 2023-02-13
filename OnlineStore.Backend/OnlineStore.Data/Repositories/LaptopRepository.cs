using Dapper;
using OnlineStore.Data.Repositories.Core;
using OnlineStore.Domain.Contracts.Repositories;
using OnlineStore.Domain.Entities;

namespace OnlineStore.Data.Repositories
{
    public class LaptopRepository : ILaptopRepository
    {
        private readonly DbSession _session;

        public LaptopRepository(DbSession session)
        {
            _session = session;
        }

        public async Task<int> CreateAsync(Laptop entity)
        {
            const string sql =
                "INSERT INTO laptop " +
                "(model, price, image_link, diagonal, refresh_rate, processor, operating_system," +
                " amount_of_ram, ssd, video_card, wifi, bluetooth) " +
                "VALUES " +
                "(@Model, @Price, @ImageLink, @Diagonal, @RefreshRate, @Processor, @OperatingSystem," +
                " @AmountOfRam, @Ssd, @VideoCard, @WiFi, @Bluetooth)" +
                "RETURNING id";

            return await _session.Connection.ExecuteScalarAsync<int>(sql, entity, _session.Transaction);
        }

        public async Task<int> CreateRangeAsync(IEnumerable<Laptop> entities)
        {
            const string sql =
                "INSERT INTO laptop " +
                "(model, price, image_link, diagonal, refresh_rate, processor, operating_system," +
                " amount_of_ram, ssd, video_card, wifi, bluetooth) " +
                "VALUES " +
                "(@Model, @Price, @ImageLink, @Diagonal, @RefreshRate, @Processor, @OperatingSystem," +
                " @AmountOfRam, @Ssd, @VideoCard, @WiFi, @Bluetooth)" +
                "RETURNING id";

            return await _session.Connection.ExecuteScalarAsync<int>(sql, entities, _session.Transaction);
        }

        public async Task<int> DeleteAsync(int id)
        {
            const string sql = "DELETE FROM laptop WHERE id=@id";

            return await _session.Connection.ExecuteAsync(sql, new { id }, _session.Transaction);
        }

        public async Task<IEnumerable<Laptop>> GetAllAsync()
        {
            const string sql = "SELECT * FROM laptop";

            return await _session.Connection.QueryAsync<Laptop>(sql);
        }

        public async Task<Laptop> GetByIdAsync(int id)
        {
            const string sql = "SELECT * FROM laptop WHERE id=@id";

            return await _session.Connection.QuerySingleOrDefaultAsync<Laptop>(sql, new { id });
        }

        public async Task<Laptop> GetByModelAsync(string model)
        {
            const string sql = "SELECT * FROM laptop WHERE model=@model";

            return await _session.Connection.QuerySingleOrDefaultAsync<Laptop>(sql, new { model });
        }

        public async Task<int> UpdateAsync(Laptop entity)
        {
            const string sql =
                "UPDATE laptop SET " +
                "model=@Model, " +
                "price=@Price, " +
                "image_link=@ImageLink, " +
                "diagonal=@Diagonal, " +
                "refresh_rate=@RefreshRate, " +
                "processor=@Processor, " +
                "operating_system=@OperatingSystem, " +
                "amount_of_ram=@AmountOfRam, " +
                "ssd=@Ssd, " +
                "video_card=@VideoCard, " +
                "wifi=@Wifi, " +
                "bluetooth=@Bluetooth " +
                "WHERE id=@Id";

            return await _session.Connection.ExecuteAsync(sql, entity, _session.Transaction);
        }
    }
}
