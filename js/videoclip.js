let selectedItemId = "vid1";
let selectedShadowId = "shadow1";
let prevIframe = null;

const selectVid = (elItem) => {
  const shadowSelector = `${elItem.id.replace("vid", "shadow")}`;

  let prevItem = document.querySelector(`#${selectedItemId}`);
  prevItem.classList.remove("selected");
  prevItem.classList.remove("hover");

  let prevElShadow = document.querySelector(`#${selectedShadowId}`);
  prevElShadow.classList.remove("selected");
  prevElShadow.classList.remove("hover");

  selectedItemId = elItem.id;
  selectedShadowId = shadowSelector;

  let elShadow = document.querySelector(`#${selectedShadowId}`);

  if (elItem.classList.contains("selected")) {
    elItem.classList.remove("selected");
    elShadow.classList.remove("selected");
  } else {
    elItem.classList.add("selected");
    elShadow.classList.add("selected");
    
    let prevIframe = prevItem.querySelector("iframe");
    let currIframe = elItem.querySelector("iframe");
    currIframe.src = currIframe.src.replace("autoplay=0", "autoplay=1");
    prevIframe.src = prevIframe.src.replace("autoplay=1", "autoplay=0");
  }
};

const hoverItem = (elItem, isEnter) => {
  if (elItem.classList.contains("selected")) return;
  const shadowSelector = `${elItem.id.replace("vid", "shadow")}`;
  const elShadow = document.querySelector(`#${shadowSelector}`);
  if (isEnter) {
    elItem.classList.add("hover");
    elShadow.classList.add("hover");
  } else {
    elItem.classList.remove("hover");
    elShadow.classList.remove("hover");
  }
};