"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
var core_1 = require("@haztivity/core");
var page_pug_1 = require("./page.pug");
var HzTooltip_1 = require("../../../resources/hztooltip/HzTooltip");
exports.page = core_1.PageFactory.createPage({
    name: "6611",
    resources: [
        HzTooltip_1.HzTooltipResource
    ],
    template: page_pug_1.default
});
exports.page.on(core_1.PageController.ON_RENDERING, null, function (eventObject, template, pageController) {
    console.log(pageController.options.name + " rendering");
});
exports.page.on(core_1.PageController.ON_RENDERED, null, function (eventObject, $page, pageController) {
    console.log(pageController.options.name + " rendered");
});
exports.page.on(core_1.PageController.ON_SHOW, null, function (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) {
    console.log(pageController.options.name + " show start");
});
exports.page.on(core_1.PageController.ON_SHOWN, null, function (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) {
    console.log(pageController.options.name + " show end");
});
exports.page.on(core_1.PageController.ON_COMPLETE_CHANGE, null, function (eventObject, isCompleted, $page, pageController) {
    console.log(pageController.options.name + " complete change");
});
exports.page.on(core_1.PageController.ON_DESTROY, null, function (eventObject, $page, pageController) {
    console.log(pageController.options.name + " destroy");
});
//# sourceMappingURL=page.js.map