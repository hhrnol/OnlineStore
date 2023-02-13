using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using OnlineStore.API.Models.ShoppingCart;
using OnlineStore.Domain.Contracts.Services;
using OnlineStore.Domain.Entities;

namespace OnlineStore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingCartController : ControllerBase
    {
        private readonly IShoppingCartService _purchaseService;
        private readonly IMapper _mapper;

        public ShoppingCartController(IShoppingCartService purchaseService, IMapper mapper)
        {
            _purchaseService = purchaseService;
            _mapper = mapper;
        }

        [HttpPost("{userId}")]
        public async Task<ActionResult<string>> PostShoppingCart(
            IEnumerable<PurchasedLaptopModel> items,
            int userId)
        {
            List<(int Id, int Count)> purchasedItems = items.Select(i => (i.Id, i.Count)).ToList();

            Guid token = await _purchaseService.ProcessPurchaseAsync(purchasedItems, userId);

            return CreatedAtRoute("GetShoppingCart", new { token }, "Successfully created");
        }

        [HttpGet("{token}", Name = "GetShoppingCart")]
        public async Task<ActionResult<IEnumerable<LaptopCartModel>>> GetShoppingCart(Guid token)
        {
            IEnumerable<PurchasedItem> purchasedItems = await _purchaseService.GetItemsByPurchaseToken(token);

            if (purchasedItems is null)
            {
                return NotFound();
            }

            IEnumerable<LaptopCartModel> cartItemModels = _mapper.Map<IEnumerable<LaptopCartModel>>(purchasedItems);

            return Ok(cartItemModels);
        }
    }
}
