const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.begin = null;
        this.end = null;
        this.NN = [];
    }

    append(data) {
        let NewNode = new Node(data);

      if (this.length === 0) {
        this.begin = NewNode;
        this.end = NewNode;
        this.NN.push(NewNode);
      } else {
        this.end.next = NewNode;
        NewNode.prev = this.end;

        this.end = NewNode;
        this.NN.push(NewNode);
      }
  
      this.length++;
    }

    head() {

   
      if (this.length === 0) {
       return null; 
      } else {
        return  this.begin.data;   
      }
      }  

    tail() {
      if (this.length === 0) {
        return null;
      } else {
       return this.end.data;
      }
      
    }

    at(index) {
      if (index < 0 || this.length < index) {
        return false;
      } else {
        
      
      return this.NN[index].data;
      }
    }

    insertAt(index, data) {
      if (index < 0 || this.length < index) {
        return null;
      }

      let Node = new Node(data);

      if (index === 0) {
        Node.next = this.begin;
        this.begin.prev = Node;

        this.begin = Node;
      } else if (index === this.length) {
        this.end.next = Node;
        Node.prev = this.end;

        this.end = Node;
      } else {
        let current = this.begin;
        let prev = null;
        let i = 0;

        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }

        prev.next = Node;
        Node.prev = prev;

        Node.next = current;
        current.prev = Node;
      }

      this.length++;
    }

    isEmpty() {
      return this.length === 0;
    }

    clear() {
      this.begin = null;
      this.end = null;
      this.length = 0;
      return this;
    }

    deleteAt(index) {
      if (index < 0 || this.length <= index) {
        return null;
      }
  
      let current;

      if (index === 0) {
        current = this.begin;

        this.begin = this.begin.next;
        this.begin.prev = null;
      } else if(index === this.length - 1) {
        current = this.end;

        this.end = this.end.prev;
        this.end.next = null;}
       else {
        current = this.begin;
        let prev = null;
        let i = 0;
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }
        prev.next = current.next;
        current.next.prev = prev;
      }
      this.length--;
      return current.value;
    }

    reverse() {
      let temp1;
      let temp2 = this.begin;
      this.begin = this.end;
      this.end = temp2;
      while (temp2 !==0) {
        temp1 = temp2.next;
        temp2.next = temp2.prev;
     //   temp2.prev = temp1;
      temp2 = temp1;
      }
      return this;
    }

    indexOf(data) {
      let current = this.begin;
      let i = 0;

      while (current) {
        if (current.value === data) {
          return i;
        }
        current = current.next;
        i++;
      }
      return -1;
    }
}

module.exports = LinkedList;
