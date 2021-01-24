using System.Threading;
using System.Threading.Tasks;
using RestEase;
using Stl.Fusion.Client;

namespace HBHplayground.Server.Services
{
    [RestEaseClientService]
    [BasePath("https://uzby.com/api.php")]
    public interface IUzbyClient
    {
        [Get("")]
        Task<string> GetNameAsync(
            [Query("min")] int minLength = 2,
            [Query("max")] int maxLength = 8,
            CancellationToken cancellationToken = default);
    }
}
