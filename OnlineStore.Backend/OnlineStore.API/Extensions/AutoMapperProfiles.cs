using Home = OnlineStore.API.Models.Home;
using ProductDetails = OnlineStore.API.Models.ProductDetails;
using ShoppingCart = OnlineStore.API.Models.ShoppingCart;

namespace OnlineStore.API.Extensions
{
    public static class AutoMapperProfiles
    {
        public static void AddAutoMapperProfiles(this IServiceCollection services)
        {
            services.AddAutoMapper(
                typeof(Home.LaptopItemModel),
                typeof(ProductDetails.LaptopDetailsModel),
                typeof(ShoppingCart.LaptopCartModel));
        }
    }
}
