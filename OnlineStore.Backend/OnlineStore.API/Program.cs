using OnlineStore.API.Extensions;

const string DefaultCorsPolicy = "DefaultCorsPolicy";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS policy.
builder.Services.AddCors(options => options.AddPolicy(
    name: DefaultCorsPolicy,
    policy => policy.WithOrigins("https://roistore.azurewebsites.net").AllowAnyMethod().AllowAnyHeader()));

// Add AutoMapper profiles.
builder.Services.AddAutoMapperProfiles();

builder.Services.AddRepositories();
builder.Services.AddDomainServices();

// Add Dapper snake case mapping support.
Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;

// Solve problem with swagger schemaId.
builder.Services.AddSwaggerGen(options =>
{
    options.CustomSchemaIds(type => type.ToString());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.UseCors(DefaultCorsPolicy);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
