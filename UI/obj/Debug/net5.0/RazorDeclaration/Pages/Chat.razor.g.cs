// <auto-generated/>
#pragma warning disable 1591
#pragma warning disable 0414
#pragma warning disable 0649
#pragma warning disable 0169

namespace HBHplayground.UI.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\dev\recentHostable\UI\_Imports.razor"
using System.Diagnostics;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\dev\recentHostable\UI\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\dev\recentHostable\UI\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\dev\recentHostable\UI\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\dev\recentHostable\UI\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\dev\recentHostable\UI\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\dev\recentHostable\UI\_Imports.razor"
using Microsoft.AspNetCore.Components.WebAssembly.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\dev\recentHostable\UI\_Imports.razor"
using Microsoft.Extensions.Logging;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\dev\recentHostable\UI\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "C:\dev\recentHostable\UI\_Imports.razor"
using HBHplayground.Client;

#line default
#line hidden
#nullable disable
#nullable restore
#line 11 "C:\dev\recentHostable\UI\_Imports.razor"
using HBHplayground.UI;

#line default
#line hidden
#nullable disable
#nullable restore
#line 12 "C:\dev\recentHostable\UI\_Imports.razor"
using HBHplayground.UI.Services;

#line default
#line hidden
#nullable disable
#nullable restore
#line 13 "C:\dev\recentHostable\UI\_Imports.razor"
using HBHplayground.UI.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 14 "C:\dev\recentHostable\UI\_Imports.razor"
using HBHplayground.Abstractions;

#line default
#line hidden
#nullable disable
#nullable restore
#line 15 "C:\dev\recentHostable\UI\_Imports.razor"
using Stl.Fusion;

#line default
#line hidden
#nullable disable
#nullable restore
#line 16 "C:\dev\recentHostable\UI\_Imports.razor"
using Stl.Fusion.Blazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 17 "C:\dev\recentHostable\UI\_Imports.razor"
using Stl.Fusion.Blazor.Authentication;

#line default
#line hidden
#nullable disable
#nullable restore
#line 18 "C:\dev\recentHostable\UI\_Imports.razor"
using Stl.Fusion.Bridge;

#line default
#line hidden
#nullable disable
#nullable restore
#line 19 "C:\dev\recentHostable\UI\_Imports.razor"
using Stl.Fusion.Bridge.Messages;

#line default
#line hidden
#nullable disable
#nullable restore
#line 20 "C:\dev\recentHostable\UI\_Imports.razor"
using Stl.Fusion.Authentication;

#line default
#line hidden
#nullable disable
#nullable restore
#line 21 "C:\dev\recentHostable\UI\_Imports.razor"
using Stl.Serialization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 24 "C:\dev\recentHostable\UI\_Imports.razor"
using System.Text.Json;

#line default
#line hidden
#nullable disable
#nullable restore
#line 25 "C:\dev\recentHostable\UI\_Imports.razor"
using System.Text.Json.Serialization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 28 "C:\dev\recentHostable\UI\_Imports.razor"
using MudBlazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 29 "C:\dev\recentHostable\UI\_Imports.razor"
using MudBlazor.Dialog;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "C:\dev\recentHostable\UI\Pages\Chat.razor"
using System.Threading;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\dev\recentHostable\UI\Pages\Chat.razor"
using StackExchange.Redis.Extensions.Utf8Json;

#line default
#line hidden
#nullable disable
    public partial class Chat : LiveComponentBase<Chat.Model, Chat.LocalsModel>
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
        }
        #pragma warning restore 1998
#nullable restore
#line 221 "C:\dev\recentHostable\UI\Pages\Chat.razor"
        
    
    

    private static IJSObjectReference RuntimeContainer;
    private static IJSObjectReference mainJS;

 
    
        const string ImportPath = "../js/stats.module.js";

  
   
    [JSInvokable]
    public async void initializedfromJs()
    {
        Console.WriteLine(("initialized in livestate"));
    }


    // public async ValueTask DisposeAsync()
    // {
    //
    //     await mainJS.DisposeAsync();
    //     await RuntimeContainer.DisposeAsync();
    //     Console.WriteLine(("disposed"));
    //
    // }

    public class UpdateRequest
    {
        public string ID { get; set; }
        public int RequestType { get; set; }
        public string Data { get; set; }

    }


    //
    // [Parameter]
    // public IJSObjectReference LocalPlaygroundInstance { get; set; } = null!;


    public class LocalsModel
    {
        private string _name = "";
        
        public string Name
        {
            get => _name;
            set
            {
                _name = value;
                IsNameModified = true;
            }
        }

        public bool IsNameModified { get; set; }
        public string Message { get; set; } = "";
        public Exception? Error { get; set; }
    }

    public class Model
    {
        public long UserCount { get; set; }
        public long ActiveUserCount { get; set; }
        public ChatUser? ChatUser { get; set; }
        public ChatPage LastPage { get; set; } = new();
        
    }

    protected override async Task<Model> ComputeStateAsync(CancellationToken cancellationToken)
    {
        var userCount = await ChatService.GetUserCountAsync(cancellationToken);
        var activeUserCount = await ChatService.GetActiveUserCountAsync(cancellationToken);
        var chatUser = await ClientState.ChatUser.UseAsync(cancellationToken);
        var lastPage = await ChatService.GetChatTailAsync(10, cancellationToken);
        if (!Locals.Value.IsNameModified)
            ResetName(chatUser?.Name ?? "");
        return new Model()
        {
            UserCount = userCount,
            ActiveUserCount = activeUserCount,
            ChatUser = chatUser,
            LastPage = lastPage,
        };
    }

    protected override async Task OnInitializedAsync()
    {


        var chatUser = await ChatService.GetCurrentUserAsync(ClientState.Session);
        if (chatUser == null)
            await SetNameAsync();
        
  
          
    }
    
    protected override async void OnAfterRender(bool firstRender)
    {
        //mainDotnet.Create(this); 
        if (!firstRender) return;
        RuntimeContainer = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "../js/HBH01/HBH02.js");
        mainJS = await RuntimeContainer.InvokeAsync<IJSObjectReference>("init", DotNetObjectReference.Create(this));
       
    }
     
  
    [JSInvokable]
    public async Task hello_LiveStateHandler(object ob)
    {
        // Console.WriteLine(ob);
        UpdateRequest a = Utf8Json.JsonSerializer.Deserialize<UpdateRequest>(ob.ToString());
        //Console.WriteLine("deserialized" + a.ID + " " + a.RequestType);
        await mainJS.InvokeVoidAsync("_registerPlayer", "idMaster");

        //  Console.WriteLine(a.Data.ToString() + " " + a.RequestType.ToString());
        ResetError();
        try
        {


           // if (ClientState.ChatUser.Value == null)
           //     throw new ApplicationException("Please set your name first.");
           // await ChatService.PostMessageAsync(new("Command: " + ob.ToString(), ClientState.Session));
            Locals.Value.Message = "";
            TouchLocals();

        }
        catch (Exception e)
        {
            SetError(e);
        }
    }

    private async Task SetNameAsync()
    {
        ResetError();
        var locals = Locals.Value;
        try
        {  // await LocalPlaygroundInstance.InvokeVoidAsync("helloFromLiveComponent", DotNetObjectReference.Create(this));
            await mainJS.InvokeVoidAsync("_registerPlayer", "idMaster");
            await ChatService.SetUserNameAsync(new(locals.Name ?? "", ClientState.Session));
        }
        catch (Exception e)
        {
            SetError(e);
        }
    }

    private async Task SendMessageAsync()
    {
        ResetError();
        try
        {
            if (ClientState.ChatUser.Value == null)
                throw new ApplicationException("Please set your name first.");
            await ChatService.PostMessageAsync(new(Locals.Value.Message, ClientState.Session));
            Locals.Value.Message = "";
            TouchLocals();
         
        }
        catch (Exception e)
        {
            SetError(e);
        }
    }

    private void SignIn() => JSRuntime.InvokeVoidAsync("FusionAuth.signIn");
    private void SignOut() => JSRuntime.InvokeVoidAsync("FusionAuth.signOut");

    // Convenience shortcuts

    private void ResetError()
        => SetError(null);

    private void ResetName(string name)
    {
        Locals.Value.Name = name;
        Locals.Value.IsNameModified = false;
        TouchLocals();
    }

    private void SetError(Exception? error)
    {
        Locals.Value.Error = error;
        TouchLocals();
    }

    private void TouchLocals()
        => Locals.Set(Locals.AsResult()); 

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JSRuntime { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private NavigationManager Navigator { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private ClientState ClientState { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IChatService ChatService { get; set; }
    }
}
#pragma warning restore 1591
