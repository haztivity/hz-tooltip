/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {Resource,ResourceController,$,EventEmitterFactory} from "@haztivity/core";
import "tooltipster";
@Resource(
    {
        name:"HzTooltip",
        dependencies:[
            $,
            EventEmitterFactory
        ]
    }
)
export class HzTooltipResource extends ResourceController {
    public static readonly NAMESPACE = "hzTooltip";
    protected _tooltipInstance:any;
    protected _isOpen:boolean=false;
    public static readonly STATES = {
        appearing:'appearing',
        stable:'stable',
        disappearing:'disappearing',
        closed:'closed'
    };
    /**
     * Recurso de tooltip para Haztivity.
     * @param _$
     * @param _EventEmitterFactory
     * @param _ScormService
     */
    constructor(_$: JQueryStatic, _EventEmitterFactory) {
        super(_$, _EventEmitterFactory);
    }

    init(options, config?) {
        this._options = options;
        this._config = config;
        if(!this._options.theme){
            this._options.theme = "tooltipster-default";
        }
        this._$element.tooltipster(options);
        let tooltips = this._$element.data("tooltipsterNs");
        this._tooltipInstance = this._$element.data(tooltips[0]);
        this._assignEvents();
    }
    public getInstance(): any {
        return this._tooltipInstance;
    }
    public disable(){
        if(super.disable()){
            this._tooltipInstance.disable();
        }
    }
    public enable(){
        if(super.enable()){
            this._tooltipInstance.enable();
        }
    }
    public isOpen(){
        return this._isOpen;
    }
    protected _assignEvents(){
        this._tooltipInstance.off(HzTooltipResource.NAMESPACE).on( `state.${HzTooltipResource.NAMESPACE}`,{instance:this},this._onStateChange);
    }
    protected _onStateChange(e){
        let instance = e.data.instance;
        switch(e.state){
            case HzTooltipResource.STATES.stable:
                instance._isOpen = true;
                break;
            case HzTooltipResource.STATES.disappearing:
                if(instance.isOpen()){
                    instance._markAsCompleted();
                }
                instance._isOpen=false;
                break;
        }
    }
    public destroy(){
        this._tooltipInstance.destroy();
        super.destroy();
    }
}