"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4633],{48173:function(e,t,r){var n=r(85893),a=r(67294),s=r(35064),o=r(11355);t.Z=function(e){var t=e.width,r=void 0===t?56:t,i=e.button,l=e.body;return(0,n.jsxs)(s.v,{as:"div",className:"relative text-left h-10 inline-block",children:[(0,n.jsx)(s.v.Button,{className:"w-full rounded-md shadow-sm text-sm font-medium text-gray-700 focus:outline-none",children:i}),(0,n.jsx)(o.u,{as:a.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,n.jsx)(s.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-".concat(r," focus:outline-none z-40"),children:(0,n.jsx)("div",{className:"",children:l})})})]})}},3137:function(e,t,r){var n=r(85893),a=r(96267),s=r(80471),o=r(31567);t.Z=function(e){var t=e.show_modal,r=e.setShowModal,i=e.onConfirm,l=void 0===i?function(){}:i,u=e.title,c=void 0===u?"Delete Item?":u,d=e.subtitle,m=void 0===d?"Are you sure you want to delete this item?":d,f=(0,o.$)().t;return(0,n.jsx)(a.Z,{show_modal:t,setShowModal:r,full_content:(0,n.jsxs)("div",{className:"inline-block w-full max-w-xl p-4 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg",children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(s.Fk5,{onClick:function(){return r(!1)},className:"absolute top-0 right-0 text-3xl cursor-pointer text-gray-600"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-center text-xl md:text-3xl font-semibold py-2 md:py-5 text-gray-700",children:f(c)}),(0,n.jsx)("div",{className:"text-center text-sm md:text-xl font-medium py-2 md:py-5 text-gray-700",children:f(m)})]})]}),(0,n.jsxs)("div",{className:"mt-2 md:mt-4 w-full flex justify-center",children:[(0,n.jsx)("button",{onClick:function(){return r(!1)},type:"button",className:"mr-4 inline-flex justify-center px-4 py-2 w-1/2 md:w-24 text-sm font-semibold bg-gray-300 hover:bg-gray-400 text-gray-600 border border-transparent rounded-md",children:f("No")}),(0,n.jsx)("button",{onClick:function(){l(),r(!1)},type:"button",className:"inline-flex justify-center px-4 py-2 w-1/2 md:w-24 text-sm font-semibold text-white bg-red-600 hover:bg-red-500 border border-transparent rounded-md",children:f("Yes")})]})]})})}},94633:function(e,t,r){r.r(t);var n=r(85893),a=r(63750),s=r(48173),o=r(46389),i=r(70601),l=r(3137),u=r(67294),c=r(74995),d=r(11163),m=r(31567);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}t.default=function(e){var t=e.addresses,r=(0,u.useState)(!1),f=r[0],v=r[1],x=(0,u.useState)(!1),y=x[0],b=x[1],h=(0,u.useState)(null),g=h[0],I=h[1],R=(0,u.useState)(null),w=R[0],S=(R[1],(0,o.ZP)()),k=S.changeEditAddressFormValue,_=S.changeEditAddressLabelType,N=(0,c.ZP)(),j=N.address_source,C=N.setCreateCardForm,P=N.create_card_form,M=N.setBillAddress,T=N.setShipAddress,D=(0,d.useRouter)(),E=(0,m.$)().t;return(0,n.jsxs)("div",{className:"space-y-3",children:[null===t||void 0===t?void 0:t.map((function(e,t){return(0,n.jsxs)("div",{onClick:function(){(null===j||void 0===j?void 0:j.is_from_create)&&("billing"===j.type?(M(e),C(p({},P,{bill_name:e.name,bill_phone:e.phone,bill_postcode:e.post_code,bill_city:e.city,bill_address:e.address,bill_address_type:e.type}))):(T(e),C(p({},P,{ship_name:e.name,ship_phone:e.phone,ship_postcode:e.post_code,ship_city:e.city,ship_address:e.address,ship_address_type:e.type}))),D.back())},className:"relative p-3 border rounded text-gray-500 ".concat((null===j||void 0===j?void 0:j.is_from_create)&&"cursor-pointer"),children:[!(null===j||void 0===j?void 0:j.is_from_create)&&(0,n.jsx)("div",{className:"absolute top-2 right-2",children:(0,n.jsx)(s.Z,{width:48,button:(0,n.jsx)(a.FQA,{className:"text-xl text-gray-800"}),body:(0,n.jsxs)("div",{className:"py-1 bg-white shadow-c1 rounded-md",children:[(0,n.jsx)("div",{onClick:function(){return function(e){b(!0),I(e.id),k("name",e.name),k("address",e.address),k("city",e.city),k("post_code",e.post_code),k("phone",e.phone),"home"==e.type?_("Home"):"office"==e.type?_("Office"):_("Others")}(e)},className:"py-2 px-5 hover:bg-gray-200 cursor-pointer",children:"Edit"}),(0,n.jsx)("div",{onClick:function(){return t=e.id,I(t),void v(!0);var t},className:"py-2 px-5 hover:bg-red-200 hover:text-red-600 cursor-pointer",children:"Delete"})]})})}),(0,n.jsx)("div",{className:"text-lg font-semibold text-gray-800 mb-2",children:e.name}),(0,n.jsx)("div",{className:"",children:e.post_code}),(0,n.jsx)("div",{className:"",children:e.phone}),(0,n.jsx)("div",{className:"",children:e.address}),(0,n.jsx)("div",{className:"capitalize",children:e.type})]},t)})),(0,n.jsx)(i.default,{onConfirm:function(e){b(!1),e.preventDefault(),(0,o.K$)({address_id:g})},address_id:g,show_modal:y,setShowModal:b}),(0,n.jsx)(l.Z,{address_id:g,address_type:w,show_modal:f,setShowModal:v,onConfirm:function(){return(0,o.uR)({address_id:g})},title:E("Delete Address?"),subtitle:E("Are you sure you want to delete this address?")})]})}},35064:function(e,t,r){r.d(t,{v:function(){return Z}});var n=r(67294),a=r(32984),s=r(12351),o=r(9362),i=r(94192),l=r(16723),u=r(23784),c=r(19946),d=r(61363);var m,f=((m=f||{})[m.First=0]="First",m[m.Previous=1]="Previous",m[m.Next=2]="Next",m[m.Last=3]="Last",m[m.Specific=4]="Specific",m[m.Nothing=5]="Nothing",m);function p(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),a=null!=n?n:-1,s=(()=>{switch(e.focus){case 0:return r.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=r.slice().reverse().findIndex(((e,r,n)=>!(-1!==a&&n.length-r-1>=a)&&!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 2:return r.findIndex(((e,r)=>!(r<=a)&&!t.resolveDisabled(e)));case 3:{let e=r.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:r.length-1-e}case 4:return r.findIndex((r=>t.resolveId(r)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===s?n:s}var v=r(64103),x=r(84575),y=r(4503),b=r(15466);var h=r(16567);function g(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";return"string"==typeof r&&"button"===r.toLowerCase()?"button":void 0}function I(e,t){let[r,a]=(0,n.useState)((()=>g(e)));return(0,l.e)((()=>{a(g(e))}),[e.type,e.as]),(0,l.e)((()=>{r||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")}),[r,t]),r}var R,w,S=r(51074),k=((w=k||{})[w.Open=0]="Open",w[w.Closed=1]="Closed",w),_=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(_||{}),N=((R=N||{})[R.OpenMenu=0]="OpenMenu",R[R.CloseMenu=1]="CloseMenu",R[R.GoToItem=2]="GoToItem",R[R.Search=3]="Search",R[R.ClearSearch=4]="ClearSearch",R[R.RegisterItem=5]="RegisterItem",R[R.UnregisterItem=6]="UnregisterItem",R);function j(e,t=(e=>e)){let r=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,n=(0,x.z2)(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),a=r?n.indexOf(r):null;return-1===a&&(a=null),{items:n,activeItemIndex:a}}let C={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var r;let n=j(e),a=p(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:a,activationTrigger:null!=(r=t.trigger)?r:1}},3:(e,t)=>{let r=""!==e.searchQuery?0:1,n=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(n))&&!e.dataRef.current.disabled})),s=a?e.items.indexOf(a):-1;return-1===s||s===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:s,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let r=j(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...r}},6:(e,t)=>{let r=j(e,(e=>{let r=e.findIndex((e=>e.id===t.id));return-1!==r&&e.splice(r,1),e}));return{...e,...r,activationTrigger:1}}},P=(0,n.createContext)(null);function M(e){let t=(0,n.useContext)(P);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return t}function T(e,t){return(0,a.E)(t.type,C,e,t)}P.displayName="MenuContext";let D=n.Fragment,E=(0,s.yV)((function(e,t){let r=(0,n.useReducer)(T,{menuState:1,buttonRef:(0,n.createRef)(),itemsRef:(0,n.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:o,itemsRef:i,buttonRef:l},c]=r,d=(0,u.T)(t);(0,y.O)([l,i],((e,t)=>{var r;0===o&&(c({type:1}),(0,x.sP)(t,x.tJ.Loose)||(e.preventDefault(),null==(r=l.current)||r.focus()))}));let m=(0,n.useMemo)((()=>({open:0===o})),[o]),f=e,p={ref:d};return n.createElement(P.Provider,{value:r},n.createElement(h.up,{value:(0,a.E)(o,{0:h.ZM.Open,1:h.ZM.Closed})},(0,s.sY)({ourProps:p,theirProps:f,slot:m,defaultTag:D,name:"Menu"})))})),F=(0,s.yV)((function(e,t){var r;let[a,o]=M("Menu.Button"),l=(0,u.T)(a.buttonRef,t),m=`headlessui-menu-button-${(0,c.M)()}`,p=(0,i.G)(),x=(0,n.useCallback)((e=>{switch(e.key){case d.R.Space:case d.R.Enter:case d.R.ArrowDown:e.preventDefault(),e.stopPropagation(),o({type:0}),p.nextFrame((()=>o({type:2,focus:f.First})));break;case d.R.ArrowUp:e.preventDefault(),e.stopPropagation(),o({type:0}),p.nextFrame((()=>o({type:2,focus:f.Last})))}}),[o,p]),y=(0,n.useCallback)((e=>{if(e.key===d.R.Space)e.preventDefault()}),[]),b=(0,n.useCallback)((t=>{if((0,v.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===a.menuState?(o({type:1}),p.nextFrame((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),t.stopPropagation(),o({type:0})))}),[o,p,a,e.disabled]),h=(0,n.useMemo)((()=>({open:0===a.menuState})),[a]),g=e,R={ref:l,id:m,type:I(e,a.buttonRef),"aria-haspopup":!0,"aria-controls":null==(r=a.itemsRef.current)?void 0:r.id,"aria-expanded":e.disabled?void 0:0===a.menuState,onKeyDown:x,onKeyUp:y,onClick:b};return(0,s.sY)({ourProps:R,theirProps:g,slot:h,defaultTag:"button",name:"Menu.Button"})})),O=s.AN.RenderStrategy|s.AN.Static,A=(0,s.yV)((function(e,t){var r,a;let[m,p]=M("Menu.Items"),v=(0,u.T)(m.itemsRef,t),x=(0,S.i)(m.itemsRef),y=`headlessui-menu-items-${(0,c.M)()}`,g=(0,i.G)(),I=(0,h.oJ)(),R=null!==I?I===h.ZM.Open:0===m.menuState;(0,n.useEffect)((()=>{let e=m.itemsRef.current;!e||0===m.menuState&&e!==(null==x?void 0:x.activeElement)&&e.focus({preventScroll:!0})}),[m.menuState,m.itemsRef,x]),function({container:e,accept:t,walk:r,enabled:a=!0}){let s=(0,n.useRef)(t),o=(0,n.useRef)(r);(0,n.useEffect)((()=>{s.current=t,o.current=r}),[t,r]),(0,l.e)((()=>{if(!e||!a)return;let t=(0,b.r)(e);if(!t)return;let r=s.current,n=o.current,i=Object.assign((e=>r(e)),{acceptNode:r}),l=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,!1);for(;l.nextNode();)n(l.currentNode)}),[e,a,s,o])}({container:m.itemsRef.current,enabled:0===m.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let w=(0,n.useCallback)((e=>{var t,r;switch(g.dispose(),e.key){case d.R.Space:if(""!==m.searchQuery)return e.preventDefault(),e.stopPropagation(),p({type:3,value:e.key});case d.R.Enter:if(e.preventDefault(),e.stopPropagation(),p({type:1}),null!==m.activeItemIndex){let{dataRef:e}=m.items[m.activeItemIndex];null==(r=null==(t=e.current)?void 0:t.domRef.current)||r.click()}(0,o.k)().nextFrame((()=>{var e;return null==(e=m.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case d.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),p({type:2,focus:f.Next});case d.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),p({type:2,focus:f.Previous});case d.R.Home:case d.R.PageUp:return e.preventDefault(),e.stopPropagation(),p({type:2,focus:f.First});case d.R.End:case d.R.PageDown:return e.preventDefault(),e.stopPropagation(),p({type:2,focus:f.Last});case d.R.Escape:e.preventDefault(),e.stopPropagation(),p({type:1}),(0,o.k)().nextFrame((()=>{var e;return null==(e=m.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case d.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(p({type:3,value:e.key}),g.setTimeout((()=>p({type:4})),350))}}),[p,g,m,x]),k=(0,n.useCallback)((e=>{if(e.key===d.R.Space)e.preventDefault()}),[]),_=(0,n.useMemo)((()=>({open:0===m.menuState})),[m]),N=e,j={"aria-activedescendant":null===m.activeItemIndex||null==(r=m.items[m.activeItemIndex])?void 0:r.id,"aria-labelledby":null==(a=m.buttonRef.current)?void 0:a.id,id:y,onKeyDown:w,onKeyUp:k,role:"menu",tabIndex:0,ref:v};return(0,s.sY)({ourProps:j,theirProps:N,slot:_,defaultTag:"div",features:O,visible:R,name:"Menu.Items"})})),L=n.Fragment,Q=(0,s.yV)((function(e,t){let{disabled:r=!1,...a}=e,[i,d]=M("Menu.Item"),m=`headlessui-menu-item-${(0,c.M)()}`,p=null!==i.activeItemIndex&&i.items[i.activeItemIndex].id===m,v=(0,n.useRef)(null),x=(0,u.T)(t,v);(0,l.e)((()=>{if(0!==i.menuState||!p||0===i.activationTrigger)return;let e=(0,o.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=v.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[v,p,i.menuState,i.activationTrigger,i.activeItemIndex]);let y=(0,n.useRef)({disabled:r,domRef:v});(0,l.e)((()=>{y.current.disabled=r}),[y,r]),(0,l.e)((()=>{var e,t;y.current.textValue=null==(t=null==(e=v.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[y,v]),(0,l.e)((()=>(d({type:5,id:m,dataRef:y}),()=>d({type:6,id:m}))),[y,m]);let b=(0,n.useCallback)((e=>{if(r)return e.preventDefault();d({type:1}),(0,o.k)().nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),[d,i.buttonRef,r]),h=(0,n.useCallback)((()=>{if(r)return d({type:2,focus:f.Nothing});d({type:2,focus:f.Specific,id:m})}),[r,m,d]),g=(0,n.useCallback)((()=>{r||p||d({type:2,focus:f.Specific,id:m,trigger:0})}),[r,p,m,d]),I=(0,n.useCallback)((()=>{r||!p||d({type:2,focus:f.Nothing})}),[r,p,d]),R=(0,n.useMemo)((()=>({active:p,disabled:r})),[p,r]);return(0,s.sY)({ourProps:{id:m,ref:x,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,disabled:void 0,onClick:b,onFocus:h,onPointerMove:g,onMouseMove:g,onPointerLeave:I,onMouseLeave:I},theirProps:a,slot:R,defaultTag:L,name:"Menu.Item"})})),Z=Object.assign(E,{Button:F,Items:A,Item:Q})}}]);