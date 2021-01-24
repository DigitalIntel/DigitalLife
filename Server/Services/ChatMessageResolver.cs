using System;
using HBHplayground.Abstractions;
using Stl.DependencyInjection;
using Stl.Fusion.EntityFramework;

namespace HBHplayground.Server.Services
{
    [Service]
    public class ChatMessageResolver : DbEntityResolver<AppDbContext, long, ChatMessage>
    {
        public ChatMessageResolver(IServiceProvider services) : base(services)
        {
            BatchProcessor.ConcurrencyLevel = 1; // Just to show how it works
        }
    }
}
