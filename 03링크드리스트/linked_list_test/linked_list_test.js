const MAX = 1000005;
// dat[i]는 i번지 원소의 값
let dat = [];
// pre[i]는 i번지 원소에 대해 이전 원소의 인덱스
let pre = [];
// nxt[i]는 다음 원소의 인덱스
let nxt = [];
// 현재 사용되지 않는 인덱스, 즉 새로운 원소가 들어갈 수 있는 인덱스
let unused = 1;

// 주소 addr 다음에 num을 추가
function insert(addr, num) {
  // 새로운 원소를 생성
  dat[unused] = num;
  // 새 원소의 pre 값에 삽입할 위치의 주소를 대입
  pre[unused] = addr;
  // 새 원소의 nxt 값에 삽입할 위치의 nxt 값을 대입
  nxt[unused] = nxt[addr] || -1;
  // 삽입할 위치의 nxt 값과 삽입할 위치의 다음 원소의 pre 값을 새 원소로 변경
  if (nxt[addr] !== -1) pre[nxt[addr]] = unused;

  nxt[addr] = unused;
  unused++;
}

// 주소 addr 위치의 원소를 제거
function erase(addr) {
  nxt[pre[addr]] = nxt[addr];
  if (nxt[addr] !== -1) pre[nxt[addr]] = pre[addr];
}

// 연결 리스트의 모든 원소를 출력
function traverse() {
  let result = "";
  // cur은 각 원소들의 주소값
  let cur = nxt[0];
  while (cur != -1) {
    result += dat[cur] + " ";
    cur = nxt[cur];
  }
  console.log(result);
}

function insert_test() {
  console.log("****** insert_test *****");
  insert(0, 10); // 10(address=1)
  traverse();
  insert(0, 30); // 30(address=2) 10
  traverse();
  insert(2, 40); // 30 40(address=3) 10
  traverse();
  insert(1, 20); // 30 40 10 20(address=4)
  traverse();
  insert(4, 70); // 30 40 10 20 70(address=5)
  traverse();
}

function erase_test() {
  console.log("****** erase_test *****");
  erase(1); // 30 40 20 70
  traverse();
  erase(2); // 40 20 70
  traverse();
  erase(4); // 40 70
  traverse();
  erase(5); // 40
  traverse();
}

// fill(pre, pre + MX, -1);
// fill(nxt, nxt + MX, -1);
insert_test();
erase_test();
