import{a as I}from"./chunk-AIJCCE3W.js";import{a as x}from"./chunk-NTFVL22X.js";import{f as b,i as F}from"./chunk-P7FNWEFX.js";import{f as U}from"./chunk-M5ISHNPL.js";import{Ab as f,Jb as S,Rb as m,Sb as g,Tb as _,Va as u,Wb as C,Ya as n,Za as o,ha as d,mb as v,ob as a,tb as h,wb as p,xb as l,yb as s,zb as c}from"./chunk-JHN2C2EB.js";var y=(t,i)=>i.id;function E(t,i){if(t&1&&(s(0,"div",0),m(1),c()),t&2){let e=i.$implicit;a("routerLink","/user/"+e.id),n(),g("@"+e.username)}}function T(t,i){if(t&1&&(s(0,"div",0),f(1,"img",2),m(2),c()),t&2){let e=i.$implicit,r=S();a("routerLink","/video/"+e.id),n(),a("src",r.baseUrl+"/video/thumbnail/"+e.id,u),n(),_(" ",e.title,`
`)}}function L(t,i){t&1&&(s(0,"p",1),m(1,"Found nothing \uFF1E\uFE4F\uFF1C"),c())}var k=class t{constructor(i,e,r){this.route=i;this._userService=e;this._uploadService=r}searchString;namelist;videolist;baseUrl=U.baseUrl;ngOnInit(){this.route.paramMap.subscribe(i=>{this.searchString=i.get("searchString")?.trim(),this.searchString.length!=0&&this.search(this.searchString)})}search(i){this._userService.searchUser(i).subscribe({next:e=>{this.namelist=e},error:e=>{console.log(e)}}),this._uploadService.searchVideo(i).subscribe(e=>{this.videolist=e})}static \u0275fac=function(e){return new(e||t)(o(b),o(x),o(I))};static \u0275cmp=d({type:t,selectors:[["app-search"]],standalone:!0,features:[C],decls:5,vars:1,consts:[[3,"routerLink"],[1,"center"],[3,"src"]],template:function(e,r){e&1&&(p(0,E,2,2,"div",0,y),p(2,T,3,3,"div",0,y),v(4,L,2,0,"p",1)),e&2&&(l(r.namelist),n(2),l(r.videolist),n(2),h(r.namelist&&r.videolist&&r.namelist.length==0&&r.videolist.length==0?4:-1))},dependencies:[F]})};export{k as SearchComponent};
