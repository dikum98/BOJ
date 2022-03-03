// 키로거 (연결리스트 풀이)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let cmdCount = +input[0];

class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

function solution() {
  for (let i = 1; i < cmdCount + 1; i++) {
    const str = input[i].trim();
    const head = new Node("Head", null, null);
    let cursor = head;
    for (let j = 0; j < str.length; j++) {
      switch (str[j]) {
        case "<":
          if (cursor.prev) cursor = cursor.prev;
          break;
        case ">":
          if (cursor.next) cursor = cursor.next;
          break;
        case "-":
          if (!cursor.prev) return null;
          if (cursor.next) {
            cursor.next.prev = cursor.prev;
          }
          cursor.prev.next = cursor.next;
          cursor = cursor.prev;
          break;
        default:
          const newNode = new Node(str[j], cursor, cursor.next);
          if (cursor.next) {
            cursor.next.prev = newNode;
          }
          cursor.next = newNode;
          cursor = newNode;
      }
    }
    cursor = head.next;
    let result = "";
    while (cursor) {
      result += cursor.val;
      cursor = cursor.next;
    }
    console.log(result);
  }
}

solution();
