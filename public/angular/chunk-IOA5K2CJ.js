import{a as j,c as $}from"./chunk-JMUZB376.js";import{a as O}from"./chunk-OQJTPVCI.js";import{a as V}from"./chunk-57VX2FDE.js";import{a as U,g as F}from"./chunk-YF2K7AJ4.js";import{b as M}from"./chunk-25A3FC3X.js";import{a as E,d as R}from"./chunk-K4OZBMFI.js";import"./chunk-DKCBBMDY.js";import{c as B,d as S,g as h,i as C}from"./chunk-6XXA7HXI.js";import{f as w}from"./chunk-MJRUFRT7.js";import{Ab as x,Eb as T,Hb as p,Jb as l,Qb as A,Rb as s,Sb as b,Wb as L,Ya as r,Za as f,ha as k,mb as y,ob as u,pc as I,qa as d,ra as m,tb as D,ub as _,wb as g,xb as v,yb as a,zb as n}from"./chunk-CZHVG3FW.js";function P(i,t){if(i&1&&(a(0,"mat-chip"),s(1),n()),i&2){let e=t.$implicit;r(),b("@"+e)}}function Y(i,t){if(i&1&&(a(0,"h2"),s(1),n()),i&2){let e=t.$implicit;r(),b(e)}}function q(i,t){if(i&1){let e=T();a(0,"mat-chip-set")(1,"mat-chip"),s(2,"Users online :"),n(),g(3,P,2,1,"mat-chip",null,_),n(),a(5,"button",2),p("click",function(){d(e);let c=l();return m(c.sendAudio())}),s(6,"Start Recording"),n(),s(7," \xA0 "),a(8,"button",3),p("click",function(){d(e);let c=l();return m(c.stopAudio())}),s(9,"Send Recording"),n(),x(10,"br")(11,"hr"),a(12,"mat-form-field")(13,"mat-label"),s(14,"message:"),n(),x(15,"input",4,0),n(),a(17,"button",5),p("click",function(){d(e);let c=A(16),N=l();return m([N.sendText(c.value),c.value=""])}),s(18,"Send"),n(),g(19,Y,2,1,"h2",null,_)}if(i&2){let e=l();r(3),v(e.allUsers),r(2),u("disabled",e.sendAudioDisabled),r(3),u("disabled",e.stopAudioDisabled),r(11),v(e.usertext)}}function z(i,t){i&1&&(a(0,"h1"),s(1,"Login to use"),n())}var W=class i{constructor(t,e){this._authenticateService=t;this._matSnackBar=e;this.loggedIn=this._authenticateService.loggedIn,this.userData=this._authenticateService.user_data,I(()=>{this.loggedIn()&&(!this.connection||this.connection.CLOSED)&&this.connect(),!this.loggedIn()&&this.connection&&(console.log("computed close"),this.connection.close())})}mediaRecorder;audioChunks=[];connection;sendAudioDisabled=!0;stopAudioDisabled=!0;loggedIn;userData;allUsers=[];ngOnInit(){}connect(){let t=w.wsAudioBaseUrl;this.connection=new WebSocket(t),this.connection.onopen=()=>{console.log("connection open",this.connection.readyState),this.sendAudioDisabled=!1,this.connection.readyState==1&&this.connection.send(this.userData().username)},this.connection.onmessage=e=>{typeof e.data=="string"?this.playThatText(e.data):this.playThatSong(e.data)},this.connection.onerror=e=>{console.error("WebSocket error:",e)},this.connection.onclose=()=>{console.log("WebSocket connection closed")}}sendAudio(){navigator.mediaDevices.getUserMedia({audio:{channelCount:2,echoCancellation:!1,noiseSuppression:!1},video:!1}).then(t=>{this.sendAudioDisabled=!0,this.stopAudioDisabled=!1,this.mediaRecorder=new MediaRecorder(t,{audioBitsPerSecond:3e4}),this.mediaRecorder.ondataavailable=e=>{this.audioChunks.push(e.data)},this.mediaRecorder.onstop=()=>{let e=new Blob(this.audioChunks,{type:"audio/ogg"});this.audioChunks=[],this.connection.send(e),t.getTracks().forEach(o=>o.stop())},this.mediaRecorder.start(100),this.connection.send(this.userData().username+" recording")})}stopAudio(){this.sendAudioDisabled=!1,this.stopAudioDisabled=!0,this.connection.send(this.userData().username),this.mediaRecorder.stop()}playThatSong(t){let e=URL.createObjectURL(t),o=new Audio(e);o.muted=!0,o.play(),o.muted=!1}usertext=[];playThatText(t){t.includes("T9")?(this.checkLength(),this.usertext.unshift(t.split("T9")[1])):this.allUsers=t.split(",")}sendText(t){this.checkLength(),this.usertext.unshift(`@${this.userData().username} : ${t.trim()}`),this.connection.send(`T9${t.trim()}`)}checkLength(){this.usertext.length==15&&this.usertext.pop()}ngOnDestroy(){this.connection.close()}static \u0275fac=function(e){return new(e||i)(f(M),f(V))};static \u0275cmp=k({type:i,selectors:[["app-livechat"]],standalone:!0,features:[L],decls:3,vars:2,consts:[["message",""],[2,"width","80%","margin","auto","text-align","center"],["mat-stroked-button","","color","accent",3,"click","disabled"],["mat-stroked-button","","color","error",3,"click","disabled"],["matInput",""],["mat-stroked-button","","color","primary",3,"click"]],template:function(e,o){e&1&&(a(0,"div",1),y(1,q,21,2)(2,z,2,0,"h1"),n()),e&2&&(u("@slideFromTop",void 0),r(),D(o.loggedIn()?1:2))},dependencies:[R,E,$,j,O,F,U],data:{animation:[B("slideFromTop",[C(":enter",[h({opacity:0}),S("500ms ease-out",h({opacity:1}))]),C(":leave",[S("300ms ease-in",h({transform:"translateY(-100%)",opacity:0}))])])]}})};export{W as LivechatComponent};
