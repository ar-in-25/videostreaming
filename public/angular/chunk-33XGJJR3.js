import{a as I}from"./chunk-4N6VOEHK.js";import{g as y}from"./chunk-XYVST7VB.js";import"./chunk-HSCQ63AS.js";import{Ab as o,Eb as v,Hb as c,Jb as w,Qb as b,Rb as i,Tb as f,Wb as A,Ya as _,Za as S,ha as C,ob as k,qa as d,ra as s,ub as x,wb as V,xb as g,yb as n,zb as r}from"./chunk-2VNXSJSZ.js";function E(a,t){if(a&1){let e=v();n(0,"a",4),i(1),r(),n(2,"p"),i(3),r(),n(4,"button",3),c("click",function(){let m=d(e).$implicit,p=w();return s(p.deletevideo(m.id))}),i(5,"delete"),r()}if(a&2){let e=t.$implicit;k("routerLink","/video/"+e.id),_(),f("video id : ",e.id,""),_(2),f("reports : ",e.reportCount,"")}}var h=class a{constructor(t){this._adminService=t}reportList;ngOnInit(){this.getReport()}deleteuser(t){this._adminService.deleteUserById(t).subscribe(e=>{alert("deleted")})}deletevideo(t){this._adminService.deleteVideoById(t).subscribe(e=>{alert("deleted")})}deletecomment(t){this._adminService.deleteCommentById(t).subscribe(e=>{alert("deleted")})}getReport(){this._adminService.getAllReportedVideos().subscribe(t=>{this.reportList=t})}static \u0275fac=function(e){return new(e||a)(S(I))};static \u0275cmp=C({type:a,selectors:[["app-admin"]],standalone:!0,features:[A],decls:24,vars:0,consts:[["userid",""],["videoid",""],["commentid",""],[3,"click"],[3,"routerLink"]],template:function(e,l){if(e&1){let m=v();i(0,`delete user by id
`),o(1,"input",null,0),n(3,"button",3),c("click",function(){d(m);let u=b(2);return s(l.deleteuser(u.value))}),i(4,"delete"),r(),o(5,"br"),i(6,` delete video by id
`),o(7,"input",null,1),n(9,"button",3),c("click",function(){d(m);let u=b(8);return s(l.deletevideo(u.value))}),i(10,"delete"),r(),o(11,"br"),i(12,` delete comment by id
`),o(13,"input",null,2),n(15,"button",3),c("click",function(){d(m);let u=b(14);return s(l.deletecomment(u.value))}),i(16,"delete"),r(),o(17,"br"),n(18,"h2"),i(19,"report list"),r(),n(20,"button",3),c("click",function(){return d(m),s(l.getReport())}),i(21,"refresh"),r(),V(22,E,6,3,null,null,x)}e&2&&(_(22),g(l.reportList))},dependencies:[y]})};export{h as AdminComponent};
