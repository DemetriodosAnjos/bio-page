// js/components/drawer.js

export function initDrawer() {
  const triggers = document.querySelectorAll("[data-sheet-target]");
  const backdrop = document.getElementById("sheet-backdrop");
  const closeButtons = document.querySelectorAll(".sheet-close");
  let activeSheet = null;

  function openSheet(sheetElement) {
    if (!sheetElement) return;

    activeSheet = sheetElement;
    backdrop.classList.add("is-active");
    sheetElement.classList.add("is-open");

    // Acessibilidade
    sheetElement.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");

    // Trava o scroll do body no mobile
    document.body.style.overflow = "hidden";
  }

  function closeActiveSheet() {
    if (!activeSheet) return;

    activeSheet.classList.remove("is-open");
    backdrop.classList.remove("is-active");

    activeSheet.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
    activeSheet = null;
  }

  // 1. Clique nos Cards
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetSelector = trigger.getAttribute("data-sheet-target");
      const targetSheet = document.querySelector(targetSelector);
      openSheet(targetSheet);
    });
  });

  // 2. Clique no 'X'
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeActiveSheet);
  });

  // 3. Clique fora (no backdrop escuro)
  backdrop.addEventListener("click", closeActiveSheet);

  // 4. Tecla ESC (acessibilidade teclado/desktop)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeSheet) {
      closeActiveSheet();
    }
  });
}
