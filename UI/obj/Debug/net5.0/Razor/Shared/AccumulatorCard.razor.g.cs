#pragma checksum "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "1be869caf6356e1b07f2ac163a44eee20900a926"
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
#nullable restore
#line 1 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
using System.Threading;

#line default
#line hidden
#nullable disable
    public partial class AccumulatorCard : LiveComponentBase<double, AccumulatorCard.LocalsModel>
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
#nullable restore
#line 5 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
  
    var accumulator = State.LastValue;
    var locals = Locals.Value;
    var error = State.Error;

#line default
#line hidden
#nullable disable
            __builder.OpenComponent<MudBlazor.MudCard>(0);
            __builder.AddAttribute(1, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.OpenComponent<MudBlazor.MudCardMedia>(2);
                __builder2.AddAttribute(3, "Image", "https://source.unsplash.com/1600x900/?earth");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(4, "\n    ");
                __builder2.OpenComponent<MudBlazor.MudCardContent>(5);
                __builder2.AddAttribute(6, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.AddMarkupContent(7, "<h1 class=\"display-4\">\n                        Live Component\n                        <a href=\"https://digitalPlayground.ben-hassen.com\" target=\"_blank\"></a></h1>\n  \n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(8);
                    __builder3.AddAttribute(9, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 22 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(10, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(11, "All active users share this component");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(12, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(13);
                    __builder3.AddAttribute(14, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 23 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                       Typo.body2

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(15, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(16, "Try pressing the accumulate button on two tabs and observe the accumulator value");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(17, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudText>(18);
                    __builder3.AddAttribute(19, "Typo", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Typo>(
#nullable restore
#line 24 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                       Typo.h5

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(20, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(21, 
#nullable restore
#line 24 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                                 accumulator

#line default
#line hidden
#nullable disable
                        );
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(22, "\n        ");
                    __builder3.OpenComponent<HBHplayground.UI.Shared.StatefulComponentState>(23);
                    __builder3.AddAttribute(24, "Component", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Stl.Fusion.Blazor.StatefulComponentBase>(
#nullable restore
#line 25 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                                            this

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.CloseComponent();
                }
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(25, "\n    ");
                __builder2.OpenComponent<MudBlazor.MudCardActions>(26);
                __builder2.AddAttribute(27, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder3) => {
                    __builder3.OpenComponent<MudBlazor.MudButton>(28);
                    __builder3.AddAttribute(29, "Variant", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Variant>(
#nullable restore
#line 28 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                            Variant.Text

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(30, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 28 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                                                    ResetAsync

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(31, "Color", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Color>(
#nullable restore
#line 28 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                                                                       Color.Primary

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(32, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(33, "Reset");
                    }
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(34, "\n        ");
                    __builder3.OpenComponent<MudBlazor.MudButton>(35);
                    __builder3.AddAttribute(36, "Variant", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Variant>(
#nullable restore
#line 29 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                            Variant.Text

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(37, "onclick", Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Web.MouseEventArgs>(this, 
#nullable restore
#line 29 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                                                    AccumulateAsync

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(38, "Color", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<MudBlazor.Color>(
#nullable restore
#line 29 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
                                                                            Color.Primary

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.AddAttribute(39, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder4) => {
                        __builder4.AddContent(40, "Accumulate");
                    }
                    ));
                    __builder3.CloseComponent();
                }
                ));
                __builder2.CloseComponent();
            }
            ));
            __builder.CloseComponent();
        }
        #pragma warning restore 1998
#nullable restore
#line 97 "C:\dev\recentHostable\UI\Shared\AccumulatorCard.razor"
       
    public class LocalsModel
    {
        public double Value { get; set; } = 1;
    }

    [Parameter]
    public string CssClass { get; set; } = "card";
    [Parameter]
    public TimeSpan UpdateDelay { get; set; } = TimeSpan.FromSeconds(1);

    protected override void OnInitialized()
    {
        StateHasChangedTriggers = StateEventKind.All;
        base.OnInitialized();
    }

    protected override void OnParametersSet()
    {
        if (State?.UpdateDelayer is UpdateDelayer updateDelayer)
            updateDelayer.Delay = UpdateDelay;
    }

    protected override void ConfigureState(LiveState<double>.Options options)
        => options.WithUpdateDelayer(UpdateDelay);

    protected override Task<double> ComputeStateAsync(CancellationToken cancellationToken)
        => SumService.GetAccumulatorAsync(cancellationToken);

    // Action handlers

    private async Task ResetAsync()
    {
        await SumService.ResetAsync();
        State.CancelUpdateDelay();
    }

    private async Task AccumulateAsync()
    {
        await SumService.AccumulateAsync(Locals.Value.Value);
        State.CancelUpdateDelay();
    }

#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private ISumService SumService { get; set; }
    }
}
#pragma warning restore 1591
