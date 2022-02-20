import {
  searchBarHandler
} from "./search";
import {
  menuHandler
} from "./menu";
import {
  keyboardAccessibility
} from "./keyboard-accessiblity.js";
import {
  formatterHelp
} from "./formatter-help";


window.onload = () => {
  menuHandler();
  searchBarHandler();
  formatterHelp();
  keyboardAccessibility();
}
