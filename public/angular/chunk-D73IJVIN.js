import{c as n,f as o}from"./chunk-M5ISHNPL.js";import{$ as r,ea as i}from"./chunk-JHN2C2EB.js";var s=class e{constructor(t){this.http=t}baseUrl=o.baseUrl;deleteVideoById(t){return this.http.delete(this.baseUrl+"/admin/video/"+t)}deleteUserById(t){return this.http.delete(this.baseUrl+"/admin/user/"+t)}deleteCommentById(t){return this.http.delete(this.baseUrl+"/admin/comment/"+t)}getAllReportedVideos(){return this.http.get(this.baseUrl+"/admin/report")}static \u0275fac=function(a){return new(a||e)(i(n))};static \u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})};export{s as a};
