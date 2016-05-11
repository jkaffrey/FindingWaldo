'use strict';

var findDatWaldo = function(node, funk) {

  funk(node);
  node = node.firstChild;
  while (node) {

    findDatWaldo(node, funk);
    node = node.nextSibling;
  }
};

findDatWaldo(document.body, function(node) {

  alert(node.tagName);
});
