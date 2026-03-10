import{a as u,S as f,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="54965441-9d4dc4d4063faa3b07c399281",m="https://pixabay.com/api/";async function p(s){const{data:o}=await u.get(m,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}});return o}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>

          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${t.likes}
            </p>

            <p class="info-item">
              <b>Views</b>
              ${t.views}
            </p>

            <p class="info-item">
              <b>Comments</b>
              ${t.comments}
            </p>

            <p class="info-item">
              <b>Downloads</b>
              ${t.downloads}
            </p>
          </div>

        </li>
      `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function h(){l.innerHTML=""}function b(){c.classList.add("show")}function L(){c.classList.remove("show")}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search word!"});return}h(),b(),p(o).then(t=>{if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits)}).catch(t=>{console.log(t),n.error({message:"Something went wrong. Please try again later!"})}).finally(()=>{L()}),s.target.reset()}
//# sourceMappingURL=index.js.map
