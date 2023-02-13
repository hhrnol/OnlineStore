namespace OnlineStore.Domain.Contracts.Repositories
{
    public interface IUnitOfWork : IDisposable
    {
        void BeginTransaction();

        void Commit();

        void Rollback();
    }
}
