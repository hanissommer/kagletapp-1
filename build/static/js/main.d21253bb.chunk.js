(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{153:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(17),r=n.n(c),o=(n(153),n(75)),s=n(22),l=n(32),d=n.n(l),j=n(52),u=n(19),b=n(29),m=n(220),h=n(222),p=n(217),g=n(242),f=n(219),x=n.p+"static/media/logo.53ca20cd.png",O=n(221),v=n(180),y=n(114),C=n.n(y),w=n(95);n(155);w.a.initializeApp({apiKey:"AIzaSyBQRGfJynPI0BznjfK0Gg2fcn0v7IOzke4",authDomain:"kaglet-91224.firebaseapp.com",projectId:"kaglet-91224",storageBucket:"kaglet-91224.appspot.com",messagingSenderId:"407470091369",appId:"1:407470091369:web:b59563c510fc47655086f8"});var k=w.a.auth(),I=n(241),S=n(227),E=n(228),N=n(214),T=n(126),L=n(218),B=n(240),W=n(4),z=Object(N.a)((function(e){return{root:{flexGrow:1},button:{alignContent:"center",alignItems:"flex-start",justify:"center",marginTop:e.spacing(1),marginBottom:e.spacing(2),borderRadius:20,padding:"0.25rem 2rem"},logo:{height:300,width:300,alignContent:"center",justify:"center",alignItems:"flex-start"},menuButton:{marginRight:e.spacing(2)},toolbar:{paddingTop:e.spacing(0),paddingBottom:e.spacing(0),backgroundColor:"#ffffff"},title:{flexGrow:1,alignSelf:"flex-end",color:"#000000"},form:{"& > *":{margin:e.spacing(2)}},appicon:{},marginPassword:{margin:e.spacing(1)},textfield:{width:300},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function D(e){return Object(W.jsx)(B.a,Object(b.a)({elevation:6,variant:"filled"},e))}var A=Object(T.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}}),P=function(){var e=z(),t=Object(s.f)(),n=i.a.useState({open:!1,vertical:"bottom",horizontal:"center"}),c=Object(u.a)(n,2),r=c[0],o=c[1],l=r.vertical,y=r.horizontal,w=i.a.useState(!1),N=Object(u.a)(w,2),T=N[0],B=N[1],P=i.a.useState(!1),H=Object(u.a)(P,2),G=(H[0],H[1]),R=i.a.useState(!1),F=Object(u.a)(R,2),M=F[0],q=F[1],K=i.a.useState(""),V=Object(u.a)(K,2),J=(V[0],V[1]),U=function(){o(Object(b.a)(Object(b.a)({},r),{},{open:!1})),B(!1),G(!1)};function Y(){Z.current.value.includes("@kzoo.edu")?(_(),X()):q(!0)}var Q=Object(W.jsx)(i.a.Fragment,{children:Object(W.jsx)(L.a,{theme:A,children:Object(W.jsx)(f.a,{size:"large",variant:"outlined",color:"primary",className:e.button,disabled:M,onClick:function(){Y()},children:"Get Login Link"})})}),X=function(){B(!T)},Z=Object(a.useRef)(null),$={url:"https://kaglet.app/login",handleCodeInApp:!0},_=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.sendSignInLinkToEmail(Z.current.value,$);case 3:window.localStorage.setItem("emailForSignIn",Z.current.value),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();try{if(k.isSignInWithEmailLink(window.location.href)){var ee=window.localStorage.getItem("emailForSignIn");if(!ee)return ee=window.prompt("Please provide your email for confirmation"),te(),Object(W.jsx)("div",{children:"Try again in a non-private window."});k.signInWithEmailLink(ee,window.location.href).then((function(e){window.localStorage.removeItem("emailForSignIn"),te()})).catch((function(e){console.log(e)}))}}catch(ne){console.error(ne)}function te(){window.location.href="https://kaglet.app/home"}return Object(W.jsx)("div",{className:e.root,children:Object(W.jsxs)(m.a,{container:!0,justifyContent:"center",direction:"column",children:[Object(W.jsx)(O.a,{position:"sticky",elevation:0,children:Object(W.jsx)(h.a,{className:e.toolbar,children:Object(W.jsx)(p.a,{"aria-label":"back",onClick:function(){return t.push("/splashscreen")},children:Object(W.jsx)(C.a,{})})})}),Object(W.jsxs)(v.a,{component:"div",align:"center",style:{height:"100vh"},children:[Object(W.jsx)(m.a,{item:!0,children:Object(W.jsx)("div",{className:"col-centered",children:Object(W.jsx)("img",{alt:"Logo",className:e.logo,src:x})})}),Object(W.jsx)(m.a,{item:!0,children:Object(W.jsx)("form",{className:e.form,noValidate:!0,autoComplete:"on",children:Object(W.jsx)(m.a,{item:!0,xs:12,children:Object(W.jsx)(L.a,{theme:A,children:Object(W.jsx)(g.a,{id:"outlined-basic",label:"Email",error:M,required:!0,color:"secondary",variant:"outlined",placeholder:"@kzoo.edu",inputRef:Z,className:e.textfield,helperText:"Please use your @kzoo.edu school email.",onChange:function(e){J(e.target.value),""!=Z.current.value&&q(!1)}})})})})}),Object(W.jsxs)("div",{children:[Q,Object(W.jsx)(I.a,{anchorOrigin:{vertical:"top",horizontal:y},open:T,onClose:U,message:"Link successfully sent",children:Object(W.jsx)(D,{onClose:U,severity:"success",children:"Check your email! \ud83e\udd2a"})},l+y),Object(W.jsx)(S.a,{className:e.backdrop,open:T,onClick:U,children:Object(W.jsx)(E.a,{color:"inherit"})})]})]})]})})},H=n(31),G=Object(N.a)((function(e){return{root:{flexGrow:1},logo:{height:300,width:300,alignContent:"center",justify:"center",alignItems:"flex-start"},button:{alignContent:"center",alignItems:"flex-start",justify:"center",marginTop:e.spacing(2),borderRadius:20,padding:"0.25rem 2rem"},toolbar:{paddingTop:e.spacing(0),paddingBottom:e.spacing(0),backgroundColor:"#ffffff"},title:{flexGrow:1,alignSelf:"flex-end",color:"#000000"},field:{"& > *":{margin:e.spacing(2),width:"25ch"}}}})),R=Object(T.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}}),F=function(){var e=G(),t=Object(s.f)();return H.a.auth().onAuthStateChanged((function(e){e&&(window.location.href="https://kaglet.app/home")})),Object(W.jsx)(L.a,{theme:R,children:Object(W.jsxs)(m.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[Object(W.jsx)(O.a,{position:"static",elevation:0,children:Object(W.jsx)(h.a,{className:e.toolbar})}),Object(W.jsx)(m.a,{item:!0,children:Object(W.jsx)("div",{className:"col-centeredd",children:Object(W.jsx)("img",{alt:"Logo",className:e.logo,src:x})})}),Object(W.jsx)(m.a,{item:!0,children:Object(W.jsx)(f.a,{size:"large",color:"primary",variant:"contained",className:e.button,onClick:function(){return t.push("/login")},children:"Login"})})]})})},M=n(238),q=n(244),K=n(239),V=n(245),J=n(229),U=n(115),Y=n.n(U),Q=n(226),X=n(65),Z=n.n(X),$=n(225),_=n(125),ee=n(230),te=n(116),ne=n.n(te),ae=n(25),ie=n(237),ce=n(231),re=Object(N.a)((function(e){return{root:{flexGrow:1},popoverFab:{padding:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:270},selectEmpty:{marginTop:e.spacing(2)},dateAndTime:{marginLeft:e.spacing(1),minWidth:150,maxWidth:450},fabicon:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",borderRadius:20},locationField:{minWidth:150,maxWidth:450},eventBox:{minWidth:200,maxWidth:500},textfield:{width:200}}})),oe=function(){var e=re(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H.a.auth().onAuthStateChanged((function(e){r(e?e.email:"")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var o=H.a.database(),s=i.a.useState(""),l=Object(u.a)(s,2),h=l[0],x=l[1],O=i.a.useState(""),y=Object(u.a)(O,2),C=y[0],w=y[1],k=i.a.useState(""),I=Object(u.a)(k,2),S=I[0],E=I[1],N=i.a.useState(new Date),B=Object(u.a)(N,2),z=B[0],D=B[1],A=i.a.useState(!0),P=Object(u.a)(A,2),G=P[0],R=P[1],F=i.a.useState(!1),U=Object(u.a)(F,2);U[0],U[1];var te=function(e){E(e.target.value),ue()},oe=function(e){x(e.target.value),ue()},se=function(){ue()},le=function(e){w(e.target.value),ue()},de=function(e){D(e),ue()},je=Object(T.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}});function ue(){R(""==h||""==C||""==S||null==z)}function be(){!function(){var e=o.ref().child("events").push().key,t={id:e,eventName:h,eventLocation:C,eventType:S,eventTime:null===z||void 0===z?void 0:z.getTime(),hostEmail:c,rsvpList:[c]},n={};n["events/"+e]=t,console.log(H.a.database().ref().update(n))}(),window.location.reload()}return Object(W.jsx)(Z.a,{variant:"popover",popupId:"demo-popup-popover",children:function(t){return Object(W.jsxs)("div",{children:[Object(W.jsx)(L.a,{theme:je,children:Object(W.jsxs)(J.a,Object(b.a)(Object(b.a)({color:"primary",variant:"extended",className:e.fabicon},Object(X.bindTrigger)(t)),{},{children:[Object(W.jsx)(Y.a,{}),"New Event"]}))}),Object(W.jsx)(Q.a,Object(b.a)(Object(b.a)({},Object(X.bindPopover)(t)),{},{anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},children:Object(W.jsx)(L.a,{theme:je,children:Object(W.jsx)(M.a,{p:2,className:e.eventBox,children:Object(W.jsx)(v.a,{children:Object(W.jsxs)(m.a,{container:!0,spacing:2,children:[Object(W.jsx)(m.a,{item:!0,children:Object(W.jsx)(v.a,{variant:"h6",children:"Create Event"})}),Object(W.jsx)(m.a,{item:!0,xs:12,children:Object(W.jsx)(v.a,{children:Object(W.jsx)($.a,{children:Object(W.jsx)(g.a,{color:"secondary",variant:"outlined",className:e.textfield,label:"Event Name",onKeyPress:se,onChange:oe,required:!0})})})}),Object(W.jsx)(m.a,{item:!0,xs:12,children:Object(W.jsx)(v.a,{children:Object(W.jsx)(g.a,{color:"secondary",required:!0,variant:"outlined",className:e.textfield,label:"Event Location",onKeyPress:se,onChange:le})})}),Object(W.jsx)(m.a,{item:!0,xs:12,children:Object(W.jsx)(v.a,{children:Object(W.jsxs)($.a,{color:"secondary",variant:"outlined",className:e.formControl,required:!0,children:[Object(W.jsx)(q.a,{children:"Select Event Types"}),Object(W.jsxs)(K.a,{color:"secondary",value:S,onChange:te,label:"Event Type",autoWidth:!0,children:[Object(W.jsx)(V.a,{color:"secondary",value:"Campus Event",children:"Campus Event"}),Object(W.jsx)(V.a,{color:"secondary",value:"Study Sesh",children:"Study Sesh"}),Object(W.jsx)(V.a,{color:"secondary",value:"House Party",children:"House Party"})]})]})})}),Object(W.jsx)(m.a,{item:!0,xs:12,children:Object(W.jsx)(v.a,{children:Object(W.jsx)(ae.a,{utils:_.a,children:Object(W.jsx)(ie.a,{required:!0,color:"secondary",label:"Event Time",inputVariant:"outlined",className:e.dateAndTime,value:z,onChange:de,onError:console.log,disablePast:!0,InputProps:{endAdornment:Object(W.jsx)(ee.a,{position:"end",children:Object(W.jsx)(p.a,{children:Object(W.jsx)(ne.a,{})})})}})})})}),Object(W.jsx)(m.a,{item:!0,xs:12,children:Object(W.jsx)(f.a,{onClick:be,color:"secondary",variant:"contained",endIcon:Object(W.jsx)(ce.a,{children:"send"}),disabled:G,children:"Post"})})]})})})})}))]})}})},se=n(246),le=n(119),de=n.n(le),je=n.p+"static/media/favicon.0d794a5d.png",ue=n.p+"static/media/HomeHeader.7353d340.png",be=n(118),me=n(117),he=n.n(me),pe=n(183),ge=Object(pe.a)((function(e){return{userEmail:{paddingBottom:5,paddingLeft:5},gridContainerEmailIcon:{paddingTop:10,paddingBottom:5}}})),fe=function(){var e,t=ge(),n=H.a.auth().currentUser;n?(console.log(n.email),e=n.email):(console.log("Not Logged In"),e="Not Logged In");return Object(W.jsxs)(m.a,{container:!0,direction:"row-reverse",justifyContent:"flex-end",alignItems:"center",className:t.gridContainerEmailIcon,children:[Object(W.jsx)(m.a,{item:!0,children:Object(W.jsx)(v.a,{className:t.userEmail,children:e})}),Object(W.jsx)(m.a,{item:!0,children:Object(W.jsx)(he.a,{})})]})},xe=Object(N.a)((function(e){return{root:{flexGrow:1},button:{alignContent:"center",alignItems:"flex-start",justify:"center",borderRadius:20,borderColor:"#becddc",alignSelf:"center"},menuButton:{marginRight:e.spacing(2)},toolbar:{paddingTop:e.spacing(.5),paddingBottom:e.spacing(.5),backgroundColor:"#ffffff"},title:{flexGrow:1,color:"#000000"},subtitle:{flexGrow:1,alignSelf:"flex-end",color:"#000000"},textfield:{width:200},extendedIcon:{marginRight:e.spacing(2)},cardcomponent:{width:"90%"},cardTitle:{flexGrow:1,color:"#000000",paddingLeft:e.spacing(7)},cardpositions:{marginBottom:12},username:{textAlign:"left"},rightAlignText:{textAlign:"right"},accountIcon:{minHeight:30,minWidth:30,color:"black"},appicon:{height:"3%",width:"3%",minHeight:28,minWidth:28,maxHeight:42,maxWidth:42,paddingBlock:2},fabicon:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"},bottomNav:{width:"100%",position:"fixed",bottom:0},popoverFab:{padding:e.spacing(2)},formControl:{minWidth:150,maxWidth:450},dateAndTime:{marginLeft:e.spacing(1),minWidth:150,maxWidth:450},locationField:{minWidth:150,maxWidth:450},eventBox:{minWidth:200,maxWidth:500},iconText:{color:"#543B31",fontSize:25,paddingLeft:1},logoButton:{maxHeight:45,maxWidth:45},logoText:{maxHeight:40,maxWidth:90,minHeight:30,minWidth:66,paddingTop:5}}})),Oe=function(){var e=xe();function t(){k.signOut().then((function(){n()})).catch((function(e){console.log("error logging in",e)}))}function n(){window.location.reload()}var a=Object(T.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}});return Object(W.jsx)(O.a,{position:"sticky",elevation:0,children:Object(W.jsx)(h.a,{className:e.toolbar,children:Object(W.jsxs)(m.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(W.jsx)(m.a,{item:!0,children:Object(W.jsxs)(m.a,{container:!0,spacing:0,direction:"row",justifyContent:"flex-start",alignItems:"center",children:[Object(W.jsx)(p.a,{className:e.logoButton,onClick:n,children:Object(W.jsx)(se.a,{className:e.appicon,src:je})}),Object(W.jsx)("img",{src:ue,className:e.logoText,alt:"logoText"})]})}),Object(W.jsx)(m.a,{item:!0,children:Object(W.jsx)(Z.a,{variant:"popover",popupId:"demo-popup-popover",children:function(n){return Object(W.jsxs)("div",{children:[Object(W.jsx)(p.a,Object(b.a)(Object(b.a)({"aria-label":"account of current user","aria-controls":"menu-appbar"},Object(be.bindTrigger)(n)),{},{children:Object(W.jsx)(de.a,{className:e.accountIcon})})),Object(W.jsx)(Q.a,Object(b.a)(Object(b.a)({},Object(X.bindPopover)(n)),{},{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},children:Object(W.jsx)(M.a,{p:2,children:Object(W.jsx)(v.a,{children:Object(W.jsxs)(L.a,{theme:a,children:[Object(W.jsx)(fe,{}),Object(W.jsx)(f.a,{variant:"contained",color:"secondary",onClick:t,className:e.button,children:"Logout"})]})})})}))]})}})})]})})})},ve=n(232),ye=n(233),Ce=n(236),we=n(234),ke=n(123),Ie=n.n(ke),Se=n.p+"static/media/partyImage1.59010835.png",Ee=n.p+"static/media/campusImage1.c1c2f219.png",Ne=n.p+"static/media/studyImage1.b669a69c.png",Te=n.p+"static/media/studyImage2.54d40e84.png",Le=n.p+"static/media/studyImage3.65de07e1.png",Be=n.p+"static/media/campusImage2.91f3a786.png",We=n.p+"static/media/campusImage3.b8d12bb7.png",ze=n.p+"static/media/partyImage2.9159f47b.png",De=n.p+"static/media/partyImage3.9874ef6e.png",Ae=n(121),Pe=n.n(Ae),He=n(122),Ge=n.n(He),Re=n(120),Fe=n.n(Re),Me=n(235),qe=Object(N.a)((function(e){return{root:{flexGrow:1},button:{alignContent:"center",alignItems:"flex-start",justify:"center",marginTop:e.spacing(1),marginBottom:e.spacing(2),borderRadius:20,padding:"0.25rem 2rem"},rsvpCount:{paddingBottom:1}}})),Ke=(Object(T.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}}),H.a.database());function Ve(e){return Object(W.jsx)(B.a,Object(b.a)({elevation:6,variant:"filled"},e))}var Je=!1;function Ue(e,t){console.log(e);var n=H.a.auth().currentUser;console.log(typeof t),n&&(t.includes(n.uid)?Je=!0:(t.push(n.uid),function(e,t){Ke.ref("events/"+t+"/").update({rsvpList:e})}(t,e)))}var Ye=function(e){var t=qe(),n=i.a.useState(!1),a=Object(u.a)(n,2),c=a[0],r=a[1],o=i.a.useState(!1),s=Object(u.a)(o,2),l=s[0],d=s[1],j=i.a.useState(!1),b=Object(u.a)(j,2),m=b[0],h=b[1],p=function(e,t){"clickaway"!==t&&d(!1)},g=Object(T.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}});function x(){r(!0)}function O(){Ue(e.eventID,e.rsvpList),console.log(Je),!1===Je?(d(!0),x(),e.rsvpList.length=e.rsvpList.length+1):(h(!0),x())}var y=Object(W.jsx)(i.a.Fragment,{children:Object(W.jsx)(L.a,{theme:g,children:Object(W.jsx)(f.a,{variant:"contained",disabled:c,className:t.button,size:"small",color:"primary",onClick:function(){O()},children:"RSVP"})})});return Object(W.jsx)("div",{children:Object(W.jsx)(L.a,{theme:g,children:Object(W.jsx)(v.a,{component:"div",align:"center",children:Object(W.jsxs)("div",{children:[y,Object(W.jsx)(I.a,{autoHideDuration:2e3,open:l,onClose:p,children:Object(W.jsx)(Ve,{onClose:p,severity:"success",children:"You're on the list! \ud83d\udc4d"})}),Object(W.jsx)(I.a,{autoHideDuration:2e3,open:m,onClose:p,children:Object(W.jsx)(Ve,{onClose:p,severity:"error",children:"You've already RSVP'd"})})]})})})})},Qe=Object(N.a)((function(e){return{root:{flexGrow:1},cardcomponent:{width:"82%"},username:{textAlign:"left"},rightAlignText:{textAlign:"right",justifyContent:"center"},leftAlignText:{textAlign:"left",justifyContent:"center",paddingLeft:10},cardLooks:{borderRadius:12},cardTitle:{paddingLeft:10},cardSubtitle:{paddingLeft:5},media:{height:170},titleIcon:{paddingTop:7},locationSubtitle:{paddingLeft:10},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},rsvpCount:{paddingBottom:5}}})),Xe=Object(T.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}});function Ze(e){var t="",n=Math.round(0+2*Math.random());return"Study Sesh"===e&&(t=0===n?Ne:1===n?Te:Le),"House Party"===e&&(t=0===n?Se:1===n?ze:De),"Campus Event"===e&&(t=0===n?Ee:1===n?Be:We),t}function $e(e){var t="";return"Study Sesh"===e&&(t=Object(W.jsx)(Fe.a,{})),"House Party"===e&&(t=Object(W.jsx)(Pe.a,{})),"Campus Event"===e&&(t=Object(W.jsx)(Ge.a,{})),t}var _e=function(e){var t=Qe(),n=i.a.useState(!1),a=Object(u.a)(n,2);a[0],a[1];return Object(W.jsxs)("div",{className:t.cardcomponent,children:[Object(W.jsxs)(ve.a,{variant:"outlined",className:t.cardLooks,children:[Object(W.jsx)(L.a,{theme:Xe,children:Object(W.jsx)(ye.a,{className:t.media,image:Ze(e.type),title:"Test"})}),Object(W.jsxs)(we.a,{children:[Object(W.jsxs)(m.a,{container:!0,direction:"row-reverse",justifyContent:"flex-end",alignItems:"center",wrap:"nowrap",children:[Object(W.jsx)(m.a,{item:!0,className:"".concat(t.cardTitle," ","heading"),children:e.name}),Object(W.jsx)(m.a,{item:!0,className:"".concat(t.titleIcon," ","subheading"),children:$e(e.type)})]}),Object(W.jsxs)(m.a,{container:!0,direction:"row-reverse",justifyContent:"flex-end",alignItems:"center",wrap:"nowrap",children:[Object(W.jsx)(m.a,{item:!0,className:"".concat(t.locationSubtitle," ","subheading"),children:e.location}),Object(W.jsx)(Ie.a,{})]}),Object(W.jsx)(m.a,{container:!0,direction:"row-reverse",justifyContent:"flex-end",alignItems:"center",wrap:"nowrap",children:Object(W.jsx)(m.a,{item:!0,className:"".concat(t.cardSubtitle," ","subheading"),children:e.time})}),"\xa0",Object(W.jsxs)(m.a,{container:!0,direction:"row-reverse",justifyContent:"flex-end",alignItems:"center",wrap:"nowrap",children:[Object(W.jsx)(m.a,{item:!0,className:"".concat(t.leftAlignText," ","subheading"),children:e.email}),Object(W.jsx)(Me.a,{})]})]}),Object(W.jsxs)(Ce.a,{children:[Object(W.jsx)(Ye,{eventID:e.eventID,rsvpList:e.rsvpList}),"\xa0 \xa0",Object(W.jsx)(m.a,{item:!0,className:t.rsvpCount,children:e.rsvpList.length})]})]}),"\xa0"]})},et=n(124),tt=n.n(et),nt=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1];function c(e){var t=new Date(e);return tt()(t).format("MMMM Do, h:mm a")}return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new Date).setHours(t.getHours()-2),n=t.getTime(),console.log(t),H.a.database().ref("events").startAfter(n).orderByChild("eventTime").once("value").then((function(e){var t=[];e.forEach((function(e){t.push(e.val())})),i(t)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log("eventsList",n),Object(W.jsx)(W.Fragment,{children:Object.values(n).map((function(e){return Object(W.jsx)(_e,{name:e.eventName,time:c(e.eventTime),location:e.eventLocation,type:e.eventType,email:e.hostEmail,rsvpList:e.rsvpList,eventID:e.id})}))})},at=Object(N.a)((function(e){return{root:{flexGrow:0}}})),it=Object(T.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}}),ct=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],i=t[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H.a.auth().onAuthStateChanged((function(e){e?(i(e.uid),console.log(e.uid)):i("")}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var c=at(),r=Object(s.f)();return Object(W.jsxs)("div",{className:c.root,children:[""===n&&Object(W.jsx)(m.a,{container:!0,direction:"column",justifyContent:"center",children:Object(W.jsxs)(v.a,{component:"div",align:"center",style:{height:"100vh"},children:[Object(W.jsx)(Oe,{}),"\xa0",Object(W.jsxs)(m.a,{container:!0,spacing:2,direction:"column",alignItems:"center",justify:"center",children:[Object(W.jsx)(v.a,{variant:"h5",children:"Please log in to view awesome K events!"}),"\xa0",Object(W.jsx)(v.a,{variant:"h6",children:"If you've logged in, try again in a non-private window."}),"\xa0",Object(W.jsx)(L.a,{theme:it,children:Object(W.jsx)(m.a,{item:!0,children:Object(W.jsx)(f.a,{size:"large",variant:"outlined",color:"primary",className:"subheading",style:{borderRadius:20,padding:"0.25rem 2rem"},onClick:function(){return r.push("/login")},children:"Login"})})})]})]})}),""!==n&&Object(W.jsx)(m.a,{container:!0,direction:"column",justifyContent:"center",children:Object(W.jsxs)(v.a,{component:"div",align:"center",style:{height:"100vh"},children:[Object(W.jsx)(Oe,{}),"\xa0",Object(W.jsx)(m.a,{container:!0,spacing:2,direction:"column",alignItems:"center",justify:"center",children:Object(W.jsx)(nt,{})}),Object(W.jsx)(m.a,{item:!0,children:Object(W.jsx)(oe,{})})]})})]})},rt=Object(T.a)({palette:{primary:{main:"#EE6C4D",light:"#ff9b79",dark:"#b53a22"},secondary:{main:"#4C5760",light:"#78848d",dark:"#242e36"}}});function ot(){return Object(W.jsx)(L.a,{theme:rt,children:Object(W.jsx)(o.a,{children:Object(W.jsxs)(s.c,{children:[Object(W.jsxs)(s.a,{exact:!0,path:"/",children:[Object(W.jsx)(F,{})," "]}),Object(W.jsxs)(s.a,{exact:!0,path:"/login",children:[Object(W.jsx)(P,{})," "]}),Object(W.jsxs)(s.a,{exact:!0,path:"/home",children:[Object(W.jsx)(ct,{})," "]}),Object(W.jsx)(s.a,{exact:!0,path:"/splashscreen",children:Object(W.jsx)(F,{})})]})})})}var st=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,249)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(W.jsx)(i.a.StrictMode,{children:Object(W.jsx)(ot,{})}),document.getElementById("root")),st()}},[[178,1,2]]]);
//# sourceMappingURL=main.d21253bb.chunk.js.map