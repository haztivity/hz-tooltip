/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import * as Prism "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jade";
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
    PageController.ON_SHOW, null, (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) => {
        Prism.highlightAll(false);
    }
);