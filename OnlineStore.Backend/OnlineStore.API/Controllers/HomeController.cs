using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OnlineStore.API.Models.Home;
using OnlineStore.Domain.Contracts.Services;
using OnlineStore.Domain.Entities;

namespace OnlineStore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IHomeService _homeService;
        private readonly IMapper _mapper;

        public HomeController(IHomeService homeService, IMapper mapper)
        {
            _homeService = homeService;
            _mapper = mapper;
        }

        [HttpGet("laptops")]
        public async Task<ActionResult<IEnumerable<LaptopItemModel>>> GetLaptops()
        {
            IEnumerable<Laptop> laptops = await _homeService.GetAllLaptopsAsync();
            var laptopItemModels = _mapper.Map<IEnumerable<LaptopItemModel>>(laptops);

            return Ok(laptopItemModels);
        }
    }
}
