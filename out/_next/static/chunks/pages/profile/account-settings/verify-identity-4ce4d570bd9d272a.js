(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6064],{65828:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/account-settings/verify-identity",function(){return n(3167)}])},95891:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var i=n(85893),s=(n(67294),n(31567)),a=n(8293);function r(){var e=(0,a.ZP)().setIsVerificationFormNeeded,t=(0,s.$)().t;return(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-5 w-full",children:[(0,i.jsx)("img",{className:"h-[160px] w-[160px]",src:"/Images/svg/verification_failed_state.svg",alt:"img"}),(0,i.jsxs)("div",{className:"text-fs20 font-fw600",children:[t("We are sorry"),"!!!"]}),(0,i.jsx)("div",{className:"text-fs16 font-fw500",children:t("Your identity information did not match with the system.")}),(0,i.jsx)("button",{type:"button",onClick:function(){return e(!0)},className:"mx-auto mt-2 px-10 py-2 bg-cBrand text-cWhite transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:"Try Again"})]})}},59012:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var i=n(85893),s=n(67294),a=n(31567),r=n(8293),l=n(40519),c=function(e){e.onClick;var t=e.onChange,n=e.name,s=e.value,a=(e.type,e.label),r=(e.placeholder,e.className),l=void 0===r?"":r,c=e.className2,o=void 0===c?"":c,d=e.className3,f=void 0===d?"":d,u=(e.className4,e.is_readonly,e.no_label),m=void 0!==u&&u,x=e.icon,v=void 0===x?null:x,h=(e.pipe,e.textarea,e.rows,e.cols,e.required,e.minLength,e.options),g=void 0===h?[]:h;return(0,i.jsxs)("div",{className:"".concat(""!==l?l:"mb-5"),children:[!m&&(0,i.jsx)("div",{className:"font-fw500 text-fs16 text-cTitleTextColor mb-2",children:a}),(0,i.jsx)("div",{className:"".concat(o," ").concat(v&&"relative flex justify-center items-center"),children:(0,i.jsx)("select",{name:n,value:s,onChange:t,className:"bg-cWhite border px-5 py-3 w-full outline-none rounded-md ".concat(f," focus:shadow-c6 focus:outline-none focus:border-cBrand "),children:g.map((function(e,t){return(0,i.jsx)("option",{className:"font-fw500 text-fs16 text-cTitleTextColor",value:e.value,children:e.label},t)}))})})]})},o=n(18676);function d(e){e.setIsFormShow;var t=(0,r.ZP)(),n=t.verification_method,d=t.setVerificationMethod,f=t.front_image,u=t.back_image,m=t.setFrontImage,x=t.setBackImage,v=(0,s.useRef)(null),h=(0,s.useRef)(null),g=(0,a.$)().t,p=[{value:"mncard",label:g("My Number Card")},{value:"rcard",label:g("Residence Card")},{value:"driving",label:g("Driving License")},{value:"passport",label:g("Passport")}],b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"front";(0,l.y3)(e.target.files[0],(function(e){"front"===t?m(e):x(e)}))};return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),(0,r.Y5)()},children:[(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsx)(c,{options:p,name:n,label:g("Choose Verification Method"),onChange:function(e){return d(e.target.value)}}),(0,i.jsx)(o.default,{label:g("Front Side"),fileRef:v,image:f,onChange:function(e){return b(e,"front")},onClear:function(){m(null),v.current.value=null}}),(0,i.jsx)(o.default,{label:g("Back Side"),fileRef:h,image:u,onChange:function(e){return b(e,"back")},onClear:function(){x(null),h.current.value=null}})]}),(0,i.jsx)("div",{className:"x-center",children:(0,i.jsx)("button",{disabled:!f||!u,type:"submit",className:"mx-auto mt-2 px-10 py-2 ".concat(f&&u?"bg-cBrand text-white":"bg-cPlaceholder text-cTitleTextColor"," transition-all ease-in rounded-md text-sm md:text-base font-bold shadow"),children:g("Submit")})})]})}},18676:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var i=n(85893),s=(n(67294),n(31567)),a=n(8193);function r(e){var t=e.label,n=e.fileRef,r=e.onChange,l=e.image,c=e.onClear,o=(0,s.$)().t;return(0,i.jsxs)("div",{className:"w-full flex flex-col justify-start space-y-5 items-center mb-5",children:[(0,i.jsx)("div",{className:"text-cTitleTextColor text-fs20 font-fw600 mb-2",children:t}),(0,i.jsx)("div",{onClick:function(){return l?{}:n.current.click()},className:"border border-cBrand border-dashed h-[210px] w-[330px] rounded-br10 flex flex-col justify-center items-center space-x-1 cp relative",children:l?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:l,alt:"img",className:"h-full w-full rounded-br10 p-1"}),(0,i.jsx)(a.LHV,{onClick:c,className:"absolute top-0 right-0 h-6 w-6 cp"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/Images/svg/image-upload.svg",alt:"img",height:40,width:40}),(0,i.jsxs)("div",{className:"text-cTitleTextColor text-fs16 font-fw600",children:[o("Upload")," ",t]}),(0,i.jsx)("div",{className:"text-cSecondaryBodyText text-fs12 font-fw400",children:o("Only jpg, png image")})]})}),(0,i.jsx)("input",{onChange:r,type:"file",accept:"image/png, image/jpg, image/jpeg",ref:n,style:{display:"none"}})]})}},68204:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(85893),s=(n(67294),n(31567));function a(){var e=(0,s.$)().t;return(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-5 w-full",children:[(0,i.jsx)("img",{className:"h-[235px] w-[420px]",src:"/Images/svg/pending_verification_state.svg",alt:"img"}),(0,i.jsxs)("div",{className:"text-fs16 font-fw500",children:[e("Your identity information has been uploaded. Please wait 1-2 days to get the confirmation.")," "]})]})}},36119:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var i=n(85893),s=(n(67294),n(31567)),a=n(8293);function r(){var e=(0,a.ZP)().setIsVerificationFormNeeded,t=(0,s.$)().t;return(0,i.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-5 w-full",children:[(0,i.jsx)("img",{className:"h-[160px] w-[160px]",src:"/Images/svg/verified_state.svg",alt:"img"}),(0,i.jsxs)("div",{className:"text-fs20 font-fw600",children:[t("Congratulation"),"!"]}),(0,i.jsx)("div",{className:"text-fs16 font-fw500",children:t("Your identity has been verified")}),(0,i.jsx)("button",{type:"button",onClick:function(){return e(!0)},className:"mx-auto mt-2 px-10 py-2 bg-cBrand text-cWhite transition-all ease-in rounded-md text-sm md:text-base font-bold shadow",children:t("Update Identity")})]})}},3167:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(85893),s=n(67294),a=n(31567),r=n(51649),l=n(8293),c=n(95891),o=n(59012),d=n(68204),f=n(36119);function u(e){var t=e.isFormShow,n=e.setIsFormShow,u=(0,l.ZP)(),m=u.verification_status,x=u.user_verification_info,v=u.setVerificationStatus,h=u.setIsVerificationFormNeeded,g=u.is_verification_form_needed,p=(0,a.$)().t;return(0,s.useEffect)((function(){h(!1),(0,l.P$)()}),[]),(0,s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("gifty_user_verification_info"));null===e&&v("verify"),"pending"===(null===e||void 0===e?void 0:e.status)&&v("pending"),"verified"===(null===e||void 0===e?void 0:e.status)&&v("verified"),"not_verified"===(null===e||void 0===e?void 0:e.status)&&v("failed")}),[x]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"md:static ml-5 transform  ".concat(t?"translate-x-0":"translate-x-[50rem]"," md:translate-x-0 transition-all ease-in px-5 md:px-0 w-full md:max-w-2xl"),children:(0,i.jsx)("div",{className:"flex-1",children:(0,i.jsxs)("div",{className:"bg-blueGray-50 md:bg-white md:shadow p-0 md:p-6 max-w-2xl rounded-lg",children:[(0,i.jsx)("div",{className:"text-4xl font-semibold text-gray-800 mb-5 hidden md:block",children:p("Identity Verification")}),(0,i.jsxs)("div",{onClick:function(){return n(!1)},className:"py-4 border-b mb-5 md:hidden flex items-center space-x-3 cp",children:[(0,i.jsx)(r.u1R,{className:"text-lg text-gray-600"}),(0,i.jsx)("div",{className:"text-xl font-bold inline truncate",children:p("Identity Verification")})]}),("verify"===m||g)&&(0,i.jsx)(o.default,{setIsFormShow:n}),"pending"===m&&!g&&(0,i.jsx)(d.default,{}),"failed"===m&&!g&&(0,i.jsx)(c.default,{}),"verified"===m&&!g&&(0,i.jsx)(f.default,{})]})})})})}}},function(e){e.O(0,[4617,9774,2888,179],(function(){return t=65828,e(e.s=t);var t}));var t=e.O();_N_E=t}]);