#pragma checksum "C:\dev\recentHostable\UI\Pages\Home.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "9ff09df1e3d009f3067e1ea9a1046e5b6c12b480"
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
    [Microsoft.AspNetCore.Components.RouteAttribute("/home")]
    public partial class Home : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenComponent<MudBlazor.MudPaper>(0);
            __builder.AddAttribute(1, "Elevation", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Int32>(
#nullable restore
#line 3 "C:\dev\recentHostable\UI\Pages\Home.razor"
                     3

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(2, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.OpenComponent<MudBlazor.MudContainer>(3);
                __builder2.AddAttribute(4, "Fixed", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Boolean>(
#nullable restore
#line 4 "C:\dev\recentHostable\UI\Pages\Home.razor"
                          true

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(5, "MaxWidth", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.MaxWidth>(
#nullable restore
#line 4 "C:\dev\recentHostable\UI\Pages\Home.razor"
                                          MaxWidth.Small

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(6, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.OpenComponent<MudBlazor.MudCard>(7);
                    __builder3.AddAttribute(8, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.OpenComponent<MudBlazor.MudCardMedia>(9);
                        __builder4.AddAttribute(10, "Image", "https://source.unsplash.com/1600x900/?Aliens");
                        __builder4.CloseComponent();
                        __builder4.AddMarkupContent(11, "\n            ");
                        __builder4.OpenComponent<MudBlazor.MudCardContent>(12);
                        __builder4.AddAttribute(13, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder5) => {
                            __builder5.AddMarkupContent(14, "<h1 class=\"display-4\">\n                    Welcome to Digital Playground\n                    <a href=\"https://digitalPlayground.ben-hassen.com\" target=\"_blank\"></a></h1>\n                    ");
                            __builder5.OpenComponent<HBHplayground.UI.Shared.NicePage>(15);
                            __builder5.CloseComponent();
                        }
                        ));
                        __builder4.CloseComponent();
                        __builder4.AddMarkupContent(16, "\n            ");
                        __builder4.OpenComponent<MudBlazor.MudCardActions>(17);
                        __builder4.AddAttribute(18, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder5) => {
                            __builder5.OpenComponent<HBHplayground.UI.Pages.ServerTime>(19);
                            __builder5.CloseComponent();
                        }
                        ));
                        __builder4.CloseComponent();
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(20, "\n\n\n        \n\n        ");
                    __builder3.AddMarkupContent(21, "<p><a href=\"https://docs.microsoft.com/en-us/aspnet/core/blazor/hosting-models?view=aspnetcore-5.0\">\n                Blazor Server\n                and Blazor WebAssembly\n            </a> modes.\n        </p>\n\n        ");
                    __builder3.AddMarkupContent(22, "<div class=\"alert alert-primary\" role=\"alert\"><b>Note:</b> you can also trigger actions in this sample via its\n            <a href=\"/swagger\" target=\"_blank\">web API</a>.\n        </div>\n\n        ");
                    __builder3.OpenElement(23, "p");
                    __builder3.AddMarkupContent(24, "\n            Choose the mode to use:<br>\n            ");
                    __builder3.OpenComponent<HBHplayground.UI.Shared.BlazorModeSwitch>(25);
                    __builder3.CloseComponent();
                    __builder3.CloseElement();
                    __builder3.AddMarkupContent(26, "\n        <hr class=\"my-4\">\n        ");
                    __builder3.AddMarkupContent(27, "<p class=\"lead\">Please share your feedback once you\'re done playing with it!</p>\n        ");
                    __builder3.AddMarkupContent(28, "<p class=\"lead\"><a class=\"btn btn-primary btn-lg\" href=\"https://forms.gle/TpGkmTZttukhDMRB6\" role=\"button\">Share your feedback</a></p>");
                }
                ));
                __builder2.CloseComponent();
            }
            ));
            __builder.CloseComponent();
        }
        #pragma warning restore 1998
    }
}
#pragma warning restore 1591
