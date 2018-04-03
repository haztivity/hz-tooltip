/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {Resource,ResourceController,$,EventEmitterFactory,DataOptions} from "@haztivity/core";
import "tooltipster";
@Resource(
    {
        name:"HzTooltip",
        dependencies:[
            $,
            EventEmitterFactory,
            DataOptions
        ]
    }
)
export class HzTooltipResource extends ResourceController {
    protected static readonly DEFAULTS = {
        theme:"tooltipster-default"
    };
    public static readonly NAMESPACE = "hzTooltip";
    protected _DataOptions:DataOptions;
    protected _tooltipInstance:any;
    protected _isOpen:boolean=false;
    protected _id;
    protected _namespace;
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
    constructor(_$: JQueryStatic, _EventEmitterFactory, _DataOptions) {
        super(_$, _EventEmitterFactory);
        this._DataOptions = _DataOptions;
    }

    init(options, config?) {
        this._config = config;
        this._id = new Date().getTime();
        this._namespace = HzTooltipResource.NAMESPACE + this._id;
        this._options = options;
        this.refresh();
    }
    public refresh(){
        if(this._tooltipInstance){
            this._tooltipInstance.destroy();        }
        let tooltipsterOptions = this._DataOptions.getDataOptions(this._$element, "tooltipster");
        this._options.tooltipster = this._$.extend(true,{},HzTooltipResource.DEFAULTS, tooltipsterOptions);
        this._options.tooltipster.functionInit = this._onTooltipsterInit.bind(this);
        this._$element.tooltipster(this._options.tooltipster);
        this._assignEvents();
    }
    protected _onTooltipsterInit(instance){
        this._tooltipInstance = instance;
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
        this._tooltipInstance.off(HzTooltipResource.NAMESPACE).on(`state.${this._namespace}`,this._onStateChange.bind(this));
    }
    protected _onStateChange(e){
        switch(e.state){
            case HzTooltipResource.STATES.stable:
                this._isOpen = true;
                if(this._options.completeOnOpen){
                    this._markAsCompleted();
                }
                break;
            case HzTooltipResource.STATES.disappearing:
                if(this.isOpen() && !this._options.completeOnOpen){
                    this._markAsCompleted();
                }
                this._isOpen=false;
                break;
        }
    }
    public destroy(){
        if(this._tooltipInstance) {
            this._tooltipInstance.destroy();
        }
        super.destroy();
    }
}