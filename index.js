import { extensionsList, navList, themeSwitcher } from "./jshandlers/elementList.js";
import { setActiveLink, setInitialTab, setUserTheme, switchTheme } from "./jshandlers/handlers.js";
import { setListenerByQuery } from "./jshandlers/helpers.js";
import { useExtensions } from "./jshandlers/useExtensions.js";
import dataFromJson from "./data.json" with { type: "json" };
import { getListChildrenMarkupFromData } from "./jshandlers/markup.js";
import { getRealExtensions } from "./jshandlers/getRealExtensions.js";

(() => {
  setUserTheme();
  setInitialTab(navList,setActiveLink);
})();

const realData = await getRealExtensions();
const {data,removeItem} = useExtensions(dataFromJson);


const createList = (renderData,outerEl)=>{
           
  const listMarkdown = renderData.map(getListChildrenMarkupFromData);
  outerEl.innerHTML = listMarkdown.join("");
   
};

createList(realData,extensionsList);

setListenerByQuery(extensionsList, "click", removeItem);
setListenerByQuery(navList, "click", setActiveLink);
setListenerByQuery(themeSwitcher, "change", switchTheme);

