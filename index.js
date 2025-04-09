import { navList, themeSwitcher } from "./jshandlers/elementList.js";
import { setActiveLink, setInitialTab, setUserTheme, switchTheme } from "./jshandlers/handlers.js";
import { setListenerByQuery } from "./jshandlers/helpers.js";



(() => {
  setUserTheme();
  setInitialTab(navList,setActiveLink);
})();



setListenerByQuery(navList, "click", setActiveLink);
setListenerByQuery(themeSwitcher, "change", switchTheme);
