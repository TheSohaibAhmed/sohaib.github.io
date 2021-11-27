"use strict";(self.webpackChunkbarcadia=self.webpackChunkbarcadia||[]).push([[509],{6817:function(e,t,A){A.d(t,{Z:function(){return l}});var a=A(7294),n=A(5444),i=A(9692).default.section.withConfig({displayName:"BannerModuleStyles",componentId:"sc-7qvn72-0"})(["height:100vh;position:relative;padding:30px var(--borderSpacing);.container{height:100%;display:flex;align-items:flex-end;justify-content:flex-start;}.banner__image{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;}.banner__content{position:relative;z-index:2;min-height:33vh;width:100%;@media (min-width:768px){width:66vw;}h1,.price{margin-top:0;margin-bottom:10px;font-weight:700;font-size:var(--bannerTitle);letter-spacing:-1px;margin-bottom:30px;}h2{margin-top:0;margin-bottom:30px;font-weight:300;font-size:var(--bannerSubTitle);letter-spacing:-0.5px;}button{width:30px;height:30px;background-color:transparent;border:none;color:#fff;font-size:22px;display:flex;margin-top:30px;}}"]),o=A(2359),c=A(2775),r=A(288),l=function(e){var t=e.children,l=e.title,s=e.subTitle,m=e.price,p=e.enquire;return a.createElement(a.Fragment,null,a.createElement(i,null,t||a.createElement(o.S,{className:"banner__image",imgClassName:"banner__image--content",src:"../../images/macbook-color.jpg",alt:"Banner Image",layout:"fullWidth",placeholder:"blurred",__imageData:A(3285)}),a.createElement("div",{className:"container"},a.createElement("div",{className:"banner__content"},l&&a.createElement("h1",null,l,a.createElement("span",{style:{color:"var(--primary)"}},".")),s&&a.createElement("h2",null,s),m&&a.createElement("h2",{className:"price"},"£",m,a.createElement("span",{style:{color:"var(--primary)"}},".")),p&&a.createElement(r.Z,{text:"Enquire Now",as:n.Link,to:"/contact"}),a.createElement("button",{onClick:function(){(0,n.navigate)("#topContent")}},a.createElement(c.t9$,null))))),a.createElement("span",{id:"topContent"}))}},2404:function(e,t,A){A.r(t),A.d(t,{default:function(){return d}});var a=A(7294),n=A(4153),i=A(2359),o=A(9692),c=o.default.section.withConfig({displayName:"FaqStyles",componentId:"sc-c3c2cb-0"})([".question{min-height:50px;border-radius:5px;border:none;width:100%;background-color:#272727;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:8px 20px;font-size:var(--p);cursor:pointer;.trigger{display:inline-flex;height:40px;width:50px;position:relative;font-size:35px;justify-content:center;align-items:center;color:var(--primary);transform-origin:center;transition:transform 0.6s ease;}}.answer{padding:20px;font-size:var(--p);}margin-bottom:20px;&.faq-open{.trigger{transform:rotate(-180deg);}}"]),r=A(2775),l=function(e){var t=e.title,A=e.description,n=(0,a.useState)(!1),i=n[0],o=n[1];return a.createElement(c,{className:i?"faq-open":"faq-closed"},a.createElement("button",{className:"question",onClick:function(){o((function(e){return!e}))}},t,a.createElement("div",{className:"trigger"},a.createElement(r.Yc6,null))),i&&a.createElement("div",{className:"answer"},A))},s=A(2248),m=A(6817),p=A(5761),f=o.default.div.withConfig({displayName:"product-template__ProductTemplateStyles",componentId:"sc-bde07-0"})(["display:flex;flex-wrap:wrap;padding:var(--sectionPadding) var(--borderSpacing);background-color:#000;.column{flex:0 0 100%;@media (min-width:768px){flex-basis:50%;&:nth-child(1){padding-right:20px;}&:nth-child(2){padding-left:20px;}> *{&:last-child{margin-bottom:0;}}}> *{&:first-child{margin-top:0;}}}"]),d=function(e){var t=e.data.product,A=t.name,o=t.price,c=t.excerpt,r=t.productDescription,d=t.images,g=t.faq,u=d[0],b=(d.slice(1),(0,i.d)(u));return a.createElement(a.Fragment,null,a.createElement(s.Z,{title:A}),a.createElement(n.Z,null,a.createElement(m.Z,{title:A,price:o,subTitle:c,enquire:!0},a.createElement(i.G,{className:"banner__image",image:b,alt:"Banner Image"})),a.createElement(f,null,a.createElement("div",{className:"column"},(0,p.Z)(r)),a.createElement("div",{className:"column"},g.map((function(e,t){return a.createElement(l,{key:t,title:e.title,description:e.description})}))))))}},3285:function(e){e.exports=JSON.parse('{"layout":"fullWidth","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4DKtM5If/8QAGBABAQEBAQAAAAAAAAAAAAAAAQACEQP/2gAIAQEAAQUCDtrHCNJPrpL/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAACAwEAAAAAAAAAAAAAAAAAEAERITH/2gAIAQEABj8COwsKX//EABgQAAMBAQAAAAAAAAAAAAAAAAABERBx/9oACAEBAAE/IaINtTmOaxdnn//aAAwDAQACAAMAAAAQ2w//xAAWEQADAAAAAAAAAAAAAAAAAAABEGH/2gAIAQMBAT8QFX//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPxCH/8QAGxABAAEFAQAAAAAAAAAAAAAAAREAECExkUH/2gAIAQEAAT8QYR6xMLHKXM5sTPELAUCUwwHcW//Z"},"images":{"fallback":{"src":"/sohaib.github.io/static/2247c39f145df7505f72ce04ceaeef39/71357/macbook-color.jpg","srcSet":"/sohaib.github.io/static/2247c39f145df7505f72ce04ceaeef39/982db/macbook-color.jpg 750w,\\n/sohaib.github.io/static/2247c39f145df7505f72ce04ceaeef39/e4f86/macbook-color.jpg 1080w,\\n/sohaib.github.io/static/2247c39f145df7505f72ce04ceaeef39/c255e/macbook-color.jpg 1366w,\\n/sohaib.github.io/static/2247c39f145df7505f72ce04ceaeef39/71357/macbook-color.jpg 1920w","sizes":"100vw"},"sources":[{"srcSet":"/sohaib.github.io/static/2247c39f145df7505f72ce04ceaeef39/b99ea/macbook-color.webp 750w,\\n/sohaib.github.io/static/2247c39f145df7505f72ce04ceaeef39/acf6c/macbook-color.webp 1080w,\\n/sohaib.github.io/static/2247c39f145df7505f72ce04ceaeef39/8245d/macbook-color.webp 1366w,\\n/sohaib.github.io/static/2247c39f145df7505f72ce04ceaeef39/74526/macbook-color.webp 1920w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.7078125}')}}]);
//# sourceMappingURL=component---src-templates-product-template-js-06bf5b1b45cfea85d4b2.js.map