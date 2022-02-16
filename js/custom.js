import { searchBarHandler } from "./search";
import { menuHandler } from "./menu";
import { keyboardAccessibility } from "./keyboard-accessiblity.js";
import {
  formatterHelp
} from "./formatter-help";

searchBarHandler();
menuHandler();

window.onload = () => {
  formatterHelp();
  keyboardAccessibility();
}
