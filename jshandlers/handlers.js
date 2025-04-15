

const setUserTheme = () => {
  const themeDark = !!window.localStorage.getItem("theme");
  if (themeDark) document.documentElement.classList.add("dark");
};


const switchTheme = () => {
  const themeDark = !!window.localStorage.getItem("theme");
  document.documentElement.classList.toggle("dark");
  if (themeDark) {
    window.localStorage.removeItem("theme");
  } else window.localStorage.setItem("theme", "dark");
};


const setInitialTab = (currentTarget,callback) => {
    const hash = window.location.hash;
    if (hash) {
      const target = currentTarget?.querySelector(`[href="${hash}"]`);
      if (target) callback({ target, currentTarget});
    }
    return;
  };

const setActiveLink = (e) => {
  
  const target = e.target.closest("a");
  const isClickOnAlreadyActive = !!target?.classList.contains("activeLink");

  if (!target || isClickOnAlreadyActive) return;
  
  const activeLink = e?.currentTarget?.querySelector(".activeLink");
  
  if (activeLink) activeLink.classList.remove("activeLink");
  target.classList.add("activeLink");
};

const removeSwitcherIfIsNotChrome = (isChrome,el) => {
  if (!isChrome) el.remove();
 el.classList.remove("visually-hidden");
   
};


export { setUserTheme, switchTheme,setActiveLink, setInitialTab,removeSwitcherIfIsNotChrome };
