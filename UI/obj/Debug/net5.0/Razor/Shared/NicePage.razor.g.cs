#pragma checksum "C:\dev\recentHostable\UI\Shared\NicePage.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1190f9b7d800282d4a3c25e13687c02f2548cea1"
// <auto-generated/>
#pragma warning disable 1591
namespace HBHplayground.UI.Shared
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
    public partial class NicePage : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenComponent<MudBlazor.MudText>(0);
            __builder.AddAttribute(1, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 3 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                            Typo.body1

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(2, "Class", "mt-4");
            __builder.AddAttribute(3, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(4, @"
                -- Press F11 for optimal experience --
                This is a fun programming experience. You play by creating simple visual scripts that perform repeatable actions. A script is incarnated by a visual bot that performs the programmed script. How you ask ? 
                let me show you !   ");
                __builder2.OpenComponent<MudBlazor.MudButton>(5);
                __builder2.AddAttribute(6, "Variant", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Variant>(
#nullable restore
#line 6 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                                                        Variant.Text

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(7, "Color", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Color>(
#nullable restore
#line 7 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                                                                     Color.Primary

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(8, "EndIcon", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.String>(
#nullable restore
#line 8 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                                                                        Filled.Link

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(9, "OnClick", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Microsoft.AspNetCore.Components.EventCallback<Microsoft.AspNetCore.Components.Web.MouseEventArgs>>(Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 9 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                                                                       CreateTutorialManagerBot

#line default
#line hidden
#nullable disable
                )));
                __builder2.AddAttribute(10, "target", "_blank");
                __builder2.AddAttribute(11, "rel", "noopener noreferrer");
                __builder2.AddAttribute(12, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(13, "\r\n                                                       nuget package InputFile\r\n                                                   ");
                }
                ));
                __builder2.CloseComponent();
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(14, "\r\n        \r\n            <br>\r\n            ");
            __builder.OpenComponent<MudBlazor.MudText>(15);
            __builder.AddAttribute(16, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 17 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                            Typo.body1

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(17, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(18, @"
                  Tasks can be as easy as walking to a specific point , following another bot or pressing a button that turns on the dark mode for the entire site.
                               They can also be complex like performing data base queries or modifying the dom elements, calling web api', creating RTC channels, processing input from microphones, basically any thing you can think of in discrete steps.

");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(19, "\r\n            <br>\r\n            ");
            __builder.OpenComponent<MudBlazor.MudText>(20);
            __builder.AddAttribute(21, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 80 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                            Typo.body1

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(22, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(23, @"
                                                                 
                                                  
                                               
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  One possible scenario would be to create smart bots that operate a modern virtual school. Optimize UI for explaining , shared interactive learning scripts or 3d video conferencing.
                                                  Another possible scenario is to optimize the UI for attention tracking to discard irrelevant distractions. Since components could be rendered in 
                                                  the server, you don't need more than a screen and an internet connection to run very demanding applications.
                                                  
                                                
                                                  You play this game by creating your own bot that is useful to you, and maybe to others. 
                                               
            ");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(24, "\r\n            <br>\r\n            ");
            __builder.OpenComponent<MudBlazor.MudText>(25);
            __builder.AddAttribute(26, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 98 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                            Typo.body2

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(27, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(28, @"
                   The premise is that maybe with enough inputs, we figure out an AI that is able to think on its own. 
                                                                  
                                                                  
                                                                  Or in worst case a bot that does your Job for you, lol !
            ");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(29, "\r\n            <br>\r\n            ");
            __builder.OpenComponent<MudBlazor.MudText>(30);
            __builder.AddAttribute(31, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 105 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                            Typo.body1

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(32, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(33, "\r\n                See\r\n                ");
                __builder2.OpenComponent<MudBlazor.MudButton>(34);
                __builder2.AddAttribute(35, "Variant", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Variant>(
#nullable restore
#line 107 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                                    Variant.Text

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(36, "Color", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Color>(
#nullable restore
#line 108 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                                  Color.Primary

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(37, "EndIcon", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.String>(
#nullable restore
#line 109 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                                     Filled.Info

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(38, "Link", "https://blog.stevensanderson.com/2019/09/13/blazor-inputfile/");
                __builder2.AddAttribute(39, "target", "_blank");
                __builder2.AddAttribute(40, "rel", "noopener noreferrer");
                __builder2.AddAttribute(41, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(42, "\r\n                    more info\r\n                ");
                }
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(43, "\r\n                on how to install it.\r\n            ");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(44, "\r\n            <br>\r\n            ");
            __builder.OpenComponent<MudBlazor.MudText>(45);
            __builder.AddAttribute(46, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 116 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
                            Typo.body1

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(47, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(48, "\r\n                If your project is .Net 5.0, InputFile is a native component and you don\'t need to install it.\r\n            ");
            }
            ));
            __builder.CloseComponent();
        }
        #pragma warning restore 1998
#nullable restore
#line 122 "C:\dev\recentHostable\UI\Shared\NicePage.razor"
 
    
    void CreateTutorialManagerBot(){}

#line default
#line hidden
#nullable disable
    }
}
#pragma warning restore 1591
