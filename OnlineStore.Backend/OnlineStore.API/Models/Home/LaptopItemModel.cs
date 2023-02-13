using AutoMapper;
using OnlineStore.Domain.Entities;

namespace OnlineStore.API.Models.Home
{
    public class LaptopItemModel
    {
        public int Id { get; set; }

        public string Model { get; set; }

        public string ImageLink { get; set; }

        public decimal Price { get; set; }

        private class LaptopProfile : Profile
        {
            public LaptopProfile()
            {
                CreateMap<Laptop, LaptopItemModel>().ReverseMap();
            }
        }
    }
}
