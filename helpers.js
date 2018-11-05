const idGenerator = () => {
  let id = 0;
  return () => ++id;
};

const randomWidthGenerator = () => {
  const possibilities = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const rndPlace = Math.round(Math.random() * possibilities.length);
  return possibilities[rndPlace === 10 ? rndPlace - 1 : rndPlace];
};

const createChildNode = (width, id) => {
  const el = document.createElement("div");
  el.style.width = `${width}px`;
  el.style.height = "8px";
  el.style.backgroundColor = "#e79";
  el.style.borderRadius = "3px";
  el.style.margin = "2px auto";
  el.style.transition = "opacity .1s, width .3s";
  el.style.opacity = 0;
  el.id = id;

  return el;
};
