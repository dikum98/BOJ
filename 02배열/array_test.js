function insert(index, num, arr) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = num;
}

function erase(index, arr) {
  for (let i = index; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
}

function printArr(arr) {
  console.log(arr);
}

function insert_test() {
  console.log("******insert test******");
  let arr = [10, 20, 30];
  insert(3, 40, arr); // 10 20 30 40
  printArr(arr);
  insert(1, 50, arr); // 10 50 20 30 40
  printArr(arr);
  insert(0, 15, arr); // 15 10 50 20 30 40
  printArr(arr);
}

function erase_test() {
  console.log("******erase test******");
  let arr = [10, 50, 40, 30, 70, 20];
  erase(4, arr); // 10 50 40 30 20
  printArr(arr);
  erase(1, arr); // 10 40 30 20
  printArr(arr);
  erase(3, arr); // 10 40 30
  printArr(arr);
}

insert_test();
erase_test();
