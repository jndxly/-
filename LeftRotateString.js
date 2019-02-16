/*
汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。
对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,
要求输出循环左移3位后的结果，即“XYZdefabc”。是不是很简单？OK，搞定它！
 */
function LeftRotateString(str, n)
{
  // write code here
  if(!str) return "";
  if(str.length <= 1 || str.length < n) return str;
  let arr = str.split("");
  reverse(arr, 0, n - 1);
  reverse(arr, n, arr.length - 1);
  reverse(arr, 0, arr.length - 1 );
  return arr.join("");

  function reverse(arr, start, end){
    let temp;
    while(start < end){
      temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      start++;
      end--;
    }
  }
}