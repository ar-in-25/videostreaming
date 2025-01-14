import{a as dt}from"./chunk-KOX7DDK5.js";import{$ as rt,W as E,X as it,Y as st,_ as T,a as tt,ca as ot,j as et,k as nt,u as at}from"./chunk-J5DZSQL2.js";import{c as ct,d as I,g,h as O,i as j}from"./chunk-6XXA7HXI.js";import{$ as F,$a as H,Ab as $,Da as q,Eb as W,Gb as K,Hb as X,Ib as Y,Jb as S,Nb as B,Ob as w,Pb as C,Rb as M,Tb as D,W as P,Wb as R,Ya as u,Za as o,a as h,ca as y,ea as l,fa as L,ha as x,ib as Q,ic as G,j as d,ja as k,mb as A,nb as U,qa as z,ra as N,tb as Z,uc as J,wa as p,yb as v,za as V,zb as f}from"./chunk-7CX7LTWM.js";function _t(a,m){if(a&1){let t=W();v(0,"div",1)(1,"button",2),X("click",function(){z(t);let n=S();return N(n.action())}),M(2),f()()}if(a&2){let t=S();u(2),D(" ",t.data.action," ")}}var pt=["label"];function ut(a,m){}var ft=Math.pow(2,31)-1,b=class{constructor(m,t){this._overlayRef=t,this._afterDismissed=new d,this._afterOpened=new d,this._onAction=new d,this._dismissedByAction=!1,this.containerInstance=m,m._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(m){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(m,ft))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},lt=new y("MatSnackBarData"),_=class{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}},bt=(()=>{class a{static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275dir=k({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0})}}return a})(),kt=(()=>{class a{static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275dir=k({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0})}}return a})(),vt=(()=>{class a{static{this.\u0275fac=function(e){return new(e||a)}}static{this.\u0275dir=k({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0})}}return a})(),gt=(()=>{class a{constructor(t,e){this.snackBarRef=t,this.data=e}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static{this.\u0275fac=function(e){return new(e||a)(o(b),o(lt))}}static{this.\u0275cmp=x({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[R],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(v(0,"div",0),M(1),f(),A(2,_t,3,1,"div",1)),e&2&&(u(),D(" ",n.data.message,`
`),u(),Z(n.hasAction?2:-1))},dependencies:[dt,bt,kt,vt],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}}return a})(),yt={snackBarState:ct("state",[O("void, hidden",g({transform:"scale(0.8)",opacity:0})),O("visible",g({transform:"scale(1)",opacity:1})),j("* => visible",I("150ms cubic-bezier(0, 0, 0.2, 1)")),j("* => void, * => hidden",I("75ms cubic-bezier(0.4, 0.0, 1, 1)",g({opacity:0})))])},xt=0,At=(()=>{class a extends st{constructor(t,e,n,i,s){super(),this._ngZone=t,this._elementRef=e,this._changeDetectorRef=n,this._platform=i,this.snackBarConfig=s,this._document=L(J),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new d,this._onExit=new d,this._onEnter=new d,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${xt++}`,this.attachDomPortal=r=>{this._assertNotAttached();let c=this._portalOutlet.attachDomPortal(r);return this._afterPortalAttached(),c},s.politeness==="assertive"&&!s.announcementMessage?this._live="assertive":s.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}onAnimationEnd(t){let{fromState:e,toState:n}=t;if((n==="void"&&e!=="void"||n==="hidden")&&this._completeExit(),n==="visible"){let i=this._onEnter;this._ngZone.run(()=>{i.next(),i.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(s=>t.classList.add(s)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,i="mdc-snackbar__label";n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let i=e[n],s=i.getAttribute("aria-owns");this._trackedModals.add(i),s?s.indexOf(t)===-1&&i.setAttribute("aria-owns",s+" "+t):i.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),e=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&e){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(n=document.activeElement),t.removeAttribute("aria-hidden"),e.appendChild(t),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static{this.\u0275fac=function(e){return new(e||a)(o(V),o(q),o(G),o(tt),o(_))}}static{this.\u0275cmp=x({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&(B(T,7),B(pt,7)),e&2){let i;w(i=C())&&(n._portalOutlet=i.first),w(i=C())&&(n._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(e,n){e&1&&Y("@state.done",function(s){return n.onAnimationEnd(s)}),e&2&&K("@state",n._animationState)},standalone:!0,features:[Q,R],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(v(0,"div",1)(1,"div",2,0)(3,"div",3),A(4,ut,0,0,"ng-template",4),f(),$(5,"div"),f()()),e&2&&(u(5),U("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[T],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[yt.snackBarState]}})}}return a})();function St(){return new _}var Bt=new y("mat-snack-bar-default-options",{providedIn:"root",factory:St}),ee=(()=>{class a{get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(t,e,n,i,s,r){this._overlay=t,this._live=e,this._injector=n,this._breakpointObserver=i,this._parentSnackBar=s,this._defaultConfig=r,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=gt,this.snackBarContainerComponent=At,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let i=h(h({},this._defaultConfig),n);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=p.create({parent:n||this._injector,providers:[{provide:_,useValue:e}]}),s=new E(this.snackBarContainerComponent,e.viewContainerRef,i),r=t.attach(s);return r.instance.snackBarConfig=e,r.instance}_attach(t,e){let n=h(h(h({},new _),this._defaultConfig),e),i=this._createOverlay(n),s=this._attachSnackBarContainer(i,n),r=new b(s,i);if(t instanceof H){let c=new it(t,null,{$implicit:n.data,snackBarRef:r});r.instance=s.attachTemplatePortal(c)}else{let c=this._createInjector(n,r),mt=new E(t,void 0,c),ht=s.attachComponentPortal(mt);r.instance=ht.instance}return this._breakpointObserver.observe(nt.HandsetPortrait).pipe(P(i.detachments())).subscribe(c=>{i.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),n.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration))}_createOverlay(t){let e=new rt;e.direction=t.direction;let n=this._overlay.position().global(),i=t.direction==="rtl",s=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!i||t.horizontalPosition==="end"&&i,r=!s&&t.horizontalPosition!=="center";return s?n.left("0"):r?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return p.create({parent:n||this._injector,providers:[{provide:b,useValue:e},{provide:lt,useValue:t.data}]})}static{this.\u0275fac=function(e){return new(e||a)(l(ot),l(at),l(p),l(et),l(a,12),l(Bt))}}static{this.\u0275prov=F({token:a,factory:a.\u0275fac,providedIn:"root"})}}return a})();export{ee as a};
