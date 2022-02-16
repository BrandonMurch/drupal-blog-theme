export const keyboardAccessibility = () => {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        document.activeElement.click();
      }
    });
};
