using AutoMapper;
using OnlineStore.Domain.Entities;

namespace OnlineStore.API.Models.ShoppingCart
{
    public class LaptopCartModel
    {
        public int Id { get; set; }

        public string Model { get; set; }

        public string ImageLink { get; set; }

        public decimal Price { get; set; }

        public int Count { get; set; }

        private class LaptopProfile : Profile
        {
            public LaptopProfile()
            {
                CreateMap<Laptop, LaptopCartModel>().ReverseMap();
            }
        }
    }
}
