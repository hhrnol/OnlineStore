using FluentMigrator;

namespace OnlineStore.Data.Migrations
{
    [Migration(20201216120000)]
    public class CreateTables : Migration
    {
        public override void Up()
        {
            Create.Table("user")
                .WithColumn("id")
                .AsInt32()
                .Identity()
                .PrimaryKey()
                .WithColumn("first_name")
                .AsString()
                .NotNullable()
                .WithColumn("last_name")
                .AsString()
                .NotNullable()
                .WithColumn("email")
                .AsString()
                .NotNullable()
                .WithColumn("password")
                .AsString()
                .NotNullable();

            Create.Table("laptop")
                .WithColumn("id")
                .AsInt32()
                .Identity()
                .PrimaryKey()
                .WithColumn("model")
                .AsString()
                .NotNullable()
                .WithColumn("price")
                .AsDecimal()
                .NotNullable()
                .WithColumn("image_link")
                .AsString()
                .NotNullable()
                .WithColumn("diagonal")
                .AsString()
                .NotNullable()
                .WithColumn("refresh_rate")
                .AsString()
                .NotNullable()
                .WithColumn("processor")
                .AsString()
                .NotNullable()
                .WithColumn("operating_system")
                .AsString()
                .NotNullable()
                .WithColumn("amount_of_ram")
                .AsString()
                .NotNullable()
                .WithColumn("ssd")
                .AsString()
                .NotNullable()
                .WithColumn("video_card")
                .AsString()
                .NotNullable()
                .WithColumn("wifi")
                .AsString()
                .NotNullable()
                .WithColumn("bluetooth")
                .AsString()
                .NotNullable();

            Create.Table("purchase")
                .WithColumn("id")
                .AsInt32()
                .Identity()
                .PrimaryKey()
                .WithColumn("user_id")
                .AsInt32()
                .NotNullable()
                .WithColumn("laptop_id")
                .AsInt32()
                .NotNullable()
                .WithColumn("date")
                .AsDate()
                .NotNullable()
                .WithColumn("purchase_token")
                .AsGuid()
                .NotNullable();

            Create.ForeignKey("fk_purchase_user")
                .FromTable("purchase")
                .ForeignColumn("user_id")
                .ToTable("user")
                .PrimaryColumn("id");

            Create.ForeignKey("fk_puchase_laptop")
                .FromTable("purchase")
                .ForeignColumn("laptop_id")
                .ToTable("laptop")
                .PrimaryColumn("id");
        }

        public override void Down()
        {
            Delete.Table("user");
            Delete.Table("laptop");
            Delete.Table("purchase");
        }
    }
}
