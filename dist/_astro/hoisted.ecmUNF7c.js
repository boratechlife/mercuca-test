import"./hoisted.7lSlPBTo.js";const n=[...document.querySelectorAll(".scroller")];window.matchMedia("(prefers-reduced-motion: reduce)").matches||c();function c(){n.forEach(r=>{r.setAttribute("data-animated","true");const e=r.querySelector(".scroll-container");if(!e)return;Array.from(e.children).forEach(o=>{const t=o.cloneNode(!0);t.setAttribute("aria-hidden","true"),e.appendChild(t)})})}
