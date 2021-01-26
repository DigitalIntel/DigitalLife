#pragma checksum "C:\dev\recentHostable\UI\Pages\Chat.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "432c99623f18445ba7d335ede9cf24c37c0fba78"
// <auto-generated/>
#pragma warning disable 1591
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
#nullable restore
#line 13 "C:\dev\recentHostable\UI\Pages\Chat.razor"
   var locals = Locals.Value;
    var state = State.LastValue;
    var lastPage = state.LastPage;
    var error = State.Error;
    var actualUserName = state.ChatUser?.Name; 

#line default
#line hidden
#nullable disable
            __builder.OpenElement(0, "div");
            __builder.AddAttribute(1, "class", "example ");
            __builder.AddAttribute(2, "data-component", "example");
            __builder.AddAttribute(3, "data-active-class", "example--active");
            __builder.OpenElement(4, "div");
            __builder.AddAttribute(5, "class", "example__frame");
            __builder.OpenElement(6, "div");
            __builder.AddAttribute(7, "class", "space space--medium");
            __builder.OpenElement(8, "div");
            __builder.AddAttribute(9, "id", "options-start-at");
            __builder.AddAttribute(10, "class", "slider glide");
            __builder.OpenElement(11, "div");
            __builder.AddAttribute(12, "class", "slider__track glide__track");
            __builder.AddAttribute(13, "data-glide-el", "track");
            __builder.OpenElement(14, "ul");
            __builder.AddAttribute(15, "id", "ActiveFrames");
            __builder.AddAttribute(16, "class", "slider__slides glide__slides");
            __builder.OpenElement(17, "li");
            __builder.AddAttribute(18, "class", "slider__frame glide__slide");
            __builder.OpenComponent<MudBlazor.MudCard>(19);
            __builder.AddAttribute(20, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.OpenComponent<MudBlazor.MudCardMedia>(21);
                __builder2.AddAttribute(22, "Image", "https://source.unsplash.com/1600x900/?Aliens");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(23, "\n                                                                                             ");
                __builder2.OpenComponent<MudBlazor.MudCardContent>(24);
                __builder2.AddAttribute(25, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(26, @"<h1 class=""display-4"">
                                                                                                     Console
                                                                                                     <a href=""https://digitalPlayground.ben-hassen.com"" target=""_blank""></a></h1>
                                                                                             
                                                                                 <div id=""cliContainer"" tabIndex=""-1""></div>");
                }
                ));
                __builder2.CloseComponent();
            }
            ));
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.AddMarkupContent(27, " \n                 \n                             ");
            __builder.OpenElement(28, "li");
            __builder.AddAttribute(29, "class", "slider__frame glide__slide");
            __builder.OpenComponent<HBHplayground.UI.Pages.Home>(30);
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.AddMarkupContent(31, " \n                        ");
            __builder.OpenElement(32, "li");
            __builder.AddAttribute(33, "class", "slider__frame glide__slide");
            __builder.OpenComponent<HBHplayground.UI.Shared.AccumulatorCard>(34);
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.AddMarkupContent(35, " \n                   \n                        ");
            __builder.OpenElement(36, "li");
            __builder.AddAttribute(37, "class", "slider__frame glide__slide");
            __builder.OpenComponent<HBHplayground.UI.Shared.OnlineRoom>(38);
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(39, "\n                \n    ");
            __builder.AddMarkupContent(40, @"<div data-glide-el=""controls""><button class=""slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev"" data-glide-dir=""<""><svg xmlns=""http://www.w3.org/2000/svg"" width=""18"" height=""18"" viewBox=""0 0 24 24""><path d=""M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z""></path></svg></button>
                        
                                            <button class=""slider__arrow slider__arrow--next glide__arrow glide__arrow--next"" data-glide-dir="">""><svg xmlns=""http://www.w3.org/2000/svg"" width=""18"" height=""18"" viewBox=""0 0 24 24""><path d=""M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z""></path></svg></button></div>");
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(41, "\n\n  ");
            __builder.AddMarkupContent(42, @"<style>
      
       .glide__slidess {
              background-color: pink;
              border: 1px solid blue;
              margin: 0 5px;
              height: 100%;
              display: list-item;
            }
      
      .glide__slide {
        

   
        height: 100%;
        display: list-item;
      }
      #cliContainer{
       width: 100%;
               min-height: 300px;
               margin-bottom: 60px;
               height: 50%;
          
               box-shadow: rgba(0, 0, 0, 0.42) 5px 5px 25px;
               font-size: 14px;
               font-family: 'Fira Mono', Consolas, Menlo, Monaco, 'Courier New', Courier, monospace;
               border-radius: 4px;
               padding: 75px 25px 35px;
               position: relative;
                   overflow-y: scroll;  !important;
                        display: block;                             
               -webkit-box-sizing: border-box;
                       box-sizing: border-box;
           
               -ms-overflow-style: none;  // IE 10+
              
      
      
      } 
      .glide__arrow--next {
        top: 50%;
        right: 0%;
        position: fixed
      }
        .glide__arrow--prev {
         top: 50%;
                left: auto;
                position: fixed
            }
      

    </style>");
        }
        #pragma warning restore 1998
#nullable restore
#line 178 "C:\dev\recentHostable\UI\Pages\Chat.razor"
        
    
    

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
        RuntimeContainer = await JSRuntime.InvokeAsync<IJSObjectReference>("import", "../js/VirtualPlayground.js");
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
