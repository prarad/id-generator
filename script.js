const id = idGenerator();

const nodesStepDifference = 1;
const maxSteps = 50;
const delay = 50;

const innerInterval = (node, steps, delay) => {
  let step = 0;
  return new Promise(resolve => {
    let intervalId = setInterval(() => {
      node.style.opacity = 1;
      node.style.width = `${randomWidthGenerator()}px`;
      if (step === nodesStepDifference - 1) {
        resolve();
      }
      if (step === steps) {
        clearInterval(intervalId);
      }
      step++;
    }, delay);
  });
};

const interval = (ids, blockIndex, blockCount) => {
  return new Promise(resolve => {
    const node = document.getElementById(ids[blockIndex]);
    const currentBlockSteps = maxSteps - blockIndex * nodesStepDifference;
    return innerInterval(node, currentBlockSteps, delay).then(() => {
      if (blockIndex < blockCount - 1) {
        blockIndex++;
        interval(ids, blockIndex, blockCount).then(resolve);
      } else {
        resolve();
      }
    });
  });
};

const start = n => {
  const nodeIds = [];
  for (let i = 0; i < n; i++) {
    nodeIds.push(id());
    document
      .getElementById("target")
      .append(createChildNode(randomWidthGenerator(), nodeIds[i]));
  }
  interval(nodeIds, 0, n);
};

start(10);
