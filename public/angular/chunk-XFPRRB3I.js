import{S as q,W as K,a as U,c as B,ca as m,e as Z,f as y,g as b,o as $,w as Q,y as W}from"./chunk-NF5FTTGO.js";import{$a as n,Ab as g,Ac as G,Ba as E,Bb as S,Fa as d,Gb as k,J as w,Jb as v,La as A,Pb as N,Qb as V,Rb as z,Tb as Y,Ub as H,Y as l,Yb as j,_a as R,a as h,ea as f,gb as O,ha as I,j as _,ja as x,kc as X,la as C,qb as M,rb as L,sa as D,sb as u,ta as P,wc as F}from"./chunk-LCQMFSVS.js";var nt=["tooltip"],rt=20;var at=new f("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let r=I(m);return()=>r.scrollStrategies.reposition({scrollThrottle:rt})}});function lt(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}var ct=new f("mat-tooltip-default-options",{providedIn:"root",factory:lt});var J="tooltip-panel",tt=B({passive:!0}),ht=8,dt=8,pt=24,mt=200,Xt=(()=>{class r{get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=y(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){this._disabled=y(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=b(t)}get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=b(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}constructor(t,i,e,o,s,c,p,it,et,T,a,ot){this._overlay=t,this._elementRef=i,this._scrollDispatcher=e,this._viewContainerRef=o,this._ngZone=s,this._platform=c,this._ariaDescriber=p,this._focusMonitor=it,this._dir=T,this._defaultOptions=a,this._position="below",this._positionAtOrigin=!1,this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._tooltipComponent=_t,this._viewportMargin=8,this._cssClassPrefix="mat-mdc",this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new _,this._scrollStrategy=et,this._document=ot,a&&(this._showDelay=a.showDelay,this._hideDelay=a.hideDelay,a.position&&(this.position=a.position),a.positionAtOrigin&&(this.positionAtOrigin=a.positionAtOrigin),a.touchGestures&&(this.touchGestures=a.touchGestures)),T.change.pipe(l(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)}),this._viewportMargin=ht}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(l(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([i,e])=>{t.removeEventListener(i,e,tt)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let e=this._createOverlay(i);this._detach(),this._portal=this._portal||new K(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=e.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(l(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&o._origin instanceof d)return this._overlayRef;this._detach()}let i=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),e=this._overlay.position().flexibleConnectedTo(this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i);return e.positionChanges.pipe(l(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:e,panelClass:`${this._cssClassPrefix}-${J}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(l(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(l(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(l(this._destroyed)).subscribe(o=>{this._isTooltipVisible()&&o.keyCode===27&&!Z(o)&&(o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let i=t.getConfig().positionStrategy,e=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(h(h({},e.main),o.main)),this._addOffset(h(h({},e.fallback),o.fallback))])}_addOffset(t){let i=dt,e=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-i:t.originY==="bottom"?t.offsetY=i:t.originX==="start"?t.offsetX=e?-i:i:t.originX==="end"&&(t.offsetX=e?i:-i),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",i=this.position,e;i=="above"||i=="below"?e={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&t||i=="right"&&!t?e={originX:"start",originY:"center"}:(i=="after"||i=="right"&&t||i=="left"&&!t)&&(e={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(e.originX,e.originY);return{main:e,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",i=this.position,e;i=="above"?e={overlayX:"center",overlayY:"bottom"}:i=="below"?e={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&t||i=="right"&&!t?e={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&t||i=="left"&&!t)&&(e={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(e.overlayX,e.overlayY);return{main:e,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe(w(1),l(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:i}}_updateCurrentPositionClass(t){let{overlayY:i,originX:e,originY:o}=t,s;if(i==="center"?this._dir&&this._dir.value==="rtl"?s=e==="end"?"left":"right":s=e==="start"?"left":"right":s=i==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let c=this._overlayRef;if(c){let p=`${this._cssClassPrefix}-${J}-`;c.removePanelClass(p+this._currentPosition),c.addPanelClass(p+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let i;t.x!==void 0&&t.y!==void 0&&(i=t),this.show(void 0,i)}]):this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",t=>{let i=t.targetTouches?.[0],e=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>this.show(void 0,e),this._defaultOptions.touchLongPressShowDelay??o)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;let t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",i=>{let e=i.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}],["wheel",i=>this._wheelListener(i)]);else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let i=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",i],["touchcancel",i])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([i,e])=>{this._elementRef.nativeElement.addEventListener(i,e,tt)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){let i=this._document.elementFromPoint(t.clientX,t.clientY),e=this._elementRef.nativeElement;i!==e&&!e.contains(i)&&this.hide()}}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let i=this._elementRef.nativeElement,e=i.style;(t==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(e.userSelect=e.msUserSelect=e.webkitUserSelect=e.MozUserSelect="none"),(t==="on"||!i.draggable)&&(e.webkitUserDrag="none"),e.touchAction="none",e.webkitTapHighlightColor="transparent"}}static{this.\u0275fac=function(i){return new(i||r)(n(m),n(d),n(q),n(O),n(E),n(U),n($),n(Q),n(at),n(W),n(ct,8),n(F))}}static{this.\u0275dir=C({type:r,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,e){i&2&&u("mat-mdc-tooltip-disabled",e.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"],standalone:!0})}}return r})(),_t=(()=>{class r{constructor(t,i,e){this._changeDetectorRef=t,this._elementRef=i,this._isMultiline=!1,this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new _,this._showAnimation="mat-mdc-tooltip-show",this._hideAnimation="mat-mdc-tooltip-hide",this._animationsDisabled=e==="NoopAnimations"}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>pt&&t.width>=mt}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let i=this._tooltip.nativeElement,e=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(t?o:e),i.classList.add(t?e:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(i);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static{this.\u0275fac=function(i){return new(i||r)(n(X),n(d),n(A,8))}}static{this.\u0275cmp=x({type:r,selectors:[["mat-tooltip-component"]],viewQuery:function(i,e){if(i&1&&N(nt,7),i&2){let o;V(o=z())&&(e._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(i,e){i&1&&v("mouseleave",function(s){return e._handleMouseLeave(s)}),i&2&&L("zoom",e.isVisible()?1:null)},standalone:!0,features:[j],decls:4,vars:4,consts:[["tooltip",""],[1,"mdc-tooltip","mdc-tooltip--shown","mat-mdc-tooltip",3,"animationend","ngClass"],[1,"mdc-tooltip__surface","mdc-tooltip__surface-animation"]],template:function(i,e){if(i&1){let o=k();g(0,"div",1,0),v("animationend",function(c){return D(o),P(e._handleAnimationEnd(c))}),g(2,"div",2),Y(3),S()()}i&2&&(u("mdc-tooltip--multiline",e._isMultiline),M("ngClass",e.tooltipClass),R(3),H(e.message))},dependencies:[G],styles:['.mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - 2*8px);margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - 2*8px);align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mat-mdc-tooltip .mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color)}.mat-mdc-tooltip .mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__caret-surface-top,.mat-mdc-tooltip .mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color)}.mat-mdc-tooltip .mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font);line-height:var(--mdc-plain-tooltip-supporting-text-line-height);font-size:var(--mdc-plain-tooltip-supporting-text-size);font-weight:var(--mdc-plain-tooltip-supporting-text-weight);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],encapsulation:2,changeDetection:0})}}return r})();export{Xt as a};
