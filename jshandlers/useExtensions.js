

export const useExtensions = (extansionsArr) => {
  const extensions = extansionsArr.map((ext) => ext);

  const removeItem = (e) => {
    const actionTarget = e.target.closest(".removeBtn");
    if (!actionTarget) return;

    e.target.closest("li").remove();
  };

  return { data: extensions, removeItem };
};
