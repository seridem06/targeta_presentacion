"use strict";

document.querySelectorAll("button[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const text = document.getElementById(btn.dataset.copy).textContent.trim();
    let ok = true;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      ok = false;
    }
    btn.textContent = ok ? "Copiado" : "Copia manualmente";
    btn.classList.toggle("is-ok", ok);
    setTimeout(() => {
      btn.textContent = "Copiar";
      btn.classList.remove("is-ok");
    }, 1600);
  });
});
