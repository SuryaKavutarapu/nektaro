"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7428],{7428:(W,x,c)=>{c.r(x),c.d(x,{ion_datetime_button:()=>B});var f=c(467),d=c(4261),v=c(4920),b=c(4929),C=c(333),P=c(9483),l=c(3761);const B=(()=>{let g=class{constructor(s){var r=this;(0,d.r)(this,s),this.datetimeEl=null,this.overlayEl=null,this.getParsedDateValues=e=>null==e?[]:Array.isArray(e)?e:[e],this.setDateTimeText=()=>{var e,i,a,n,o;const{datetimeEl:m,datetimePresentation:I}=this;if(!m)return;const{value:M,locale:u,formatOptions:t,hourCycle:A,preferWheel:N,multiple:j,titleSelectedDatesFormatter:_}=m,h=this.getParsedDateValues(M),y=(0,l.s)(h.length>0?h:[(0,l.x)()]);if(!y)return;const p=y[0],E=(0,l.L)(u,A);switch(this.dateText=this.timeText=void 0,I){case"date-time":case"time-date":const T=(0,l.N)(u,p,null!==(e=null==t?void 0:t.date)&&void 0!==e?e:{month:"short",day:"numeric",year:"numeric"}),k=(0,l.M)(u,p,E,null==t?void 0:t.time);N?this.dateText=`${T} ${k}`:(this.dateText=T,this.timeText=k);break;case"date":if(j&&1!==h.length){let D=`${h.length} days`;if(void 0!==_)try{D=_(h)}catch(L){(0,b.a)("Exception in provided `titleSelectedDatesFormatter`: ",L)}this.dateText=D}else this.dateText=(0,l.N)(u,p,null!==(i=null==t?void 0:t.date)&&void 0!==i?i:{month:"short",day:"numeric",year:"numeric"});break;case"time":this.timeText=(0,l.M)(u,p,E,null==t?void 0:t.time);break;case"month-year":this.dateText=(0,l.N)(u,p,null!==(a=null==t?void 0:t.date)&&void 0!==a?a:{month:"long",year:"numeric"});break;case"month":this.dateText=(0,l.N)(u,p,null!==(n=null==t?void 0:t.time)&&void 0!==n?n:{month:"long"});break;case"year":this.dateText=(0,l.N)(u,p,null!==(o=null==t?void 0:t.time)&&void 0!==o?o:{year:"numeric"})}},this.waitForDatetimeChanges=(0,f.A)(function*(){const{datetimeEl:e}=r;return e?new Promise(i=>{(0,v.a)(e,"ionRender",i,{once:!0})}):Promise.resolve()}),this.handleDateClick=function(){var e=(0,f.A)(function*(i){const{datetimeEl:a,datetimePresentation:n}=r;if(!a)return;let o=!1;switch(n){case"date-time":case"time-date":!a.preferWheel&&"date"!==a.presentation&&(a.presentation="date",o=!0)}r.selectedButton="date",r.presentOverlay(i,o,r.dateTargetEl)});return function(i){return e.apply(this,arguments)}}(),this.handleTimeClick=e=>{const{datetimeEl:i,datetimePresentation:a}=this;if(!i)return;let n=!1;switch(a){case"date-time":case"time-date":"time"!==i.presentation&&(i.presentation="time",n=!0)}this.selectedButton="time",this.presentOverlay(e,n,this.timeTargetEl)},this.presentOverlay=function(){var e=(0,f.A)(function*(i,a,n){const{overlayEl:o}=r;o&&("ION-POPOVER"===o.tagName?(a&&(yield r.waitForDatetimeChanges()),o.present(Object.assign(Object.assign({},i),{detail:{ionShadowTarget:n}}))):o.present())});return function(i,a,n){return e.apply(this,arguments)}}(),this.datetimePresentation="date-time",this.dateText=void 0,this.timeText=void 0,this.datetimeActive=!1,this.selectedButton=void 0,this.color="primary",this.disabled=!1,this.datetime=void 0}componentWillLoad(){var s=this;return(0,f.A)(function*(){const{datetime:r}=s;if(!r)return void(0,b.a)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",s.el);const e=s.datetimeEl=document.getElementById(r);if(!e)return void(0,b.a)(`No ion-datetime instance found for ID '${r}'.`,s.el);if("ION-DATETIME"!==e.tagName)return void(0,b.a)(`Expected an ion-datetime instance for ID '${r}' but received '${e.tagName.toLowerCase()}' instead.`,e);new IntersectionObserver(n=>{s.datetimeActive=n[0].isIntersecting},{threshold:.01}).observe(e);const a=s.overlayEl=e.closest("ion-modal, ion-popover");a&&a.classList.add("ion-datetime-button-overlay"),(0,v.c)(e,()=>{const n=s.datetimePresentation=e.presentation||"date-time";switch(s.setDateTimeText(),(0,v.a)(e,"ionValueChange",s.setDateTimeText),n){case"date-time":case"date":case"month-year":case"month":case"year":s.selectedButton="date";break;case"time-date":case"time":s.selectedButton="time"}})})()}render(){const{color:s,dateText:r,timeText:e,selectedButton:i,datetimeActive:a,disabled:n}=this,o=(0,P.b)(this);return(0,d.h)(d.f,{key:"26e606af6f067a5774db37ed41387ffebb941777",class:(0,C.c)(s,{[o]:!0,[`${i}-active`]:a,"datetime-button-disabled":n})},r&&(0,d.h)("button",{key:"6b7aa66a15b4a6d89d411e40586de28a2ac9f343",class:"ion-activatable",id:"date-button","aria-expanded":a?"true":"false",onClick:this.handleDateClick,disabled:n,part:"native",ref:m=>this.dateTargetEl=m},(0,d.h)("slot",{key:"d42f34fd167be34386319e7ea788c2ab03c90b87",name:"date-target"},r),"md"===o&&(0,d.h)("ion-ripple-effect",{key:"47dd34f3c2799064cac7a5fe25440ecc043950f0"})),e&&(0,d.h)("button",{key:"d77424a20fae320654774c7bfc8a8e2369d3afe3",class:"ion-activatable",id:"time-button","aria-expanded":a?"true":"false",onClick:this.handleTimeClick,disabled:n,part:"native",ref:m=>this.timeTargetEl=m},(0,d.h)("slot",{key:"ac088a78141bb53f2efd48dd7745f8954c92378b",name:"time-target"},e),"md"===o&&(0,d.h)("ion-ripple-effect",{key:"b3a58ddfd28b9396e2518ffd62a045ec13d8b9d0"})))}get el(){return(0,d.i)(this)}};return g.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:7px;padding-bottom:7px}:host button.ion-activated{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, var(--ion-background-color-step-300, #edeef0));color:var(--ion-text-color, #000);font-family:inherit;font-size:1rem;cursor:pointer;overflow:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}:host button{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}"},g})()}}]);