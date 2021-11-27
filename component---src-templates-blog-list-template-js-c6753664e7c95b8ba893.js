"use strict";(self.webpackChunkbarcadia=self.webpackChunkbarcadia||[]).push([[659],{4547:function(e,t,n){n.d(t,{OY:function(){return i},aN:function(){return o},MJ:function(){return r}});var a=n(9692),i=a.default.section.withConfig({displayName:"BlogStyles__BlogItemsStyles",componentId:"sc-1epfngz-0"})(["display:flex;flex-wrap:wrap;width:100%;max-width:910px;margin:0 auto;justify-content:center;padding-top:var(--sectionPadding);padding-bottom:var(--sectionPadding);"]),o=a.default.article.withConfig({displayName:"BlogStyles__BlogItemStyles",componentId:"sc-1epfngz-1"})(["flex:1 1 auto;max-width:375px;margin:40px;h2{font-weight:700;&:hover,&:focus{a{color:var(--primary);}}}a{text-decoration:none;color:#fff;transition:color 0.3s;cursor:pointer;}.blogitem__meta{display:flex;justify-content:space-between;align-items:center;}"]),r=a.default.article.withConfig({displayName:"BlogStyles__BlogSingleStyles",componentId:"sc-1epfngz-2"})(["padding:var(--sectionPadding) var(--borderSpacing);max-width:750px;margin:0 auto;box-sizing:content-box;.blogsingle{&__title{font-size:var(--h2);margin-bottom:20px;}&__date{margin-top:20px;margin-bottom:20px;}&__content{border-top:2px solid var(--primary);padding-top:20px;}&__back{padding-top:40px;}}"])},288:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),i=n(2775),o=n(9692).default.button.withConfig({displayName:"ButtonStyles",componentId:"sc-18vyk8q-0"})(['position:relative;display:inline-flex;align-items:center;background-color:transparent;color:#fff;outline:none;border:none;padding:0;height:36px;line-height:36px;cursor:pointer;font-weight:700;font-size:15px;font-family:"Heebo",sans-serif;letter-spacing:-0.5px;text-decoration:none;svg{font-size:18px;}@media (min-width:375px){font-size:16px;}@media (min-width:414px){font-size:18px;svg{font-size:20px;}}@media (min-width:768px){font-size:19px;}&:after{content:"";display:block;position:absolute;right:0;bottom:0;width:100%;height:2px;background-color:var(--primary);transition:width 0.3s ease;}&:hover,&:focus{color:#fff;&:after{width:0%;}}']),r=function(e){var t=e.text,n=e.to,r=e.as;return a.createElement(o,{as:r,to:n},t,a.createElement(i.hdK,{style:{marginLeft:"10px"}}))}},8392:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),i=n(9692).default.section.withConfig({displayName:"SimpleBannerStyles",componentId:"sc-1v3f4op-0"})(["height:70vh;position:relative;padding:30px var(--borderSpacing);.container{height:100%;display:flex;align-items:flex-end;justify-content:flex-start;}.banner__image{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;}.banner__content{position:relative;z-index:2;height:20vh;width:100%;@media (min-width:768px){width:66vw;}h1{margin-top:0;margin-bottom:10px;font-weight:700;font-size:var(--bannerTitle);letter-spacing:-1px;}h2{margin-top:0;margin-bottom:30px;font-weight:300;font-size:var(--bannerSubTitle);letter-spacing:-0.5px;}}"]),o=function(e){var t=e.children,n=e.title;return a.createElement(i,null,t,n&&a.createElement("div",{className:"container"},a.createElement("div",{className:"banner__content"},a.createElement("h1",null,n,a.createElement("span",{style:{color:"var(--primary)"}},".")))))}},8152:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),i=n(4153),o=n(5444),r=n(9692),l=n(2248),c=n(8392),s=n(2359),p=n(4547),d=n(288),m=function(e){var t=e.blog,n=t.slug,i=t.title,r=t.published,l=t.introduction;return a.createElement(p.aN,null,a.createElement("h2",null,a.createElement(o.Link,{to:n},i)),a.createElement("p",null,l),a.createElement("div",{className:"blogitem__meta"},a.createElement(d.Z,{text:"Read More",as:o.Link,to:n}),a.createElement("p",null,r)))},g=function(e){var t=e.children;return a.createElement(p.OY,null,t)},f=r.default.aside.withConfig({displayName:"blog-list-template__Pagination",componentId:"sc-9ysg3o-0"})(["display:flex;margin:0 auto;justify-content:center;.btn{margin-right:20px;&:hover{cursor:pointer;}&.btn-active{color:var(--primary);&:after{display:none;}}&:last-child{margin-right:0;}}"]),u=function(e){var t=e.pageContext,r=t.currentPage,p=t.numPages,d=1===r,u=r===p,h=r-1==1?"/blogs":"/blogs/"+(r-1),b="/blogs/"+(r+1),x=e.data;return a.createElement(a.Fragment,null,a.createElement(l.Z,{title:"Blogs"}),a.createElement(i.Z,null,a.createElement(c.Z,{title:"Trade news"},a.createElement(s.S,{className:"banner__image",src:"../images/iphone-camera.jpg",alt:"Apple iPhone camera",__imageData:n(9867)})),a.createElement(g,null,x.post.edges.map((function(e){var t=e.node;return a.createElement(m,{key:t.id,blog:t})}))),p>1&&a.createElement(f,null,!d&&a.createElement(o.Link,{className:"btn",to:h},"Prev"),Array.from({length:p},(function(e,t){return a.createElement(o.Link,{key:t,to:"/blogs/"+(0===t?"":t+1),className:t+1===r?"btn btn-active":"btn"},t+1)})),!u&&a.createElement(o.Link,{className:"btn",to:b},"Next"))))}},9867:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484848","images":{"fallback":{"src":"/sohaib.github.io/static/c8557269382e36e6f9f77923a4e32dd8/dcb99/iphone-camera.jpg","srcSet":"/sohaib.github.io/static/c8557269382e36e6f9f77923a4e32dd8/e3014/iphone-camera.jpg 1312w,\\n/sohaib.github.io/static/c8557269382e36e6f9f77923a4e32dd8/1fb48/iphone-camera.jpg 2624w,\\n/sohaib.github.io/static/c8557269382e36e6f9f77923a4e32dd8/dcb99/iphone-camera.jpg 5248w","sizes":"(min-width: 5248px) 5248px, 100vw"},"sources":[{"srcSet":"/sohaib.github.io/static/c8557269382e36e6f9f77923a4e32dd8/a52b9/iphone-camera.webp 1312w,\\n/sohaib.github.io/static/c8557269382e36e6f9f77923a4e32dd8/ed856/iphone-camera.webp 2624w,\\n/sohaib.github.io/static/c8557269382e36e6f9f77923a4e32dd8/5288a/iphone-camera.webp 5248w","type":"image/webp","sizes":"(min-width: 5248px) 5248px, 100vw"}]},"width":5248,"height":3499}')}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-c6753664e7c95b8ba893.js.map