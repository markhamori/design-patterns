let Node = function(name) {
  this.children = [];
  this.name = name;
}

Node.prototype = {
  add: function(child) {
    this.children.push(child)
  },

  remove: function(child) {
    let length = this.children.length;
    for (var i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1);
        return
      }
    }
  },

  getChild: function(i) {
    return this.children[i]
  },
  hasChildren: function(i) {
    return this.children.length > 0;
  } 
}

function traverse(indent, node) {
  console.log(Array(indent++).join("--") + node.name);

  for (let i = 0, len = node.children.length; i < len; i++) {
      traverse(indent, node.getChild(i));
  }
}

function run() {
  let tree = new Node("root");
  let left = new Node("left")
  let right = new Node("right");
  let leftleft = new Node("leftleft");
  let leftright = new Node("leftright");
  let rightleft = new Node("rightleft");
  let rightright = new Node("rightright");

  tree.add(left);
  tree.add(right);
  tree.remove(right);
  tree.add(right);

  left.add(leftleft);
  left.add(leftright);

  right.add(rightleft);
  right.add(rightright);

  traverse(1, tree);
}

run();