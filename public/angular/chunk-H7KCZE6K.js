import{c as n,f as p}from"./chunk-3TYT3QDP.js";import{Z as o,ca as a,j as i}from"./chunk-7QAWOP5W.js";var s=class r{constructor(t){this.http=t}fileUploaded=new i;baseUrl=p.baseUrl;uploadedfile=[];uploadFile(t){let e=new FormData;return e.append("video",t.file[0]),e.append("title",t.title),e.append("description",t.description),this.http.post(this.baseUrl+"/video/upload",e,{reportProgress:!0,observe:"events"})}getFile(){return this.http.get(this.baseUrl+"/video")}getVideoDetails(t){return this.http.get(this.baseUrl+"/video/detail/"+t)}reportVideo(t){return this.http.post(this.baseUrl+"/video/report",{id:t})}static \u0275fac=function(e){return new(e||r)(a(n))};static \u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"})};export{s as a};
