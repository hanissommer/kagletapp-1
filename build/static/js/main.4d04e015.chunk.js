(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{152:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(17),r=n.n(c),o=(n(152),n(75)),s=n(22),l=n(31),d=n.n(l),j=n(51),u=n(19),b=n(29),h=n(219),m=n(221),p=n(216),g=n(241),f=n(218),x=n.p+"static/media/logo.53ca20cd.png",O=n(220),v=n(179),y=n(114),w=n.n(y),C=n(95);n(154);C.a.initializeApp({apiKey:"AIzaSyBQRGfJynPI0BznjfK0Gg2fcn0v7IOzke4",authDomain:"kaglet-91224.firebaseapp.com",projectId:"kaglet-91224",storageBucket:"kaglet-91224.appspot.com",messagingSenderId:"407470091369",appId:"1:407470091369:web:b59563c510fc47655086f8"});var k=C.a.auth(),I=n(240),S=n(226),E=n(227),T=n(213),N=n(125),L=n(217),W=n(239),B=n(4),z=Object(T.a)((function(e){return{root:{flexGrow:1},button:{alignContent:"center",alignItems:"flex-start",justify:"center",marginTop:e.spacing(1),marginBottom:e.spacing(2),borderRadius:20,padding:"0.25rem 2rem"},logo:{height:300,width:300,alignContent:"center",justify:"center",alignItems:"flex-start"},menuButton:{marginRight:e.spacing(2)},toolbar:{paddingTop:e.spacing(0),paddingBottom:e.spacing(0),backgroundColor:"#ffffff"},title:{flexGrow:1,alignSelf:"flex-end",color:"#000000"},form:{"& > *":{margin:e.spacing(2)}},appicon:{},marginPassword:{margin:e.spacing(1)},textfield:{width:300},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function D(e){return Object(B.jsx)(W.a,Object(b.a)({elevation:6,variant:"filled"},e))}var A=Object(N.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}}),P=function(){var e=z(),t=Object(s.f)(),n=i.a.useState({open:!1,vertical:"bottom",horizontal:"center"}),c=Object(u.a)(n,2),r=c[0],o=c[1],l=r.vertical,y=r.horizontal,C=i.a.useState(!1),T=Object(u.a)(C,2),N=T[0],W=T[1],P=i.a.useState(!1),H=Object(u.a)(P,2),G=(H[0],H[1]),R=i.a.useState(!1),F=Object(u.a)(R,2),M=F[0],q=F[1],K=i.a.useState(""),V=Object(u.a)(K,2),J=(V[0],V[1]),Y=function(){o(Object(b.a)(Object(b.a)({},r),{},{open:!1})),W(!1),G(!1)};function Q(){Z.current.value.includes("@kzoo.edu")?(_(),X()):q(!0)}var U=Object(B.jsx)(i.a.Fragment,{children:Object(B.jsx)(L.a,{theme:A,children:Object(B.jsx)(f.a,{size:"large",variant:"outlined",color:"primary",className:e.button,disabled:M,onClick:function(){Q()},children:"Get Login Link"})})}),X=function(){W(!N)},Z=Object(a.useRef)(null),$={url:"https://kaglet.app/login",handleCodeInApp:!0},_=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.sendSignInLinkToEmail(Z.current.value,$);case 3:window.localStorage.setItem("emailForSignIn",Z.current.value),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();try{if(k.isSignInWithEmailLink(window.location.href)){var ee=window.localStorage.getItem("emailForSignIn");if(!ee)return ee=window.prompt("Please provide your email for confirmation"),te(),Object(B.jsx)("div",{children:"Try again in a non-private window."});k.signInWithEmailLink(ee,window.location.href).then((function(e){window.localStorage.removeItem("emailForSignIn"),te()})).catch((function(e){console.log(e)}))}}catch(ne){console.error(ne)}function te(){window.location.href="https://kaglet.app/home"}return Object(B.jsx)("div",{className:e.root,children:Object(B.jsxs)(h.a,{container:!0,justifyContent:"center",direction:"column",children:[Object(B.jsx)(O.a,{position:"sticky",elevation:0,children:Object(B.jsx)(m.a,{className:e.toolbar,children:Object(B.jsx)(p.a,{"aria-label":"back",onClick:function(){return t.push("/splashscreen")},children:Object(B.jsx)(w.a,{})})})}),Object(B.jsxs)(v.a,{component:"div",align:"center",style:{height:"100vh"},children:[Object(B.jsx)(h.a,{item:!0,children:Object(B.jsx)("div",{className:"col-centered",children:Object(B.jsx)("img",{alt:"Logo",className:e.logo,src:x})})}),Object(B.jsx)(h.a,{item:!0,children:Object(B.jsx)("form",{className:e.form,noValidate:!0,autoComplete:"on",children:Object(B.jsx)(h.a,{item:!0,xs:12,children:Object(B.jsx)(L.a,{theme:A,children:Object(B.jsx)(g.a,{id:"outlined-basic",label:"Email",error:M,required:!0,color:"secondary",variant:"outlined",placeholder:"@kzoo.edu",inputRef:Z,className:e.textfield,helperText:"Please use your @kzoo.edu school email.",onChange:function(e){J(e.target.value),""!=Z.current.value&&q(!1)}})})})})}),Object(B.jsxs)("div",{children:[U,Object(B.jsx)(I.a,{anchorOrigin:{vertical:"top",horizontal:y},open:N,onClose:Y,message:"Link successfully sent",children:Object(B.jsx)(D,{onClose:Y,severity:"success",children:"Check your email! \ud83e\udd2a"})},l+y),Object(B.jsx)(S.a,{className:e.backdrop,open:N,onClick:Y,children:Object(B.jsx)(E.a,{color:"inherit"})})]})]})]})})},H=n(33),G=Object(T.a)((function(e){return{root:{flexGrow:1},logo:{height:300,width:300,alignContent:"center",justify:"center",alignItems:"flex-start"},button:{alignContent:"center",alignItems:"flex-start",justify:"center",marginTop:e.spacing(2),borderRadius:20,padding:"0.25rem 2rem"},toolbar:{paddingTop:e.spacing(0),paddingBottom:e.spacing(0),backgroundColor:"#ffffff"},title:{flexGrow:1,alignSelf:"flex-end",color:"#000000"},field:{"& > *":{margin:e.spacing(2),width:"25ch"}}}})),R=Object(N.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}}),F=function(){var e=G(),t=Object(s.f)();return H.a.auth().onAuthStateChanged((function(e){e&&(window.location.href="https://kaglet.app/home")})),Object(B.jsx)(L.a,{theme:R,children:Object(B.jsxs)(h.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[Object(B.jsx)(O.a,{position:"static",elevation:0,children:Object(B.jsx)(m.a,{className:e.toolbar})}),Object(B.jsx)(h.a,{item:!0,children:Object(B.jsx)("div",{className:"col-centeredd",children:Object(B.jsx)("img",{alt:"Logo",className:e.logo,src:x})})}),Object(B.jsx)(h.a,{item:!0,children:Object(B.jsx)(f.a,{size:"large",color:"primary",variant:"contained",className:e.button,onClick:function(){return t.push("/login")},children:"Login"})})]})})},M=n(237),q=n(243),K=n(238),V=n(244),J=n(228),Y=n(115),Q=n.n(Y),U=n(225),X=n(64),Z=n.n(X),$=n(224),_=n(124),ee=n(229),te=n(116),ne=n.n(te),ae=n(25),ie=n(236),ce=n(230),re=Object(T.a)((function(e){return{root:{flexGrow:1},popoverFab:{padding:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:270},selectEmpty:{marginTop:e.spacing(2)},dateAndTime:{marginLeft:e.spacing(1),minWidth:150,maxWidth:450},fabicon:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",borderRadius:20},locationField:{minWidth:150,maxWidth:450},eventBox:{minWidth:200,maxWidth:500},textfield:{width:200}}})),oe=function(){var e=re(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H.a.auth().onAuthStateChanged((function(e){r(e?e.email:"")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var o=H.a.database(),s=i.a.useState(""),l=Object(u.a)(s,2),m=l[0],x=l[1],O=i.a.useState(""),y=Object(u.a)(O,2),w=y[0],C=y[1],k=i.a.useState(""),I=Object(u.a)(k,2),S=I[0],E=I[1],T=i.a.useState(new Date),W=Object(u.a)(T,2),z=W[0],D=W[1],A=i.a.useState(!0),P=Object(u.a)(A,2),G=P[0],R=P[1],F=i.a.useState(!1),Y=Object(u.a)(F,2);Y[0],Y[1];var te=function(e){E(e.target.value),ue()},oe=function(e){x(e.target.value),ue()},se=function(){ue()},le=function(e){C(e.target.value),ue()},de=function(e){D(e),ue()},je=Object(N.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}});function ue(){R(""==m||""==w||""==S||null==z)}function be(){!function(){var e=o.ref().child("events").push().key,t={id:e,eventName:m,eventLocation:w,eventType:S,eventTime:null===z||void 0===z?void 0:z.getTime(),hostEmail:c,rsvpList:[c]},n={};n["events/"+e]=t,console.log(H.a.database().ref().update(n))}(),window.location.reload()}return Object(B.jsx)(Z.a,{variant:"popover",popupId:"demo-popup-popover",children:function(t){return Object(B.jsxs)("div",{children:[Object(B.jsx)(L.a,{theme:je,children:Object(B.jsxs)(J.a,Object(b.a)(Object(b.a)({color:"primary",variant:"extended",className:e.fabicon},Object(X.bindTrigger)(t)),{},{children:[Object(B.jsx)(Q.a,{}),"New Event"]}))}),Object(B.jsx)(U.a,Object(b.a)(Object(b.a)({},Object(X.bindPopover)(t)),{},{anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},children:Object(B.jsx)(L.a,{theme:je,children:Object(B.jsx)(M.a,{p:2,className:e.eventBox,children:Object(B.jsx)(v.a,{children:Object(B.jsxs)(h.a,{container:!0,spacing:2,children:[Object(B.jsx)(h.a,{item:!0,children:Object(B.jsx)(v.a,{variant:"h6",children:"Create Event"})}),Object(B.jsx)(h.a,{item:!0,xs:12,children:Object(B.jsx)(v.a,{children:Object(B.jsx)($.a,{children:Object(B.jsx)(g.a,{color:"secondary",variant:"outlined",className:e.textfield,label:"Event Name",onKeyPress:se,onChange:oe,required:!0})})})}),Object(B.jsx)(h.a,{item:!0,xs:12,children:Object(B.jsx)(v.a,{children:Object(B.jsx)(g.a,{color:"secondary",required:!0,variant:"outlined",className:e.textfield,label:"Event Location",onKeyPress:se,onChange:le})})}),Object(B.jsx)(h.a,{item:!0,xs:12,children:Object(B.jsx)(v.a,{children:Object(B.jsxs)($.a,{color:"secondary",variant:"outlined",className:e.formControl,required:!0,children:[Object(B.jsx)(q.a,{children:"Select Event Types"}),Object(B.jsxs)(K.a,{color:"secondary",value:S,onChange:te,label:"Event Type",autoWidth:!0,children:[Object(B.jsx)(V.a,{color:"secondary",value:"Campus Event",children:"Campus Event"}),Object(B.jsx)(V.a,{color:"secondary",value:"Study Sesh",children:"Study Sesh"}),Object(B.jsx)(V.a,{color:"secondary",value:"House Party",children:"House Party"})]})]})})}),Object(B.jsx)(h.a,{item:!0,xs:12,children:Object(B.jsx)(v.a,{children:Object(B.jsx)(ae.a,{utils:_.a,children:Object(B.jsx)(ie.a,{required:!0,color:"secondary",label:"Event Time",inputVariant:"outlined",className:e.dateAndTime,value:z,onChange:de,onError:console.log,disablePast:!0,InputProps:{endAdornment:Object(B.jsx)(ee.a,{position:"end",children:Object(B.jsx)(p.a,{children:Object(B.jsx)(ne.a,{})})})}})})})}),Object(B.jsx)(h.a,{item:!0,xs:12,children:Object(B.jsx)(f.a,{onClick:be,color:"secondary",variant:"contained",endIcon:Object(B.jsx)(ce.a,{children:"send"}),disabled:G,children:"Post"})})]})})})})}))]})}})},se=n(245),le=n(118),de=n.n(le),je=n.p+"static/media/favicon.0d794a5d.png",ue=n.p+"static/media/HomeHeader.7353d340.png",be=n(117),he=Object(T.a)((function(e){return{root:{flexGrow:1},button:{color:"red",alignContent:"center",alignItems:"flex-start",justify:"center",marginTop:e.spacing(3),borderRadius:20,padding:"0.25rem 2rem",borderColor:"#becddc"},menuButton:{marginRight:e.spacing(2)},toolbar:{paddingTop:e.spacing(.5),paddingBottom:e.spacing(.5),backgroundColor:"#ffffff"},title:{flexGrow:1,color:"#000000"},subtitle:{flexGrow:1,alignSelf:"flex-end",color:"#000000"},textfield:{width:200},extendedIcon:{marginRight:e.spacing(2)},cardcomponent:{width:"90%"},cardTitle:{flexGrow:1,color:"#000000",paddingLeft:e.spacing(7)},cardpositions:{marginBottom:12},username:{textAlign:"left"},rightAlignText:{textAlign:"right"},accountIcon:{minHeight:30,minWidth:30,color:"black"},appicon:{height:"3%",width:"3%",minHeight:28,minWidth:28,maxHeight:42,maxWidth:42,paddingBlock:2},fabicon:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"},bottomNav:{width:"100%",position:"fixed",bottom:0},popoverFab:{padding:e.spacing(2)},formControl:{minWidth:150,maxWidth:450},dateAndTime:{marginLeft:e.spacing(1),minWidth:150,maxWidth:450},locationField:{minWidth:150,maxWidth:450},eventBox:{minWidth:200,maxWidth:500},iconText:{color:"#543B31",fontSize:25,paddingLeft:1},logoButton:{maxHeight:45,maxWidth:45},logoText:{maxHeight:40,maxWidth:90,minHeight:30,minWidth:66,paddingTop:5}}})),me=function(){var e=he();function t(){k.signOut().then((function(){n()})).catch((function(e){console.log("error logging in",e)}))}function n(){window.location.reload()}var a=Object(N.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}});return Object(B.jsx)(O.a,{position:"sticky",elevation:0,children:Object(B.jsx)(m.a,{className:e.toolbar,children:Object(B.jsxs)(h.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(B.jsx)(h.a,{item:!0,children:Object(B.jsxs)(h.a,{container:!0,spacing:0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(B.jsx)(p.a,{className:e.logoButton,onClick:n,children:Object(B.jsx)(se.a,{className:e.appicon,src:je})}),Object(B.jsx)("img",{src:ue,className:e.logoText,alt:"logoText"})]})}),Object(B.jsx)(h.a,{item:!0,children:Object(B.jsx)(Z.a,{variant:"popover",popupId:"demo-popup-popover",children:function(n){return Object(B.jsxs)("div",{children:[Object(B.jsx)(p.a,Object(b.a)(Object(b.a)({"aria-label":"account of current user","aria-controls":"menu-appbar"},Object(be.bindTrigger)(n)),{},{children:Object(B.jsx)(de.a,{className:e.accountIcon})})),Object(B.jsx)(U.a,Object(b.a)(Object(b.a)({},Object(X.bindPopover)(n)),{},{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},children:Object(B.jsx)(M.a,{p:2,children:Object(B.jsx)(v.a,{children:Object(B.jsx)(L.a,{theme:a,children:Object(B.jsx)(f.a,{variant:"contained",color:"secondary",onClick:t,children:"Logout"})})})})}))]})}})})]})})})},pe=n(231),ge=n(232),fe=n(235),xe=n(233),Oe=n(122),ve=n.n(Oe),ye=n.p+"static/media/partyImage1.59010835.png",we=n.p+"static/media/campusImage1.c1c2f219.png",Ce=n.p+"static/media/studyImage1.b669a69c.png",ke=n.p+"static/media/studyImage2.54d40e84.png",Ie=n.p+"static/media/studyImage3.65de07e1.png",Se=n.p+"static/media/campusImage2.91f3a786.png",Ee=n.p+"static/media/campusImage3.b8d12bb7.png",Te=n.p+"static/media/partyImage2.9159f47b.png",Ne=n.p+"static/media/partyImage3.9874ef6e.png",Le=n(120),We=n.n(Le),Be=n(121),ze=n.n(Be),De=n(119),Ae=n.n(De),Pe=n(234),He=Object(T.a)((function(e){return{root:{flexGrow:1},button:{alignContent:"center",alignItems:"flex-start",justify:"center",marginTop:e.spacing(1),marginBottom:e.spacing(2),borderRadius:20,padding:"0.25rem 2rem"},rsvpCount:{paddingBottom:1}}})),Ge=(Object(N.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}}),H.a.database());function Re(e){return Object(B.jsx)(W.a,Object(b.a)({elevation:6,variant:"filled"},e))}var Fe=!1;function Me(e,t){console.log(e);var n=H.a.auth().currentUser;console.log(typeof t),n&&(t.includes(n.uid)?Fe=!0:(t.push(n.uid),function(e,t){Ge.ref("events/"+t+"/").update({rsvpList:e})}(t,e)))}var qe=function(e){var t=He(),n=i.a.useState(!1),a=Object(u.a)(n,2),c=a[0],r=a[1],o=i.a.useState(!1),s=Object(u.a)(o,2),l=s[0],d=s[1],j=i.a.useState(!1),b=Object(u.a)(j,2),h=b[0],m=b[1],p=function(e,t){"clickaway"!==t&&d(!1)},g=Object(N.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}});function x(){r(!0)}function O(){Me(e.eventID,e.rsvpList),console.log(Fe),!1===Fe?(d(!0),x(),e.rsvpList.length=e.rsvpList.length+1):(m(!0),x())}var y=Object(B.jsx)(i.a.Fragment,{children:Object(B.jsx)(L.a,{theme:g,children:Object(B.jsx)(f.a,{variant:"contained",disabled:c,className:t.button,size:"small",color:"primary",onClick:function(){O()},children:"RSVP"})})});return Object(B.jsx)("div",{children:Object(B.jsx)(L.a,{theme:g,children:Object(B.jsx)(v.a,{component:"div",align:"center",children:Object(B.jsxs)("div",{children:[y,Object(B.jsx)(I.a,{autoHideDuration:2e3,open:l,onClose:p,children:Object(B.jsx)(Re,{onClose:p,severity:"success",children:"You're on the list! \ud83d\udc4d"})}),Object(B.jsx)(I.a,{autoHideDuration:2e3,open:h,onClose:p,children:Object(B.jsx)(Re,{onClose:p,severity:"error",children:"You've already RSVP'd"})})]})})})})},Ke=Object(T.a)((function(e){return{root:{flexGrow:1},cardcomponent:{width:"82%"},username:{textAlign:"left"},rightAlignText:{textAlign:"right",justifyContent:"center"},leftAlignText:{textAlign:"left",justifyContent:"center",paddingLeft:10},cardLooks:{borderRadius:12},cardTitle:{paddingLeft:10},cardSubtitle:{paddingLeft:5},media:{height:170},titleIcon:{paddingTop:7},locationSubtitle:{paddingLeft:10},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},rsvpCount:{paddingBottom:5}}})),Ve=Object(N.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}});function Je(e){var t="",n=Math.round(0+2*Math.random());return"Study Sesh"===e&&(t=0===n?Ce:1===n?ke:Ie),"House Party"===e&&(t=0===n?ye:1===n?Te:Ne),"Campus Event"===e&&(t=0===n?we:1===n?Se:Ee),t}function Ye(e){var t="";return"Study Sesh"===e&&(t=Object(B.jsx)(Ae.a,{})),"House Party"===e&&(t=Object(B.jsx)(We.a,{})),"Campus Event"===e&&(t=Object(B.jsx)(ze.a,{})),t}var Qe=function(e){var t=Ke(),n=i.a.useState(!1),a=Object(u.a)(n,2);a[0],a[1];return Object(B.jsxs)("div",{className:t.cardcomponent,children:[Object(B.jsxs)(pe.a,{variant:"outlined",className:t.cardLooks,children:[Object(B.jsx)(L.a,{theme:Ve,children:Object(B.jsx)(ge.a,{className:t.media,image:Je(e.type),title:"Test"})}),Object(B.jsxs)(xe.a,{children:[Object(B.jsxs)(h.a,{container:!0,direction:"row-reverse",justifyContent:"flex-end",alignItems:"center",wrap:"nowrap",children:[Object(B.jsx)(h.a,{item:!0,className:"".concat(t.cardTitle," ","heading"),children:e.name}),Object(B.jsx)(h.a,{item:!0,className:"".concat(t.titleIcon," ","subheading"),children:Ye(e.type)})]}),Object(B.jsxs)(h.a,{container:!0,direction:"row-reverse",justifyContent:"flex-end",alignItems:"center",wrap:"nowrap",children:[Object(B.jsx)(h.a,{item:!0,className:"".concat(t.locationSubtitle," ","subheading"),children:e.location}),Object(B.jsx)(ve.a,{})]}),Object(B.jsx)(h.a,{container:!0,direction:"row-reverse",justifyContent:"flex-end",alignItems:"center",wrap:"nowrap",children:Object(B.jsx)(h.a,{item:!0,className:"".concat(t.cardSubtitle," ","subheading"),children:e.time})}),"\xa0",Object(B.jsxs)(h.a,{container:!0,direction:"row-reverse",justifyContent:"flex-end",alignItems:"center",wrap:"nowrap",children:[Object(B.jsx)(h.a,{item:!0,className:"".concat(t.leftAlignText," ","subheading"),children:e.email}),Object(B.jsx)(Pe.a,{})]})]}),Object(B.jsxs)(fe.a,{children:[Object(B.jsx)(qe,{eventID:e.eventID,rsvpList:e.rsvpList}),"\xa0 \xa0",Object(B.jsx)(h.a,{item:!0,className:t.rsvpCount,children:e.rsvpList.length})]})]}),"\xa0"]})},Ue=n(123),Xe=n.n(Ue),Ze=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1];function c(e){var t=new Date(e);return Xe()(t).format("MMMM Do, h:mm a")}return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new Date).setHours(t.getHours()-2),n=t.getTime(),console.log(t),H.a.database().ref("events").startAfter(n).orderByChild("eventTime").once("value").then((function(e){var t=[];e.forEach((function(e){t.push(e.val())})),i(t)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log("eventsList",n),Object(B.jsx)(B.Fragment,{children:Object.values(n).map((function(e){return Object(B.jsx)(Qe,{name:e.eventName,time:c(e.eventTime),location:e.eventLocation,type:e.eventType,email:e.hostEmail,rsvpList:e.rsvpList,eventID:e.id})}))})},$e=Object(T.a)((function(e){return{root:{flexGrow:0}}})),_e=Object(N.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}}),et=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H.a.auth().onAuthStateChanged((function(e){e?(i(e.uid),console.log(e.uid)):i("")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var c=$e(),r=Object(s.f)();return Object(B.jsxs)("div",{className:c.root,children:[""===n&&Object(B.jsx)(h.a,{container:!0,direction:"column",justifyContent:"center",children:Object(B.jsxs)(v.a,{component:"div",align:"center",style:{height:"100vh"},children:[Object(B.jsx)(me,{}),"\xa0",Object(B.jsxs)(h.a,{container:!0,spacing:2,direction:"column",alignItems:"center",justify:"center",children:[Object(B.jsx)(v.a,{variant:"h5",children:"Please log in to view awesome K events!"}),"\xa0",Object(B.jsx)(v.a,{variant:"h6",children:"If you've logged in, try again in a non-private window."}),"\xa0",Object(B.jsx)(L.a,{theme:_e,children:Object(B.jsx)(h.a,{item:!0,children:Object(B.jsx)(f.a,{size:"large",variant:"outlined",color:"primary",className:"subheading",style:{borderRadius:20,padding:"0.25rem 2rem"},onClick:function(){return r.push("/login")},children:"Login"})})})]})]})}),""!==n&&Object(B.jsx)(h.a,{container:!0,direction:"column",justifyContent:"center",children:Object(B.jsxs)(v.a,{component:"div",align:"center",style:{height:"100vh"},children:[Object(B.jsx)(me,{}),"\xa0",Object(B.jsx)(h.a,{container:!0,spacing:2,direction:"column",alignItems:"center",justify:"center",children:Object(B.jsx)(Ze,{})}),Object(B.jsx)(h.a,{item:!0,children:Object(B.jsx)(oe,{})})]})})]})},tt=Object(N.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}});function nt(){return Object(B.jsx)(L.a,{theme:tt,children:Object(B.jsx)(o.a,{children:Object(B.jsxs)(s.c,{children:[Object(B.jsxs)(s.a,{exact:!0,path:"/",children:[Object(B.jsx)(F,{})," "]}),Object(B.jsxs)(s.a,{exact:!0,path:"/login",children:[Object(B.jsx)(P,{})," "]}),Object(B.jsxs)(s.a,{exact:!0,path:"/home",children:[Object(B.jsx)(et,{})," "]}),Object(B.jsx)(s.a,{exact:!0,path:"/splashscreen",children:Object(B.jsx)(F,{})})]})})})}var at=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,248)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsx)(nt,{})}),document.getElementById("root")),at()}},[[177,1,2]]]);
//# sourceMappingURL=main.4d04e015.chunk.js.map