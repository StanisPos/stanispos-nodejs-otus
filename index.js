// Пример данных:
const os = require("os");

const object = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }],
    },
    {
      name: 5,
      items: [{ name: 6 }],
    },
  ],
};
// Пример запуска программы:
// npm start
// 1
// ├── 2
// │   └── 3
// │   └── 4
// └── 5
//     └── 6

const getInnerData = (data) => {
  let result = "";
  let isLastMainItem = false;

  const setLastMainItem = (name) => {
    if (!isLastMainItem) {
      isLastMainItem = data.items[data.items.length - 1].name === name;
    }
  };

  const getSymbols = (deep) => {
    let symbols = "";

    if (deep === 1) {
      symbols = isLastMainItem ? "└──" : "├──";
    } else {
      symbols = `${isLastMainItem ? " " : "|"}${" ".repeat(deep)}└──`;
    }

    return symbols;
  };

  const getUpdatedResult = (deep, name) => {
    if (!result) {
      return `${name.toString()}${os.EOL}`;
    }

    const currentDeep = deep - 1;

    return result.concat(`${getSymbols(currentDeep)}${name}${os.EOL}`);
  };

  const showInnerData = ({ name, items }, deep) => {
    const innerDeep = deep + 1;

    setLastMainItem(name);

    result = getUpdatedResult(innerDeep, name);

    if (items) {
      items.forEach((item) => {
        showInnerData(item, innerDeep);
      });
    }

    return result;
  };

  return showInnerData(data, 0);
};

const w = getInnerData(object);
console.log(w);
