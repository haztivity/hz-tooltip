/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {PageFactory, PageRegister, PageController} from "@haztivity/core";
import template from "./page.pug";
import {HzTooltipResource} from "../../../resources/hztooltip/HzTooltip";
export let page: PageRegister = PageFactory.createPage(
    {
        name: "6611",
        resources: [
            HzTooltipResource
        ],
        template: template,
        autoSequence:false
    }
);
page.on(
    PageController.ON_RENDERING, null, (eventObject, template, pageController) => {
        console.log(`${pageController.options.name} rendering`);
    }
);
page.on(
    PageController.ON_RENDERED, null, (eventObject, $page: JQuery, pageController: PageController) => {
        console.log(`${pageController.options.name} rendered`);
        $page.find('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }
);
page.on(
    PageController.ON_SHOW, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        console.log(`${pageController.options.name} show start`);
    }
);
page.on(
    PageController.ON_SHOWN, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        console.log(`${pageController.options.name} show end`);
    }
);
page.on(
    PageController.ON_COMPLETE_CHANGE, null, (eventObject, isCompleted, $page, pageController) => {
        console.log(`${pageController.options.name} complete change`);
    }
);
page.on(
    PageController.ON_DESTROY, null, (eventObject, $page, pageController) => {
        console.log(`${pageController.options.name} destroy`);
    }
);
