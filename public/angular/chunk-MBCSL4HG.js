import{a as M}from"./chunk-KWKRCODP.js";import"./chunk-5YL5SZBS.js";import{a as g,b as _}from"./chunk-WU4SFRB4.js";import{a as h}from"./chunk-ODIGNGHW.js";import{a as U}from"./chunk-JWES4FID.js";import{K as S,N as I}from"./chunk-7CR22PK2.js";import"./chunk-CARY4E7O.js";import{d as b}from"./chunk-XYVST7VB.js";import"./chunk-HSCQ63AS.js";import{Ab as u,Hb as l,Rb as s,Ub as v,Wb as f,Ya as n,Za as r,a as d,ha as m,ob as c,yb as o,zb as p}from"./chunk-2VNXSJSZ.js";var C=class a{constructor(e,t,i){this._userService=e;this.router=t;this._matSnackBar=i}uploadedVideoList;userId;ngOnInit(){this.router.paramMap.subscribe(e=>{this.userId=Number(e.get("UserId")),this.getVideos()})}getVideos(){this._userService.getUserVideos(this.userId).subscribe({next:e=>{this.uploadedVideoList=e.map(t=>d({},t))}})}subscribe(){this._userService.subscribeToUser({UserId:this.userId}).subscribe({next:e=>{this._matSnackBar.open("Subscribed","OK",{duration:2e3})},error:e=>{this._matSnackBar.open(e.error.message,"OK",{duration:2e3})}})}static \u0275fac=function(t){return new(t||a)(r(U),r(b),r(h))};static \u0275cmp=m({type:a,selectors:[["app-user"]],standalone:!0,features:[f],decls:7,vars:4,consts:[["mat-flat-button","","color","accent",3,"click"],[3,"videoList","sortAllowed"]],template:function(t,i){t&1&&(o(0,"h1"),s(1),o(2,"button",0),l("click",function(){return i.subscribe()}),s(3,"Subscribe "),o(4,"mat-icon"),s(5,"add"),p()()(),u(6,"app-videolist",1)),t&2&&(n(),v("","@","",i.uploadedVideoList?i.uploadedVideoList[0].User==null?null:i.uploadedVideoList[0].User.username:""," videos "),n(5),c("videoList",i.uploadedVideoList)("sortAllowed",!0))},dependencies:[M,I,S,_,g],styles:["h1[_ngcontent-%COMP%]{text-align:center;padding:8px}"]})};export{C as UserComponent};
