// This is a forward iterator
const items = [1, "dev", false, 1.24];

function Iterator(items) {
  // Store the reference to the collection
  // that we want to iterate over
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  },
};

const iter = new Iterator(items);

while (iter.hasNext()) console.log(iter.next());
