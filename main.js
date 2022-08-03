(()=>{"use strict";var e={192:(e,t,a)=>{a.d(t,{Z:()=>L});var r=a(81),o=a.n(r),n=a(645),d=a.n(n),i=a(667),c=a.n(i),m=new URL(a(610),a.b),l=new URL(a(292),a.b),s=new URL(a(892),a.b),f=new URL(a(918),a.b),u=new URL(a(865),a.b),p=new URL(a(536),a.b),h=new URL(a(852),a.b),v=new URL(a(715),a.b),g=d()(o()),b=c()(m),y=c()(l),x=c()(s),w=c()(f),j=c()(u),k=c()(p),N=c()(h),z=c()(v);g.push([e.id,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}.nav-add-menu{position:fixed;bottom:10vh;display:flex;flex-direction:column;width:50%;height:15vh;background-color:#57534e;font-family:"Quicksand";color:#fafafa;font-size:1.5rem}.nav-add-menu .nav-menu-add-i,.nav-add-menu .nav-menu-add-p{width:100%;height:7.5vh;padding:1rem 0 0 1rem;border-bottom:1px solid #fafafa}@media(min-width: 720px){.nav-add-menu{font-size:2.75rem}}.nav-proj-menu{position:fixed;bottom:10vh;right:0vh;display:flex;flex-direction:column;width:50%;height:15vh;background-color:#57534e;font-family:"Quicksand";color:#fafafa;font-size:1.5rem}.nav-proj-menu .proj-item{width:100%;height:7.5vh;padding:1rem 0 0 1rem;border-bottom:1px solid #fafafa}@media(min-width: 720px){.nav-proj-menu{font-size:2.5rem}}@font-face{font-family:"Saira";src:url('+b+') format("truetype");font-weight:600;font-style:normal}@font-face{font-family:"Quicksand";src:url('+y+') format("truetype");font-weight:400;font-style:normal}.header{position:fixed;top:0;width:100%;height:10vh;grid-area:header;background-color:#57534e;display:flex;align-items:center;justify-content:space-between}.header .header-icon{width:3rem;height:3rem;background-image:url('+x+');margin:0 0 0 2rem;filter:invert(100%) sepia(33%) saturate(97%) hue-rotate(171deg) brightness(113%) contrast(92%) drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4))}.header .header-text{color:#f5f5f5;font-size:3rem;font-family:"Saira";text-shadow:3px 3px 2px #1c1917;margin:0 2rem 0 0}@media(min-width: 720px){.header .header-icon{width:4rem;height:4rem}.header .header-text{font-size:4rem}}@media(min-width: 960px){.header{background-color:blue}}.nav{grid-area:nav;position:fixed;bottom:0;width:100%;height:10vh;background-color:#57534e;display:flex;align-items:center;justify-content:space-between}.nav .nav-add,.nav .nav-today,.nav .nav-week,.nav .nav-projects{width:3rem;height:3rem;margin:0 1rem 0 1rem;filter:invert(100%) sepia(33%) saturate(97%) hue-rotate(171deg) brightness(113%) contrast(92%) drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4))}.nav .nav-add{background-image:url('+w+")}.nav .nav-today{background-image:url("+j+")}.nav .nav-week{background-image:url("+k+")}.nav .nav-projects{background-image:url("+N+')}.nav .active{background-color:#e7e5e4}@media(min-width: 720px){.nav .nav-add,.nav .nav-today,.nav .nav-week,.nav .nav-projects{width:4.5rem;height:4.5rem}}.content-body{grid-area:con;background-color:#fafafa;font-size:2rem;color:#1c1917;margin:10vh 0 10vh 0;padding:1rem 0 0 0;display:grid;grid-template-rows:repeat(2, 1fr);grid-template-columns:repeat(2, 1fr)}.content-body .card-item{font-family:"Quicksand";justify-self:center;margin:0 0 1rem 0;width:20vh;height:15vh;background-color:#e7e5e4;border:3px solid #aea29e;display:grid;grid-template-rows:2,1fr;grid-template-columns:3,1fr 2fr 1fr;grid-template-areas:"text text text" "done date delete";justify-items:center;justify-content:space-between;align-items:end}.content-body .card-item .card-text{align-self:start;grid-area:text;font-size:1.25rem;margin:.5rem .5rem .5rem .5rem}.content-body .card-item .card-done{grid-area:done;justify-self:start;background-image:url('+x+");width:1.5rem;height:1.5rem;margin:0 0 .25rem .25rem}.content-body .card-item .card-date{grid-area:date;font-size:1.25rem;margin:0 0 .25rem 0}.content-body .card-item .card-delete{grid-area:delete;justify-self:end;background-image:url("+z+');width:1.5rem;height:1.5rem;margin:0 .25rem .25rem 0}@media(min-width: 720px){.content-body{display:grid;grid-template-rows:repeat(2, 1fr);grid-template-columns:repeat(2, 1fr)}.content-body .card-item{width:30vh;height:25vh;padding:0 0 .25rem 0}.content-body .card-item .card-text{font-size:2.75rem}.content-body .card-item .card-done{width:3.5rem;height:3.5rem}.content-body .card-item .card-date{font-size:2.75rem}.content-body .card-item .card-delete{width:3.5rem;height:3.5rem}}.modal-bg{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1c1917;opacity:.5}.modal-card{position:fixed;top:10rem;left:2.5rem;width:80%;height:60%;background-color:#fafafa;font-family:"Quicksand";border:1px solid #44403c;color:#fafafa}.modal-card .modal-card-header{background-color:#57534e;height:15%;font-size:2rem;display:flex;justify-content:center;align-items:center;gap:7rem}.modal-card .modal-card-header .modal-header-text{text-align:center}.modal-card .modal-card-header .modal-close-button{text-align:center;background-color:#57534e;color:#fafafa;font-size:2rem;width:2rem;height:2.5rem;border:none}.modal-card .modal-form{display:flex;flex-direction:column;align-items:flex-start;gap:.5rem;padding:1rem 0 0 .5rem;font-size:1.5rem;color:#1c1917}.modal-card .modal-form #itemName,.modal-card .modal-form #projName{font-family:"Quicksand";font-size:1.25rem}.modal-card .modal-form #itemDesc{font-family:"Quicksand";font-size:1.25rem;width:15rem;height:3rem}.modal-card .modal-form .item-dd-label{font-family:"Quicksand";font-size:1.25rem;margin-top:.5rem;margin-bottom:1.5rem}.modal-card .modal-form .item-submit,.modal-card .modal-form .proj-submit{font-family:"Quicksand";padding:.5rem;font-size:1.5rem;border:1px solid #44403c;border-radius:5px}.modal-card .modal-form #projName{margin-bottom:1.25rem}@media(min-width: 720px){.modal-card{left:5rem}.modal-card .modal-card-header{background-color:#57534e;justify-content:space-between;padding:0 2.5rem 0 2.5rem}.modal-card .modal-card-header .modal-header-text{font-size:4rem}.modal-card .modal-card-header .modal-close-button{width:4rem;height:4.5rem;font-size:4rem}.modal-card .modal-form{gap:.75rem;padding:2rem 0 0 1.5rem;font-size:2rem}.modal-card .modal-form #itemName,.modal-card .modal-form #projName{font-size:1.75rem}.modal-card .modal-form #itemDesc{font-size:1.75rem;width:21rem;height:7rem}.modal-card .modal-form .item-dd-label{font-size:1.75rem;margin-top:.5rem;margin-bottom:1rem}.modal-card .modal-form .item-submit,.modal-card .modal-form .proj-submit{padding:1rem;font-size:2.5rem}.modal-card .modal-form #projName{margin-bottom:1.25rem}}body{background-color:#fafafa;color:red}h1{background-color:#1c1917;color:red}@media(min-width: 720px){h1{background-color:#aea29e;color:blue}}@media(min-width: 960px){h1{background-color:#fafafa;color:green}}',""]);const L=g},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",r=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),r&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),r&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,r,o,n){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(d[c]=!0)}for(var m=0;m<e.length;m++){var l=[].concat(e[m]);r&&d[l[0]]||(void 0!==n&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),a&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=a):l[2]=a),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function a(e){for(var a=-1,r=0;r<t.length;r++)if(t[r].identifier===e){a=r;break}return a}function r(e,r){for(var n={},d=[],i=0;i<e.length;i++){var c=e[i],m=r.base?c[0]+r.base:c[0],l=n[m]||0,s="".concat(m," ").concat(l);n[m]=l+1;var f=a(s),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(u);else{var p=o(u,r);r.byIndex=i,t.splice(i,0,{identifier:s,updater:p,references:1})}d.push(s)}return d}function o(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,o){var n=r(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<n.length;d++){var i=a(n[d]);t[i].references--}for(var c=r(e,o),m=0;m<n.length;m++){var l=a(n[m]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}n=c}}},569:e=>{var t={};e.exports=function(e,a){var r=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var r="";a.supports&&(r+="@supports (".concat(a.supports,") {")),a.media&&(r+="@media ".concat(a.media," {"));var o=void 0!==a.layer;o&&(r+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),r+=a.css,o&&(r+="}"),a.media&&(r+="}"),a.supports&&(r+="}");var n=a.sourceMap;n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},292:(e,t,a)=>{e.exports=a.p+"cf52df73d8529b4815ed.ttf"},610:(e,t,a)=>{e.exports=a.p+"df2d6ba626959a1a4d4f.ttf"},865:(e,t,a)=>{e.exports=a.p+"f2e840a5539d81b58e2a.svg"},536:(e,t,a)=>{e.exports=a.p+"d052e8f6425f93450800.svg"},852:(e,t,a)=>{e.exports=a.p+"c30b3c5ea97e13620ba0.svg"},892:(e,t,a)=>{e.exports=a.p+"2a5ec5a1d098fe54bc43.svg"},715:(e,t,a)=>{e.exports=a.p+"3672ce28d245c8f7bbef.svg"},918:(e,t,a)=>{e.exports=a.p+"311e1a88036bbf36b279.svg"}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={id:r,exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),a.b=document.baseURI||self.location.href,a.nc=void 0,(()=>{var e=a(379),t=a.n(e),r=a(795),o=a.n(r),n=a(569),d=a.n(n),i=a(565),c=a.n(i),m=a(216),l=a.n(m),s=a(589),f=a.n(s),u=a(192),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=d().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),t()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals;const h=(e,t,a,r=null)=>{const o=document.createElement(`${t}`);o.classList.add(`${a}`),o.innerHTML=r,e.appendChild(o)},v=e=>document.querySelector(`.${e}`),g=(()=>{const e=document.getElementById("content");h(e,"div","header"),h(e,"div","nav"),h(e,"div","content-body");const t=v("header");h(t,"div","header-icon"),h(t,"div","header-text","Done.");const a=v("content-body");h(a,"div","card-item");const r=v("card-item");h(r,"div","card-text","Example card"),h(r,"div","card-done"),h(r,"div","card-date","Jul 31"),h(r,"div","card-delete");const o=v("nav");["nav-add","nav-today","nav-week","nav-projects"].map((e=>{h(o,"div",`${e}`,null)}));const n=v("nav-add"),d=v("nav-projects"),i=v("nav-today"),c=v("nav-week");return{getContent:e,getNavAdd:n,getNavProjects:d,getNavToday:i,getNavWeek:c,navSelectors:[n,d,i,c]}})(),b=(e=null,t)=>{for(const[a,r]of Object.entries(t))e.setAttribute(`${a}`,`${r}`)},y={action:"#",method:"post",id:"add-form"},x={action:"#",method:"post",id:"proj-form"},w=(e,t,a,r,o)=>{e.setAttribute("type",t),e.setAttribute("name",a),e.setAttribute("id",r),e.setAttribute("placeholder",o),e.setAttribute("required","")},j={render:()=>{h(g.getContent,"div","modal-bg"),h(g.getContent,"div","modal-card");const e=v("modal-card");h(e,"div","modal-card-header");const t=v("modal-card-header");h(t,"div","modal-header-text","Create..."),h(t,"button","modal-close-button","x"),h(e,"div","modal-form-container");const a=v("modal-form-container");h(a,"form","modal-form"),v("modal-bg").classList.add("m-close"),v("modal-close-button").classList.add("m-close"),document.querySelectorAll(".m-close").forEach((e=>{e.addEventListener("click",(()=>{(()=>{const e=v("modal-bg"),t=v("modal-card");e.parentNode.removeChild(e),t.parentNode.removeChild(t)})()}))}))},newItem:()=>{const e=v("modal-form");b(e,y),h(e,"label","item-name-label","Task Name: "),v("item-name-label").htmlFor="itemName",h(e,"input","item-name");const t=v("item-name");w(t,"text","item_name","itemName","e.g. Cook Dinner"),h(e,"label","item-desc-label","Description: "),v("item-desc-label").htmlFor="itemDesc",h(e,"textarea","item-desc");const a=v("item-desc");w(a,"textarea","item_desc","itemDesc","Notes..."),h(e,"label","item-dropdown-label","Project: "),v("item-dropdown-label").htmlFor="itemDd",h(e,"select","item-dd-label");const r=v("item-dd-label");h(r,"option","test","Default"),h(e,"button","item-submit","Submit"),v("item-submit").setAttribute("id","submit")},newProject:()=>{const e=v("modal-form");b(e,x),h(e,"label","proj-name-label","Project Name: "),v("proj-name-label").htmlFor="projName",h(e,"input","proj-name");const t=v("proj-name");w(t,"text","proj_name","projName","e.g. My Cool Project"),h(e,"button","proj-submit","Submit"),v("proj-submit").setAttribute("id","submit")}},k={isActive:!1,open:e=>{e.classList.add("active")},close:e=>{e.classList.remove("active")}},N=e=>{if("nav-add active"==e.classList){h(g.getContent,"div","nav-add-menu");const e=v("nav-add-menu");h(e,"div","nav-menu-add-i","+ New Item"),v("nav-menu-add-i").addEventListener("click",(()=>{j.render(),j.newItem()})),h(e,"div","nav-menu-add-p","+ New Project"),v("nav-menu-add-p").addEventListener("click",(()=>{j.render(),j.newProject()}))}else if("nav-today active"==e.classList)console.log("i'm under construction!"),k.close(e);else if("nav-week active"==e.classList)console.log("i'm under construction too!"),k.close(e);else if("nav-projects active"==e.classList){console.log("i'm being worked on!"),h(g.getContent,"div","nav-proj-menu");const e=v("nav-proj-menu");h(e,"div","proj-item","All Projects"),h(e,"div","proj-item","Test Project")}},z=()=>{const e=v("nav-add-menu"),t=v("nav-proj-menu");null!==e?e.parentNode.removeChild(e):null!==t&&t.parentNode.removeChild(t)};g.navSelectors.map((e=>{e.addEventListener("click",(()=>{k.isActive?k.isActive&&(k.close(e),k.isActive=!1,z()):(k.open(e),k.isActive=!0,N(e),setTimeout((()=>{k.isActive&&(k.close(e),k.isActive=!1,z())}),"5000"))}))})),console.log("I'm from index"),j.render(),j.newItem()})()})();