import{a as h}from"./chunk-EC5F7UQQ.js";import{a as g}from"./chunk-6CXDLTZ2.js";import{a as I}from"./chunk-66Y57P4H.js";import{a as S}from"./chunk-UCWA33QB.js";import"./chunk-FKLT2GNY.js";import{a as U}from"./chunk-E3A6DF3P.js";import"./chunk-ZKUKGSZU.js";import{d as b}from"./chunk-BXXMRR3V.js";import"./chunk-3LVO7KZI.js";import"./chunk-6XXA7HXI.js";import{$a as r,Ab as o,Bb as c,Cb as u,Jb as l,Tb as s,Wb as v,Yb as f,_a as n,a as d,ja as m,qb as p}from"./chunk-LCQMFSVS.js";var M=class a{constructor(e,t,i){this._userService=e;this.router=t;this._matSnackBar=i}uploadedVideoList;userId;ngOnInit(){this.router.paramMap.subscribe(e=>{this.userId=Number(e.get("UserId")),this.getVideos()})}getVideos(){this._userService.getUserVideos(this.userId).subscribe({next:e=>{this.uploadedVideoList=e.map(t=>d({},t))}})}subscribe(){this._userService.subscribeToUser({UserId:this.userId}).subscribe({next:e=>{this._matSnackBar.open("Subscribed","OK",{duration:2e3})},error:e=>{this._matSnackBar.open(e.error.message,"OK",{duration:2e3})}})}static \u0275fac=function(t){return new(t||a)(r(U),r(b),r(g))};static \u0275cmp=m({type:a,selectors:[["app-user"]],standalone:!0,features:[f],decls:7,vars:5,consts:[["mat-flat-button","","color","primary",3,"click"],[3,"videoList","sortAllowed","latestFirst"]],template:function(t,i){t&1&&(o(0,"h1"),s(1),o(2,"button",0),l("click",function(){return i.subscribe()}),s(3,"Subscribe "),o(4,"mat-icon"),s(5,"add"),c()()(),u(6,"app-videolist",1)),t&2&&(n(),v("","@","",i.uploadedVideoList?i.uploadedVideoList[0].User==null?null:i.uploadedVideoList[0].User.username:""," videos "),n(5),p("videoList",i.uploadedVideoList)("sortAllowed",!0)("latestFirst",!0))},dependencies:[S,I,h],styles:["h1[_ngcontent-%COMP%]{text-align:center;padding:8px}"]})};export{M as UserComponent};
