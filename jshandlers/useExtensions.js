import { removeAnimation } from "./animations.js";
import { setListenerByQuery } from "./helpers.js";

export const useExtensions = (extansionsArr) => {
  const extensionsFake = extansionsArr.map((ext) => ext);
  let extensionsReal = [];
  let timeoutId = null;

  let extensions = extensionsFake;

  const switchDataOfExtension = (e, rerender) => {
    if (e.target.checked) {
      extensions = extensionsReal;
      rerender(extensions);
      return;
    }

    extensions = extensionsFake;
    rerender(extensions);
    return;
  };

  const updateData = (newData) => {
    extensionsReal = newData;
  };

  const changeAriaCheckedAttr = (e) => { 
    const actionChecked = e.target.closest("input[type='checkbox']");
    if (!actionChecked) return;
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setListenerByQuery(actionChecked, "transitionend", () => {
      timeoutId = setTimeout(() => {
        actionChecked.setAttribute("aria-checked", actionChecked.checked);
        timeoutId = null;
      }, 250);
    });
  };

  const removeItem = (e) => {
    changeAriaCheckedAttr(e);
    const actionTarget = e.target.closest(".removeBtn");
    if (!actionTarget) return;

    removeAnimation(e.target.closest("li"));
  };

  return { data: extensions, removeItem, switchDataOfExtension, update: updateData };
};
