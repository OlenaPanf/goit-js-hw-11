import{S as d,i as u}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery");function p(i){const s=i.map(r=>`<li class="card">
   <a class="link" href="${r.largeImageURL}">
     <img
             src="${r.webformatURL}"
             alt="${r.tags}"
             width="360"
             height="200"
             class="gallery-img"
         />
         <ul class="list-container">
         <li class="item-description"><span class="gal-span">Likes</span> ${r.likes}</li>
         <li class="item-description"><span class="gal-span">Views</span> ${r.views}</li>
         <li class="item-description"><span class="gal-span">Comments</span> ${r.comments}</li>
         <li class="item-description"><span class="gal-span">Downloads</span> ${r.downloads}</li>
      </ul>
   </a>
 </li>`).join("");l.insertAdjacentHTML("beforeend",s),new d(".link",{captionsData:"alt",captionDelay:250}).refresh()}function f(i){const s="https://pixabay.com",o="/api/",r=new URLSearchParams({key:"43098974-eee2e6d48134054f86f6d867e",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${o}?${r}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const a=document.querySelector(".form"),c=document.querySelector(".loader"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250});m.refresh();a.addEventListener("submit",i=>{i.preventDefault();const s=a.elements.query.value.trim();if(l.innerHTML='<div class="loader is-hidden"></div>',s===""){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",maxWidth:"432px",height:"88px",position:"topRight"});return}c.classList.remove("is-hidden"),f(s).then(o=>{const r=p(o.hits);l.innerHTML=r}).catch(o=>{console.error("Error fetching data:",o)}).finally(()=>{c.classList.add("is-hidden"),a.reset()})});
//# sourceMappingURL=commonHelpers.js.map
