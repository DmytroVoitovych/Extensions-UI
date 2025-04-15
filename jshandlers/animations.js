const removeAnimation = (element) =>{
  element.classList.add("removeAnimation");
  const nextSibling = element?.nextElementSibling; 
  nextSibling?.classList.add("removeAnimation"); 

  anime({
    targets: element,
    opacity: 0,
    scale: 0.5,
    duration: 250,
    easing: "easeOutExpo",

    complete: () => {
      element.remove();

      if (nextSibling) {
        anime.set(nextSibling, {
          translateX: 20,
          opacity: 0,
        });

        anime({
          targets: nextSibling,
          translateX: 0,
          opacity: 1,
          duration: 250,
          easing: "easeInOutExpo",
        });
      }
    },
  })};



  export {removeAnimation};
