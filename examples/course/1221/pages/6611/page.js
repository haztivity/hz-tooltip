(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@haztivity/core/index", "./page.html!text", "../../../../../src/HzTooltip"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Davinchi. All Rights Reserved.
     */
    var index_1 = require("@haztivity/core/index");
    var template = require("./page.html!text");
    var HzTooltip_1 = require("../../../../../src/HzTooltip");
    exports.page = index_1.PageFactory.createPage({
        name: "6611",
        resources: [
            HzTooltip_1.HzTooltipResource
        ],
        template: template
    });
    exports.page.on(index_1.PageController.ON_RENDERING, null, function (eventObject, template, pageController) {
        console.log(pageController.options.name + " rendering");
    });
    exports.page.on(index_1.PageController.ON_RENDERED, null, function (eventObject, $page, pageController) {
        console.log(pageController.options.name + " rendered");
    });
    exports.page.on(index_1.PageController.ON_SHOW, null, function (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) {
        console.log(pageController.options.name + " show start");
    });
    exports.page.on(index_1.PageController.ON_SHOWN, null, function (eventObject, $page, $oldPage, oldPageRelativePosition, pageController) {
        console.log(pageController.options.name + " show end");
    });
    exports.page.on(index_1.PageController.ON_COMPLETE_CHANGE, null, function (eventObject, isCompleted, $page, pageController) {
        console.log(pageController.options.name + " complete change");
    });
    exports.page.on(index_1.PageController.ON_DESTROY, null, function (eventObject, $page, pageController) {
        console.log(pageController.options.name + " destroy");
    });
});
//# sourceMappingURL=page.js.map