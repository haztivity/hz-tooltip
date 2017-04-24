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
var HzTooltipResource = HzTooltipResource_1 = (function (_super) {
    __extends(HzTooltipResource, _super);
    /**
     * Recurso de tooltip para Haztivity.
     * @param _$
     * @param _EventEmitterFactory
     * @param _ScormService
     */
    function HzTooltipResource(_$, _EventEmitterFactory) {
        var _this = _super.call(this, _$, _EventEmitterFactory) || this;
        _this._isOpen = false;
        return _this;
    }
    HzTooltipResource.prototype.init = function (options, config) {
        this._options = options;
        this._config = config;
        if (!this._options.theme) {
            this._options.theme = "tooltipster-default";
        }
        this._$element.tooltipster(options);
        var tooltips = this._$element.data("tooltipsterNs");
        this._tooltipInstance = this._$element.data(tooltips[0]);
        this._assignEvents();
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
        this._tooltipInstance.off(HzTooltipResource_1.NAMESPACE).on("state." + HzTooltipResource_1.NAMESPACE, { instance: this }, this._onStateChange);
    };
    HzTooltipResource.prototype._onStateChange = function (e) {
        var instance = e.data.instance;
        switch (e.state) {
            case HzTooltipResource_1.STATES.stable:
                instance._isOpen = true;
                break;
            case HzTooltipResource_1.STATES.disappearing:
                if (instance.isOpen()) {
                    instance._markAsCompleted();
                }
                instance._isOpen = false;
                break;
        }
    };
    HzTooltipResource.prototype.destroy = function () {
        this._tooltipInstance.destroy();
        _super.prototype.destroy.call(this);
    };
    return HzTooltipResource;
}(core_1.ResourceController));
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
            core_1.EventEmitterFactory
        ]
    })
], HzTooltipResource);
exports.HzTooltipResource = HzTooltipResource;
var HzTooltipResource_1;
