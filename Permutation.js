/*
输入一个字符串,按字典序打印出该字符串中字符的所有排列。
例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
输入描述:
输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
 */
function Permutation(str)
{
  // write code here
  if(!str) return "";
  let result = [], strMap = {};
  getStr(str, "", result);

  return result;
  function getStr(str, pre, result){

    if(str.length == 1){
      if(!strMap[pre + str]){
        strMap[pre + str] = 1;
        result.push(pre + str);
      }

      return;
    }
    else{
      for(let i = 0; i < str.length; i++){
        getStr(str.substring(0, i) + str.substring(i + 1), pre + str.charAt(i), result)
      }
    }

  }
}