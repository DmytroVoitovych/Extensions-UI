import { extensionsIdList } from "./extensionsIdList.js";

export const isChrome =
  /Chrome/.test(navigator.userAgent) &&
  navigator.userAgentData.brands.some(({ brand }) => brand === "Google Chrome") &&
  window.chrome !== undefined;

const makeFinalObject = async (id,name) => {
  let logo = "";
  let description = "";

  await fetch(`https://workers-playground-billowing-rain-309d.begunec23.workers.dev/?url=https://chrome.google.com/webstore/detail/${id}`)
    .then((res) => {
      if (!res.ok) return;
      return res.text();
    })
    .then((text) => {
     const div = document.createElement("div");
      div.innerHTML = text;
      
     description = div.querySelector("meta[name=description]")?.content;
     logo = div.querySelector('meta[property="og:image"]')?.content;

    }).catch((e) => {
      console.log(e);
    });

  return {logo,description,name,isActive:true};
};



export const getRealExtensions = async () => {
  if (!isChrome) return [];

  const urls = Object.keys(extensionsIdList).map(
    (key) => `chrome-extension://${key}/${extensionsIdList[key].file}`
  );
  const idMatcher = /\/\/([^\/]+)/;

  const getName = (res) => ({
    name: extensionsIdList[idMatcher.exec(res.url)[1]].name,
    id: `${idMatcher.exec(res.url)[1]}`,
  });

  const result = await Promise.allSettled(
    urls.map((url) =>
      fetch(url)
        .then(getName)
        .catch((e) => {})
    )
  ).then((res) => res.filter((x) => !!x.value));

  const finalData = (await Promise.allSettled(result.map(e=> makeFinalObject(e.value.id,e.value.name)))).map(e=>e.value);

  return finalData || [];
};
