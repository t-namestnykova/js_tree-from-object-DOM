'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

let tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;
    list.appendChild(li);

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  });

  element.appendChild(list);

  return list;
}

createTree(tree, food);

tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
}

createTree(tree, food);
