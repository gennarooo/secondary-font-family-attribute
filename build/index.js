!function(){"use strict";var t=window.wp.element,e=window.wp.i18n,o=window.wp.blockEditor,n=window.wp.richText,a=window.wp.components;(0,n.registerFormatType)("secondary-font/secondary-font-family-attribute",{className:"secondary-font-family",edit:r=>{let{isActive:i,onChange:l,value:c}=r;return(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(a.ToolbarGroup,null,(0,t.createElement)(a.ToolbarButton,{icon:"editor-textcolor",label:(0,e.__)("Secondary font","secondary-font-family-attribute"),title:(0,e.__)("Secondary font","secondary-font-family-attribute"),onClick:()=>{l((0,n.toggleFormat)(c,{type:"secondary-font/secondary-font-family-attribute"}))},isActive:i})))},tagName:"span",title:(0,e.__)("Secondary font","secondary-font-family-attribute")})}();