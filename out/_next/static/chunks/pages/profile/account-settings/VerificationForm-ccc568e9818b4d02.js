(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6513],{14802:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/account-settings/VerificationForm",function(){return t(59012)}])},59012:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a=t(85893),l=t(67294),i=t(31567),r=t(8293),s=t(40519),o=function(e){e.onClick;var n=e.onChange,t=e.name,l=e.value,i=(e.type,e.label),r=(e.placeholder,e.className),s=void 0===r?"":r,o=e.className2,c=void 0===o?"":o,u=e.className3,d=void 0===u?"":u,f=(e.className4,e.is_readonly,e.no_label),m=void 0!==f&&f,x=e.icon,h=void 0===x?null:x,g=(e.pipe,e.textarea,e.rows,e.cols,e.required,e.minLength,e.options),v=void 0===g?[]:g;return(0,a.jsxs)("div",{className:"".concat(""!==s?s:"mb-5"),children:[!m&&(0,a.jsx)("div",{className:"font-fw500 text-fs16 text-cTitleTextColor mb-2",children:i}),(0,a.jsx)("div",{className:"".concat(c," ").concat(h&&"relative flex justify-center items-center"),children:(0,a.jsx)("select",{name:t,value:l,onChange:n,className:"bg-cWhite border px-5 py-3 w-full outline-none rounded-md ".concat(d," focus:shadow-c6 focus:outline-none focus:border-cBrand "),children:v.map((function(e,n){return(0,a.jsx)("option",{className:"font-fw500 text-fs16 text-cTitleTextColor",value:e.value,children:e.label},n)}))})})]})},c=t(18676);function u(e){e.setIsFormShow;var n=(0,r.ZP)(),t=n.verification_method,u=n.setVerificationMethod,d=n.front_image,f=n.back_image,m=n.setFrontImage,x=n.setBackImage,h=(0,l.useRef)(null),g=(0,l.useRef)(null),v=(0,i.$)().t,p=[{value:"mncard",label:v("My Number Card")},{value:"rcard",label:v("Residence Card")},{value:"driving",label:v("Driving License")},{value:"passport",label:v("Passport")}],b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"front";(0,s.y3)(e.target.files[0],(function(e){"front"===n?m(e):x(e)}))};return(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),(0,r.Y5)()},children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)(o,{options:p,name:t,label:v("Choose Verification Method"),onChange:function(e){return u(e.target.value)}}),(0,a.jsx)(c.default,{label:v("Front Side"),fileRef:h,image:d,onChange:function(e){return b(e,"front")},onClear:function(){m(null),h.current.value=null}}),(0,a.jsx)(c.default,{label:v("Back Side"),fileRef:g,image:f,onChange:function(e){return b(e,"back")},onClear:function(){x(null),g.current.value=null}})]}),(0,a.jsx)("div",{className:"x-center",children:(0,a.jsx)("button",{disabled:!d||!f,type:"submit",className:"mx-auto mt-2 px-10 py-2 ".concat(d&&f?"bg-cBrand text-white":"bg-cPlaceholder text-cTitleTextColor"," transition-all ease-in rounded-md text-sm md:text-base font-bold shadow"),children:v("Submit")})})]})}},18676:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r}});var a=t(85893),l=(t(67294),t(31567)),i=t(8193);function r(e){var n=e.label,t=e.fileRef,r=e.onChange,s=e.image,o=e.onClear,c=(0,l.$)().t;return(0,a.jsxs)("div",{className:"w-full flex flex-col justify-start space-y-5 items-center mb-5",children:[(0,a.jsx)("div",{className:"text-cTitleTextColor text-fs20 font-fw600 mb-2",children:n}),(0,a.jsx)("div",{onClick:function(){return s?{}:t.current.click()},className:"border border-cBrand border-dashed h-[210px] w-[330px] rounded-br10 flex flex-col justify-center items-center space-x-1 cp relative",children:s?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:s,alt:"img",className:"h-full w-full rounded-br10 p-1"}),(0,a.jsx)(i.LHV,{onClick:o,className:"absolute top-0 right-0 h-6 w-6 cp"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:"/Images/svg/image-upload.svg",alt:"img",height:40,width:40}),(0,a.jsxs)("div",{className:"text-cTitleTextColor text-fs16 font-fw600",children:[c("Upload")," ",n]}),(0,a.jsx)("div",{className:"text-cSecondaryBodyText text-fs12 font-fw400",children:c("Only jpg, png image")})]})}),(0,a.jsx)("input",{onChange:r,type:"file",accept:"image/png, image/jpg, image/jpeg",ref:t,style:{display:"none"}})]})}}},function(e){e.O(0,[4617,9774,2888,179],(function(){return n=14802,e(e.s=n);var n}));var n=e.O();_N_E=n}]);