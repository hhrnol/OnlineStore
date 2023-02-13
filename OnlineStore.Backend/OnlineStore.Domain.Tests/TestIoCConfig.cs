using OnlineStore.Domain.Contracts.Repositories;
using OnlineStore.Domain.Tests.TestRepositories;
using StructureMap;

namespace OnlineStore.Domain.Tests
{
    public static class TestIoCConfig
    {
        public static IContainer RegisterTypes(this IContainer container)
        {
            container.Configure(_ =>
            {
                _.For<IContainer>().Use(container);
                _.AddRegistry<TestsRepositoryRegistry>();
            });

            return container;
        }

        public class TestsRepositoryRegistry : Registry
        {
            public TestsRepositoryRegistry()
            {
                For<ILaptopRepository>().Singleton().Use<TestsLaptopRepository>();
                For<IUserRepository>().Singleton().Use<TestsUserRepository>();
                For<IPurchaseRepository>().Singleton().Use<TestsPurchaseRepository>();
            }
        }
    }
}
