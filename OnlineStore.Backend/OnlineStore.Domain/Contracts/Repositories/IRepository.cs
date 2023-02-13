namespace OnlineStore.Domain.Contracts.Repositories
{
    public interface IRepository<T>
        where T : class
    {
        Task<T> GetByIdAsync(int id);

        Task<IEnumerable<T>> GetAllAsync();

        Task<int> CreateAsync(T entity);

        Task<int> CreateRangeAsync(IEnumerable<T> entities);

        Task<int> UpdateAsync(T entity);

        Task<int> DeleteAsync(int id);
    }
}
