import{a as D}from"./chunk-AEARE6NH.js";import{a as C}from"./chunk-QEWX6LTG.js";import{b,c as d,e as w,f as y,g as M,i as f,k,l as E,m as x,n as B,o as F,s as L}from"./chunk-MIGMUXZG.js";import{a as I}from"./chunk-WY7RGWPX.js";import"./chunk-T56C2IX3.js";import"./chunk-CARY4E7O.js";import{R as S}from"./chunk-IA6APQGV.js";import{f as h}from"./chunk-RUPW4M7W.js";import"./chunk-3TYT3QDP.js";import{Gb as v,Qb as a,Vb as _,Xa as m,Ya as l,ha as g,lb as s,nb as p,sb as u,xb as n,yb as t,zb as c}from"./chunk-7QAWOP5W.js";function q(o,r){o&1&&(n(0,"mat-error"),a(1," Username is required "),t())}function G(o,r){o&1&&(n(0,"mat-error"),a(1," Password is required "),t())}var N=class o{constructor(r,e,i){this._authenticate=r;this._matSnackBar=e;this._router=i}loginform=new M({username:new f("",[d.required]),password:new f("",[d.required])},{updateOn:"blur"});login(){let r={username:this.loginform.get("username")?.value??"Default username",password:this.loginform.get("password")?.value??"Default password"};this._authenticate.login(r).subscribe({next:e=>{this._authenticate.user_key.set(e.message),this._matSnackBar.open("logged in","OK",{duration:2e3}),this._router.navigate(["/profile"])},error:e=>{this._matSnackBar.open(e.error.message,"OK",{duration:2e3})}})}static \u0275fac=function(e){return new(e||o)(l(C),l(I),l(h))};static \u0275cmp=g({type:o,selectors:[["app-login"]],standalone:!0,features:[_],decls:13,vars:4,consts:[[1,"login",3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","username"],["matInput","","type","password","formControlName","password"],["mat-flat-button","","color","primary",3,"click","disabled"]],template:function(e,i){e&1&&(n(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),a(3,"username"),t(),c(4,"input",2),s(5,q,2,0,"mat-error"),t(),n(6,"mat-form-field",1)(7,"mat-label"),a(8,"password"),t(),c(9,"input",3),s(10,G,2,0,"mat-error"),t(),n(11,"button",4),v("click",function(){return i.login()}),a(12,"Login"),t()()),e&2&&(p("formGroup",i.loginform),m(5),u(i.loginform.controls.username.hasError("required")?5:-1),m(5),u(i.loginform.controls.password.hasError("required")?10:-1),m(),p("disabled",i.loginform.invalid))},dependencies:[L,B,F,D,S,x,b,w,y,k,E],styles:[".login[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;width:80%;margin:auto}"]})};export{N as LoginComponent};
