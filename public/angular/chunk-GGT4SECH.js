import{c as Ke}from"./chunk-J5MVSHHK.js";import{a as Ge}from"./chunk-FPONKCYH.js";import{e as qe,f as He,g as Qe,k as Ye,l as Ue,p as $e,s as Xe}from"./chunk-MV3RMMSD.js";import{B as Pe,E as Te,I as De,J as Ae,N as ze,O as Ee,P as G,Q as Le,R as Re,Z as Fe,aa as Ve,k as J,ka as Be,la as te,ma as ie,s as we,t as ee,v as ke}from"./chunk-EFEVGCAY.js";import{$ as pe,Ab as k,B as L,C as U,Da as fe,Eb as P,Hb as f,I as ce,Ic as ae,Jb as d,Jc as ne,Kb as Me,L as de,Lb as Z,Mb as V,Mc as K,Nb as B,Nc as Ne,Ob as T,Oc as q,Pb as D,Pc as je,Qb as xe,Qc as We,Rb as M,Sb as E,Tb as N,U as $,V as X,Vb as Oe,W as I,Wb as j,Ya as s,Za as c,ca as A,fa as he,ha as R,ic as W,j as O,jb as F,l as se,lc as b,mb as C,mc as x,nb as y,ob as _,pa as me,qa as g,qb as be,ra as u,sa as w,sb as ve,t as Y,ta as ge,tb as S,va as ue,vb as ye,wb as Ce,x as le,xb as Se,ya as z,yb as r,yc as Ie,za as _e,zb as l}from"./chunk-B7KJVNON.js";var ut=["trigger"],_t=["panel"],ft=[[["mat-select-trigger"]],"*"],bt=["mat-select-trigger","*"];function vt(a,h){if(a&1&&(r(0,"span",4),M(1),l()),a&2){let e=d();s(),E(e.placeholder)}}function yt(a,h){a&1&&Z(0)}function Ct(a,h){if(a&1&&(r(0,"span",11),M(1),l()),a&2){let e=d(2);s(),E(e.triggerValue)}}function St(a,h){if(a&1&&(r(0,"span",5),C(1,yt,1,0)(2,Ct,2,1,"span",11),l()),a&2){let e=d();s(),S(e.customTrigger?1:2)}}function Mt(a,h){if(a&1){let e=P();r(0,"div",12,1),f("@transformPanel.done",function(i){g(e);let n=d();return u(n._panelDoneAnimatingStream.next(i.toState))})("keydown",function(i){g(e);let n=d();return u(n._handleKeydown(i))}),Z(2,1),l()}if(a&2){let e=d();ve("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",e._getPanelTheme(),""),_("ngClass",e.panelClass)("@transformPanel","showing"),y("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var xt={transformPanelWrap:ae("transformPanelWrap",[q("* => void",We("@transformPanel",[je()],{optional:!0}))]),transformPanel:ae("transformPanel",[Ne("void",K({opacity:0,transform:"scale(1, 0.8)"})),q("void => showing",ne("120ms cubic-bezier(0, 0, 0.2, 1)",K({opacity:1,transform:"scale(1, 1)"}))),q("* => void",ne("100ms linear",K({opacity:0})))])};var it=0,Ot=new A("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let a=he(Be);return()=>a.scrollStrategies.reposition()}});var It=new A("MAT_SELECT_CONFIG");var wt=new A("MatSelectTrigger"),oe=class{constructor(h,e){this.source=h,this.value=e}},at=(()=>{class a{_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,n=Le(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&n===1?i.scrollTop=0:i.scrollTop=Re(o.offsetTop,o.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new oe(this,e)}get focused(){return this._focused||this._panelOpen}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(Ye.required)??!1}set required(e){this._required=e,this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,n,o,v,p,nt,ot,re,rt,st,lt,H){this._viewportRuler=e,this._changeDetectorRef=t,this._elementRef=o,this._dir=v,this._parentFormField=ot,this.ngControl=re,this._liveAnnouncer=lt,this._defaultOptions=H,this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}],this._panelOpen=!1,this._compareWith=(m,Q)=>m===Q,this._uid=`mat-select-${it++}`,this._triggerAriaLabelledBy=null,this._destroy=new O,this.stateChanges=new O,this.disableAutomaticLabeling=!0,this._onChange=()=>{},this._onTouched=()=>{},this._valueId=`mat-select-value-${it++}`,this._panelDoneAnimatingStream=new O,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this.disabled=!1,this.disableRipple=!1,this.tabIndex=0,this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1,this._multiple=!1,this.disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto",this._initialized=new O,this.optionSelectionChanges=le(()=>{let m=this.options;return m?m.changes.pipe($(m),X(()=>L(...m.map(Q=>Q.onSelectionChange)))):this._initialized.pipe(X(()=>this.optionSelectionChanges))}),this.openedChange=new z,this._openedStream=this.openedChange.pipe(U(m=>m),Y(()=>{})),this._closedStream=this.openedChange.pipe(U(m=>!m),Y(()=>{})),this.selectionChange=new z,this.valueChange=new z,this._trackedModal=null,this._skipPredicate=m=>this.panelOpen?!1:m.disabled,this.ngControl&&(this.ngControl.valueAccessor=this),H?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=H.typeaheadDebounceInterval),this._errorStateTracker=new De(n,re,nt,p,this.stateChanges),this._scrollStrategyFactory=st,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(rt)||0,this.id=this.id}ngOnInit(){this._selectionModel=new Fe(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(de(),I(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen)),this._viewportRuler.change().pipe(I(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(I(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe($(null),I(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&ee(this._trackedModal,"aria-owns",t),we(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;ee(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,n=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&n&&!J(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let v=this.selected;o.onKeydown(e);let p=this.selected;p&&v!==p&&this._liveAnnouncer.announce(p.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,n=i===40||i===38,o=t.isTyping();if(n&&e.altKey)e.preventDefault(),this.close();else if(!o&&(i===13||i===32)&&t.activeItem&&!J(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let v=this.options.some(p=>!p.disabled&&!p.selected);this.options.forEach(p=>{p.disabled||(v?p.select():p.deselect())})}else{let v=t.activeItemIndex;t.onKeydown(e),this._multiple&&n&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==v&&t.activeItem._selectViaInteraction()}}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe(ce(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return i.value!=null&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof te?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new ke(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=L(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(I(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),L(...this.options.map(t=>t._stateChanges)).pipe(I(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId(),t=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static{this.\u0275fac=function(t){return new(t||a)(c(Ve),c(W),c(_e),c(Ae),c(fe),c(Te,8),c($e,8),c(Xe,8),c(He,8),c(Ue,10),ue("tabindex"),c(Ot),c(Pe),c(It,8))}}static{this.\u0275cmp=R({type:a,selectors:[["mat-select"]],contentQueries:function(t,i,n){if(t&1&&(V(n,wt,5),V(n,G,5),V(n,Ee,5)),t&2){let o;T(o=D())&&(i.customTrigger=o.first),T(o=D())&&(i.options=o),T(o=D())&&(i.optionGroups=o)}},viewQuery:function(t,i){if(t&1&&(B(ut,5),B(_t,5),B(ie,5)),t&2){let n;T(n=D())&&(i.trigger=n.first),T(n=D())&&(i.panel=n.first),T(n=D())&&(i._overlayDir=n.first)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:19,hostBindings:function(t,i){t&1&&f("keydown",function(o){return i._handleKeydown(o)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(y("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),be("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",b],disableRipple:[2,"disableRipple","disableRipple",b],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:x(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b],placeholder:"placeholder",required:[2,"required","required",b],multiple:[2,"multiple","multiple",b],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",b],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",x],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],standalone:!0,features:[Oe([{provide:qe,useExisting:a},{provide:ze,useExisting:a}]),F,me,j],ngContentSelectors:bt,decls:11,vars:8,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"backdropClick","attach","detach","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"keydown","ngClass"]],template:function(t,i){if(t&1){let n=P();Me(ft),r(0,"div",2,0),f("click",function(){return g(n),u(i.open())}),r(3,"div",3),C(4,vt,2,1,"span",4)(5,St,3,1,"span",5),l(),r(6,"div",6)(7,"div",7),w(),r(8,"svg",8),k(9,"path",9),l()()()(),C(10,Mt,3,9,"ng-template",10),f("backdropClick",function(){return g(n),u(i.close())})("attach",function(){return g(n),u(i._onAttached())})("detach",function(){return g(n),u(i.close())})}if(t&2){let n=xe(1);s(3),y("id",i._valueId),s(),S(i.empty?4:5),s(6),_("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||n)("cdkConnectedOverlayOpen",i.panelOpen)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)}},dependencies:[te,ie,Ie],styles:['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}div.mat-mdc-select-panel .mat-mdc-option{--mdc-list-list-item-container-color: var(--mat-select-panel-background-color)}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform)}'],encapsulation:2,data:{animation:[xt.transformPanel]},changeDetection:0})}}return a})();function kt(a,h){if(a&1&&(r(0,"mat-option",16),M(1),l()),a&2){let e=h.$implicit;_("value",e),s(),N(" ",e," ")}}function Pt(a,h){if(a&1){let e=P();r(0,"mat-form-field",13)(1,"mat-select",15),f("selectionChange",function(i){g(e);let n=d(2);return u(n._changePageSize(i.value))}),Ce(2,kt,2,2,"mat-option",16,ye),l()()}if(a&2){let e=d(2);_("appearance",e._formFieldAppearance)("color",e.color),s(),_("value",e.pageSize)("disabled",e.disabled)("aria-labelledby",e._pageSizeLabelId)("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),s(),Se(e._displayedPageSizeOptions)}}function Tt(a,h){if(a&1&&(r(0,"div",14),M(1),l()),a&2){let e=d(2);s(),E(e.pageSize)}}function Dt(a,h){if(a&1&&(r(0,"div",2)(1,"div",12),M(2),l(),C(3,Pt,4,7,"mat-form-field",13)(4,Tt,2,1,"div",14),l()),a&2){let e=d();s(),y("id",e._pageSizeLabelId),s(),N(" ",e._intl.itemsPerPageLabel," "),s(),S(e._displayedPageSizeOptions.length>1?3:-1),s(),S(e._displayedPageSizeOptions.length<=1?4:-1)}}function At(a,h){if(a&1){let e=P();r(0,"button",17),f("click",function(){g(e);let i=d();return u(i.firstPage())}),w(),r(1,"svg",7),k(2,"path",18),l()()}if(a&2){let e=d();_("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("matTooltipPosition","above")("disabled",e._previousButtonsDisabled()),y("aria-label",e._intl.firstPageLabel)}}function zt(a,h){if(a&1){let e=P();r(0,"button",19),f("click",function(){g(e);let i=d();return u(i.lastPage())}),w(),r(1,"svg",7),k(2,"path",20),l()()}if(a&2){let e=d();_("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("matTooltipPosition","above")("disabled",e._nextButtonsDisabled()),y("aria-label",e._intl.lastPageLabel)}}var Et=(()=>{class a{constructor(){this.changes=new O,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let n=e*t,o=n<i?Math.min(n+t,i):n+t;return`${n+1} \u2013 ${o} of ${i}`}}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275prov=pe({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();var Lt=50;var Rt=new A("MAT_PAGINATOR_DEFAULT_OPTIONS"),Ft=0,Wi=(()=>{class a{get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>x(t,0)),this._updateDisplayedPageSizeOptions()}constructor(e,t,i){if(this._intl=e,this._changeDetectorRef=t,this._pageSizeLabelId=`mat-paginator-page-size-label-${Ft++}`,this._isInitialized=!1,this._initializedStream=new se(1),this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this.hidePageSize=!1,this.showFirstLastButtons=!1,this.selectConfig={},this.disabled=!1,this.page=new z,this.initialized=this._initializedStream,this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:n,pageSizeOptions:o,hidePageSize:v,showFirstLastButtons:p}=i;n!=null&&(this._pageSize=n),o!=null&&(this._pageSizeOptions=o),v!=null&&(this.hidePageSize=v),p!=null&&(this.showFirstLastButtons=p)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;let e=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(e)}previousPage(){if(!this.hasPreviousPage())return;let e=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(e)}firstPage(){if(!this.hasPreviousPage())return;let e=this.pageIndex;this.pageIndex=0,this._emitPageEvent(e)}lastPage(){if(!this.hasNextPage())return;let e=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(e)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Lt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}static{this.\u0275fac=function(t){return new(t||a)(c(Et),c(W),c(Rt,8))}}static{this.\u0275cmp=R({type:a,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",x],length:[2,"length","length",x],pageSize:[2,"pageSize","pageSize",x],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",b],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",b],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",b]},outputs:{page:"page"},exportAs:["matPaginator"],standalone:!0,features:[F,j],decls:14,vars:14,consts:[[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],[1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"div",1),C(2,Dt,5,4,"div",2),r(3,"div",3)(4,"div",4),M(5),l(),C(6,At,3,5,"button",5),r(7,"button",6),f("click",function(){return i.previousPage()}),w(),r(8,"svg",7),k(9,"path",8),l()(),ge(),r(10,"button",9),f("click",function(){return i.nextPage()}),w(),r(11,"svg",7),k(12,"path",10),l()(),C(13,zt,3,5,"button",11),l()()()),t&2&&(s(2),S(i.hidePageSize?-1:2),s(3),N(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),s(),S(i.showFirstLastButtons?6:-1),s(),_("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),y("aria-label",i._intl.previousPageLabel),s(3),_("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),y("aria-label",i._intl.nextPageLabel),s(3),S(i.showFirstLastButtons?13:-1))},dependencies:[Qe,at,G,Ke,Ge],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color);background-color:var(--mat-paginator-container-background-color);font-family:var(--mat-paginator-container-text-font);line-height:var(--mat-paginator-container-text-line-height);font-size:var(--mat-paginator-container-text-size);font-weight:var(--mat-paginator-container-text-weight);letter-spacing:var(--mat-paginator-container-text-tracking);--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size)}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color)}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}"],encapsulation:2,changeDetection:0})}}return a})();export{Wi as a};
