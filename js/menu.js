const closeSubMenuWithEscape = e => {
  if (e.key == "Escape") {
    jQuery(".sub-menu-open").removeClass("sub-menu-open");
  }
};

const closeChildrenMenu = currentNode => {
  const openItems = jQuery(".sub-menu-open");
  for (let item of openItems) {
    if (currentNode !== item && currentNode.contains(item)) {
      item.classList.remove("sub-menu-open");
    }
  }
};

const focusParent = currentNode => {
  let nextParent = currentNode.parentNode.closest(".menu-item-has-children");
  if (nextParent) {
    nextParent.focus();
  }
};

/*
  Toggle a submenu in a multi-tier menu.

  If a submenu is clicked, open it. If it is already open, return to the parent menu. If it is at the top level, simply close the menu.

  If a parent menu is closed, close all children menus.
*/
const toggleSubMenu = e => {
  const parentLinkItem = e.target.closest(".menu-item-has-children");
  if (parentLinkItem) {
    if (jQuery(parentLinkItem).hasClass("sub-menu-open")) {
      jQuery(parentLinkItem).blur();

      focusParent(parentLinkItem);

      closeChildrenMenu(parentLinkItem);
    }
    jQuery(parentLinkItem).toggleClass("sub-menu-open");
  } else {
    jQuery(".sub-menu-open").blur();
    jQuery(".sub-menu-open").removeClass("sub-menu-open");
  }
};

// Open the mobile menu and add even listeners for sub menus.
export const menuHandler = () => {
    jQuery(".menu-toggle").on("click", () => {
      jQuery(".main-menu-container").toggleClass("menu-open");
      jQuery("html").toggleClass("no-scroll");

      if (jQuery(".main-menu-container").hasClass("menu-open")) {
        document.addEventListener("click", toggleSubMenu);
        document.addEventListener("keydown", closeSubMenuWithEscape);
      } else {
        document.removeEventListener("click", toggleSubMenu);
        document.removeEventListener("keydown", closeSubMenuWithEscape);
      }
    });
};
