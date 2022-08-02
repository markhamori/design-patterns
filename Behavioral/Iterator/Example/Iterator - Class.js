// This is a forward iterator
const items = [1, "dev", false, 1.24];

class Iterator {
  constructor(items, index) {
    this.items = items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    return this.items[this.index++];
  }
}

const iter = new Iterator(items);

while (iter.hasNext()) console.log(iter.next());