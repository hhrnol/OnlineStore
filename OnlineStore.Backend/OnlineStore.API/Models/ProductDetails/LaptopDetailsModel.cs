using AutoMapper;
using OnlineStore.Domain.Entities;

namespace OnlineStore.API.Models.ProductDetails
{
    public class LaptopDetailsModel
    {
        public int Id { get; set; }

        public string Model { get; set; }

        public decimal Price { get; set; }

        public string ImageLink { get; set; }

        public string Diagonal { get; set; }

        public string RefreshRate { get; set; }

        public string Processor { get; set; }

        public string OperatingSystem { get; set; }

        public string AmountOfRam { get; set; }

        public string Ssd { get; set; }

        public string VideoCard { get; set; }

        public string WiFi { get; set; }

        public string Bluetooth { get; set; }

        private class LaptopProfile : Profile
        {
            public LaptopProfile()
            {
                CreateMap<Laptop, LaptopDetailsModel>().ReverseMap();
            }
        }
    }
}
