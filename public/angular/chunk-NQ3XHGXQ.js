import{a as D}from"./chunk-E2MAJFW7.js";import{b as C}from"./chunk-P7IFIJU7.js";import{a as I}from"./chunk-ODIGNGHW.js";import{Aa as F,Ba as L,K as S,ia as w,ja as b,na as y,qa as M,ra as c,ta as E,ua as k,va as x,xa as f,za as B}from"./chunk-7CR22PK2.js";import"./chunk-CARY4E7O.js";import{f as _}from"./chunk-XYVST7VB.js";import"./chunk-HSCQ63AS.js";import{Ab as d,Hb as v,Rb as a,Wb as h,Ya as m,Za as l,ha as g,mb as s,ob as p,tb as u,yb as n,zb as t}from"./chunk-2VNXSJSZ.js";function q(o,r){o&1&&(n(0,"mat-error"),a(1," Username is required "),t())}function G(o,r){o&1&&(n(0,"mat-error"),a(1," Password is required "),t())}var N=class o{constructor(r,e,i){this._authenticate=r;this._matSnackBar=e;this._router=i}loginform=new x({username:new f("",[c.required]),password:new f("",[c.required])},{updateOn:"blur"});login(){if(this.loginform.get("username")?.value&&this.loginform.get("username")?.value?.trim()==""||this.loginform.get("password")?.value&&this.loginform.get("password")?.value=="")return;let r={username:this.loginform.get("username")?.value??"Default username",password:this.loginform.get("password")?.value??"Default password"};this._authenticate.login(r).subscribe({next:e=>{this._authenticate.setUserKey(e.message),this._matSnackBar.open("logged in","OK",{duration:2e3}),this._router.navigate(["/profile"])},error:e=>{this._matSnackBar.open(e.error.message,"OK",{duration:2e3})}})}static \u0275fac=function(e){return new(e||o)(l(C),l(I),l(_))};static \u0275cmp=g({type:o,selectors:[["app-login"]],standalone:!0,features:[h],decls:13,vars:4,consts:[[1,"login",3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","username"],["matInput","","type","password","formControlName","password"],["mat-flat-button","","color","primary",3,"click","disabled"]],template:function(e,i){e&1&&(n(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),a(3,"username"),t(),d(4,"input",2),s(5,q,2,0,"mat-error"),t(),n(6,"mat-form-field",1)(7,"mat-label"),a(8,"password"),t(),d(9,"input",3),s(10,G,2,0,"mat-error"),t(),n(11,"button",4),v("click",function(){return i.login()}),a(12,"Login"),t()()),e&2&&(p("formGroup",i.loginform),m(5),u(i.loginform.controls.username.hasError("required")?5:-1),m(5),u(i.loginform.controls.password.hasError("required")?10:-1),m(),p("disabled",i.loginform.invalid))},dependencies:[y,w,b,D,S,L,M,E,k,B,F],styles:[".login[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;width:80%;margin:auto}"]})};export{N as LoginComponent};
