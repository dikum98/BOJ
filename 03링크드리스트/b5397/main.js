// 키로거 (연결리스트 풀이)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let cmdCount = +input[0];

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("Head");
    this.cursor = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.head.next) {
      newNode.prev = this.head;
      this.head.next = newNode;
      this.cursor = newNode;
    } else if (this.cursor.next === null) {
      newNode.prev = this.cursor;
      this.cursor.next = newNode;
      this.cursor = newNode;
    } else {
      // 중간에 삽입
      newNode.prev = this.cursor;
      newNode.next = this.cursor.next;
      this.cursor.next.prev = newNode;
      this.cursor.next = newNode;
      this.cursor = newNode;
    }
  }
  remove() {
    if (!this.cursor?.prev) return null;
    if (this.cursor.next) {
      this.cursor.next.prev = this.cursor.prev;
    }
    this.cursor.prev.next = this.cursor.next;
    this.cursor = this.cursor.prev;
  }
  moveLeft() {
    if (this.cursor?.prev) {
      this.cursor = this.cursor.prev;
    }
  }
  moveRight() {
    if (this.curser?.next) {
      this.cursor = this.cursor.next;
    }
  }
  show() {
    let result = "";
    for (
      let current = this.head.next;
      current !== null;
      current = current.next
    ) {
      result += current.val;
    }
    console.log(result);
  }
}

function solution() {
  for (let i = 1; i < cmdCount + 1; i++) {
    let ll = new LinkedList();
    let str = input[i].trim();
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "<") {
        ll.moveLeft();
      } else if (str[j] === ">") {
        ll.moveRight();
      } else if (str[j] === "-") {
        ll.remove();
      } else {
        ll.insert(str[j]);
      }
    }
    ll.show();
  }
}
solution();
