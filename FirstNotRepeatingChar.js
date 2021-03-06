/*
在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 */
function FirstNotRepeatingChar(str)
{
  // write code here
  let hash = {};
  for(let len = 0; len < str.length; len++){
    let cur = str.charAt(len);
    if(hash[cur]){
      hash[cur]++;
    }
    else{
      hash[cur] = 1;
    }
  }
  for(let len = 0; len < str.length; len++){
    let cur = str.charAt(len);
    if(hash[cur] == 1){
      return len;
    }
  }
  return -1;

}