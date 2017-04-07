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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJIelRvb2x0aXBSZXNvdXJjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IERhdmluY2hpLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICovXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgRGF2aW5jaGkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKi9cbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGhhenRpdml0eS9jb3JlXCIpO1xucmVxdWlyZShcInRvb2x0aXBzdGVyXCIpO1xudmFyIEh6VG9vbHRpcFJlc291cmNlID0gSHpUb29sdGlwUmVzb3VyY2VfMSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEh6VG9vbHRpcFJlc291cmNlLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIFJlY3Vyc28gZGUgdG9vbHRpcCBwYXJhIEhhenRpdml0eS5cbiAgICAgKiBAcGFyYW0gXyRcbiAgICAgKiBAcGFyYW0gX0V2ZW50RW1pdHRlckZhY3RvcnlcbiAgICAgKiBAcGFyYW0gX1Njb3JtU2VydmljZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEh6VG9vbHRpcFJlc291cmNlKF8kLCBfRXZlbnRFbWl0dGVyRmFjdG9yeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfJCwgX0V2ZW50RW1pdHRlckZhY3RvcnkpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBIelRvb2x0aXBSZXNvdXJjZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgaWYgKCF0aGlzLl9vcHRpb25zLnRoZW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zLnRoZW1lID0gXCJ0b29sdGlwc3Rlci1kZWZhdWx0XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fJGVsZW1lbnQudG9vbHRpcHN0ZXIob3B0aW9ucyk7XG4gICAgICAgIHZhciB0b29sdGlwcyA9IHRoaXMuXyRlbGVtZW50LmRhdGEoXCJ0b29sdGlwc3Rlck5zXCIpO1xuICAgICAgICB0aGlzLl90b29sdGlwSW5zdGFuY2UgPSB0aGlzLl8kZWxlbWVudC5kYXRhKHRvb2x0aXBzWzBdKTtcbiAgICAgICAgdGhpcy5fYXNzaWduRXZlbnRzKCk7XG4gICAgfTtcbiAgICBIelRvb2x0aXBSZXNvdXJjZS5wcm90b3R5cGUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b29sdGlwSW5zdGFuY2U7XG4gICAgfTtcbiAgICBIelRvb2x0aXBSZXNvdXJjZS5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF9zdXBlci5wcm90b3R5cGUuZGlzYWJsZS5jYWxsKHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLl90b29sdGlwSW5zdGFuY2UuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIelRvb2x0aXBSZXNvdXJjZS5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3N1cGVyLnByb3RvdHlwZS5lbmFibGUuY2FsbCh0aGlzKSkge1xuICAgICAgICAgICAgdGhpcy5fdG9vbHRpcEluc3RhbmNlLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIelRvb2x0aXBSZXNvdXJjZS5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH07XG4gICAgSHpUb29sdGlwUmVzb3VyY2UucHJvdG90eXBlLl9hc3NpZ25FdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBJbnN0YW5jZS5vZmYoSHpUb29sdGlwUmVzb3VyY2VfMS5OQU1FU1BBQ0UpLm9uKFwic3RhdGUuXCIgKyBIelRvb2x0aXBSZXNvdXJjZV8xLk5BTUVTUEFDRSwgeyBpbnN0YW5jZTogdGhpcyB9LCB0aGlzLl9vblN0YXRlQ2hhbmdlKTtcbiAgICB9O1xuICAgIEh6VG9vbHRpcFJlc291cmNlLnByb3RvdHlwZS5fb25TdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGUuZGF0YS5pbnN0YW5jZTtcbiAgICAgICAgc3dpdGNoIChlLnN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIEh6VG9vbHRpcFJlc291cmNlXzEuU1RBVEVTLnN0YWJsZTpcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5faXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSHpUb29sdGlwUmVzb3VyY2VfMS5TVEFURVMuZGlzYXBwZWFyaW5nOlxuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5pc09wZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5fbWFya0FzQ29tcGxldGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgSHpUb29sdGlwUmVzb3VyY2UucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXBJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEh6VG9vbHRpcFJlc291cmNlO1xufShjb3JlXzEuUmVzb3VyY2VDb250cm9sbGVyKSk7XG5IelRvb2x0aXBSZXNvdXJjZS5OQU1FU1BBQ0UgPSBcImh6VG9vbHRpcFwiO1xuSHpUb29sdGlwUmVzb3VyY2UuU1RBVEVTID0ge1xuICAgIGFwcGVhcmluZzogJ2FwcGVhcmluZycsXG4gICAgc3RhYmxlOiAnc3RhYmxlJyxcbiAgICBkaXNhcHBlYXJpbmc6ICdkaXNhcHBlYXJpbmcnLFxuICAgIGNsb3NlZDogJ2Nsb3NlZCdcbn07XG5IelRvb2x0aXBSZXNvdXJjZSA9IEh6VG9vbHRpcFJlc291cmNlXzEgPSBfX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuUmVzb3VyY2Uoe1xuICAgICAgICBuYW1lOiBcIkh6VG9vbHRpcFwiLFxuICAgICAgICBkZXBlbmRlbmNpZXM6IFtcbiAgICAgICAgICAgIGNvcmVfMS4kLFxuICAgICAgICAgICAgY29yZV8xLkV2ZW50RW1pdHRlckZhY3RvcnlcbiAgICAgICAgXVxuICAgIH0pXG5dLCBIelRvb2x0aXBSZXNvdXJjZSk7XG5leHBvcnRzLkh6VG9vbHRpcFJlc291cmNlID0gSHpUb29sdGlwUmVzb3VyY2U7XG52YXIgSHpUb29sdGlwUmVzb3VyY2VfMTtcbiJdLCJmaWxlIjoiSHpUb29sdGlwUmVzb3VyY2UuanMifQ==
