# hz-tooltip
hz-tooltip is an haztivity resource to create tooltips.\
hz-tooltip uses [tooltipster](http://iamceege.github.io/tooltipster/) under the hood.

# Dependencies
- JQuery
- tooltipster
- @haztivity/core

## Simple use
1. Import @haztivity/hz-tooltip
2. Add HzTooltipResource to the page
3. Set data-hz-resource to the trigger element (the element that has the tooltip)
4. Set the title attribute with the text for the tooltip

### Ts
```typescript
import {PageFactory, Page, PageController, PageRegister} from "@haztivity/core";
import template from "./page.pug";
import {HzTooltipResource} from "@haztivity/hz-tooltip";
export let page: PageRegister = PageFactory.createPage(
    {
        name: "myPage",
        resources: [
            HzTooltipResource
        ],
        template: template
    }
);
```
### Pug
```pug
button(data-hz-resource="HzTooltip" title="Tooltip content!") Hover me!
```
or
### HTML
```html
<button data-hz-resource="HzTooltip" title="Tooltip content!">
    Hover me!
</button>
```
## Use templates
For more complex tooltips tooltipster allows to include html in the tooltip using templates.\
To specify a template for a tooltip, use the ```data-tooltip-content``` attribute with a valid jquery selector.\
For more info visit [tooltipster page](http://iamceege.github.io/tooltipster/#html)
### Pug
```pug
button(data-hz-resource="HzTooltip" data-tooltip-content="#tooltip-template") HTML Content
    div#tooltip-template.tooltip-template
        p
            img(src="./pages/6611/assets/images/rocket.png")
```
### HTML
```html
<button data-hz-resource="HzTooltip" data-tooltip-content="#tooltip-template"> HTML Content </button>
<div class="tooltip-template" id="tooltip-template">
    <p>
        <img src="./pages/6611/assets/images/rocket.png"/>
    </p>
</div>
```
### SCSS
```scss
//Hide the template where is not inside the tooltip
.tooltip-template{
    display:none;
}
.tooltipster-box{
    .tooltip-template{
        display: initial;
    }
}
```
or
### CSS
```css
/*Hide the template where is not inside the tooltip*/
.tooltip-template{
    display:none;
}
.tooltipster-box .tooltip-template{
    display: initial;
}
```
## Options
All the options of tooltipster excepts functions could be specified by attributes using:

```pug
data-opt-tooltipster-[option]=[value]
```
If the option have multiple words, use dashes, for example ```animationDuration``` will be ```animation-duration```

### Examples
#### Pug
```pug
// Delay
button(data-hz-resource="HzTooltip" 
        title="Tooltip content!" 
        data-opt-tooltipster-delay="2000") Delay 2s
// Trigger click
button(data-hz-resource="HzTooltip" 
        title="Tooltip content!" 
        data-opt-tooltipster-trigger="click") Click me!
// Multiple options
button(data-hz-resource="HzTooltip" 
        title="Tooltip content!"
        data-opt-tooltipster-animation-duration="1000" 
        data-opt-tooltipster-animation="slide") Multiple options
```
or
#### HTML
```html
    <!-- Delay option -->
    <button data-hz-resource="HzTooltip" title="Tooltip content!" data-opt-hz-tooltip-delay="2000"> Delay 2s </button>

    <!-- Trigger option -->
    <button data-hz-resource="HzTooltip" title="Tooltip content!" data-opt-hz-tooltip-trigger="click"> Click me! </button>

    <!-- Multiple options -->
    <button data-hz-resource="HzTooltip"
            title="Tooltip content!"
            data-opt-hz-tooltip-animation-duration="1000"
            data-opt-hz-tooltip-animation="slide">
        Multiple options
    </button>
```
For more info see [tooltipster options](https://iamceege.github.io/tooltipster/#options)
