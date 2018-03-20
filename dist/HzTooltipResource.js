"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
var core_1 = require("@haztivity/core");
require("tooltipster");
var HzTooltipResource = /** @class */ (function (_super) {
    __extends(HzTooltipResource, _super);
    /**
     * Recurso de tooltip para Haztivity.
     * @param _$
     * @param _EventEmitterFactory
     * @param _ScormService
     */
    function HzTooltipResource(_$, _EventEmitterFactory, _DataOptions) {
        var _this = _super.call(this, _$, _EventEmitterFactory) || this;
        _this._isOpen = false;
        _this._DataOptions = _DataOptions;
        return _this;
    }
    HzTooltipResource_1 = HzTooltipResource;
    HzTooltipResource.prototype.init = function (options, config) {
        this._config = config;
        this._id = new Date().getTime();
        this._namespace = HzTooltipResource_1.NAMESPACE + this._id;
        this._options = options;
        this.refresh();
    };
    HzTooltipResource.prototype.refresh = function () {
        if (this._tooltipInstance) {
            this._tooltipInstance.destroy();
        }
        var tooltipsterOptions = this._DataOptions.getDataOptions(this._$element, "tooltipster");
        this._options.tooltipster = this._$.extend(true, {}, HzTooltipResource_1.DEFAULTS, tooltipsterOptions);
        this._options.tooltipster.functionInit = this._onTooltipsterInit.bind(this);
        this._$element.tooltipster(this._options.tooltipster);
        this._assignEvents();
    };
    HzTooltipResource.prototype._onTooltipsterInit = function (instance) {
        this._tooltipInstance = instance;
    };
    HzTooltipResource.prototype.getInstance = function () {
        return this._tooltipInstance;
    };
    HzTooltipResource.prototype.disable = function () {
        if (_super.prototype.disable.call(this)) {
            this._tooltipInstance.disable();
        }
    };
    HzTooltipResource.prototype.enable = function () {
        if (_super.prototype.enable.call(this)) {
            this._tooltipInstance.enable();
        }
    };
    HzTooltipResource.prototype.isOpen = function () {
        return this._isOpen;
    };
    HzTooltipResource.prototype._assignEvents = function () {
        this._tooltipInstance.off(HzTooltipResource_1.NAMESPACE).on("state." + this._namespace, this._onStateChange.bind(this));
    };
    HzTooltipResource.prototype._onStateChange = function (e) {
        switch (e.state) {
            case HzTooltipResource_1.STATES.stable:
                this._isOpen = true;
                break;
            case HzTooltipResource_1.STATES.disappearing:
                if (this.isOpen()) {
                    this._markAsCompleted();
                }
                this._isOpen = false;
                break;
        }
    };
    HzTooltipResource.prototype.destroy = function () {
        if (this._tooltipInstance) {
            this._tooltipInstance.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    HzTooltipResource.DEFAULTS = {
        theme: "tooltipster-default"
    };
    HzTooltipResource.NAMESPACE = "hzTooltip";
    HzTooltipResource.STATES = {
        appearing: 'appearing',
        stable: 'stable',
        disappearing: 'disappearing',
        closed: 'closed'
    };
    HzTooltipResource = HzTooltipResource_1 = __decorate([
        core_1.Resource({
            name: "HzTooltip",
            dependencies: [
                core_1.$,
                core_1.EventEmitterFactory,
                core_1.DataOptions
            ]
        })
    ], HzTooltipResource);
    return HzTooltipResource;
    var HzTooltipResource_1;
}(core_1.ResourceController));
exports.HzTooltipResource = HzTooltipResource;
//# sourceMappingURL=HzTooltipResource.js.map