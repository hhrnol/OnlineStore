namespace OnlineStore.Domain.Entities
{
    public class PurchasedItem
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public int LaptopId { get; set; }

        public DateTime Date { get; set; }

        public Guid PurchaseToken { get; set; }

        public int Count { get; set; }
    }
}
