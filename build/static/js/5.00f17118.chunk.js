(this.webpackJsonptheburgerbuiler=this.webpackJsonptheburgerbuiler||[]).push([[5],{106:function(e,r,n){e.exports={Order:"Order_Order__2Hrvj"}},110:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),i=n(12),u=n(106),c=n.n(u),o=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return a.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return a.a.createElement("div",{className:c.a.Order},a.a.createElement("p",null,"Ingredients: ",t),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},s=n(22),d=n(47),l=n(7),p=n(46);r.default=Object(i.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,n){return e(l.i(r,n))}}}))(Object(d.a)((function(e){var r=e.onFetchOrders,n=e.token,i=e.userId;Object(t.useEffect)((function(){r(n,i)}),[r,n,i]);var u=a.a.createElement(p.a,null);return e.loading||(u=e.orders.map((function(e){return a.a.createElement(o,{key:e.id,ingredients:e.ingredients,price:e.price})}))),u}),s.a))}}]);
//# sourceMappingURL=5.00f17118.chunk.js.map