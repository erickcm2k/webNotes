class PrimivitveDataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new PrimivitveDataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.addItem("Erick");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new PrimivitveDataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());
