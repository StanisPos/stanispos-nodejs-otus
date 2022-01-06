const getTreeData = require("../getTreeData");
const defaultValue = `1
├──2
|  └──3
|  └──4
└──5
   └──6
`;

const userCustomData = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }],
    },

    {
      name: 5,
      items: [{ name: 6, items: [{ name: 7 }, { name: 8 }] }],
    },

    {
      name: 9,
      items: [{ name: 10, items: [{ name: 11 }] }],
    },
    {
      name: 12,
      items: [{ name: 13 }],
    },
  ],
};

const userCustomValue = `1
├──2
|  └──3
|  └──4
├──5
|  └──6
|   └──7
|   └──8
├──9
|  └──10
|   └──11
└──12
   └──13
`;

describe("Get tree data", () => {
  it("should show default data", () => {
    expect(getTreeData()).toBe(defaultValue);
  });

  it("should show user's data", () => {
    expect(getTreeData(userCustomData)).toBe(userCustomValue);
  });
});
