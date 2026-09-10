// js/components/accordion.js

export function initAccordion() {
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const currentItem = trigger.closest(".accordion-item");
      const isAlreadyActive = currentItem.classList.contains("is-active");

      // Fecha outros accordions para manter o drawer limpo
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.remove("is-active");
        item
          .querySelector(".accordion-trigger")
          .setAttribute("aria-expanded", "false");
      });

      // Se não estava aberto, abre o atual
      if (!isAlreadyActive) {
        currentItem.classList.add("is-active");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}
