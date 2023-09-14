(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2417],{65966:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return s(11689)}])},5806:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(85893),r=(s(67294),s(81873));function n(e){var t=e.message,s=void 0===t?"No Data Available!":t,n=e.onClick,i=void 0===n?function(){}:n;return(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-10 w-full h-full",children:[(0,a.jsx)("div",{className:"text-center text-2xl font-bold",children:s}),(0,a.jsx)("button",{onClick:i,type:"button",className:"mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:(0,a.jsxs)("div",{className:"flex flex-row justify-center space-x-2 items-center",children:[(0,a.jsx)(r.jq8,{}),(0,a.jsx)("p",{children:"Reload"})]})})]})}},60401:function(e,t,s){"use strict";s.r(t);var a=s(85893);t.default=function(){return(0,a.jsxs)("div",{className:"hidden md:block",children:[(0,a.jsx)("img",{className:"fixed top-[5rem] left-2 md:top-32 md:left-2 transform -translate-y-1/2 w-10 md:w-20 opacity-60",src:"/Images/Ornaments/Dots.png",alt:""}),(0,a.jsx)("img",{className:"fixed bottom-[5rem] right-2 md:bottom-[10rem] md:right-0 transform -translate-y-1/2 w-10 md:w-20 opacity-60",src:"/Images/Ornaments/Dots.png",alt:""}),(0,a.jsx)("img",{className:"fixed bottom-[5rem] right-2 md:bottom-[10rem] md:right-24 transform -translate-y-1/2 w-10 md:w-12 opacity-60",src:"/Images/Ornaments/Vector X.png",alt:""}),(0,a.jsx)("img",{className:"fixed top-1/2 -right-12 transform -translate-y-1/2 w-20 md:w-24 opacity-80",src:"/Images/Ornaments/Vector O2.png",alt:""}),(0,a.jsx)("img",{className:"fixed top-[17rem] -left-16 transform -translate-y-1/2 w-20 md:w-24 opacity-80",src:"/Images/Ornaments/Vector O2.png",alt:""}),(0,a.jsx)("img",{className:"fixed -bottom-[10rem] -right-10 transform -translate-y-1/2 w-20 md:w-[9rem] opacity-60",src:"/Images/Ornaments/Vector 9.png",alt:""}),(0,a.jsx)("img",{className:"fixed -bottom-[13rem] left-[4rem] transform -translate-y-1/2 w-[10rem] opacity-50",src:"/Images/Ornaments/Vector O.png",alt:""}),(0,a.jsx)("img",{className:"fixed -bottom-[13rem] left-[4rem] transform -translate-y-1/2 w-[10rem] opacity-50",src:"/Images/Ornaments/Vector 8.png",alt:""}),(0,a.jsx)("img",{className:"fixed top-[14rem] right-[13rem] transform -translate-y-1/2 w-8 opacity-60",src:"/Images/Ornaments/Vector 8.png",alt:""}),(0,a.jsx)("img",{className:"fixed top-[5rem] right-[30rem] transform -translate-y-1/2 w-3 opacity-80",src:"/Images/Ornaments/Vector 8.png",alt:""}),(0,a.jsx)("img",{className:"fixed top-[5rem] right-[32rem] transform -translate-y-1/2 w-3 opacity-80",src:"/Images/Ornaments/Vector 8.png",alt:""})]})}},51420:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var a=s(85893),r=(s(25675),s(67294),s(11163),s(2891)),n=s(86426),i=s(50458),l=s(31567);function o(){var e=(0,l.$)().t,t=(0,n.Nq)({onSuccess:function(e){(0,r.Ms)("router","google",e.access_token)},onError:function(t){console.log(t),(0,i.C)("error",e("Something went wrong. Please try again later."))}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"text-center my-10 font-semibold text-gray-600 flex items-center justify-center space-x-10",children:[(0,a.jsx)("hr",{className:"w-[12rem]"}),(0,a.jsx)("span",{children:e("Or")}),(0,a.jsx)("hr",{className:"w-[12rem]"})]}),(0,a.jsx)("div",{className:"flex items-center justify-center space-x-5",children:(0,a.jsxs)("div",{className:"flex flex-col justify-between items-center",children:[(0,a.jsx)("div",{children:e("Login With Google")}),(0,a.jsx)("div",{onClick:function(){return t()},className:"h-12 w-12 relative overflow-hidden rounded-full cp mt-2",children:(0,a.jsx)("img",{className:"h-auto",src:"/Images/svg/google.svg",alt:"Post Card Image",layout:"fill",objectFit:"cover"})})]})})]})}},14090:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(41664),n=s.n(r),i=s(67294),l=s(9008),o=s(30622),c=s(8193),d=s(60401),m=s(2891),u=s(11163),x=s(51420),f=s(31567);t.default=function(){var e=(0,i.useState)(!1),t=e[0],s=e[1],r=function(){return s(!t)},h=(0,m.ZP)((function(e){return e})),g=h.login_form,b=h.isLoggedIn,v=h.changeLoginFormValue,p=h.resetLoginFormValue,j=(0,u.useRouter)(),w=(0,f.$)().t;return(0,i.useEffect)((function(){localStorage.postcard_token&&"1"===localStorage.is_verified&&j.push("/")}),[b]),(0,i.useEffect)((function(){p()}),[]),(0,a.jsxs)("div",{className:"relative bg-blueGray-50",children:[(0,a.jsxs)(l.default,{children:[(0,a.jsx)("title",{children:"Login"}),(0,a.jsx)("meta",{name:"description",content:"Post Card Printing"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("div",{className:"mx-auto z-10 relative pt-16 md:pt-24 mb-10",children:(0,a.jsxs)("div",{className:"bg-blueGray-50 md:bg-white md:shadow p-5 md:p-10 max-w-2xl mx-auto rounded-lg",children:[(0,a.jsx)("div",{className:"text-4xl font-semibold md:font-bold text-gray-800 mb-5",children:w("Login")}),(0,a.jsxs)("form",{onSubmit:function(e){return(0,m.H2)(e,j)},children:[(0,a.jsx)(o.Z,{label:w("Email")+"*",name:"email",value:g.email,type:"email",placeholder:w("Enter Email Address"),onChange:v,required:!0}),(0,a.jsx)(o.Z,{name:"password",value:g.password,type:t?"text":"password",placeholder:w("Enter Password"),onChange:v,label:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{children:[w("Password"),"*"]}),(0,a.jsx)("div",{className:"text-cRed hover:underline font-semibold",children:(0,a.jsx)(n(),{href:"/auth/forget-password",children:w("Forget Password")+"?"})})]}),icon:t?(0,a.jsx)(c.w8I,{onClick:r,className:"h-[90%] text-xl cursor-pointer"}):(0,a.jsx)(c.p3W,{onClick:r,className:"h-[90%] text-xl cursor-pointer"}),required:!0}),(0,a.jsxs)("button",{className:"bg-cBrand hover:bg-cBrickHover text-white transition-all border px-5 py-3 w-full outline-none rounded-md text-center mt-10",children:[" ",w("Login")," "]})]}),(0,a.jsxs)("div",{className:"text-center mt-5 font-semibold text-gray-600",children:[w("Don't have an account?"),(0,a.jsx)("span",{className:"text-cBrand font-bold ml-2 cp hover:underline",children:(0,a.jsx)(n(),{href:"/auth/register",children:w("Register")})})]}),(0,a.jsx)(x.default,{})]})}),(0,a.jsx)(d.default,{})]})}},81437:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(85359),n=s(45722),i=s(74995),l=s(67294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function c(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(t){o(e,t,s[t])}))}return e}t.default=function(e){var t=e.changeState,s=(0,i.ZP)(),o=s.create_card_form,d=s.selected_card,m=s.setCreateCardForm,u=(0,l.useState)(!1),x=u[0],f=u[1];return(0,l.useEffect)((function(){(null===o||void 0===o?void 0:o.card_id)||d?(f(!0),null===(null===o||void 0===o?void 0:o.card_id)&&m(c({},o,{card_id:null===d||void 0===d?void 0:d.id}))):f(!1)}),[null===o||void 0===o?void 0:o.card_id,d]),(0,l.useEffect)((function(){(null===o||void 0===o?void 0:o.card_id)||d?(f(!0),null===(null===o||void 0===o?void 0:o.card_id)&&m(c({},o,{card_id:null===d||void 0===d?void 0:d.id}))):f(!1)}),[]),(0,a.jsxs)("div",{children:[x&&(0,a.jsx)(r.default,{changeState:t}),(0,a.jsx)(n.default,{is_gift_ready:x})]})}},45722:function(e,t,s){"use strict";s.r(t);var a=s(34051),r=s.n(a),n=s(85893),i=s(67294),l=s(31567),o=s(42652),c=s(74995),d=s(62748),m=s(99799),u=s(3640),x=s(5806),f=s(20186),h=s(37677);function g(e,t,s,a,r,n,i){try{var l=e[n](i),o=l.value}catch(c){return void s(c)}l.done?t(o):Promise.resolve(o).then(a,r)}function b(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}t.default=function(e){var t=e.is_gift_ready,s=(0,d.ZP)(),a=s.postcards,v=s.is_pagination_loading,p=s.setSelectedTab,j=(0,c.ZP)(),w=j.setSelectedCard,y=j.setCreateCardForm,N=j.create_card_form,_=j.setCurrState;(0,i.useEffect)((function(){var e=function(e){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(0,d.YE)()};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);var k,C=function(e){y(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(t){b(e,t,s[t])}))}return e}({},N,{card_id:null===e||void 0===e?void 0:e.id})),w(e),window.scrollTo(0,150)},O=(0,l.$)().t;return(0,n.jsxs)("div",{className:"custom-container",children:[(0,n.jsx)("div",{className:"text-center mb-5 mt-10",children:(0,n.jsx)("div",{className:"text-2xl md:text-4xl font-bold text-[#211F32] mb-10",children:O("Choose Card")})}),!t&&(0,n.jsx)("div",{className:"text-center mb-10",children:(0,n.jsx)("button",{onClick:function(){return _("write_message")},className:"mx-auto px-12 py-2 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:O("Back")})}),(0,n.jsx)(f.Z,{}),(null===a||void 0===a?void 0:a.length)>0?(0,n.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-10 mx-3 sm:mx-0",children:a.map((function(e,t){return(0,n.jsx)(u.Z,{onClick:function(){return C(e)},src:(null===e||void 0===e?void 0:e.image)?m.xw+e.image:h.ST,title:null===e||void 0===e?void 0:e.name,stars:5,text:"".concat(O("Price")," \xa5").concat(null===e||void 0===e?void 0:e.price),sold_count:null===e||void 0===e?void 0:e.sold_count},t)}))}):(0,n.jsx)(x.Z,{onClick:(k=r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.aF)();case 2:p(-1);case 3:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(s,a){var r=k.apply(e,t);function n(e){g(r,s,a,n,i,"next",e)}function i(e){g(r,s,a,n,i,"throw",e)}n(void 0)}))})}),v&&(0,n.jsx)("div",{className:"flex flex-row justify-center items-center my-5",children:(0,n.jsx)(o.s5,{width:"100",strokeColor:"#FB607F",strokeWidth:4,strokeWidthSecondary:3})})]})}},85359:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(25675),n=s.n(r),i=s(31567),l=s(74995),o=s(99799),c=s(37677);t.default=function(e){var t=e.changeState,s=(0,l.ZP)(),r=s.selected_card,d=s.setCurrState,m=(0,i.$)().t;return(0,a.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,a.jsx)("div",{className:"text-center mb-5 mt-10",children:(0,a.jsx)("div",{className:"text-2xl md:text-4xl font-bold text-[#211F32] mb-5",children:m("Selected Card")})}),(0,a.jsxs)("div",{className:"relative bg-white rounded-lg mb-10 mx-7 md:mx-0 shadow p-5",children:[(0,a.jsx)("div",{className:"relative h-[16rem] md:h-[24rem] w-full mb-2",children:(0,a.jsx)("div",{className:"h-full w-full relative rounded-lg overflow-hidden",children:(0,a.jsx)(n(),{className:"h-auto",src:(null===r||void 0===r?void 0:r.image)?o.xw+(null===r||void 0===r?void 0:r.image):c.ST,alt:"Post Card Image",layout:"fill",objectFit:"cover"})})}),(0,a.jsxs)("div",{className:"bg-white",children:[(0,a.jsx)("div",{className:"text-md sm:text-lg font-semibold mb-0 md:mb-1",children:null===r||void 0===r?void 0:r.name}),(0,a.jsxs)("div",{className:"text-sm sm:text-md font-semibold text-cBrand",children:[m("Price")," $",null===r||void 0===r?void 0:r.price]})]})]}),(0,a.jsxs)("div",{className:"x-center mt-10",children:[(0,a.jsx)("button",{onClick:function(){return d("write_message")},className:"mx-auto px-12 py-2 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:m("Back")}),(0,a.jsx)("button",{onClick:function(){return t("next")},className:"mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:m("Checkout")})]})]})}},33133:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(11163),n=s(31567),i=s(86893);t.default=function(){var e=(0,r.useRouter)(),t=(0,n.$)().t;return(0,a.jsx)("div",{className:"center h-screen",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"text-center mb-5 mt-10",children:[(0,a.jsx)("div",{className:"text-2xl md:text-4xl font-bold text-[#211F32] mb-5",children:t("Congratulations")}),(0,a.jsxs)("div",{className:"max-w-2xl mx-5 md:mx-auto text-sm md:text-base",children:[t("Your order has been submitted successfully"),"."]})]}),(0,a.jsx)("div",{className:"center mt-16 mb-32 md:my-0",children:(0,a.jsx)("div",{className:"bg-cBrickHover rounded-full h-40 w-40 center",children:(0,a.jsx)("div",{className:"bg-cBrand rounded-full h-32 w-32 center",children:(0,a.jsx)(i.UgA,{className:"text-7xl text-white"})})})}),(0,a.jsx)("div",{className:"x-center mt-10",children:(0,a.jsx)("button",{onClick:function(){return e.push("/")},className:"mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-semibold shadow cursor-pointer",children:t("Go To Home")})})]})})}},23443:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(25675),n=s.n(r),i=s(67294),l=s(86893),o=s(80471),c=s(37677),d=s(40519),m=s(74995),u=s(31567);function x(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function f(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(t){x(e,t,s[t])}))}return e}t.default=function(e){var t,s=e.changeState,r=(0,i.useState)(!1),x=r[0],h=r[1],g=(0,i.useState)(!1),b=g[0],v=(g[1],(0,i.useState)("\u3042")),p=(v[0],v[1],(0,m.ZP)()),j=p.create_card_form,w=p.setCreateCardForm,y=(0,i.useRef)(null),N=(0,i.useRef)(null),_=(0,u.$)().t;return(0,i.useEffect)((function(){var e;b&&(null===(e=y.current)||void 0===e||e.focus())}),[b]),(0,i.useEffect)((function(){j.text_image?h(!0):h(!1)}),[j.text_image]),(0,a.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,a.jsxs)("div",{className:"text-center mb-5 mt-10",children:[(0,a.jsx)("div",{className:"text-2xl md:text-4xl font-bold text-[#211F32] mb-5",children:_("Create Your Card")}),(0,a.jsxs)("div",{className:"max-w-2xl mx-5 md:mx-auto text-sm md:text-base text-left",children:[(0,a.jsxs)("p",{children:["*",_("You can")," ",(0,a.jsx)("strong",{children:_("upload image")})," ",_("to bring out your desire text from that image. Also you can")," ",(0,a.jsx)("strong",{children:_("edit that text")})," ",_("as well")]}),(0,a.jsxs)("p",{className:"my-2",children:["*",_("Or you can")," ",(0,a.jsx)("strong",{children:_("Skip")})," ",_("uploading image and")," ",(0,a.jsx)("strong",{children:_("put some text")}),"."]}),(0,a.jsxs)("p",{children:["*",_("Maximum")," ",(0,a.jsx)("strong",{children:_("10 MB")})," ",_("file accepted"),"."]})]})]}),!x&&(0,a.jsxs)("div",{className:"h-[13rem] md:h-[24rem] bg-white border-dashed border-2 border-gray-300 rounded-lg center mb-10 mx-7 md:mx-0",children:[(0,a.jsxs)("div",{className:"x-center flex-col",children:[(0,a.jsx)(l.Re4,{className:"text-gray-600 text-5xl mb-5"}),(0,a.jsx)("div",{className:"hidden md:block text-gray-600 mb-5 font-semibold",children:_("Select a image")}),(0,a.jsxs)("button",{onClick:function(){N.current.click()},className:"px-4 md:px-6 py-3 md:py-4 border border-gray-600 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-lg text-sm font-medium focus:outline-none",children:[(0,a.jsx)("span",{className:"hidden md:block",children:_("SELECT FILE")}),(0,a.jsx)("span",{className:"block md:hidden",children:_("Upload Image")})]})]}),(0,a.jsx)("input",{onChange:function(e){(0,d.y3)(e.target.files[0],(function(e){w(f({},j,{text_image:e}))}))},type:"file",id:"file",ref:N,style:{display:"none"},accept:"image/*"})]}),x&&(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-10 mb-10 mx-7 md:mx-0",children:(0,a.jsxs)("div",{className:"relative h-[16rem] sm:h-[20rem] md:h-[18rem] bg-white border-dashed border-2 border-gray-300 rounded-lg",children:[(0,a.jsx)(o.Fk5,{onClick:function(){return w(f({},j,{text_image:null}))},className:"absolute-right-top text-2xl text-gray-700 m-2 cp"}),(0,a.jsxs)("div",{className:"flex flex-col items-center h-full overflow-hidden",children:[(0,a.jsx)("div",{className:"flex-none font-semibold text-center my-5",children:_("Image Uploaded")}),(0,a.jsx)("div",{className:"flex-1 w-full px-5",children:(0,a.jsx)("div",{className:"relative h-48 w-full",children:(0,a.jsx)("div",{className:"h-full w-full relative rounded-lg overflow-hidden",children:(0,a.jsx)(n(),{className:"h-auto",src:null!==(t=null===j||void 0===j?void 0:j.text_image)&&void 0!==t?t:c.Hv,alt:"Post Card Image",layout:"fill",objectFit:"contain"})})})})]})]})}),(0,a.jsxs)("div",{className:"x-center mt-10",children:[!x&&(0,a.jsx)("button",{onClick:function(){return s("next")},className:"mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:_("Skip & Next")}),x&&(0,a.jsx)("button",{onClick:function(){return s("next")},className:"mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:_("Next")})]})]})}},47857:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(41979),n=s(74995),i=s(67294),l=s(31567);t.default=function(e){var t=e.curr_state,s=(0,n.ZP)(),o=s.setCurrState,c=s.selected_card,d=s.create_card_form,m=["upload_image","write_message","choose_frame","checkout"].includes(t),u=["write_message","choose_frame","checkout"].includes(t),x=["choose_frame","checkout"].includes(t),f=["checkout"].includes(t),h=(0,l.$)().t,g=(0,i.useState)({upload_image:!1,write_message:!0,choose_frame:!1,checkout:!1}),b=g[0],v=g[1],p=function(e){o(e)};return(0,i.useEffect)((function(){"upload_image"===t?v({upload_image:!1,write_message:!0,choose_frame:!1,checkout:!1}):"write_message"===t?v({upload_image:!0,write_message:!1,choose_frame:!0,checkout:!1}):"choose_frame"===t?v({upload_image:!1,write_message:!0,choose_frame:!1,checkout:c&&(null===d||void 0===d?void 0:d.card_id)}):"checkout"===t&&v({upload_image:!1,write_message:!1,choose_frame:!0,checkout:!1})}),[t,c,null===d||void 0===d?void 0:d.card_id]),(0,a.jsxs)("div",{className:"flex items-center justify-between max-w-2xl w-full overflow-x-scroll overflow-y-none mx-auto",children:[(0,a.jsx)(r.default,{is_clickable:b.upload_image,onClick:function(){return p("upload_image")},hide_line:!0,text:h("Upload Image"),color:"".concat(m?"bg-cBrand":"bg-[#ECECEC]"),icon:(0,a.jsx)("div",{className:"text-sm md:text-lg",children:"1"})}),(0,a.jsx)(r.default,{is_clickable:b.write_message,onClick:function(){return p("write_message")},text:h("Write Message"),color:"".concat(u?"bg-cBrand":"bg-[#ECECEC]"),icon:(0,a.jsx)("div",{className:"text-sm md:text-lg",children:"2"})}),(0,a.jsx)(r.default,{is_clickable:b.choose_frame,onClick:function(){return p("choose_frame")},text:h("Choose Card"),color:"".concat(x?"bg-cBrand":"bg-[#ECECEC]"),icon:(0,a.jsx)("div",{className:"text-sm md:text-lg",children:"3"})}),(0,a.jsx)(r.default,{is_clickable:b.checkout,onClick:function(){return p("checkout")},text:h("Checkout"),color:"".concat(f?"bg-cBrand":"bg-[#ECECEC]"),icon:(0,a.jsx)("div",{className:"text-sm md:text-lg",children:"4"})})]})}},41979:function(e,t,s){"use strict";s.r(t);var a=s(85893);t.default=function(e){var t=e.hide_line,s=void 0!==t&&t,r=e.color,n=e.icon,i=e.text,l=e.onClick,o=e.is_clickable;return(0,a.jsxs)(a.Fragment,{children:[!s&&(0,a.jsx)("div",{className:"w-full h-1  rounded-full mb-10 md:mb-7 lg:mb-8 -mx-10 md:-mx-16 ".concat(r)}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center text-xs",children:[(0,a.jsx)("div",{onClick:o?l:null,className:"w-6 h-6 md:w-8 md:h-8 rounded-full center mb-5 md:mb-2 text-white z-10 ".concat(r," ").concat(o?"cursor-pointer":"cursor-not-allowed"),children:n}),(0,a.jsx)("div",{className:"w-20 md:w-32 text-center",children:(0,a.jsx)("div",{className:"text-black text-xs md:text-base block truncate",children:i})})]})]})}},4512:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(31567),n=s(74995);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}t.default=function(e){var t,s=e.changeState,l=(0,n.ZP)(),o=l.create_card_form,c=l.setCreateCardForm,d=l.setCurrState,m=(0,r.$)().t;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"text-center mb-5 mt-10",children:[(0,a.jsx)("div",{className:"text-2xl md:text-4xl font-bold text-[#211F32] mb-5",children:m("Write Your Message")}),(0,a.jsx)("div",{className:"max-w-2xl mx-5 md:mx-auto text-sm md:text-base",children:m("Write Addition Message You Want to Put")})]}),(0,a.jsx)("div",{className:"lg:max-w-4xl mx-5 lg:mx-auto",children:(0,a.jsxs)("div",{className:"bg-white shadow rounded-lg",children:[(0,a.jsx)("textarea",{onChange:function(e){e.target.value.length>250||c(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),a.forEach((function(t){i(e,t,s[t])}))}return e}({},o,{message:e.target.value}))},value:o.message,className:"h-full w-full resize-none rounded-md outline-none p-5",rows:"6",cols:"50",placeholder:m("Write here...")+"(".concat(m("optional"),")")}),(0,a.jsxs)("div",{className:"text-right",children:[null===o||void 0===o||null===(t=o.message)||void 0===t?void 0:t.length,"/250"]})]})}),(0,a.jsxs)("div",{className:"x-center mt-10",children:[(0,a.jsx)("button",{onClick:function(){return d("upload_image")},className:"mx-auto px-12 py-2 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:m("Back")}),(0,a.jsx)("button",{onClick:function(){return s("next")},className:"mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:m("Next")})]})]})}},11689:function(e,t,s){"use strict";s.r(t);var a=s(85893),r=s(67294),n=s(9008),i=s(81437),l=s(23443),o=s(47857),c=s(4512),d=s(29707),m=s(33133),u=s(56001),x=s(74995),f=(s(62748),s(2891)),h=(s(14090),s(11163)),g=s(50458),b=s(8293),v=s(31567);t.default=function(){var e=(0,x.ZP)(),t=e.curr_state,s=e.setCurrState,p=(0,b.ZP)(),j=(p.verification_status,p.setIsUserIdentity,(0,f.ZP)().isLoggedIn),w=(0,h.useRouter)(),y=(0,v.$)().t,N=function(e){if("next"===e)switch(t){case"upload_image":s("write_message");break;case"write_message":s("choose_frame");break;case"choose_frame":s("checkout");break;case"checkout":s("submitted")}};return(0,r.useEffect)((function(){j||(w.push("/auth/login"),(0,g.C)({message:y("Please login to continue"),type:"info"}))}),[]),(0,a.jsxs)("div",{className:"relative h-full min-h-screen bg-blueGray-50 ".concat("checkout"===t&&"bg-white md:bg-blueGray-50"),children:[(0,a.jsxs)(n.default,{children:[(0,a.jsxs)("title",{children:[" ",u.K," | Create"]}),(0,a.jsx)("meta",{name:"description",content:"Post Card Printing"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),["upload_image","write_message","checkout"].includes(t)&&(0,a.jsx)("img",{className:"fixed top-[5rem] left-2 md:top-32 md:left-2 transform -translate-y-1/2 w-10 md:w-24 opacity-30",src:"/Images/Ornaments/Dots.png",alt:""}),["upload_image","write_message","checkout"].includes(t)&&(0,a.jsx)("img",{className:"fixed top-1/2 -right-12 transform -translate-y-1/2 w-20 md:w-24 opacity-80",src:"/Images/Ornaments/Vector O2.png",alt:""}),["upload_image","write_message","checkout"].includes(t)&&(0,a.jsx)("img",{className:"fixed -bottom-20 -right-10 transform -translate-y-1/2 w-20 md:w-24 opacity-80",src:"/Images/Ornaments/Vector O.png",alt:""}),["submitted"].includes(t)&&(0,a.jsx)("span",{className:"hidden md:inline-block fixed left-[80%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[20rem] rotate-[-45deg] bg-cBrand opacity-60 rounded-full"}),["submitted"].includes(t)&&(0,a.jsx)("span",{className:"hidden md:inline-block fixed left-[83%] top-[83%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[5rem] rotate-[-45deg] bg-cBrand opacity-60 rounded-full"}),["submitted"].includes(t)&&(0,a.jsx)("span",{className:"hidden md:inline-block fixed left-[10%] top-[94%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[20rem] rotate-[-45deg] bg-cBrand opacity-60 rounded-full"}),["submitted"].includes(t)&&(0,a.jsx)("span",{className:"hidden md:inline-block fixed left-[31%] top-[21%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[5rem] rotate-[-45deg] bg-cBrand opacity-60 rounded-full"}),["submitted"].includes(t)&&(0,a.jsx)("span",{className:"hidden md:inline-block fixed left-[53%] top-[12%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[9rem] rotate-[-45deg] bg-cBrand opacity-60 rounded-full"}),["submitted"].includes(t)&&(0,a.jsx)("span",{className:"md:hidden fixed left-[-10%] top-[80%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[20rem] rotate-[-45deg] bg-cBrand rounded-full"}),["submitted"].includes(t)&&(0,a.jsx)("span",{className:"md:hidden fixed left-[8%] top-[53%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[2rem] rotate-[-45deg] bg-cBrand rounded-full"}),["submitted"].includes(t)&&(0,a.jsx)("span",{className:"md:hidden fixed left-[111%] top-[5%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[20rem] rotate-[-45deg] bg-cBrand rounded-full"}),["submitted"].includes(t)&&(0,a.jsx)("span",{className:"md:hidden fixed left-[82%] top-[69%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[7rem] rotate-[-45deg] bg-cBrand rounded-full"}),["submitted"].includes(t)&&(0,a.jsx)("span",{className:"md:hidden fixed left-[86%] top-[70%] transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-[2rem] rotate-[-45deg] bg-cBrand rounded-full"}),["submitted"].includes(t)&&(0,a.jsx)("img",{className:"fixed top-[16%] left-[0%] md:top-[25%] md:left-[0%] transform -translate-y-1/2 w-10 md:w-20 opacity-80",src:"/Images/Ornaments/Dots.png",alt:""}),["submitted"].includes(t)&&(0,a.jsx)("img",{className:"fixed top-[16%] left-[0%] md:top-[70%] md:left-[97%] transform -translate-y-1/2 w-10 md:w-20 opacity-80",src:"/Images/Ornaments/Dots.png",alt:""}),(0,a.jsxs)("div",{className:"mx-auto z-10 relative ".concat("submitted"!==t&&"pt-24 pb-0 md:pb-10"),children:["submitted"!==t&&(0,a.jsx)(o.default,{curr_state:t}),"upload_image"===t&&(0,a.jsx)(l.default,{changeState:N}),"write_message"===t&&(0,a.jsx)(c.default,{changeState:N}),"choose_frame"===t&&(0,a.jsx)(i.default,{changeState:N}),"checkout"===t&&(0,a.jsx)(d.default,{changeState:N}),"submitted"===t&&(0,a.jsx)(m.default,{changeState:N})]})]})}},9008:function(e,t,s){e.exports=s(83121)}},function(e){e.O(0,[4617,2876,1086,3617,8063,1338,6664,6893,978,9707,9774,2888,179],(function(){return t=65966,e(e.s=t);var t}));var t=e.O();_N_E=t}]);