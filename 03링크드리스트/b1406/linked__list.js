// 에디터 (연결 리스트로 풀이)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input[0].trim().split("");
let cmdCount = +input[1];

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
    // 커서가 맨 앞인 경우
    if (!this.cursor.prev) return null;
    if (this.head.next === this.cursor && this.cursor.next) {
      // 커서가 헤드 바로 뒤이고, 커서 뒤에도 노드가 있는 경우
      this.head.next = this.cursor.next;
      this.cursor.next.prev = this.head;
      this.cursor = this.head;
    } else if (!this.cursor.next) {
      // 커서가 맨 뒤인 경우
      this.cursor.prev.next = null;
      this.cursor = this.cursor.prev;
    } else {
      this.cursor.prev.next = this.cursor.next;
      this.cursor.next.prev = this.cursor.prev;
      this.cursor = this.cursor.prev;
    }
  }
  moveLeft() {
    if (this.cursor.prev) {
      this.cursor = this.cursor.prev;
    }
  }
  moveRight() {
    if (this.cursor.next) {
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

let l = new LinkedList();

for (let i = 0; i < str.length; i++) {
  l.insert(str[i]);
}

function solution() {
  for (let i = 2; i < 2 + cmdCount; i++) {
    let [cmd, value] = input[i].split(" ");
    if (cmd[0] === "L") {
      l.moveLeft();
    } else if (cmd[0] === "D") {
      l.moveRight();
    } else if (cmd[0] === "B") {
      l.remove();
    } else if (cmd[0] === "P") {
      l.insert(value[0]);
    }
  }
  l.show();
}
solution();
