"use strict";(self.webpackChunkgatsby=self.webpackChunkgatsby||[]).push([[351],{2599:function(e,o,t){var n=t(7294),r=t(3773),i=t(5444),a=n.forwardRef((function(e,o){return n.createElement(r.Z,Object.assign({component:i.rU,ref:o},e))}));o.Z=a},3773:function(e,o,t){var n=t(7462),r=t(5987),i=t(7294),a=t(8685),l=t(3073),c=t(7933),s=t(6925),u=t(5650),p=t(5931),d=i.forwardRef((function(e,o){var t=e.classes,c=e.className,d=e.color,h=void 0===d?"primary":d,f=e.component,y=void 0===f?"a":f,m=e.onBlur,g=e.onFocus,v=e.TypographyClasses,b=e.underline,Z=void 0===b?"hover":b,w=e.variant,S=void 0===w?"inherit":w,x=(0,r.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),E=(0,s.Z)(),k=E.isFocusVisible,B=E.onBlurVisible,T=E.ref,N=i.useState(!1),C=N[0],z=N[1],A=(0,u.Z)(o,T);return i.createElement(p.Z,(0,n.Z)({className:(0,a.Z)(t.root,t["underline".concat((0,l.Z)(Z))],c,C&&t.focusVisible,"button"===y&&t.button),classes:v,color:h,component:y,onBlur:function(e){C&&(B(),z(!1)),m&&m(e)},onFocus:function(e){k(e)&&z(!0),g&&g(e)},ref:A,variant:S},x))}));o.Z=(0,c.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(d)},3947:function(e,o,t){var n=t(7462),r=t(5987),i=t(7294),a=t(8685),l=t(7933),c=t(3073),s=i.forwardRef((function(e,o){var t=e.children,l=e.classes,s=e.className,u=e.color,p=void 0===u?"inherit":u,d=e.component,h=void 0===d?"svg":d,f=e.fontSize,y=void 0===f?"medium":f,m=e.htmlColor,g=e.titleAccess,v=e.viewBox,b=void 0===v?"0 0 24 24":v,Z=(0,r.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(h,(0,n.Z)({className:(0,a.Z)(l.root,s,"inherit"!==p&&l["color".concat((0,c.Z)(p))],"default"!==y&&"medium"!==y&&l["fontSize".concat((0,c.Z)(y))]),focusable:"false",viewBox:b,color:m,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:o},Z),t,g?i.createElement("title",null,g):null)}));s.muiName="SvgIcon",o.Z=(0,l.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s)},5931:function(e,o,t){var n=t(7462),r=t(5987),i=t(7294),a=t(8685),l=t(7933),c=t(3073),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=i.forwardRef((function(e,o){var t=e.align,l=void 0===t?"inherit":t,u=e.classes,p=e.className,d=e.color,h=void 0===d?"initial":d,f=e.component,y=e.display,m=void 0===y?"initial":y,g=e.gutterBottom,v=void 0!==g&&g,b=e.noWrap,Z=void 0!==b&&b,w=e.paragraph,S=void 0!==w&&w,x=e.variant,E=void 0===x?"body1":x,k=e.variantMapping,B=void 0===k?s:k,T=(0,r.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),N=f||(S?"p":B[E]||s[E])||"span";return i.createElement(N,(0,n.Z)({className:(0,a.Z)(u.root,p,"inherit"!==E&&u[E],"initial"!==h&&u["color".concat((0,c.Z)(h))],Z&&u.noWrap,v&&u.gutterBottom,S&&u.paragraph,"inherit"!==l&&u["align".concat((0,c.Z)(l))],"initial"!==m&&u["display".concat((0,c.Z)(m))]),ref:o},T))}));o.Z=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},3368:function(e,o,t){var n=t(7462),r=t(8090),i=t(6949);o.Z=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.Z)(e,(0,n.Z)({defaultTheme:i.Z},o))}},3073:function(e,o,t){t.d(o,{Z:function(){return r}});var n=t(5887);function r(e){if("string"!=typeof e)throw new Error((0,n.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},2392:function(e,o,t){function n(e,o){"function"==typeof e?e(o):e&&(e.current=o)}t.d(o,{Z:function(){return n}})},5650:function(e,o,t){t.d(o,{Z:function(){return i}});var n=t(7294),r=t(2392);function i(e,o){return n.useMemo((function(){return null==e&&null==o?null:function(t){(0,r.Z)(e,t),(0,r.Z)(o,t)}}),[e,o])}},6925:function(e,o,t){t.d(o,{Z:function(){return f}});var n=t(7294),r=t(3935),i=!0,a=!1,l=null,c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function u(){i=!1}function p(){"hidden"===this.visibilityState&&a&&(i=!0)}function d(e){var o,t,n,r=e.target;try{return r.matches(":focus-visible")}catch(a){}return i||(t=(o=r).type,!("INPUT"!==(n=o.tagName)||!c[t]||o.readOnly)||"TEXTAREA"===n&&!o.readOnly||!!o.isContentEditable)}function h(){a=!0,window.clearTimeout(l),l=window.setTimeout((function(){a=!1}),100)}function f(){return{isFocusVisible:d,onBlurVisible:h,ref:n.useCallback((function(e){var o,t=r.findDOMNode(e);null!=t&&((o=t.ownerDocument).addEventListener("keydown",s,!0),o.addEventListener("mousedown",u,!0),o.addEventListener("pointerdown",u,!0),o.addEventListener("touchstart",u,!0),o.addEventListener("visibilitychange",p,!0))}),[])}}}}]);
//# sourceMappingURL=commons-0362754b5bc773c2a5cc.js.map