webpackJsonp([0],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),o={name:"Pie",props:["centerX","centerY","radius","segNum","index","angle","color"],data:function(){return{pieColor:void 0!==this.color?this.color:"magenta",arc:2*Math.PI/this.segNum}},computed:{},mounted:function(){console.log(this.color)},methods:{segment:function(t,e,n,r,o){var i={x:t+n*Math.cos(r),y:e+n*Math.sin(r)},s={x:t+n*Math.cos(o),y:e+n*Math.sin(o)};return["M",i.x,i.y,"A",n,n,0,0,1,s.x,s.y,"L",t,e,"L",i.x,i.y].join(" ")}}},i={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("path",{attrs:{d:t.segment(t.centerX,t.centerY,t.radius,t.angle+(t.index+1)*t.arc,t.angle+(t.index+1)*t.arc+t.arc),fill:t.pieColor,stroke:"white"}})},staticRenderFns:[]};var s=n("VU/8")(o,i,!1,function(t){n("spkw")},"data-v-2b4800e6",null).exports,a=2*Math.PI,l=180/Math.PI,c={name:"Waffly",components:{Pie:s},props:["segNum","segments"],data:function(){return{msg:"Waffly",centerX:250,centerY:250,radius:200,angle:0,time:0,timeout:0}},mounted:function(){var t=this;this.timeout=setInterval(function(){return t.draw()},1)},methods:{draw:function(){this.time+=10,this.angle+=Math.PI/120;for(var t=0;t<this.segNum;t++)this.segments[t].rotation="rotate("+(a/this.segNum*(t+1)*l+a/(2*this.segNum)*l+this.angle*l)+", "+this.centerX+", "+this.centerY+")";this.time>=9e3&&clearTimeout(this.timeout)}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wheel"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("svg",{attrs:{height:"520",width:"520"}},[n("circle",{attrs:{cx:this.centerX,cy:this.centerY,r:this.radius+35,fill:"purple"}}),t._v(" "),t._l(t.segNum,function(e){return n("Pie",{key:e-1,attrs:{centerX:t.centerX,centerY:t.centerY,radius:t.radius,segNum:t.segNum,index:e-1,angle:t.angle,color:t.segments[e-1].color,segments:t.segments}})}),t._v(" "),t._l(t.segNum,function(e){return n("text",{attrs:{x:Math.cos(8*Math.PI/4)*(t.radius-30)+t.centerX,y:Math.sin(8*Math.PI/4)*(t.radius-30)+t.centerY,"font-size":"20",fill:"#343938","text-anchor":"middle","alignment-baseline":"middle",transform:t.segments[e-1].rotation}},[t._v(t._s(e))])})],2)])},staticRenderFns:[]};var h={name:"App",components:{Wheel:n("VU/8")(c,u,!1,function(t){n("tBay")},"data-v-52c73700",null).exports},data:function(){return{segNum:20,segments:{0:{rotation:"",color:"lavenderblush"},1:{rotation:"",color:"lightcoral"},2:{rotation:"",color:"lightgreen"},3:{rotation:"",color:"lightseagreen"},4:{rotation:"",color:"lightsteelblue"},5:{rotation:"",color:"lavenderblush"},6:{rotation:"",color:"lightcoral"},7:{rotation:"",color:"lightgreen"},8:{rotation:"",color:"lightseagreen"},9:{rotation:"",color:"lightsteelblue"},10:{rotation:"",color:"lavenderblush"},11:{rotation:"",color:"lightcoral"},12:{rotation:"",color:"lightgreen"},13:{rotation:"",color:"lightseagreen"},14:{rotation:"",color:"lightsteelblue"},15:{rotation:"",color:"lavenderblush"},16:{rotation:"",color:"lightcoral"},17:{rotation:"",color:"lightgreen"},18:{rotation:"",color:"lightseagreen"},19:{rotation:"",color:"lightsteelblue"}}}},beforeCreate:function(){}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Wheel",{attrs:{segNum:this.segNum,segments:this.segments}})],1)},staticRenderFns:[]};var m=n("VU/8")(h,g,!1,function(t){n("ruWS")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:m},template:"<App/>"})},ruWS:function(t,e){},spkw:function(t,e){},tBay:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.03fd96c54cf685abe5fe.js.map