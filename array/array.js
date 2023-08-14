class MyArray {
    constructor () {
        this.length = 0;
        this.data = {};
    }
    // Get item at index
    get (index) {
        return this.data[index];
    }
    // Insert item at the last position of the array.
    push (item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    // Delete item at the last position of the array.
    pop () {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    // Delete item from array at index.
    delete (index) {
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    // Delete item at index and re-order the array.
    shiftIndex(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    // Insert item at the first position of the array.
    unshift (item) {
        if(!item) {
            return this.length;
        }
        if(this.length != 0) {
            for (let i = this.length - 1; i >= 0; i--) {
                this.data[i + 1] = this.data[i];
            }
        }
        this.data[0] = item;
        this.length++;
        return this.length;
    }
    // Delete item at the first position of the array.
    shift () {
        this.delete(0);
        return this.length;
    }
}
// Instance of MyArray class
const myArray = new MyArray();