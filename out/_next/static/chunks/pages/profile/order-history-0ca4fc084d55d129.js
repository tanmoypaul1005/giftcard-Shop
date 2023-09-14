(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2214],{2774:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/order-history",function(){return s(67111)}])},48173:function(e,t,s){"use strict";var n=s(85893),r=s(67294),i=s(35064),l=s(11355);t.Z=function(e){var t=e.width,s=void 0===t?56:t,d=e.button,a=e.body;return(0,n.jsxs)(i.v,{as:"div",className:"relative text-left h-10 inline-block",children:[(0,n.jsx)(i.v.Button,{className:"w-full rounded-md shadow-sm text-sm font-medium text-gray-700 focus:outline-none",children:d}),(0,n.jsx)(l.u,{as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,n.jsx)(i.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-".concat(s," focus:outline-none z-40"),children:(0,n.jsx)("div",{className:"",children:a})})})]})}},80565:function(e,t,s){"use strict";var n=s(85893),r=s(11163),i=s(41664),l=s.n(i),d=s(47921),a=s(50458),c=s(18442),o=s(67294),u=s(2891),m=s(74995),x=s(31567);function h(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}t.Z=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));var t,s,i=(0,o.useState)(!1),l=i[0],v=i[1],j=(0,r.useRouter)(),p=(0,u.ZP)().user_profile_api_data,b=(0,m.ZP)(),y=b.setAddressSource,N=b.address_source,w=(0,x.$)().t,g=(0,u.sR)();return(0,o.useEffect)((function(){g=(0,u.sR)()}),[p]),(0,n.jsxs)("div",{className:"bg-white shadow h-screen w-[18rem] hidden md:block",children:[(0,n.jsxs)("div",{className:"pt-0",children:[(0,n.jsxs)("div",{onClick:function(){return j.push("/profile")},className:"py-5 flex items-center space-x-3 border-b mb-8 px-5 cursor-pointer",children:[(0,n.jsx)("div",{className:"bg-gray-400 h-8 w-8 relative overflow-hidden rounded-full",children:(0,n.jsx)("img",{className:"h-full w-full rounded-full",src:null!==(t=null===g||void 0===g?void 0:g.image_url)&&void 0!==t?t:"/Images/profile.png",alt:"Post Card Image",layout:"fill",objectFit:"cover"})}),(0,n.jsx)("div",{className:"text-md inline truncate w-3/4 ".concat("/profile"==j.pathname&&"text-cBrand font-bold"),children:null!==(s=null===g||void 0===g?void 0:g.name)&&void 0!==s?s:"NA"})]}),(0,n.jsxs)("div",{className:"flex flex-col justify-between space-y-4 text-md pb-3",children:[(0,n.jsx)(f,{title:w("Account Settings"),link:"/profile/account-settings"}),(0,n.jsx)(f,{onClick:function(){return y(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),n.forEach((function(t){h(e,t,s[t])}))}return e}({},N,{is_from_create:!1}))},title:w("Address Book"),link:"/profile/address-book"}),(0,n.jsx)(f,{title:w("Order History"),link:"/profile/order-history"}),(0,n.jsx)("div",{onClick:function(){return v(!0)},className:"p-2 px-5 cp",children:w("Logout")})]})]}),(0,n.jsx)(d.default,{show_modal:l,setShowModal:v,onConfirm:function(){try{localStorage.removeItem("postcard_token"),(0,c.Z)({token:null}),v(!1),j.push("/"),(0,a.C)({message:w("Logged out successfully!"),type:"success"})}catch(e){(0,a.C)({message:w("An error occurred!"),type:"error"})}}})]})};var f=function(e){var t=e.title,s=e.link,i=e.onClick,d=void 0===i?function(){}:i,a=(0,r.useRouter)();return(0,n.jsx)("div",{onClick:d,className:"p-2 px-5 cp ".concat(a.pathname=="".concat(s)&&"bg-cTintBrick text-cBrand font-fw600"),children:(0,n.jsx)(l(),{href:s,children:t})})}},5806:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(85893),r=(s(67294),s(81873));function i(e){var t=e.message,s=void 0===t?"No Data Available!":t,i=e.onClick,l=void 0===i?function(){}:i;return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-10 w-full h-full",children:[(0,n.jsx)("div",{className:"text-center text-2xl font-bold",children:s}),(0,n.jsx)("button",{onClick:l,type:"button",className:"mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:(0,n.jsxs)("div",{className:"flex flex-row justify-center space-x-2 items-center",children:[(0,n.jsx)(r.jq8,{}),(0,n.jsx)("p",{children:"Reload"})]})})]})}},86848:function(e,t,s){"use strict";s.r(t);var n=s(85893),r=s(8193),i=s(48173);t.default=function(){return(0,n.jsx)(i.Z,{width:48,button:(0,n.jsxs)("button",{className:"px-3 font-semibold border border-gray-300 hover:border-[#73A3E7] bg-blueGray-50 hover:bg-[#D0E0F7] text-gray-700 transition-all ease-in h-10 rounded-md text-md focus:outline-none flex justify-center items-center",children:["Today",(0,n.jsx)(r.i0B,{className:"text-md ml-2"})]}),body:(0,n.jsxs)("div",{className:"py-1 bg-white shadow-c1 rounded-md",children:[(0,n.jsx)("div",{className:"py-2 px-3 hover:bg-gray-200 cursor-pointer",children:"Today"}),(0,n.jsx)("div",{className:"py-2 px-3 hover:bg-gray-200 cursor-pointer",children:"Tomorrow"}),(0,n.jsx)("div",{className:"py-2 px-3 hover:bg-red-200 hover:text-red-600 cursor-pointer",children:"Yesterday"})]})})}},12135:function(e,t,s){"use strict";s.r(t);var n=s(85893),r=s(67294),i=s(71495),l=s(51649),d=s(77747);t.default=function(e){var t=e.show_modal,s=e.setShowModal,a=(0,r.useState)(!1),c=a[0],o=a[1],u=(0,d.ZP)().selected_order;return(0,r.useEffect)((function(){console.log("DetailsModal: ",u)}),[u]),(0,n.jsxs)("div",{className:"absolute ".concat(t?"right-0":"right-[100rem]"," top-0 transition-all ease-in pt-16 w-screen h-screen bg-white p-5 md:hidden"),children:[!c&&(0,n.jsxs)("div",{className:"pb-10",children:[(0,n.jsxs)("div",{onClick:function(){return s(!1)},className:"py-4 border-b mb-5 md:hidden flex items-center space-x-3 cp",children:[(0,n.jsx)(l.u1R,{className:"text-lg text-gray-600"}),(0,n.jsx)("div",{className:"text-xl font-bold inline truncate",children:"Genie Art Details"})]}),(0,n.jsx)("div",{className:"font-medium text-lg mb-5 mt-7",children:"Delivery Details"}),(0,n.jsxs)("div",{className:"border p-3 rounded-md space-y-2",children:[(0,n.jsx)("div",{children:"Banu Elson"}),(0,n.jsx)("div",{children:"orders@banuelson.com"}),(0,n.jsx)("div",{children:"+49 179 111 1010"}),(0,n.jsx)("div",{children:"Leibnizstra\xdfe 16, Wohnheim 6, No: 8X Clausthal-Zellerfeld, Germany"})]}),(0,n.jsx)("div",{className:"font-medium text-lg mb-5 mt-7",children:"Delivery Type"}),(0,n.jsxs)("div",{className:"border p-3 rounded-md space-y-2",children:[(0,n.jsx)("div",{children:"Home Delivery"}),(0,n.jsx)("div",{children:"Delivery Date: 12.10.2022"}),(0,n.jsx)("div",{children:"Delivery Time: 8:00 AM"})]}),(0,n.jsx)("div",{className:"font-medium text-lg mb-5 mt-7",children:"Summery"}),(0,n.jsxs)("div",{className:"border rounded-lg p-3 text-gray-700",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,n.jsx)("div",{children:"Sub Total"}),(0,n.jsx)("div",{children:"$300.00"})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,n.jsx)("div",{children:"Authority Fee"}),(0,n.jsx)("div",{children:"$10.00"})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,n.jsx)("div",{children:"Shipping"}),(0,n.jsx)("div",{children:"Free"})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between pt-2 border-t text-lg font-semibold",children:[(0,n.jsx)("div",{children:"Total"}),(0,n.jsx)("div",{children:"$310.00"})]})]}),(0,n.jsx)("div",{className:"x-center mt-10",children:(0,n.jsx)("button",{onClick:function(){return o(!0)},className:"mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-md md:text-base font-bold shadow",children:"Give Feedback"})})]}),c&&(0,n.jsx)(i.default,{onSubmit:function(){return o(!1)}})]})}},75229:function(e,t,s){"use strict";s.r(t);var n=s(85893),r=s(25675),i=s.n(r),l=s(31567),d=s(77747),a=s(99799);t.default=function(e){var t=e.setDetailsModal,s=e.orders,r=void 0===s?[]:s,c=(0,d.ZP)().setSelectedOrder,o=(0,l.$)().t;return(0,n.jsx)("div",{className:"space-y-5",children:null===r||void 0===r?void 0:r.map((function(e,s){return(0,n.jsxs)("div",{onClick:function(){return function(e){c(e),t(!0)}(e)},className:"shadow p-3 rounded flex items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,n.jsx)("div",{className:"bg-gray-400 h-12 w-12 relative overflow-hidden rounded",children:(0,n.jsx)(i(),{className:"h-auto",src:a.xw+e.card_image,alt:"Post Card Image",layout:"fill",objectFit:"cover"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"font-medium",children:e.card_name}),(0,n.jsxs)("div",{className:"font-light text-sm",children:["\xa5",e.price]})]})]}),(0,n.jsxs)("div",{className:"text-right",children:[(0,n.jsx)("div",{className:"font-medium text-sm",children:"cod"==e.payment_method?"COD":o("Card")}),(0,n.jsx)("div",{className:"font-medium text-sm capitalize",children:(0,d.hn)(null===e||void 0===e?void 0:e.status)})]})]},s)}))})}},18516:function(e,t,s){"use strict";s.r(t);var n=s(85893),r=s(25675),i=s.n(r),l=s(31567),d=s(77747),a=s(40519),c=s(99799);t.default=function(e){var t=e.setDetailsModal,s=e.orders,r=void 0===s?[]:s,o=(0,d.ZP)().setSelectedOrder,u=(0,l.$)().t;return(0,n.jsx)("div",{children:(0,n.jsxs)("table",{className:"table-auto w-full table-corner-rounded text-sm",children:[(0,n.jsx)("thead",{className:"",children:(0,n.jsxs)("tr",{className:"border",children:[(0,n.jsx)("th",{className:"p-4 font-medium text-left",children:u("Product Name")}),(0,n.jsx)("th",{className:"p-4 font-medium text-center",children:u("Code No")}),(0,n.jsx)("th",{className:"p-4 font-medium text-center",children:u("Payment Method")}),(0,n.jsx)("th",{className:"p-4 font-medium text-center",children:u("Qty")}),(0,n.jsx)("th",{className:"p-4 font-medium text-center",children:u("Order Date")}),(0,n.jsx)("th",{className:"p-4 font-medium text-center",children:u("Status")}),(0,n.jsx)("th",{className:"p-4 font-medium text-center",children:u("Price")})]})}),(0,n.jsx)("tbody",{children:null===r||void 0===r?void 0:r.map((function(e,s){return(0,n.jsxs)("tr",{onClick:function(){return function(e){o(e),t(!0)}(e)},className:"border cp hover:bg-gray-600",children:[(0,n.jsx)("td",{className:"p-4 text-center",children:(0,n.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,n.jsx)("div",{className:"bg-gray-400 h-10 w-10 relative overflow-hidden rounded",children:(0,n.jsx)(i(),{className:"h-auto",src:c.xw+(null===e||void 0===e?void 0:e.card_image),alt:"Post Card Image",layout:"fill",objectFit:"cover"})}),(0,n.jsx)("div",{className:"inline truncate",children:null===e||void 0===e?void 0:e.card_name})]})}),(0,n.jsx)("td",{className:"p-4 text-center",children:null===e||void 0===e?void 0:e.code}),(0,n.jsx)("td",{className:"p-4 text-center",children:"cod"==(null===e||void 0===e?void 0:e.payment_method)?"COD":u("Card")}),(0,n.jsx)("td",{className:"p-4 text-center",children:null===e||void 0===e?void 0:e.quantity}),(0,n.jsx)("td",{className:"p-4 text-center",children:(0,a.p6)(null===e||void 0===e?void 0:e.order_date)}),(0,n.jsx)("td",{className:"p-4 text-center capitalize",children:(0,d.hn)(null===e||void 0===e?void 0:e.status)}),(0,n.jsxs)("td",{className:"p-4 text-center",children:["\xa5",null===e||void 0===e?void 0:e.order_total]})]},s)}))})]})})}},67111:function(e,t,s){"use strict";s.r(t);var n=s(34051),r=s.n(n),i=s(85893),l=s(67294),d=(s(61372),s(80565)),a=s(18516),c=(s(86848),s(75229)),o=s(12135),u=s(77747),m=s(9008),x=s(29643),h=s(42652),f=s(17211),v=s(23748),j=s(72269),p=s(30381),b=s.n(p),y=s(31567),N=s(5806);function w(e,t,s,n,r,i,l){try{var d=e[i](l),a=d.value}catch(c){return void s(c)}d.done?t(a):Promise.resolve(a).then(n,r)}t.default=function(){var e=(0,l.useState)(!1),t=e[0],s=e[1],n=(0,l.useState)(!1),p=n[0],g=n[1],_=(0,y.$)().t,k=(0,u.ZP)(),C=k.orders,S=k.is_pagination_loading,P=k.setMaxAndMinDate,D=k.max_and_min_date,O=k.setIsStatusCancelled,Z=k.is_status_cancelled,E=f.Z.RangePicker,F="DD-MM-YYYY";(0,l.useEffect)((function(){(0,u.tH)();var e=function(e){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(0,u.BS)(null===D||void 0===D?void 0:D.min_date,null===D||void 0===D?void 0:D.max_date)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),(0,l.useEffect)((function(){(0,u.tH)(null===D||void 0===D?void 0:D.min_date,null===D||void 0===D?void 0:D.max_date)}),[Z]);var M,B=(0,l.useState)(),T=B[0],A=B[1];return(0,i.jsxs)("div",{className:"min-h-screen bg-white",children:[(0,i.jsxs)(m.default,{children:[(0,i.jsx)("title",{children:"Order History"}),(0,i.jsx)("meta",{name:"description",content:"Post Card Printing"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(d.Z,{}),(0,i.jsx)("div",{className:"relative pt-16 w-full",children:(0,i.jsxs)("div",{className:"bg-white md:shadow px-5 md:p-6 max-w-7xl rounded-lg md:m-10",children:[(0,i.jsxs)("div",{className:"text-4xl font-semibold text-gray-800 mb-5 flex flex-col justify-start space-y-5 md:flex-row md:justify-between w-full",children:[(0,i.jsx)("div",{children:_("Order History")}),(0,i.jsx)("div",{children:(0,i.jsx)(v.Z,{direction:"vertical",size:12,children:(0,i.jsx)(E,{onCalendarChange:function(e,t){P(t[0],t[1]),A([b()(t[0],F),b()(t[1],F)]),t[0]&&t[1]&&(0,u.tH)(t[0],t[1]),t[0]||t[1]||(0,u.tH)()},defaultPickerValue:T,format:F})})})]}),(0,i.jsxs)("div",{className:"flex flex-row justify-between w-full bg-gray-300 rounded-md p-2",children:[(0,i.jsx)("div",{children:_("Show Cancelled Orders")}),(0,i.jsx)("div",{children:(0,i.jsx)(j.Z,{style:{backgroundColor:Z?"#FB607F":"white"},className:"bg-cWhite checked:bg-cBrand",defaultChecked:Z,onChange:function(e){return O(e)}})})]}),C.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"mt-5 block tab:hidden",children:(0,i.jsx)(a.default,{orders:C,setDetailsModal:s})}),(0,i.jsx)("div",{className:"mt-5 hidden tab:block",children:(0,i.jsx)(c.default,{orders:C,setDetailsModal:s})})]}):(0,i.jsx)("div",{className:"mt-5",children:(0,i.jsx)(N.Z,{onClick:(M=r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.tH)();case 2:O(!1);case 3:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(s,n){var r=M.apply(e,t);function i(e){w(r,s,n,i,l,"next",e)}function l(e){w(r,s,n,i,l,"throw",e)}i(void 0)}))})})})]})})]}),S&&(0,i.jsx)("div",{className:"flex flex-row justify-center items-center my-5",children:(0,i.jsx)(h.s5,{width:"100",strokeColor:"#FB607F",strokeWidth:4,strokeWidthSecondary:3})}),(0,i.jsx)(x.default,{show_modal:t,setShowModal:s}),(0,i.jsx)(o.default,{show_modal:p,setShowModal:g})]})}}},function(e){e.O(0,[4617,1086,4885,3617,6664,9085,1495,9643,9774,2888,179],(function(){return t=2774,e(e.s=t);var t}));var t=e.O();_N_E=t}]);