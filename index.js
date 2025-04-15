import { extensionsList, navList, onlyChromeBox, themeSwitcher } from "./jshandlers/elementList.js";
import { removeSwitcherIfIsNotChrome, setActiveLink, setInitialTab, setUserTheme, switchTheme } from "./jshandlers/handlers.js";
import { setListenerByQuery } from "./jshandlers/helpers.js";
import { useExtensions } from "./jshandlers/useExtensions.js";
import { getListChildrenMarkupFromData } from "./jshandlers/markup.js";
import { getRealExtensions, isChrome } from "./jshandlers/getRealExtensions.js";

const dataFromJson  = await fetch("./data.json").then(res=>res.json() || []);

(() => {
  removeSwitcherIfIsNotChrome(isChrome, onlyChromeBox);
  setUserTheme();
  setInitialTab(navList,setActiveLink);
})();


const {data,removeItem,switchDataOfExtension,update} = useExtensions(dataFromJson);
getRealExtensions().then(update);



const createList = (renderData,outerEl)=>{
     
  const listMarkdown = renderData.map(getListChildrenMarkupFromData);
  outerEl.innerHTML = listMarkdown.join("");
   
};



createList(data,extensionsList);

setListenerByQuery(extensionsList, "click", removeItem);
setListenerByQuery(navList, "click", setActiveLink);
setListenerByQuery(themeSwitcher, "change", switchTheme);
isChrome && setListenerByQuery(
  document.getElementById("dataSwitcher"),
  'change',
  (e)=>switchDataOfExtension(e,(newData)=>createList(newData,extensionsList)));

