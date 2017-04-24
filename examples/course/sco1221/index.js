"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
var core_1 = require("@haztivity/core");
var page_1 = require("./pages/6611/page");
var hz_navbar_1 = require("@haztivity/hz-navbar");
var sco_pug_1 = require("./sco.pug");
var css = require("./main.scss");
css;
var sco = core_1.ScoFactory.createSco({
    name: "1221",
    template: sco_pug_1.default,
    pages: [
        page_1.page
    ],
    components: [
        hz_navbar_1.HzNavbarComponent
    ]
});
//pageChangeStart
sco.on();
//pageChangeEnd
sco.on();
//pageComplete
sco.on();
//sco end
sco.on();
//error
sco.on();
sco.run();
//# sourceMappingURL=index.js.map