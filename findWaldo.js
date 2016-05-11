'use strict';

var findDatWaldo = function(node, funk) {

  funk(node);
  node = node.firstChild;
  while (node) {

    findDatWaldo(node, funk);
    node = node.nextSibling;
  }
};

findDatWaldo(document.head, function(node) {

  if (typeof node.style !== 'undefined' && node.style) {

    if (node.innerHTML.toLowerCase() === 'waldo') {

      node.style.display = 'inline';
      console.log(node.innerHTML);
    }
  }
});

findDatWaldo(document.body, function(node) {

  if (typeof node.style !== 'undefined' && node.style) {

    if (node.innerHTML.toLowerCase() === 'waldo') {

      node.style.display = 'inline';
      console.log(node.innerHTML);
    }
  }
});
