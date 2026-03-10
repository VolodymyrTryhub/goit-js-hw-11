import{a as u,S as f,i}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="54965441-9d4dc4d4063faa3b07c399281",m="https://pixabay.com/api/";async function y(a){const{data:r}=await u.get(m,{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return r}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(a){const r=a.map(o=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o.largeImageURL}">
            <img
              class="gallery-image"
              src="${o.webformatURL}"
              alt="${o.tags}"
            />
          </a>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function p(){c.innerHTML=""}function L(){l.classList.add("show")}function b(){l.classList.remove("show")}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(a){a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(r===""){i.warning({message:"Please enter a search word!"});return}p(),L(),y(r).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o.hits)}).catch(o=>{console.log(o)}).finally(()=>{b()}),a.target.reset()}
//# sourceMappingURL=index.js.map
