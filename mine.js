document.addEventListener("DOMContentLoaded", () => {
  const fixedElements = [
    { el: document.querySelector(".logo-wrapper"), type: "logo" },
    { el: document.querySelector(".sm"), type: "text" },
    { el: document.querySelector(".link1"), type: "text" },
    { el: document.querySelector(".link2"), type: "text" },
    { el: document.querySelector(".link3"), type: "text" },
    { el: document.querySelector(".corner-link"), type: "text" },
    { el: document.querySelector(".copyright"), type: "text" },
  ];

  const darkSections = [
    document.querySelector(".image-wrapper-face"),
    document.querySelector(".image-wrapper-lips"),
  ];

  function checkOverlap() {
    fixedElements.forEach((item) => {
      if (!item.el) return;

      const rect = item.el.getBoundingClientRect();
      // Skip if element is hidden
      if (rect.width === 0 && rect.height === 0) return;

      const elementCenterY = rect.top + rect.height / 2;
      const elementCenterX = rect.left + rect.width / 2;

      let isOverlapping = false;

      darkSections.forEach((section) => {
        if (!section) return;
        const sectionRect = section.getBoundingClientRect();

        if (
          elementCenterY >= sectionRect.top &&
          elementCenterY <= sectionRect.bottom &&
          elementCenterX >= sectionRect.left &&
          elementCenterX <= sectionRect.right
        ) {
          isOverlapping = true;
        }
      });

      if (isOverlapping) {
        item.el.classList.add("white-mode");
      } else {
        item.el.classList.remove("white-mode");
      }
    });
  }

  window.addEventListener("scroll", checkOverlap);
  window.addEventListener("resize", checkOverlap);
  checkOverlap();
});

