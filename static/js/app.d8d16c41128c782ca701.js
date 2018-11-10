webpackJsonp([1],{"7Q77":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),i=s("DAYN"),l=s.n(i),n={props:["parent","items"],name:"draggableChild",components:{draggable:l.a},methods:{onAdd:function(){this.$emit("childAdded")}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"min-height":"25px","padding-top":"0.75rem"}},[s("draggable",{staticClass:"form-stage__drag row",attrs:{options:{group:"elements"},list:e.items},on:{add:e.onAdd}},e._l(e.items,function(t,a){return s("div",{key:t.id,class:[t.column?"col-"+t.columnSize:"col-12"]},[s("FormItem",{attrs:{el:t,items:e.items,index:a}})],1)}))],1)},staticRenderFns:[]},c={props:["item"],name:"FormItemEdit",data:()=>({active:!1})},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"centerx"},[s("vs-button",{staticClass:"element-edit",attrs:{"vs-color":"primary","vs-type":"flat","vs-size":"small"},on:{click:function(t){e.active=!0}}},[e._v("Edit")]),e._v(" "),s("vs-popup",{staticClass:"holamundo",attrs:{title:"Editing: "+e.item.name,active:e.active},on:{"update:active":function(t){e.active=t},"vs-cancel":function(t){e.active=!1}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},["input"==e.item.type||"textarea"==e.item.type?s("div",{staticClass:"edit-options"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"edit-options__item"},[s("vs-input",{staticClass:"inputx",attrs:{"vs-label":"Display Name",placeholder:e.item.name},model:{value:e.item.name,callback:function(t){e.$set(e.item,"name",t)},expression:"item.name"}})],1)]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"edit-options__item"},[s("vs-input",{staticClass:"inputx",attrs:{"vs-label":"Element Name",placeholder:e.item.className},model:{value:e.item.className,callback:function(t){e.$set(e.item,"className",t)},expression:"item.className"}})],1)])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"edit-options__item"},[s("vs-input",{staticClass:"inputx",attrs:{"vs-label":"Element Class",placeholder:e.item.class},model:{value:e.item.class,callback:function(t){e.$set(e.item,"class",t)},expression:"item.class"}})],1)]),e._v(" "),s("div",{staticClass:"col-6"},[s("div",{staticClass:"edit-options__item"},[s("vs-input",{staticClass:"inputx",attrs:{"vs-label":"Element ID",placeholder:e.item.classId},model:{value:e.item.classId,callback:function(t){e.$set(e.item,"classId",t)},expression:"item.classId"}})],1)])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[e.item.label?s("div",{staticClass:"edit-options__item"},[s("vs-input",{staticClass:"inputx",attrs:{"vs-label":"Label Text",placeholder:e.item.labelText},model:{value:e.item.labelText,callback:function(t){e.$set(e.item,"labelText",t)},expression:"item.labelText"}})],1):e._e()]),e._v(" "),s("div",{staticClass:"col-6"},[e.item.placeholder?s("div",{staticClass:"edit-options__item"},[s("vs-input",{staticClass:"inputx",attrs:{"vs-label":"Placeholder Text",placeholder:e.item.placeholderText},model:{value:e.item.placeholderText,callback:function(t){e.$set(e.item,"placeholderText",t)},expression:"item.placeholderText"}})],1):e._e()])]),e._v(" "),s("div",{staticClass:"edit-options__item-group"},[s("div",{staticClass:"edit-options__item edit-options__item--switch"},[s("label",{attrs:{for:""}},[e._v("Enable placeholder")]),e._v(" "),s("vs-switch",{model:{value:e.item.placeholder,callback:function(t){e.$set(e.item,"placeholder",t)},expression:"item.placeholder"}})],1)]),e._v(" "),s("div",{staticClass:"edit-options__item-group"},[s("div",{staticClass:"edit-options__item edit-options__item--switch"},[s("label",{attrs:{for:""}},[e._v("Enable label")]),e._v(" "),s("vs-switch",{model:{value:e.item.label,callback:function(t){e.$set(e.item,"label",t)},expression:"item.label"}})],1)]),e._v(" "),s("div",{staticClass:"edit-options__item-group"},[s("div",{staticClass:"edit-options__item edit-options__item--switch"},[s("label",{attrs:{for:""}},[e._v("Required")]),e._v(" "),s("vs-switch",{model:{value:e.item.required,callback:function(t){e.$set(e.item,"required",t)},expression:"item.required"}})],1)]),e._v(" "),s("div",{staticClass:"edit-options__item-group"},[s("div",{staticClass:"edit-options__item edit-options__item--switch"},[s("label",{attrs:{for:""}},[e._v("Read only?")]),e._v(" "),s("vs-switch",{model:{value:e.item.readOnly,callback:function(t){e.$set(e.item,"readOnly",t)},expression:"item.readOnly"}})],1)])]):e._e(),e._v(" "),"column"==e.item.type?s("div",{staticClass:"edit-options"},[s("div",{staticClass:"edit-options__item"},[s("vs-input-number",{attrs:{min:"2",max:"12"},model:{value:e.item.columnSize,callback:function(t){e.$set(e.item,"columnSize",t)},expression:"item.columnSize"}})],1)]):e._e(),e._v(" "),"button"==e.item.type?s("div",{staticClass:"edit-options"},[s("div",{staticClass:"edit-options__item"},[s("vs-input",{staticClass:"inputx",attrs:{"vs-label":"Button Text",placeholder:e.item.buttonText},model:{value:e.item.buttonText,callback:function(t){e.$set(e.item,"buttonText",t)},expression:"item.buttonText"}})],1),e._v(" "),s("div",{staticClass:"edit-options__item"},[s("span",[e._v("Select the button type ("),s("a",{attrs:{href:"https://getbootstrap.com/docs/4.1/components/buttons/"}},[e._v("See here for examples")]),e._v("):")]),e._v(" "),s("vs-select",{staticClass:"selectExample",attrs:{label:"Figuras"},model:{value:e.item.buttonType,callback:function(t){e.$set(e.item,"buttonType",t)},expression:"item.buttonType"}},[s("vs-select-item",{attrs:{"vs-value":"primary","vs-text":"Primary"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"secondary","vs-text":"Secondary"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"success","vs-text":"Success"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"danger","vs-text":"Danger"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"warning","vs-text":"Warning"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"info","vs-text":"Info"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"light","vs-text":"Light"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"dark","vs-text":"Dark"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"link","vs-text":"Link"}})],1)],1)]):e._e(),e._v(" "),"panel"==e.item.type?s("div",{staticClass:"edit-options"},[s("div",{staticClass:"edit-options__item"},[s("vs-input",{staticClass:"inputx",attrs:{"vs-label":"Panel Title",placeholder:e.item.name},model:{value:e.item.name,callback:function(t){e.$set(e.item,"name",t)},expression:"item.name"}})],1),e._v(" "),s("div",{staticClass:"edit-options__item"},[s("span",[e._v("Change panel background color ("),s("a",{attrs:{href:"https://getbootstrap.com/docs/4.0/utilities/colors/#background-color"}},[e._v("See here for examples")]),e._v("):")]),e._v(" "),s("vs-select",{staticClass:"selectExample",attrs:{label:"Figuras"},model:{value:e.item.backgroundColor,callback:function(t){e.$set(e.item,"backgroundColor",t)},expression:"item.backgroundColor"}},[s("vs-select-item",{attrs:{"vs-value":"primary","vs-text":"Primary"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"secondary","vs-text":"Secondary"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"success","vs-text":"Success"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"danger","vs-text":"Danger"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"warning","vs-text":"Warning"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"info","vs-text":"Info"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"light","vs-text":"Light"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"dark","vs-text":"Dark"}}),e._v(" "),s("vs-select-item",{attrs:{"vs-value":"link","vs-text":"Link"}})],1)],1)]):e._e(),e._v(" "),"text"==e.item.type?s("div",{staticClass:"edit-options"},[s("div",{staticClass:"edit-options__item"},[s("vs-textarea",{staticClass:"inputx",attrs:{"vs-label":"Text Body",placeholder:e.item.body},model:{value:e.item.body,callback:function(t){e.$set(e.item,"body",t)},expression:"item.body"}})],1)]):e._e()])])])],1)},staticRenderFns:[]};var d={props:["el","index","items"],name:"FormItem",components:{draggableChild:s("VU/8")(n,o,!1,null,null,null).exports,FormItemEdit:s("VU/8")(c,r,!1,function(e){s("RDgF")},null,null).exports},data:()=>({dupIndex:0}),methods:{deleteItem:function(){this.items.splice(this.index,1)}},computed:{noEdit(){return"container"!==this.el.type&&"row"!==this.el.type}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["element element-"+e.el.type]},[s("span",[e._v(e._s("text"!==e.el.type?e.el.name:e.el.body))]),e._v(" "),"column"==e.el.type?s("span",{staticClass:"element-col"},[e._v("("+e._s(e.el.columnSize)+" of 12)")]):e._e(),e._v(" "),s("div",{staticClass:"element-tools"},[s("FormItemEdit",{directives:[{name:"show",rawName:"v-show",value:e.noEdit,expression:"noEdit"}],attrs:{item:e.el}}),e._v(" "),s("vs-button",{attrs:{color:"danger","vs-size":"small","vs-type":"flat"},on:{click:e.deleteItem}},[e._v("✕")])],1),e._v(" "),1==e.el.container?s("draggableChild",{attrs:{items:e.el.items,parent:e.items}}):e._e()],1)},staticRenderFns:[]};var p=s("VU/8")(d,m,!1,function(e){s("7Q77")},null,null).exports,v={name:"FormBuilder",components:{draggable:l.a,FormItem:p},data:()=>({elIndex:0,tab:0,elements:[{type:"container",name:"Container",container:!0,items:[],id:0},{type:"row",name:"Row",container:!0,row:!0,items:[],id:0},{type:"column",columnSize:6,name:"Column",container:!0,column:!0,items:[],id:0},{type:"panel",name:"Panel",container:!0,items:[],id:0},{type:"input",name:"Text Input",id:0},{type:"textarea",name:"Textarea",id:0},{type:"button",name:"Button",id:0},{type:"text",name:"Text Block",id:0,body:"Sample Text"}],newElements:[],liveHtml:"",code:""}),watch:{tab:function(){if(2==this.tab){var e=this;setTimeout(function(){e.prettyCode()},100)}},newElements:{handler(){this.generateHTML()},deep:!0}},methods:{prettyCode:function(){document.querySelector(".code").classList.remove("prettyprinted"),PR.prettyPrint(),console.log("pretty")},generateHTML:function(){var e=JSON.parse(JSON.stringify(this.newElements)),t=document.createElement("form"),s=this;e.forEach(function(e,a){s.checkTypes(e,t)});var a=html_beautify(t.outerHTML);this.code=a,this.liveHtml=t.outerHTML},checkTypes:function(e,t){var s=this;if(1==e.container){var a=document.createElement("div");if("column"==e.type&&a.classList.add("col-"+e.columnSize),"panel"==e.type){a.classList.add("card"),e.backgroundColor&&a.classList.add("bg-"+e.backgroundColor,"text-white");var i=document.createElement("div");i.classList.add("card-header");var l=document.createElement("div");l.innerText=e.name,i.appendChild(l);var n=document.createElement("div");n.classList.add("card-body"),a.appendChild(i),0!==e.items.length&&e.items.forEach(function(e){t.appendChild(s.checkTypes(e,n))}),a.appendChild(n),t.appendChild(a)}else a.classList.add(e.type),0!==e.items.length?e.items.forEach(function(e){t.appendChild(s.checkTypes(e,a))}):t.appendChild(a)}else if("input"==e.type){(o=document.createElement("div")).classList.add("form-group"),e.label&&o.appendChild(this.createLabel(e)),(a=document.createElement("input")).setAttribute("type","text"),e.class&&a.classList.add(e.class),e.classId?a.setAttribute("id",e.classId):a.setAttribute("id","element"+e.id),e.className?a.setAttribute("name",e.className):a.setAttribute("name","element"+e.id),e.required&&a.setAttribute("required",!0),e.readOnly&&a.setAttribute("readonly",!0),a.classList.add("form-control"),e.placeholder&&a.setAttribute("placeholder",e.placeholderText),o.appendChild(a),t.appendChild(o)}else if("textarea"==e.type){var o;(o=document.createElement("div")).classList.add("form-group"),e.label&&o.appendChild(this.createLabel(e)),(a=document.createElement("textarea")).setAttribute("rows",3),a.classList.add("form-control"),e.class&&a.classList.add(e.class),e.classId?a.setAttribute("id",e.classId):a.setAttribute("id","element"+e.id),e.required&&a.setAttribute("required",!0),o.appendChild(a),t.appendChild(o)}else if("button"==e.type){var c=document.createElement("button");c.setAttribute("type","submit"),c.classList.add("btn","btn-"+e.buttonType),c.innerText=e.buttonText,t.appendChild(c)}else if("text"==e.type){var r=document.createElement("p");r.innerText=e.body,t.appendChild(r)}return t},createLabel:function(e){var t=document.createElement("label");return e.classId?t.setAttribute("for",e.classId):t.setAttribute("for","element"+e.id),t.innerText=e.labelText,t},onClone:function(e){return this.elIndex++,"container"==e.type||"panel"==e.type?{type:e.type,name:e.name,id:this.elIndex,container:!0,items:[]}:"column"==e.type?{type:e.type,columnSize:e.columnSize,name:e.name,id:this.elIndex,container:!0,column:!0,items:[]}:"row"==e.type?{type:e.type,columnSize:e.columnSize,name:e.name,id:this.elIndex,container:!0,row:!0,items:[]}:"button"==e.type?{type:e.type,name:e.name,id:this.elIndex,buttonText:"Submit",buttonType:"primary"}:"text"==e.type?{type:e.type,name:e.name,id:this.elIndex,body:"Sample text"}:"panel"==e.type?{type:e.type,name:e.name,id:this.elIndex,backgroundColor:""}:{type:e.type,showLabel:!0,labelText:e.name,name:e.name,id:this.elIndex,label:!0,placeholder:!1,placeholderText:"",class:"",classId:"",className:"",required:!1,readOnly:!1}}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-builder"},[s("aside",[s("div",{staticClass:"elements"},[s("draggable",{attrs:{options:{group:{name:"elements",pull:"clone",put:"false"},sort:!1},clone:e.onClone},model:{value:e.elements,callback:function(t){e.elements=t},expression:"elements"}},e._l(e.elements,function(t){return s("div",{key:t.type},[s("div",{staticClass:"element",class:["element-"+t.type]},[e._v(e._s(t.name))])])}))],1)]),e._v(" "),s("main",[s("vs-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[s("vs-tab",{attrs:{"vs-label":"Builder"}},[s("div",{staticClass:"con-tab-ejemplo"},[s("div",{staticClass:"form-stage"},[s("draggable",{staticClass:"form-stage__drag",attrs:{list:e.newElements,options:{group:"elements"}}},e._l(e.newElements,function(t,a){return s("div",{key:a},[s("FormItem",{attrs:{el:t,index:a,items:e.newElements}})],1)}))],1)])]),e._v(" "),s("vs-tab",{attrs:{"vs-label":"Preview"}},[s("div",{staticClass:"con-tab-ejemplo"},[s("div",{staticClass:"form-preview",domProps:{innerHTML:e._s(e.liveHtml)}})])]),e._v(" "),s("vs-tab",{attrs:{"vs-label":"Code"}},[s("div",{staticClass:"con-tab-ejemplo"},[s("div",{staticClass:"code-output"},[s("p",{staticClass:"code-output__title"},[e._v("html output")]),e._v(" "),s("code",[s("pre",{staticClass:"code prettyprint lang-html",staticStyle:{border:"none !important"}},[e._v(e._s(e.code))])])])])])],1)],1)])},staticRenderFns:[]};var _={name:"App",components:{FormBuilder:s("VU/8")(v,u,!1,function(e){s("ZjSp")},null,null).exports}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("FormBuilder")],1)},staticRenderFns:[]};var h=s("VU/8")(_,b,!1,function(e){s("cWtM")},null,null).exports,x=s("p7o8"),y=s.n(x);s("aqYZ"),s("R5w9");a.a.use(y.a),a.a.component("FormItem",p),a.a.config.productionTip=!1,new a.a({el:"#app",components:{App:h},template:"<App/>"})},R5w9:function(e,t){},RDgF:function(e,t){},ZjSp:function(e,t){},aqYZ:function(e,t){},cWtM:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d8d16c41128c782ca701.js.map