import{e as i,u as l,o as r,c as d,a as e,f as s,t as c}from"./index.f786c248.js";const _={class:"container col-md-4 col text-center"},m={class:"my-2 my-md-4"},p=["src"],u={class:"text-center"},w={class:"my-2 my-md-4 text-muted"},x=i({__name:"NewsDetailsView",setup(f){const a=window.location.pathname.split("/").pop(),o=l();o.getNews();const t=o.newsList.filter(n=>n.id==a);return console.log(t[0]),(n,h)=>(r(),d("div",_,[e("div",m,[e("img",{src:s(t)[0].jetpack_featured_media_url,alt:"Media",class:"d-block w-100 position-relative"},null,8,p)]),e("div",u,[e("h1",null,c(s(t)[0].title.rendered),1)]),e("div",w,c(s(t)[0].content.rendered),1)]))}});export{x as default};
