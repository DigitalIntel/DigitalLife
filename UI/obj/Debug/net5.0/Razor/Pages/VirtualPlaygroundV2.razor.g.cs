#pragma checksum "C:\dev\recentHostable\UI\Pages\VirtualPlaygroundV2.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "eac077773b65722e99d79f01e6148e9b13f8b395"
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
    [Microsoft.AspNetCore.Components.RouteAttribute("/2")]
    public partial class VirtualPlaygroundV2 : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "div");
            __builder.AddAttribute(1, "id", "editor");
            __builder.AddMarkupContent(2, "<div id=\"view\"><canvas id=\"cc\"></canvas></div>\r\n   ");
            __builder.OpenElement(3, "div");
            __builder.AddAttribute(4, "id", "controls");
            __builder.OpenElement(5, "div");
            __builder.OpenComponent<HBHplayground.UI.Pages.Chat>(6);
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(7, "\r\n\r\n");
            __builder.AddMarkupContent(8, "<style>\r\n\r\nbody {\r\n    overflow-x: hidden !important;\r\n    overflow-y: hidden !important;\r\n    \r\n}\r\n\r\n \r\n.mud-layout .mud-main-content{\r\n  /*padding: 0px;*/\r\n  padding-left: 0px; !important;\r\n  padding-right: 0px; !important;\r\n  \r\n   \r\n   \r\n }\r\n .maincontainer {\r\n       display: flex;\r\n       width: 100vw;\r\n       height: 100vh;\r\n      \r\n     }\r\n     /*html, body {*/\r\n     /*    height: 100%;*/\r\n     /*  margin: 0;*/\r\n     /*  font-size: 16pt;*/\r\n     /*}*/\r\n     #editor {\r\n       display: flex;\r\n       width: 100%;\r\n       height: 100vh;\r\n      \r\n     }\r\n     #controls {   \r\n   \r\n        display: block;\r\n       overflow-y: scroll !important;\r\n           \r\n     }\r\n     #cc {\r\n       width: 100%;\r\n       height: 100vh;\r\n       display: block;\r\n     }\r\n     \r\n     .gutter {\r\n         background-color: #eee;\r\n         background-repeat: no-repeat;\r\n         background-position: 50%;\r\n     }\r\n     .gutter.gutter-horizontal {\r\n         cursor: ew-resize;\r\n         background-image:  url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==\')\r\n     }\r\n     \r\n     :root {\r\n         --color-bg: #32333D;\r\n         --color-text: #eee;\r\n         --color-text-subtle: #a2a2a2;\r\n     }\r\n     \r\n     .terminal {\r\n         width: 100%;\r\n         min-height: 300px;\r\n         margin-bottom: 40px;\r\n         height: 100vh;\r\n         background: var(--color-bg);\r\n         color: var(--color-text);\r\n         box-shadow: rgba(0, 0, 0, 0.42) 5px 5px 25px;\r\n         font-size: 13px;\r\n         font-family: \'Fira Mono\', Consolas, Menlo, Monaco, \'Courier New\', Courier, monospace;\r\n         border-radius: 4px;\r\n         padding: 75px 25px 35px;\r\n         position: relative;\r\n             overflow-y: scroll;  !important;\r\n                  display: block;                             \r\n         -webkit-box-sizing: border-box;\r\n                 box-sizing: border-box;\r\n     \r\n         -ms-overflow-style: none;  // IE 10+\r\n        \r\n      \r\n         /*overflow: -moz-scrollbars-none;  // Firefox*/\r\n     \r\n         &::-webkit-scrollbar {\r\n           display: none;\r\n         }\r\n     }\r\n     \r\n     .terminal:before {\r\n         content: \'\';\r\n         position: absolute;\r\n         top: 15px;\r\n         left: 15px;\r\n         display: inline-block;\r\n         width: 15px;\r\n         height: 15px;\r\n         border-radius: 50%;\r\n         /* A little hack to display the window buttons in one pseudo element. */\r\n         background: #d9515d;\r\n         -webkit-box-shadow: 25px 0 0 #f4c025, 50px 0 0 #3ec930;\r\n                 box-shadow: 25px 0 0 #f4c025, 50px 0 0 #3ec930;\r\n     }\r\n     \r\n     [data-ty] {\r\n         min-width: 720px;\r\n         display: block;\r\n         line-height: 1.4;\r\n         overflow-wrap: unset;\r\n     }\r\n     \r\n     [data-ty]:before {\r\n         /* Set up defaults and ensure empty lines are displayed. */\r\n         content: \'\';\r\n         display: inline-block;\r\n         vertical-align: middle;\r\n     }\r\n     \r\n     [data-ty=\"input\"]:before,\r\n     [data-ty=\"reset-input\"]:before,\r\n     [data-ty-prompt]:before {\r\n         margin-right: 0.75em;\r\n         color: var(--color-text-subtle);\r\n     }\r\n     \r\n     [data-ty=\"input\"]:before,\r\n     [data-ty=\"reset-input\"]:before {\r\n         content: \'$\';\r\n     }\r\n     \r\n     [data-ty][data-ty-prompt]:before {\r\n         content: attr(data-ty-prompt);\r\n     }\r\n     \r\n     [data-cli-cursor]:after {\r\n         content: attr(data-cli-cursor);\r\n         font-family: monospace;\r\n         -webkit-animation: blink 1s infinite;\r\n                 animation: blink 1s infinite;\r\n     }\r\n     \r\n     \r\n     /* Cursor animation */\r\n     \r\n     @-webkit-keyframes blink {\r\n         50% {\r\n             opacity: 0;\r\n         }\r\n     }\r\n     \r\n     @keyframes blink {\r\n         50% {\r\n             opacity: 0;\r\n         }\r\n     }\r\n\r\n\r\nbody {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\r\n  text-rendering: optimizeLegibility;\r\n  line-height: 1.5;\r\n  height: 100vw;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n \r\n \r\n * {\r\n   margin: 0;\r\n   padding: 0;\r\n   box-sizing: border-box;\r\n }\r\n \r\n\r\n .page {\r\n   overflow: hidden;\r\n   header {\r\n     width: 100vw;\r\n     height: 100vh;\r\n     overflow: hidden;\r\n   }\r\n }\r\n \r\n img {\r\n   display: block;\r\n   width: 100%;\r\n   height: 100vh;\r\n   object-fit: cover;\r\n }\r\n \r\n  video {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100vh;\r\n    object-fit: cover;\r\n  }\r\n \r\n\r\n\r\n \r\n\r\n@media only screen and (min-width: 768px) {\r\n  section {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n  }\r\n\r\n  .body {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  pre {\r\n    min-width: 768px;\r\n  }\r\n\r\n}\r\n\r\nnav {\r\n  border-bottom: 1px solid #ddd;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 10px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\npre {\r\n  font-family: monospace;\r\n  padding: 10px;\r\n  background-color: #efefef;\r\n}\r\n\r\nsection {\r\n  max-width: 959px;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  max-width: 1200px;\r\n  border-bottom: 1px solid #ddd;\r\n\r\n}\r\n\r\nh1 {\r\n  padding-bottom: 20px;\r\n  font-size: 42px;\r\n  font-weight: 600;\r\n  text-align: center;\r\n}\r\n\r\nh2 {\r\n  font-size: 22px;\r\n  color: #999;\r\n  text-align: center;\r\n}\r\n\r\nh3 {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.base00 { color: #181818; }\r\n.base01 { color: #282828; }\r\n.base02 { color: #383838; }\r\n.base03 { color: #585858; }\r\n.base04 { color: #b8b8b8; }\r\n.base05 { color: #d8d8d8; }\r\n.base06 { color: #e8e8e8; }\r\n.base07 { color: #f8f8f8; }\r\n.base08 { color: #ab4642; }\r\n.base09 { color: #dc9656; }\r\n.base0A { color: #f7ca88; }\r\n.base0B { color: #a1b56c; }\r\n.base0C { color: #86c1b9; }\r\n.base0D { color: #7cafc2; }\r\n.base0E { color: #ba8baf; }\r\n.base0F { color: #a16946; }\r\n\r\n.base00-background { background-color: #181818; }\r\n.base01-background { background-color: #282828; }\r\n.base02-background { background-color: #383838; }\r\n.base03-background { background-color: #585858; }\r\n.base04-background { background-color: #b8b8b8; }\r\n.base05-background { background-color: #d8d8d8; }\r\n.base06-background { background-color: #e8e8e8; }\r\n.base07-background { background-color: #f8f8f8; }\r\n.base08-background { background-color: #ab4642; }\r\n.base09-background { background-color: #dc9656; }\r\n.base0A-background { background-color: #f7ca88; }\r\n.base0B-background { background-color: #a1b56c; }\r\n.base0C-background { background-color: #86c1b9; }\r\n.base0D-background { background-color: #7cafc2; }\r\n.base0E-background { background-color: #ba8baf; }\r\n.base0F-background { background-color: #a16946; }\r\n\r\n\r\n     \r\n</style>");
        }
        #pragma warning restore 1998
#nullable restore
#line 322 "C:\dev\recentHostable\UI\Pages\VirtualPlaygroundV2.razor"
           
    
   
 
   private static IJSObjectReference RuntimeContainer;

    //
    //
    //
    // const string ImportPath = "../js/stats.module.js";
    protected async override void OnInitialized()
    {
        base.OnInitialized();
        RuntimeContainer = await JsRuntime.InvokeAsync<IJSObjectReference>("import", "../js/VirtualPlayground2.js");
    }

    //
    //
    // [JSInvokable]
    // public async void initializedfromJs()
    // {
    //     Console.WriteLine(("initialized in dotnet"));
    // }
    //
    //
    // public async ValueTask DisposeAsync()
    // {
    //
    //     await mainJS.DisposeAsync();
    //     await RuntimeContainer.DisposeAsync();
    //   Console.WriteLine(("disposed"));
    //
    // }
    //
    // async void  Start()
    // {
    //     
    //     await mainJS.InvokeVoidAsync("_registerPlayer", "idMaster");
    //
    //     
    // }
    //
    // async void  AddRemotePlayer()
    // {
    //     
    //  await mainJS.InvokeVoidAsync("_LoadRemotePlayer", "idremote");
    //
    //     
    // }
    //
    // async void RegisterLocalPlayer()
    // {
    //     
    //     
    //     
    // }


    

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private IJSRuntime JsRuntime { get; set; }
    }
}
#pragma warning restore 1591
