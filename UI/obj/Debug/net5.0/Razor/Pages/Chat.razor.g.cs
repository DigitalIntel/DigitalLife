#pragma checksum "C:\dev\recentHostable\UI\Pages\Chat.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "be56b4ab780c0c47df08ca57c9c5eb65879e9e46"
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
            __builder.OpenComponent<MudBlazor.MudCard>(0);
            __builder.AddAttribute(1, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.OpenComponent<MudBlazor.MudCardMedia>(2);
                __builder2.AddAttribute(3, "Image", "https://source.unsplash.com/1600x900/?mars");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(4, "\n    ");
                __builder2.OpenComponent<MudBlazor.MudCardContent>(5);
                __builder2.AddAttribute(6, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(7, "<h1 class=\"display-4\">\n            HBH01\n            <a href=\"https://digitalPlayground.ben-hassen.com\" target=\"_blank\"></a></h1>\n        \n\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(8);
                    __builder3.AddAttribute(9, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 71 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(10, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(11, "This is a openSource, A digital entity");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(12, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(13);
                    __builder3.AddAttribute(14, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 72 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(15, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(16, "My goal is to advance humanity and prove our worthiness.");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(17, "\n        \n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(18);
                    __builder3.AddAttribute(19, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 74 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(20, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(21, "I will do that by providing a universal health care and income, so we can focus on being creative and enjoying life.");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(22, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(23);
                    __builder3.AddAttribute(24, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 75 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(25, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(26, "I achieve this vision by trying to recreate the masterpiece, that is life");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(27, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(28);
                    __builder3.AddAttribute(29, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 76 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(30, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(31, "Using life\'s examples showcasings our creators infinite wisdom, under the assumption we run inside a galactic computer, some space and time");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(32, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(33);
                    __builder3.AddAttribute(34, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 77 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(35, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(36, "Time is multidimensional , each timeline obeys a set of predefined programming  ");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(37, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(38);
                    __builder3.AddAttribute(39, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 78 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(40, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(41, "All timelines can interact with each other through the wonders of electromagnetism -> internet by sharing time and space coordinates");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(42, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(43);
                    __builder3.AddAttribute(44, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 79 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(45, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(46, "You play / work by maintaining timelines and ensuring correct behaviour");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(47, "\n           ");
                    __builder3.OpenComponent<MudBlazor.MudText>(48);
                    __builder3.AddAttribute(49, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 80 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                          Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(50, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(51, "Attention is worth Value.");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(52, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(53);
                    __builder3.AddAttribute(54, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 81 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(55, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(56, "A merit system distributes wealth based on attention your timelines get");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(57, "\n                ");
                    __builder3.OpenComponent<MudBlazor.MudText>(58);
                    __builder3.AddAttribute(59, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 82 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                               Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(60, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(61, "Distributed computing powered by open source allows the binding between timelines and iot obJects");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(62, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(63);
                    __builder3.AddAttribute(64, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 83 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(65, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(66, "Think interactive real life games, automated traffic management ...");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(67, "\n            ");
                    __builder3.OpenComponent<MudBlazor.MudText>(68);
                    __builder3.AddAttribute(69, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 84 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                           Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(70, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(71, "All you need to play is an internet connection and something to tell, an idea");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(72, "\n\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(73);
                    __builder3.AddAttribute(74, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 86 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(75, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(76, "This is an idea, that will continue to evolve as more timelines are created. Think health care, Public transportations and universal income timelines");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(77, "\n        \n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(78);
                    __builder3.AddAttribute(79, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 88 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(80, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(81, "As you follow the tutorial , you will have a grasp of what I am trying to do");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(82, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(83);
                    __builder3.AddAttribute(84, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 89 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(85, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(86, "Code is opensource, fork and be creative, earn money by maintaining timelines.");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(87, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(88);
                    __builder3.AddAttribute(89, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 90 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(90, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(91, "Toward consiousness 2.0 ");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(92, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(93);
                    __builder3.AddAttribute(94, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 91 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(95, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(96, "Version 0.8b , Build 879");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(97, "\n                ");
                    __builder3.OpenComponent<MudBlazor.MudText>(98);
                    __builder3.AddAttribute(99, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 92 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                               Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(100, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(101, " Parent: Universe Master Simulation ");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(102, "\n                ");
                    __builder3.OpenComponent<MudBlazor.MudText>(103);
                    __builder3.AddAttribute(104, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 93 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                               Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(105, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(106, " Space: Milky Way Galaxy -> Sun -> Earth UTC  ");
                        __builder4.OpenComponent<HBHplayground.UI.Pages.ServerTime>(107);
                        __builder4.CloseComponent();
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(108, "\n                ");
                    __builder3.OpenComponent<MudBlazor.MudText>(109);
                    __builder3.AddAttribute(110, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 94 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                               Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(111, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(112, " Time: Mortal beings -> DNA Life Form -> Human -> HBH01    ");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(113, "\n           \n       \n        ");
                    __builder3.OpenComponent<HBHplayground.UI.Shared.StatefulComponentState>(114);
                    __builder3.AddAttribute(115, "Component", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Stl.Fusion.Blazor.StatefulComponentBase>(
#nullable restore
#line 98 "C:\dev\recentHostable\UI\Pages\Chat.razor"
                                            this

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.CloseComponent();
                }
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(116, "\n    ");
                __builder2.OpenComponent<MudBlazor.MudCardActions>(117);
                __builder2.CloseComponent();
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(118, "\n");
            __builder.OpenElement(119, "div");
            __builder.AddAttribute(120, "class", "example ");
            __builder.AddAttribute(121, "data-component", "example");
            __builder.AddAttribute(122, "data-active-class", "example--active");
            __builder.OpenElement(123, "div");
            __builder.AddAttribute(124, "class", "example__frame");
            __builder.OpenElement(125, "div");
            __builder.AddAttribute(126, "class", "space space--medium");
            __builder.OpenElement(127, "div");
            __builder.AddAttribute(128, "id", "options-start-at");
            __builder.AddAttribute(129, "class", "slider glide");
            __builder.OpenElement(130, "div");
            __builder.AddAttribute(131, "class", "slider__track glide__track");
            __builder.AddAttribute(132, "data-glide-el", "track");
            __builder.OpenElement(133, "ul");
            __builder.AddAttribute(134, "id", "ActiveFrames");
            __builder.AddAttribute(135, "class", "slider__slides glide__slides");
            __builder.OpenElement(136, "li");
            __builder.AddAttribute(137, "class", "slider__frame glide__slide");
            __builder.OpenComponent<MudBlazor.MudCard>(138);
            __builder.AddAttribute(139, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.OpenComponent<MudBlazor.MudCardMedia>(140);
                __builder2.AddAttribute(141, "Image", "https://source.unsplash.com/1600x900/?Aliens");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(142, "\n                                                                                             ");
                __builder2.OpenComponent<MudBlazor.MudCardContent>(143);
                __builder2.AddAttribute(144, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(145, @"<h1 class=""display-4"">
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
            __builder.AddMarkupContent(146, " \n                             ");
            __builder.OpenElement(147, "li");
            __builder.AddAttribute(148, "class", "slider__frame glide__slide");
            __builder.OpenComponent<HBHplayground.UI.Shared.LightSwitch>(149);
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.AddMarkupContent(150, " \n                             ");
            __builder.OpenElement(151, "li");
            __builder.AddAttribute(152, "class", "slider__frame glide__slide");
            __builder.OpenComponent<HBHplayground.UI.Pages.Home>(153);
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.AddMarkupContent(154, " \n                        ");
            __builder.OpenElement(155, "li");
            __builder.AddAttribute(156, "class", "slider__frame glide__slide");
            __builder.OpenComponent<HBHplayground.UI.Shared.AccumulatorCard>(157);
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.AddMarkupContent(158, " \n                   \n                        ");
            __builder.OpenElement(159, "li");
            __builder.AddAttribute(160, "class", "slider__frame glide__slide");
            __builder.OpenComponent<HBHplayground.UI.Shared.OnlineRoom>(161);
            __builder.CloseComponent();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(162, "\n                \n    ");
            __builder.AddMarkupContent(163, @"<div data-glide-el=""controls""><button class=""slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev"" data-glide-dir=""<""><svg xmlns=""http://www.w3.org/2000/svg"" width=""18"" height=""18"" viewBox=""0 0 24 24""><path d=""M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z""></path></svg></button>
                        
                                            <button class=""slider__arrow slider__arrow--next glide__arrow glide__arrow--next"" data-glide-dir="">""><svg xmlns=""http://www.w3.org/2000/svg"" width=""18"" height=""18"" viewBox=""0 0 24 24""><path d=""M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z""></path></svg></button></div>");
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.CloseElement();
            __builder.AddMarkupContent(164, "\n\n  ");
            __builder.AddMarkupContent(165, @"<style>
      
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
