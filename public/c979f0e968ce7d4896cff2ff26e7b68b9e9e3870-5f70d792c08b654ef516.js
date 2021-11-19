/*! For license information please see c979f0e968ce7d4896cff2ff26e7b68b9e9e3870-5f70d792c08b654ef516.js.LICENSE.txt */
(self.webpackChunkgatsby=self.webpackChunkgatsby||[]).push([[735],{9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},6911:function(e,t,r){"use strict";var a=r(5318);t.Z=void 0;var n=a(r(7316)),i=a(r(7154)),o=a(r(1506)),s=a(r(5354)),u=a(r(9713)),c=a(r(7294)),d=a(r(5697)),l=a(r(6807)),f=r(1430),g=r(3053),p=r(4669),m=r(6837),h=r(3096),y=r(4185),v=r(574),S=r(1152),b=function(e){function t(t){var r;r=e.call(this,t)||this,(0,u.default)((0,o.default)(r),"cleanUpListeners",void 0),(0,u.default)((0,o.default)(r),"intersectionListener",(function(){var e=(0,p.inImageCache)(r.props);r.state.isVisible||"function"!=typeof r.props.onStartLoad||r.props.onStartLoad({wasCached:e}),r.imageRef=(0,m.activatePictureRef)(r.imageRef,r.props,r.selfRef),r.setState((function(e){return{isVisible:!0,imageState:e.imageState+1}}),(function(){r.setState((function(t){return{imgLoaded:e,imgCached:(0,m.hasActivatedPictureRefs)(r.imageRef),imageState:t.imageState+1}}))}))}));var a=(0,f.convertProps)(t),n=!0,s=!1,c=a.fadeIn,d=(0,p.inImageCache)(a);!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,s=!0),"undefined"==typeof window&&(n=!1),a.critical&&(n=!0,s=!1);var g=!(a.critical&&!c),h=(0,y.fixClassName)(a)[0];return r.state={isVisible:n,imgLoaded:!1,IOSupported:s,fadeIn:c,hasNoScript:g,seenBefore:d,imageState:0,currentClassNames:h},r.backgroundStyles=(0,y.presetBackgroundStyles)((0,l.default)(a.className)),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)(r)),r.handleRef=r.handleRef.bind((0,o.default)(r)),r.imageRef=(0,m.createPictureRef)((0,i.default)({},a,{isVisible:n}),r.handleImageLoaded),r.selfRef=null,r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.backgroundStyles=(0,y.presetBackgroundStyles)((0,l.default)(this.props.className)),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:(0,p.inImageCache)(this.props)}),(this.props.critical||this.state.seenBefore)&&(0,m.imageReferenceCompleted)(this.imageRef,this.props)&&this.handleImageLoaded();var e=(0,y.fixClassName)(this.props)[0];this.setState({currentClassNames:e})},r.componentDidUpdate=function(e){var t=this;if((0,g.imagePropsChanged)(this.props,e)){var r=(0,f.convertProps)(this.props),a=(0,p.inImageCache)(r),n=(0,y.fixClassName)(r)[0];this.setState({isVisible:a||r.critical,imgLoaded:a,seenBefore:a,currentClassNames:n},(function(){t.bgImage=(0,g.getCurrentFromData)({data:t.imageRef,propName:"currentSrc",returnArray:!0})||(0,g.getCurrentFromData)({data:t.imageRef,propName:"src",returnArray:!0}),t.imageRef=(0,m.createPictureRef)((0,i.default)({},r,{isVisible:t.state.isVisible}),t.handleImageLoaded)}))}},r.componentWillUnmount=function(){this.imageRef&&(Array.isArray(this.imageRef)?this.imageRef.forEach((function(e){return!!e&&(e.onload=null)})):this.imageRef.onload=null),this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){this.selfRef=e,this.state.IOSupported&&e&&(this.cleanUpListeners=(0,S.listenToIntersections)(e,this.intersectionListener,this.props.rootMargin))},r.handleImageLoaded=function(){(0,p.activateCacheForImage)(this.props),this.setState((function(e){return{imgLoaded:!0,imageState:e.imageState+1}})),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=(0,y.fixOpacity)((0,f.convertProps)(this.props),this.props.preserveStackingContext),t=e.className,r=e.style,a=void 0===r?{}:r,o=e.fluid,s=e.fixed,u=e.backgroundColor,d=e.durationFadeIn,l=e.Tag,p=e.children,m=e.classId,S=void 0===m?t?"":Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7)+"_depr":m,b=(0,n.default)(e,["className","style","fluid","fixed","backgroundColor","durationFadeIn","Tag","children","classId"]),A=(0,f.stripRemainingProps)(b),C="boolean"==typeof u?"lightgray":void 0!==u?u:"",I=!0===this.state.fadeIn&&!this.state.imgCached||"soft"===this.props.fadeIn,w=this.state.imgLoaded?d+"ms":"0.25s",x=(0,i.default)({position:"relative"},a);this.props.preserveStackingContext||(x.opacity=.99);var k=(0,g.getCurrentSrcData)({fluid:o,fixed:s,returnArray:!0}),D=(0,g.getCurrentSrcData)({fluid:o,fixed:s});if(!o&&!s)return null;s&&(x.width=k.width,x.height=k.height,x.display="inline-block","inherit"===a.display&&delete x.display);var O=(0,h.switchImageSettings)({image:k,bgImage:this.bgImage,imageRef:this.imageRef,state:this.state});this.bgImage=O.nextImageArray||O.nextImage||this.bgImage;var R=(0,v.createPseudoStyles)((0,i.default)({classId:S,className:this.state.currentClassNames,transitionDelay:w,bgColor:C,backgroundStyles:this.backgroundStyles,style:a,fadeIn:I},O,{originalData:o||s})),P=(0,v.createNoScriptStyles)({image:k,bgColor:C,classId:S,className:this.state.currentClassNames,backgroundStyles:this.backgroundStyles,style:a}),_=""+(o&&"fluid")+(s&&"fixed")+"-"+JSON.stringify(D.srcSet);return c.default.createElement(l,(0,i.default)({className:""+(this.state.currentClassNames||"")+(S&&" gatsby-background-image-"+S)+" gatsby-image-wrapper",style:(0,i.default)({},x,{},this.backgroundStyles),ref:this.handleRef,key:_},A),c.default.createElement("style",{dangerouslySetInnerHTML:{__html:R}}),this.state.hasNoScript&&c.default.createElement("noscript",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:P}})),p)},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,Tag:"div",preserveStackingContext:!1,rootMargin:"200px"};var A=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),C=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});b.propTypes={resolutions:d.default.oneOfType([A,d.default.arrayOf(A),d.default.arrayOf(d.default.oneOfType([A,d.default.string]))]),sizes:d.default.oneOfType([C,d.default.arrayOf(C),d.default.arrayOf(d.default.oneOfType([C,d.default.string]))]),fixed:d.default.oneOfType([A,d.default.arrayOf(A),d.default.arrayOf(d.default.oneOfType([A,d.default.string]))]),fluid:d.default.oneOfType([C,d.default.arrayOf(C),d.default.arrayOf(d.default.oneOfType([C,d.default.string]))]),fadeIn:d.default.oneOfType([d.default.string,d.default.bool]),durationFadeIn:d.default.number,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.oneOfType([d.default.object,d.default.array]),backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.oneOfType([d.default.string,d.default.func]),classId:d.default.string,preserveStackingContext:d.default.bool,rootMargin:d.default.string};var I=b;t.Z=I},6807:function(e,t,r){"use strict";t.__esModule=!0,t.default=t.getBackgroundStylesForSingleClass=t.getStyleRules=t.rulesForCssText=t.getStyle=void 0;var a=r(5734),n=function(e){for(var t="undefined"!=typeof window?window.document.styleSheets:[],r=0;r<t.length;r++){var a=void 0;try{a=void 0!==t[r].rules?t[r].rules:void 0!==t[r].cssRules?t[r].cssRules:""}catch(o){}if(a){var n=Array.prototype.slice.call(a).reduce((function(t,r){return r.selectorText===e&&""===t?r:t}),"");if(n){var i=n.cssText?n.cssText:n.style.cssText;return-1===i.indexOf(n.selectorText)?n.selectorText+"{"+i+"}":i}}}};t.getStyle=n;var i=function(e){if("undefined"!=typeof document&&e){var t=document.implementation.createHTMLDocument(""),r=document.createElement("style");return r.textContent=e,t.body.appendChild(r),r.sheet.cssRules}return{}};t.rulesForCssText=i;var o=function(e){var t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name||e[0].style.constructor.toString()){case"CSS2Properties":case"[object MSStyleCSSProperties]":Object.values(e[0].style).forEach((function(r){t[(0,a.toCamelCase)(r)]=e[0].style[r]}));break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t};t.getStyleRules=o;var s=function(e){if((0,a.isString)(e)){var t=n("."+e),r=i(t);if(r.length>0&&void 0!==r[0].style)return Object.keys(o(r)).filter((function(e){return 0===e.indexOf("background")&&""!==r[0].style[e]})).reduce((function(e,t){return e[t]=r[0].style[t],e}),{})}return{}};t.getBackgroundStylesForSingleClass=s;var u=function(e){if("undefined"!=typeof window){var t=(0,a.stringToArray)(e);if(t instanceof Array){var r=[];return t.forEach((function(e){return r.push(s(e))})),Object.assign.apply(Object,r)}return s(e)}return{}};t.default=u},6254:function(e,t){"use strict";t.__esModule=!0,t.resetComponentClassCache=t.activateCacheForComponentClass=t.inComponentClassCache=void 0;var r=Object.create({});t.inComponentClassCache=function(e){return r[e]||!1};t.activateCacheForComponentClass=function(e){e&&(r[e]=!0)};t.resetComponentClassCache=function(){for(var e in r)delete r[e]}},1430:function(e,t,r){"use strict";var a=r(5318);t.__esModule=!0,t.logDeprecationNotice=t.convertProps=t.stripRemainingProps=void 0;var n=a(r(7154)),i=a(r(1762)),o=r(9810);t.stripRemainingProps=function(e){return(0,i.default)(e)};t.convertProps=function(e){var t=(0,n.default)({},e),r=t.resolutions,a=t.sizes,i=t.classId,u=t.fixed,c=t.fluid;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&s("classId","gatsby-background-image should provide unique classes automatically. Open an Issue should you still need this property."),c&&(0,o.hasArtDirectionSupport)(e,"fluid")&&(t.fluid=(0,o.groupByMedia)(t.fluid)),u&&(0,o.hasArtDirectionSupport)(e,"fixed")&&(t.fixed=(0,o.groupByMedia)(t.fixed)),t};var s=function(e,t){};t.logDeprecationNotice=s},4669:function(e,t,r){"use strict";t.__esModule=!0,t.resetImageCache=t.activateCacheForMultipleImages=t.activateCacheForImage=t.allInImageCache=t.inImageCache=void 0;var a=r(1430),n=r(9810),i=r(3053),o=Object.create({}),s=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=!1);var s=(0,a.convertProps)(e),c=(0,i.hasImageArray)(s)&&!(0,n.hasArtDirectionArray)(s);if(c&&!r)return u(e);var d=c?(0,i.getSelectedImage)(s,t):(0,i.getImageSrcKey)(s);return o[d]||!1};t.inImageCache=s;var u=function(e){var t=(0,a.convertProps)(e);return(t.fluid||t.fixed).every((function(e,r){return s(t,r,!0)}))};t.allInImageCache=u;var c=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=!1);var s=(0,a.convertProps)(e),u=(0,i.hasImageArray)(s)&&!(0,n.hasArtDirectionArray)(s);if(u&&!r)return d(e);var c=u?(0,i.getSelectedImage)(s,t):(0,i.getImageSrcKey)(s);c&&(o[c]=!0)};t.activateCacheForImage=c;var d=function(e){var t=(0,a.convertProps)(e);(t.fluid||t.fixed).forEach((function(e,r){return c(t,r,!0)}))};t.activateCacheForMultipleImages=d;t.resetImageCache=function(){for(var e in o)delete o[e]}},3096:function(e,t,r){"use strict";t.__esModule=!0,t.switchImageSettings=void 0;var a=r(3053),n=r(9810),i=r(5734);t.switchImageSettings=function(e){var t,r,o=e.image,s=e.bgImage,u=e.imageRef,c=e.state,d=(0,a.getCurrentFromData)({data:u,propName:"currentSrc"}),l=Array.isArray(o)&&!(0,n.hasArtDirectionArray)({fluid:o}),f=Array.isArray(s)?(0,i.filteredJoin)(s):s,g=!1;if(l){t=(0,a.getCurrentFromData)({data:o,propName:"tracedSVG",returnArray:l}),t=(0,i.combineArray)((0,a.getCurrentFromData)({data:o,propName:"base64",returnArray:l}),t),t=(0,i.combineArray)((0,a.getCurrentFromData)({data:o,propName:"CSS_STRING",addUrl:!1,returnArray:l}),t),c.imgLoaded&&c.isVisible&&(d?(t=(0,i.combineArray)((0,a.getCurrentFromData)({data:u,propName:"currentSrc",returnArray:l}),t),g=!0):(t=(0,i.combineArray)((0,a.getCurrentFromData)({data:u,propName:"src",returnArray:l}),t),g=!0)),t=(0,i.combineArray)(t,s);var p=(0,a.createDummyImageArray)(o.length);r=t=(0,i.combineArray)(t,p),t=(0,i.filteredJoin)(t)}else t="",t=(0,a.getCurrentFromData)({data:o,propName:"tracedSVG"})||(0,a.getCurrentFromData)({data:o,propName:"base64"}),c.imgLoaded&&c.isVisible&&(t=d,g=!0);var m=c.imageState%2;!l&&""===t&&c.imgLoaded&&c.isVisible&&u&&!u.currentSrc&&(t=(0,a.getCurrentFromData)({data:u,propName:"src",checkLoaded:!1}),g=!0),t||(t=f);var h={lastImage:f,nextImage:t,afterOpacity:m,finalImage:g};return r&&(h.nextImageArray=r),h}},6837:function(e,t,r){"use strict";t.__esModule=!0,t.imageReferenceCompleted=t.hasPictureRef=t.hasActivatedPictureRefs=t.activateMultiplePictureRefs=t.activatePictureRef=t.createMultiplePictureRefs=t.createPictureRef=void 0;var a=r(1430),n=r(3053),i=r(9810),o=r(5734),s=r(4669),u=function(e,t,r,s){void 0===s&&(s=!1);var u=(0,a.convertProps)(e);if((0,o.isBrowser)()&&(void 0!==u.fluid||void 0!==u.fixed)){if((0,n.hasImageArray)(u)&&!(0,i.hasArtDirectionArray)(u)&&!s)return c(e,t);var l=new Image;return l.onload=function(){return t()},l.complete||"function"!=typeof u.onLoad||l.addEventListener("load",u.onLoad),"function"==typeof u.onError&&l.addEventListener("error",u.onError),u.crossOrigin&&(l.crossOrigin=u.crossOrigin),!u.critical&&!u.isVisible||s?l:d(l,u,r,s)}return null};t.createPictureRef=u;var c=function(e,t){var r=(0,a.convertProps)(e),n=(r.fluid||r.fixed).map((function(e,a){return u(r,t,a,!0)}));return r.critical||r.isVisible?d(n,r):n};t.createMultiplePictureRefs=c;var d=function(e,t,r,s,u){void 0===r&&(r=null),void 0===s&&(s=0),void 0===u&&(u=!1);var c=(0,a.convertProps)(t);if((0,o.isBrowser)()&&(void 0!==c.fluid||void 0!==c.fixed)){var d=(0,n.hasImageArray)(c)&&!(0,i.hasArtDirectionArray)(c);if(d&&!u)return l(e,t,r);var f=document.body.cloneNode(!0),g=d?(0,n.getSelectedImage)(c,s):(0,n.getCurrentSrcData)(c);if(!g||(0,o.isString)(g))return null;if((0,n.hasPictureElement)()){var p=document.createElement("picture");if(r&&(e.width=r.offsetWidth,e.height=r.offsetHeight,p.width=e.width,p.height=e.height),(0,i.hasArtDirectionArray)(c))(0,i.createArtDirectionSources)(c).reverse().forEach((function(e){return p.appendChild(e)}));if(g.srcSetWebp){var m=document.createElement("source");m.type="image/webp",m.srcset=g.srcSetWebp,m.sizes=g.sizes,p.appendChild(m)}p.appendChild(e),f.appendChild(p)}else r&&(e.width=r.offsetWidth,e.height=r.offsetHeight);return e.sizes=g.sizes||"",e.srcset=g.srcSet||"",e.src=g.src||"",e}return null};t.activatePictureRef=d;var l=function(e,t,r){return e.map((function(e,a){return d(e,t,r,a,!0)}))};t.activateMultiplePictureRefs=l;t.hasActivatedPictureRefs=function(e){return Array.isArray(e)?e.every((function(e){return f(e)})):f(e)};var f=function(e){return(0,o.isString)(e)||!!e&&!!e.currentSrc};t.hasPictureRef=f;t.imageReferenceCompleted=function(e,t){return e?Array.isArray(e)?e.every((function(e){return(0,n.imageLoaded)(e)}))||(0,s.inImageCache)(t):(0,n.imageLoaded)(e)||(0,s.inImageCache)(t):(0,o.isString)(e)}},3053:function(e,t,r){"use strict";t.__esModule=!0,t.imageLoaded=t.createDummyImageArray=t.imageArrayPropsChanged=t.imagePropsChanged=t.hasImageUrl=t.isBase64=t.getUrlString=t.getSelectedImage=t.getCurrentSrcData=t.getImageSrcKey=t.getCurrentFromData=t.hasImageArray=t.hasPictureElement=void 0;var a=r(9810),n=r(5734);t.hasPictureElement=function(){return"undefined"!=typeof HTMLPictureElement||"undefined"==typeof window};var i=function(e){return Boolean(e.fluid&&Array.isArray(e.fluid)||e.fixed&&Array.isArray(e.fixed))};t.hasImageArray=i;t.getCurrentFromData=function(e){var t=e.data,r=e.propName,i=e.addUrl,u=void 0===i||i,c=e.returnArray,d=void 0!==c&&c,f=e.checkLoaded,g=void 0===f||f;if(!t||!r)return"";var p="tracedSVG"===r;if(Array.isArray(t)&&!(0,a.hasArtDirectionArray)({fluid:t})){var m=t.map((function(e){return"currentSrc"===r||"src"===r?g?l(e)&&e[r]||"":e[r]:"CSS_STRING"===r&&(0,n.isString)(e)||(0,n.isString)(e)?e:e&&r in e?e[r]:""}));return s({imageString:m,tracedSVG:p,addUrl:u,returnArray:d})}if((0,a.hasArtDirectionArray)({fluid:t})&&("currentSrc"===r||"src"===r||"base64"===r||p)){var h=o({fluid:t});return r in h?s({imageString:h[r],tracedSVG:p,addUrl:u}):""}return"currentSrc"!==r&&"src"!==r||!(r in t)?r in t?s({imageString:t[r],tracedSVG:p,addUrl:u}):"":s({imageString:g?l(t)&&t[r]||"":t[r],addUrl:u})};t.getImageSrcKey=function(e){var t=e.fluid,r=e.fixed,a=o({fluid:t,fixed:r});return a&&a.src||null};var o=function(e,t){var r=e.fluid,o=e.fixed,s=e.returnArray;void 0===t&&(t=0);var u=r||o;if(i({fluid:r,fixed:o})){if(s)return u;if((0,n.isBrowser)()&&(0,a.hasArtDirectionArray)({fluid:r,fixed:o})){var c=u.slice().reverse(),d=c.findIndex(a.matchesMedia);if(-1!==d)return c[d]}return u[t]}return u};t.getCurrentSrcData=o;t.getSelectedImage=function(e,t){var r=e.fluid,a=e.fixed;void 0===t&&(t=0);var n=r||a;return i({fluid:r,fixed:a})?n[t]||n[0]:n};var s=function(e){var t=e.imageString,r=e.tracedSVG,a=void 0!==r&&r,i=e.addUrl,o=void 0===i||i,s=e.returnArray,d=void 0!==s&&s,l=e.hasImageUrls,f=void 0!==l&&l;if(Array.isArray(t)){var g=t.map((function(e){if(e){var r=u(e),n=f||c(t),i=e&&a?'"'+e+'"':e&&!r&&!a&&n?"'"+e+"'":e;return o&&e?"url("+i+")":i}return e}));return d?g:(0,n.filteredJoin)(g)}var p=u(t),m=f||c(t),h=t&&a?'"'+t+'"':t&&!p&&!a&&m?"'"+t+"'":t;return t?o?"url("+h+")":h:""};t.getUrlString=s;var u=function(e){return(0,n.isString)(e)&&-1!==e.indexOf("base64")};t.isBase64=u;var c=function(e){return(0,n.isString)(e)&&"http"===e.substr(0,4)};t.hasImageUrl=c;t.imagePropsChanged=function(e,t){return e.fluid&&!t.fluid||e.fixed&&!t.fixed||d(e,t)||e.fluid&&t.fluid&&e.fluid.src!==t.fluid.src||e.fixed&&t.fixed&&e.fixed.src!==t.fixed.src};var d=function(e,t){var r=Array.isArray(e.fluid),a=Array.isArray(t.fluid),n=Array.isArray(e.fixed),i=Array.isArray(t.fixed);return!!(r&&!a||n&&!i||!r&&a||!n&&i)||(r&&a?e.fluid.length!==t.fluid.length||e.fluid.some((function(e,r){return e.src!==t.fluid[r].src})):n&&i?e.fixed.length!==t.fixed.length||e.fixed.some((function(e,r){return e.src!==t.fixed[r].src})):void 0)};t.imageArrayPropsChanged=d;t.createDummyImageArray=function(e){var t=s({imageString:"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="});return Array(e).fill(t)};var l=function(e){return!!e&&(e.complete&&0!==e.naturalWidth&&0!==e.naturalHeight)};t.imageLoaded=l},1152:function(e,t){"use strict";var r;t.__esModule=!0,t.listenToIntersections=t.getIO=t.callbackIO=void 0;var a=new WeakMap,n=function(e){e.forEach((function(e){if(a.has(e.target)){var t=a.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),a.delete(e.target),t())}}))};t.callbackIO=n;var i=function(e){return void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(n,{rootMargin:e})),r};t.getIO=i;t.listenToIntersections=function(e,t,r){void 0===r&&(r="200px");var n=i(r);return n?(n.observe(e),a.set(e,t),function(){n.unobserve(e),a.delete(e)}):function(){}}},9810:function(e,t,r){"use strict";var a=r(5318);t.__esModule=!0,t.matchesMedia=t.hasArtDirectionArray=t.hasArtDirectionSupport=t.createArtDirectionSources=t.groupByMedia=void 0;var n=a(r(6335)),i=r(5734);t.groupByMedia=function(e){var t=[],r=(0,n.default)(e,"media");return r.forEach((function(e){return!e.media&&t.push(e)})),t.length,r};t.createArtDirectionSources=function(e){var t=e.fluid,r=e.fixed;return(t||r).reduce((function(e,t){if(!t.media)return e;var r=document.createElement("source");return t.srcSetWebp&&(r.type="image/webp",r.srcset=t.srcSetWebp),t.sizes&&(r.sizes=t.sizes),r.media=t.media,e.push(r),e}),[])};var o=function(e,t){return e[t]&&Array.isArray(e[t])&&e[t].some((function(e){return!!e&&void 0!==e.media}))};t.hasArtDirectionSupport=o;t.hasArtDirectionArray=function(e){return o(e,"fluid")||o(e,"fixed")};t.matchesMedia=function(e){var t=e.media;return!!t&&((0,i.isBrowser)()&&void 0!==window.matchMedia&&!!window.matchMedia(t).matches)}},5734:function(e,t){"use strict";t.__esModule=!0,t.combineArray=t.filteredJoin=t.hashString=t.stringToArray=t.toKebabCase=t.toCamelCase=t.isString=t.isBrowser=void 0;t.isBrowser=function(){return"undefined"!=typeof window};var r=function(e){return"[object String]"===Object.prototype.toString.call(e)};t.isString=r;t.toCamelCase=function(e){return r(e)&&e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()})).replace(/\s|\W+/g,"")};t.toKebabCase=function(e){return r(e)&&e.replace(/\s|\W+/g,"").replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()}))};t.stringToArray=function(e,t){return void 0===t&&(t=" "),e instanceof Array?e:!!r(e)&&(e.includes(t)?e.split(t):[e])};t.hashString=function(e){return r(e)&&[].reduce.call(e,(function(e,t){return 0|(e=(e<<5)-e+t.charCodeAt(0))}),0)};t.filteredJoin=function(e){return e.filter((function(e){return""!==e})).join()};t.combineArray=function(e,t){return Array.isArray(e)?e.map((function(e,r){return e||t&&t[r]})):[e]}},574:function(e,t,r){"use strict";var a=r(5318);t.__esModule=!0,t.createNoScriptStyles=t.createStyleImage=t.createPseudoStyles=t.createPseudoElementMediaQuery=t.createPseudoElementWithContent=t.createPseudoElement=void 0;var n=a(r(7154)),i=r(4185),o=r(3053),s=r(9810),u=r(5734),c=function(e,t,r){void 0===t&&(t=""),void 0===r&&(r=":before");var a=(0,i.escapeClassNames)(e),n=(0,u.stringToArray)(a),o="";return Array.isArray(n)&&(n=n.filter((function(e){return""!==e}))).length>0&&(o="."+n.join(".")+r),""!==t&&(o+=(o&&",\n")+".gatsby-background-image-"+t+r),o};t.createPseudoElement=c;var d=function(e,t){return"\n    "+e+" {\n      opacity: 1;\n      background-image: "+t+";\n    }"};t.createPseudoElementWithContent=d;var l=function(e,t,r,a){return"\n      @media "+t+" {\n        "+d(e,r)+"\n      }\n      "+(a&&"@media "+t+" {\n          "+d(e,a)+"\n        }")+"\n    "};t.createPseudoElementMediaQuery=l;t.createPseudoStyles=function(e){var t=e.classId,r=e.className,a=e.transitionDelay,o=e.lastImage,s=e.nextImage,u=e.afterOpacity,d=e.bgColor,l=e.fadeIn,g=e.backgroundStyles,p=e.style,m=e.finalImage,h=e.originalData,y=c(r,t),v=c(r,t,":after");return"\n          "+y+",\n          "+v+" {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            "+(d&&"background-color: "+d+";")+"\n            "+(0,i.setTransitionStyles)(a,l)+"\n            "+(0,i.kebabifyBackgroundStyles)((0,n.default)({},g,{},p))+"\n          }\n          "+y+" {\n            z-index: -100;\n            "+(u&&f(s,h)||"")+"\n            "+(!u&&f(o,h)||"")+"\n            opacity: "+u+"; \n          }\n          "+v+" {\n            z-index: -101;\n            "+(!u&&f(s,h)||"")+"\n            "+(u&&f(o,h)||"")+"\n            "+(m?"opacity: "+Number(!u)+";":"")+"\n          }\n        "};var f=function(e,t){var r=(0,o.hasImageArray)({fluid:t})&&!(0,s.hasArtDirectionArray)({fluid:t});return((0,u.isBrowser)()||r)&&e?"background-image: "+e+";":""};t.createStyleImage=f;t.createNoScriptStyles=function(e){var t=e.classId,r=e.className,a=e.image;if(a){var n=Array.isArray(a)&&!(0,s.hasArtDirectionArray)({fluid:a}),i=(0,o.getCurrentFromData)({data:a,propName:"src",checkLoaded:!1,addUrl:!1,returnArray:n}),f=(0,o.getUrlString)({imageString:i,hasImageUrls:!0,returnArray:n}),g="";if(n){var p=(0,o.getCurrentFromData)({data:a,propName:"CSS_STRING",addUrl:!1,returnArray:n});g=(0,u.filteredJoin)((0,u.combineArray)(f,p))}var m=c(r,t);return(0,s.hasArtDirectionArray)({fluid:a})?a.map((function(e){var t=(0,o.getUrlString)({imageString:e.src}),r=(0,o.getUrlString)({imageString:e.srcWebp||""});return e.media?l(m,e.media,t,r):l(m,"screen",t,r)})).join(""):d(m,g||f)}return""}},4185:function(e,t,r){"use strict";var a=r(5318);t.__esModule=!0,t.presetBackgroundStyles=t.fixOpacity=t.setTransitionStyles=t.kebabifyBackgroundStyles=t.escapeClassNames=t.fixClassName=void 0;var n=a(r(7154)),i=a(r(7316)),o=a(r(4806)),s=r(1430),u=r(6254),c=r(3053),d=r(5734);t.fixClassName=function(e){var t=e.className,r=(0,i.default)(e,["className"]),a=(0,s.convertProps)(r),n=(0,u.inComponentClassCache)(t),l=(0,c.getCurrentSrcData)(a),f=o.default.generate(),g=" gbi-"+(0,d.hashString)(l&&l.srcSet||t)+"-"+f,p=(""+(t||"")+((n?g:"")||"")).trim();return n||(0,u.activateCacheForComponentClass)(t),[p]};t.escapeClassNames=function(e){if(e){var t=(0,d.isBrowser)()&&window._gbiSpecialChars?window._gbiSpecialChars:"undefined"!=typeof __GBI_SPECIAL_CHARS__?__GBI_SPECIAL_CHARS__:":/",r=new RegExp("["+t+"]","g");return e.replace(r,"\\$&")}return e};t.kebabifyBackgroundStyles=function(e){return(0,d.isString)(e)?e:e instanceof Object?Object.keys(e).filter((function(t){return 0===t.indexOf("background")&&""!==e[t]})).reduce((function(t,r){return""+t+(0,d.toKebabCase)(r)+": "+e[r]+";\n"}),""):""};t.setTransitionStyles=function(e,t){return void 0===e&&(e="0.25s"),void 0===t&&(t=!0),t?"transition: opacity 0.5s ease "+e+";":"transition: none;"};t.fixOpacity=function(e){var t=(0,n.default)({},e);if(!t.preserveStackingContext)try{t.style&&t.style.opacity&&(isNaN(t.style.opacity)||t.style.opacity>.99)&&(t.style.opacity=.99)}catch(r){}return t};t.presetBackgroundStyles=function(e){return(0,n.default)({},{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},{},e)}},6711:function(e,t,r){var a=r(9633);function n(e,t){var r=new a(e,t);return function(e){return r.convert(e)}}n.BIN="01",n.OCT="01234567",n.DEC="0123456789",n.HEX="0123456789abcdef",e.exports=n},9633:function(e){"use strict";function t(e,t){if(!(e&&t&&e.length&&t.length))throw new Error("Bad alphabet");this.srcAlphabet=e,this.dstAlphabet=t}t.prototype.convert=function(e){var t,r,a,n={},i=this.srcAlphabet.length,o=this.dstAlphabet.length,s=e.length,u="string"==typeof e?"":[];if(!this.isValid(e))throw new Error('Number "'+e+'" contains of non-alphabetic digits ('+this.srcAlphabet+")");if(this.srcAlphabet===this.dstAlphabet)return e;for(t=0;t<s;t++)n[t]=this.srcAlphabet.indexOf(e[t]);do{for(r=0,a=0,t=0;t<s;t++)(r=r*i+n[t])>=o?(n[a++]=parseInt(r/o,10),r%=o):a>0&&(n[a++]=0);s=a,u=this.dstAlphabet.slice(r,r+1).concat(u)}while(0!==a);return u},t.prototype.isValid=function(e){for(var t=0;t<e.length;++t)if(-1===this.srcAlphabet.indexOf(e[t]))return!1;return!0},e.exports=t},1762:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&s(r)&&(t[r]=e[r]);return t};var a,n=r(7103),i=(a=n)&&a.__esModule?a:{default:a};var o={onCopy:!0,onCut:!0,onPaste:!0,onLoad:!0,onError:!0,onWheel:!0,onScroll:!0,onCompositionEnd:!0,onCompositionStart:!0,onCompositionUpdate:!0,onKeyDown:!0,onKeyPress:!0,onKeyUp:!0,onFocus:!0,onBlur:!0,onChange:!0,onInput:!0,onSubmit:!0,onClick:!0,onContextMenu:!0,onDoubleClick:!0,onDrag:!0,onDragEnd:!0,onDragEnter:!0,onDragExit:!0,onDragLeave:!0,onDragOver:!0,onDragStart:!0,onDrop:!0,onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOut:!0,onMouseOver:!0,onMouseUp:!0,onSelect:!0,onTouchCancel:!0,onTouchEnd:!0,onTouchMove:!0,onTouchStart:!0,onAnimationStart:!0,onAnimationEnd:!0,onAnimationIteration:!0,onTransitionEnd:!0};function s(e){return o[e]||i.default[e]||/^(data|aria)-/.test(e)}},7103:function(e){"use strict";e.exports={abbr:"abbr",accept:"accept",acceptCharset:"accept-charset",accessKey:"accesskey",action:"action",allowFullScreen:"allowfullscreen",allowTransparency:"allowtransparency",alt:"alt",async:"async",autoComplete:"autocomplete",autoFocus:"autofocus",autoPlay:"autoplay",cellPadding:"cellpadding",cellSpacing:"cellspacing",challenge:"challenge",charset:"charset",checked:"checked",cite:"cite",class:"class",className:"class",cols:"cols",colSpan:"colspan",command:"command",content:"content",contentEditable:"contenteditable",contextMenu:"contextmenu",controls:"controls",coords:"coords",crossOrigin:"crossorigin",data:"data",dateTime:"datetime",default:"default",defer:"defer",dir:"dir",disabled:"disabled",download:"download",draggable:"draggable",dropzone:"dropzone",encType:"enctype",for:"for",form:"form",formAction:"formaction",formEncType:"formenctype",formMethod:"formmethod",formNoValidate:"formnovalidate",formTarget:"formtarget",frameBorder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hrefLang:"hreflang",htmlFor:"for",httpEquiv:"http-equiv",icon:"icon",id:"id",inputMode:"inputmode",isMap:"ismap",itemId:"itemid",itemProp:"itemprop",itemRef:"itemref",itemScope:"itemscope",itemType:"itemtype",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",manifest:"manifest",max:"max",maxLength:"maxlength",media:"media",mediaGroup:"mediagroup",method:"method",min:"min",minLength:"minlength",multiple:"multiple",muted:"muted",name:"name",noValidate:"novalidate",open:"open",optimum:"optimum",pattern:"pattern",ping:"ping",placeholder:"placeholder",poster:"poster",preload:"preload",radioGroup:"radiogroup",readOnly:"readonly",rel:"rel",required:"required",role:"role",rows:"rows",rowSpan:"rowspan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",sortable:"sortable",span:"span",spellCheck:"spellcheck",src:"src",srcDoc:"srcdoc",srcSet:"srcset",start:"start",step:"step",style:"style",tabIndex:"tabindex",target:"target",title:"title",translate:"translate",type:"type",typeMustMatch:"typemustmatch",useMap:"usemap",value:"value",width:"width",wmode:"wmode",wrap:"wrap"}},4806:function(e,t,r){var a,n=r(6711),i=r(6234),o="123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";function s(e,t){return t(e.toLowerCase().replace(/-/g,""))}e.exports=function(){function e(e){var t=e||o,r=n(n.HEX,t),a=n(t,n.HEX),u=function(){return s(i(),r)};return{new:u,generate:u,uuid:i,fromUUID:function(e){return s(e,r)},toUUID:function(e){return function(e,t){for(var r,a=t(e),n="",i=0,o=32-a.length;i<o;++i)n+="0";return[(r=(n+a).match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/))[1],r[2],r[3],r[4],r[5]].join("-")}(e,a)},alphabet:t}}return e.constants={flickrBase58:o,cookieBase90:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~"},e.uuid=i,e.generate=function(){return a||(a=n(n.HEX,o)),s(i(),a)},e}()},6335:function(e,t,r){var a=r(3499),n=["blank","all","minWidth","minHeight","maxWidth","maxHeight","print"];function i(e){return function(t,r){var a=t.sortVal,n=r.sortVal,i=t.item.__media,o=r.item.__media;if(e=void 0!==e&&e,a===n){if(i.match(/print/))return 1;if(o.match(/print/))return-1}return e?n-a:a-n}}function o(e,t,r){switch(function(e,t,r){return e&&e.length&&"string"!=typeof e?("object"!==t||r&&"string"==typeof r)&&function(e,t,r){for(var a=!0,n=0,i=e.length;n<i;n++)if(typeof e[n]!==t||r&&!e[n].hasOwnProperty(r)){a=!1;break}return a}(e,t,r)?"all":"some":"none"}(e,t,r)){case"none":return[];case"some":return e}var o=function(){for(var e={},t=0,r=n.length;t<r;t++)e[n[t]]=[];return e}();return e=function(e,t,r){for(var n=[],i={},o=0,s=e.length;o<s;o++)"string"===t?i=a({},{__media:e[o]}):(i=a({},e[o])).__media=e[o][r],n.push(i);return n}(e,t,r),function(e,t){for(var r=0,a=t.length;r<a;r++){var n=t[r],i=n.__media,o="blank",s=i.match(/\d+/g);i.match(/min-width/)?o="minWidth":i.match(/min-height/)?o="minHeight":i.match(/max-width/)?o="maxWidth":i.match(/max-height/)?o="maxHeight":i.match(/print/)?o="print":i.match(/all/)&&(o="all"),e[o].push({item:n,sortVal:s?s[0]:0})}}(o,e),function(e){var t;for(var r in e)e.hasOwnProperty(r)&&(t=i(!1),"maxWidth"!==r&&"maxHeight"!==r||(t=i(!0)),e[r].sort(t))}(o),function(e,t,r){var a=[];function i(e){for(var r,n=0,i=e.length;n<i;n++)"string"===t?r=e[n].item.__media:delete(r=e[n].item).__media,a.push(r)}for(var o=0,s=n.length;o<s;o++)i(e[n[o]]);return a}(o,t)}e.exports=function(e,t){return e?t?o(e,"object",t):o(e,"string"):[]}},4938:function(e){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);e.exports=function(e,r){var a=r||0,n=t;return[n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]]].join("")}},6516:function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},6234:function(e,t,r){var a=r(6516),n=r(4938);e.exports=function(e,t,r){var i=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var s=0;s<16;++s)t[i+s]=o[s];return t||n(o)}},3499:function(e){e.exports=function(){for(var e={},r=0;r<arguments.length;r++){var a=arguments[r];for(var n in a)t.call(a,n)&&(e[n]=a[n])}return e};var t=Object.prototype.hasOwnProperty}}]);
//# sourceMappingURL=c979f0e968ce7d4896cff2ff26e7b68b9e9e3870-5f70d792c08b654ef516.js.map