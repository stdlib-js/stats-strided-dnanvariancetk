"use strict";var f=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var d=f(function(B,y){
function R(a,r,i,n,p){var u,s,q,t,e,v,c;if(a<=0)return NaN;if(a===1||n===0)return e=i[p],e===e&&a-r>0?0:NaN;for(s=p,u=0,t=0,v=0,c=0;c<a;c++)e=i[s],e===e&&(u+=e*e,t+=e,v+=1),s+=n;return q=v-r,q<=0?NaN:(u-t/v*t)/q}y.exports=R
});var x=f(function(C,k){
var S=require('@stdlib/strided-base-stride2offset/dist'),_=d();function E(a,r,i,n){return _(a,r,i,n,S(a,n))}k.exports=E
});var l=f(function(D,m){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),b=d();O(j,"ndarray",b);m.exports=j
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=l(),o,N=h(g(__dirname,"./native.js"));w(N)?o=z:o=N;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
