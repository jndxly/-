/*
给定一个字符串，要求把字符串前面的若干个字符移动到字符串的尾部，如把字符串“abcdef”前面的2个字符'a'和'b'移动到字符串的尾部，
使得原字符串变成字符串“cdefab”。请写一个函数完成此功能，要求对长度为n的字符串操作的时间复杂度为 O(n)，空间复杂度为 O(1)。
 */
LeftRotateString("abcdef".split(""),2)
function LeftRotateString(arr, num){


    reverse(arr, 0, num - 1);
    reverse(arr, num, arr.length - 1);
    reverse(arr, 0, arr.length - 1);
    console.log(arr)


}
function reverse(arr, start, end){

    let temp;
    while(start < end){

        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;

    }

}
reverseWords("I am a students.")
function reverseWords(str){

    let arr = str.split(" ");
    for(let len = arr.length - 1; len >= 0; len--){

        console.log(arr[len]);
        console.log(" ")
    }


}

/*
给定两个分别由字母组成的字符串A和字符串B，字符串B的长度比字符串A短。请问，如何最快地判断字符串B中所有字母是否都在字符串A里？
 */
function StringContain(str1, str2){

    let hash = 1;
    for(let len = 0; len < str1.length; len++){
        hash |= (1 << (str1.charCodeAt(len)- 65));
    }
    for(let len = 0; len < str2.length; len++){
        if(hash & ( 1 << (str2.charCodeAt(len) - 65))){

        }
        else{
            return false;
        }
    }

}

/*
如果两个字符串的字符一样，但是顺序不一样，被认为是兄弟字符串，比如bad和adb即为兄弟字符串，
现提供一个字符串，如何在字典中迅速找到它的兄弟字符串，请描述数据结构和查询过程。
 */
function isSiblingStr(str1, str2){

    if(str1.length != str2.length ){
        return false;
    }

    let hashObj = {};
    for(let len = 0; len < str1.length; len++){
        if(hashObj[str1.charAt(len)]){
            hashObj[str1.charAt(len)] = 1;
        }
        else{
            hashObj[str1.charAt(len)]++;
        }
    }
    for(let len = 0; len <str2.length; len++){
        if(hashObj[str2.charAt(len)]){
            hashObj[str2.charAt(len)]--;
        }
        else{
            return false;
        }
    }
    for(let item in hashObj){
        if(hashObj[item] != 0){
            return false;
        }

    }
    return true;

}

var arr = [];
permutation("abc",arr);
/*
升序：相邻两个位置ai < ai+1，ai 称作该升序的首位
步骤（二找、一交换、一翻转）
找到排列中最后（最右）一个升序的首位位置i，x = ai
找到排列中第i位右边最后一个比ai 大的位置j，y = aj
交换x，y
把第(i+ 1)位到最后的部分翻转
 */
function permutation(str, arr){

    let str2arr = str.split("");
    str2arr.sort(function(a,b){
        return a.charCodeAt(0) - b.charCodeAt(0)
    });

    arr.push(str2arr.slice());
    let isEnd = false;
    while(!isEnd){
        let index1, index2, len;
        for(len = str2arr.length - 2; len >= 0; len--){
            if(str2arr[len].charCodeAt(0) < str2arr[len + 1].charCodeAt(0)){
                index1 = len;
                break;
            }
        }

        if(len < 0){
            isEnd = true;
            break;
        }
        for(len = str2arr.length - 1; len > index1; len--){
            if(str2arr[len].charCodeAt(0) > str2arr[index1].charCodeAt(0)){
                index2 = len;
                break;
            }
        }
        swap(str2arr, index1,index2);
        reverse(str2arr, index1 + 1);
        arr.push(str2arr.slice())
    }

}
function swap(arr, i, j){
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
function reverse(arr, index){
    let start = index, end = arr.length - 1;
    while(start < end){
        swap(arr, start, end);
        start++;
        end--;
    }
}

/*
已知字符串里的字符是互不相同的，现在任意组合，比如ab，则输出aa，ab，ba，bb，编程按照字典序输出所有的组合。
 */
var str = "abc";
var arr = [];
combineStr3(str, 3, "", arr);
console.log(arr)
function combineStr3(str, num, pre, arr){

    for(let len = 0; len < num; len++){

        if(pre.length == num - 1){
            arr.push(pre + str.charAt(len));
        }
        else{
            combineStr3(str, num, pre + str.charAt(len), arr);
        }
    }
}

/*
如果不是求字符的所有排列，而是求字符的所有组合，应该怎么办呢？当输入的字符串中含有相同的字符串时，相同的字符交换位置是不同的排列，但是同一个组合。
举个例子，如果输入abc，它的组合有a、b、c、ab、ac、bc、abc。
 */
combine4("abc", [])
function combine4(str, arr){

    for(let len = 1 ; len <= str.length; len++){
        getStr(str, len, "", arr)
    }
    console.log(arr)
}

function getStr(str, num, pre, arr){

    if(num == 1){
        for(let len = 0; len <= str.length - 1; len++){
            arr.push( pre + str.charAt(len))
        }
    }
    else{
        for(let len = 0; len <= str.length - num; len++){
            getStr(str.substr(0, len) + str.substr(len + 1), num - 1, pre + str.charAt(len), arr)
        }
    }

}

/**
 * 在一个字符串中找到第一个只出现一次的字符。如输入abaccdeff，则输出b。
 */
console.log(findFirst("abaccdeff"))
/*该方法只支持，出现次数 <= 2的情况*/
function findFirst(str){

    let hash = 0;
    for(let len = 0; len < str.length; len++){

        hash = hash ^ ( 1 << (str.charCodeAt(len) - 65));
    }
    for(let len = 0; len < str.length; len++){
        if((hash & ( 1 << (str.charCodeAt(len) - 65))) != 0){
            return str.charAt(len)
        }
    }

}
findFirst1("abcabcabcd")
function findFirst1(str){
    let obj = {};
    for(let len = 0; len < str.length; len++){
        let key = str.charAt(len);
        if(obj[key]){
            obj[key]++;
        }
        else{
            obj[key] = 1;
        }
    }
    for(let key in obj){
        if(obj[key] == 1){
            return key;
        }
    }
}


/*
* * 输入一个字符串，输出该字符串中对称的子字符串的最大长度。比如输入字符串“google”，由于该字符串里最长的对称子字符串是“goog”，因此输出4。
* */
getPardim("google")
function getPardim(str){

    if(str.length == 0)
        return "";

    let newStr = processStr(str);
    let p = [];
    p[0] = 0;
    let xm = 0;
    let id = 0;
    for(let len = 1; len < newStr.length; len++){
        p[len] = xm > len?  Math.min(xm - len, 2 * id - len) : 1;

        while(newStr[ len + p[len]] == newStr[len - p[len]]){
            p[len]++;
        }

        if(xm - id < p[len]){
            xm = len + p[len];
            id = len;
        }

    }
    return Math.max(...p) - 1;

}

function processStr(str){

    let newStr = "#";
    for(let len = 0; len < str.length; len++){
        newStr += str.charAt(len) +"#";
    }
    return newStr;
}

/*
13、最长重复子串

一个长度为10000的字符串，写一个算法，找出最长的重复子串，如abczzacbca,结果是bc。
提示：此题是后缀树/数组的典型应用，即是求后缀数组的height[]的最大值。
 */
findRepeatSubstr("abczzacbca")

/*
1.求字符串s的后缀数组suffix

2.suffix排序,排序后，包含相同前缀的，肯定相邻，找到相邻前缀即为最大重复子串

3.求最长公共前缀
 */
function findRepeatSubstr(str){

    let ans,len, maxLen;
    len = maxLen = 0;
    let arr = [];
    for(let i = 0; i < str.length; i++){
        arr.push(str.substr(i, str.length - 1));
    }

    arr.sort()
    for(let i = 0; i < arr.length - 1; i++){
        len = comLen(arr[i], arr[i + 1]);
        if(len > maxLen){
            maxLen = len;
            ans = arr[i].substr(0, maxLen)
        }
    }
    return ans;

}
function comLen(str1, str2){
    let i,len;
    i =  len = 0;
    while(i < str1.length ){
        if(str1.charAt(i) == str2.charAt(i)){
            i++;
            len++;
        }
        else{
            return len;
        }
    }
    return len;
}

/*
输入n个整数，输出其中最小的k个。
 */
/**
 * @description 构造大顶堆
 * @param arr
 * @param k 对arr的前k个 元素排序
 */

getKmin([5,3,4,2,1], 3)
function getKmin(arr, k){
    buildHeap(arr, k);
    let temp;
    for(let len = k; len < arr.length; len++){
        if(arr[0] > arr[len]){
            temp = arr[0];
            arr[0] = arr[len];
            arr[len] = temp;
            if(len == arr.length - 1){
                break;
            }
            else{
                heapAdjust(arr, 0, k)
            }

        }
    }
    for(let len = 0; len < k; len++){
        console.log(arr[len])
    }
}

function buildHeap(arr, k){

    for(let len = Math.floor(k / 2) - 1; len >= 0; len--){
        heapAdjust(arr, len, k)
    }
}
function heapAdjust(arr, start, end){
    let temp = arr[start];
    let child = 2 * start + 1;

    while(child < end){
        if(child + 1 < end && arr[child + 1] > arr[child]){
            child = child + 1;
        }
        if(temp < arr[child]){
            arr[start] = arr[child];
            start = child;
            child = 2 * child + 1;
        }
        else{
            break;
        }
    }
    arr[start] = temp;
}

/*
输入一个数组和一个数字，在数组中查找两个数，使得它们的和正好是输入的那个数字。
例如输入数组1、2、4、7、11、15和数字15。由于4+11=15，因此输出4和11。
 */
var arr = [1,2,4,7,11,15];
var n = 6;
var k = 2;
var result = [];
getSum(arr, n, k, 15, result);
function getSum(arr, n, k, sum, result){

    if(n < k){
        return result;
    }
    let flagArr = [];
    for(let i = 0; i < n; i++){
        flagArr[i] = i < k? 1 : 0;
    }
    checkSum(arr, sum, flagArr, result);
    let isEnd = false;
    while(!isEnd){

        let left = 0;
        for(let i = 0; i < flagArr.length; i++){
            if(flagArr[i]  == 1 && flagArr[i + 1] == 0){
                flagArr[i] = 0;
                flagArr[i + 1] = 1;

                for(let j = 0; j < i; j++){
                    flagArr[j] = j < left? 1:0;
                }
                checkSum(arr, sum, flagArr, result)
                if(flagArr.slice(-k).indexOf(0) == -1){
                    isEnd = true;

                }
                break;
            }

            flagArr[i] == 1 && left++;

        }

    }


}
function checkSum(arr, sum, flagArr, targetArr){
    let total = 0;
    for(let i = 0; i < flagArr.length; i++){
        if(flagArr[i] == 1){
            total += arr[i];
        }
    }
    if(total == sum){
        targetArr.push(flagArr.slice())
    }
}

/*
* 用01背包问题求解
* */
result = [];
getSum1(arr, n, 15, result);
function getSum1(arr, n, sum, resultArr){

    if(n <= 0){
        return;
    }
    if(sum == 0){
        for(let len = 0; len < resultArr.length; len++){
            console.log(resultArr[len]);
        }
    }
    resultArr.push(arr[n-1]);
    getSum1(arr, n - 1, sum - arr[ n - 1], resultArr);
    resultArr.pop();
    getSum1(arr, n - 1, sum, resultArr)

}

/*
输入一个整形数组，数组里有正数也有负数。数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。 求所有子数组的和的最大值，要求时间复杂度为O(n)。
例如输入的数组为1, -2, 3, 10, -4, 7, 2, -5，和最大的子数组为3, 10, -4, 7, 2， 因此输出为该子数组的和18。
 */
getBiggestSum1([1,-2,3,10,-4,7,2,-5])
function getBiggestSum(arr){

    let sum = 0;
    let large = 0;

    for(let len = 0; len < arr.length; len++){
        if(arr[len] + sum < arr[len]){
            sum = arr[len];
        }
        else{
            sum += arr[len];

        }
        if(sum > large){
            large = sum;
        }
    }
    return large;

}


/*求出最大和连续子数组，及最大值*/
function  getBiggestSum1(arr){
    let resultArr = [];
    let sum = 0;
    let largeSum = 0;
    let largeArr = [];
    for(let len = 0; len < arr.length; len++){
        if(sum + arr[len] < arr[len]){
            resultArr = [];
            sum = arr[len];
        }
        else{
            resultArr.push(arr[len]);
            sum += arr[len];
        }
        if(sum > largeSum){
            largeArr = resultArr.slice();
            largeSum = sum;
        }
    }
    return largeArr;


}

/*
想兑换100元钱，有1,2,5,10四种钱，问总共有多少兑换方法。
 */

var dim = [1,2,5,10]
console.log(coinExchange(3, 4))
coinExchange1(3)
/*递归求解*/
function coinExchange(cash, m){

    if(cash == 0){
        return 1;
    }
    if(cash <0 | m == 0){
        return 0;
    }
    return coinExchange(cash, m - 1) + coinExchange(cash - dim[m - 1], m)
}
/*斐波那契*/
function coinExchange1(cash){
    let dim = [1,2,5,10];
    let arr = [1];
    for(let i = 1; i <= cash; i++){
        arr[i] = 0;
    }
    for(let i = 0; i < dim.length; i++){
        for(let j = dim[i]; j <= cash; j++){
            arr[j] = arr[j] + arr[j - dim[i]]
        }
    }
    console.log(arr[cash])
}

/*
* 输入一个整数数组，调整数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。要求时间复杂度为O(n)。
* */
function adjustEvenOdd(arr){
    let start = 0, end = arr.length - 1;
    while(start < end){
        while(arr[start] % 2 == 0 && start < end) start++;
        while(arr[end] % 2 == 1 && start < end) end--;
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

/*双指针同时向右扫描，奇偶互换*/
function adjustEvenOdd1(arr){
    let left = -1;
    let right= 0;
    let temp;
    for(right = 0; right < arr.length; right++){
        if(arr[right] % 2 == 1){
            left++;
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }
}
/*
* 一个未排序整数数组，有正负数，重新排列使负数排在正数前面，并且要求不改变原来的正负数之间相对顺序，
* 比如： input: 1,7,-5,9,-12,15 ans: -5,-12,1,7,9,15 要求时间复杂度O(n),空间O(1)。
* */
adjustNumber([1,7,-5,9,-12,15])
function adjustNumber(arr){

    let newArr = [];
    for(let len = 0; len < arr.length; len++){
        if(arr[len] < 0){
            newArr.push(arr[len]);
        }
    }
    for(let len = 0; len < arr.length ; len++){
        if(arr[len] > 0){
            newArr.push(arr[len]);
        }

    }
    console.log(newArr)

}

/*
* 现有n个红白蓝三种不同颜色的小球，乱序排列在一起，请通过两两交换任意两个球，使得从左至右，依次是一些红球、一些白球、一些蓝球。
* */
tripleSwap([0,0,1,2,1,0,2,1,0,2])
function tripleSwap(arr){
    let left = 0;
    let right = arr.length - 1;
    let current = 0;
    let temp;
    while(current < right){
        if(arr[current] == 0){

            temp = arr[current];
            arr[current] = arr[left];
            arr[left] = temp;
            left++;
            current++;
        }
        else if(arr[current] == 1){
            current++;
        }
        else{
            temp = arr[current];
            arr[current] = arr[right];
            arr[right] = temp;
            right--;
        }
    }
    console.log(arr)
}

/*
有个长度为2n的数组{a1,a2,a3,...,an,b1,b2,b3,...,bn}，希望排序后{a1,b1,a2,b2,....,an,bn}，请考虑有无时间复杂度o(n)，空间复杂度0(1)的解法。
 */
var arr = [];
for(var len = 0; len < 20; len++){
    arr[len] = len ;
}
testArr(arr)
function testArr(arr){
    let size = arr.length;
    let temp = arr[size / 2];
    // 奇数加(数组长度-1)除以2 偶数直接除以2
    for(let len = size / 2; len != 1; len = ((len + len % 2 * (size - 1))/2)){
        arr[len] = arr[(len + len %2 * (size - 1))/2];
    }
    arr[1] = temp;
    console.log(arr)
}

/*
两个数组a[N]，b[N]，其中A[N]的各个元素值已知，现给b[i]赋值，b[i] = a[0]a[1]a[2]...*a[N-1]/a[i]； 要求：

1.不准用除法运算
2.除了循环计数值，a[N],b[N]外，不准再用其他任何变量（包括局部变量，全局变量等）
3.满足时间复杂度O(n)，空间复杂度O(1)。
 */
var output = [];
multiply([1,2,3,4], output)
function multiply(arr, output) {
    let left = 1;
    let right = 1;
    for(let len = 0; len < arr.length; len++){
        output[len] = 1;
    }
    let num = arr.length - 1;
    for(let len = 0; len < arr.length; len++){
        output[len] = output[len] * left;
        output[num - len] = output[num - len] * right;
        left *=arr[len];
        right *=arr[num - len];
    }
}

/*
找出数组中唯一的重复元素
1-1000放在含有1001个元素的数组中，只有唯一的一个元素值重复，其它均只出现一次。
每个数组元素只能访问一次，设计一个算法，将它找出来；不用辅助存储空间，能否设计一个算法实现？
 */
function getRepeat(arr){

    let total = 0;
    for(let len = 0; len < arr.length; len++){
        total += arr[len];
    }
    return total - 1001 * 500;
}
function getRepeat(arr){
    let hash = 0;
    for(let len = 0; len < arr.length; len++){
        hash ^= arr[len];
    }
    for(let len = 1; len <= 1000; len++){
        hash ^= len;
    }
    return hash;
}
/*
找出数组中，数都是两两重复的，有两个是唯一出现的，找出来
* */
getRepeat3([1,1,2,2,3,3,4,5])
function getRepeat3(arr){

    let hash = 0;
    for(let len = 0; len < arr.length; len++){
        hash ^= arr[len];
    }
    let hash1 = 0;
    let hash2 = 0;
    for(let len = 0; len < arr.length; len++){

        if(hash & arr[len]){
            hash1 ^= arr[len];
        }
        else{
            hash2 ^= arr[len];
        }

    }
    console.log(hash1, hash2)


}

/*
* 找出反序的个数
给定一整型数组，若数组中某个下标值大的元素值小于某个下标值比它小的元素值，称这是一个反序。 即：数组a[]; 对于i < j 且 a[i] > a[j],
则称这是一个反序。 给定一个数组，要求写一个函数，计算出这个数组里所有反序的个数。
* */
var count = 0;
var arr = [3,6,1,5,4,2]
mergeSort(arr, 0, 5)
function mergeSort(arr, start, end){

    if(start < end){

        let mid = Math.floor((start + end) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end );
        merge(arr, start, mid, end);
    }
    else{
        return arr;
    }
}
function merge(arr, start, mid, end){

    let newArr = [];
    let i = start;
    let j = mid + 1;
    while(i <= mid && j <= end){
        if(arr[i] <= arr[j]){
            newArr.push(arr[i]);
            i++;
        }
        else{
            newArr.push(arr[j])
            j++;
            count += mid - i + 1;
        }
    }
    while(i <= mid){
        newArr.push(arr[i++])
    }
    while(j <= end){
        newArr.push(arr[j++]);
    }
    for(let i = 0; i < newArr.length; i++){
        arr[start++] = newArr[i];
    }

}

/*
// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;
add(1)(2)(3)(4)(5) = 15;

 */


function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [].slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var adder = function () {
        var _adder = function() {
            // [].push.apply(_args, [].slice.call(arguments));
            _args.push(...arguments);
            return _adder;
        };

        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.valueOf = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    // return adder.apply(null, _args);
    return adder(..._args);
}

//  通用的函数柯里化构造方法
function curry(func){
    //新建args保存参数，注意，第一个参数应该是要柯里化的函数，所以args里面去掉第一个
    var args = [].slice.call(arguments,1);
    //新建_func函数作为返回值
    var _func =  function(){
        //参数长度为0，执行func函数，完成该函数的功能
        if(arguments.length === 0){
            return func.apply(this,args);
        }else {
            //否则，存储参数到闭包中，返回本函数
            [].push.apply(args,arguments);
            return _func;
        }
    }
    return _func;
}

function add1(){
    return [].reduce.call(arguments,function(a,b){return a+b});
}
console.log(curry(add1,1,2,3)(1)(2)(3,4,5,5)(5,6,6,7,8,8)(1)(1)(1)());//69

/*函数节流*/
/**函数的去抖动**/
function debounce(method,delay){
    var timer=null;
    return function(){
        var context=this, args=arguments;
        clearTimeout(timer);
        timer=setTimeout(function(){
            method.apply(context,args);
        },delay);
    }
}
function resizehandler(){
    console.log(++n);
}
// window.onresize=debounce(resizehandler,500);

/*
* 函数预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期
* */
function throttle(method,duration){
    var  begin=new Date();
    return function(){
        var context=this, args=arguments, current=new Date();
        if(current-begin>=duration){
            method.apply(context,args);
            begin=current;
        }
    }
}
// window.onresize=throttle(resizehandler,500);



function Template(tpl) {
    var
        fn,
        match,
        code = ['var r=[];'],
        re = /\{\s*([a-zA-Z\.\_0-9()]+)\s*\}/m,
        addLine = function (text) {
            code.push('r.push(\'' + text.replace(/\'/g, '\\\'').replace(/\n/g, '\\n').replace(/\r/g, '\\r') + '\');');
        };
    while (match = re.exec(tpl)) {
        if (match.index > 0) {
            addLine(tpl.slice(0, match.index));
        }
        code.push('r.push(this.' + match[1] + ');');
        tpl = tpl.substring(match.index + match[0].length);
    }
    addLine(tpl);
    code.push('return r.join(\'\');');
    // 创建函数:
    fn = new Function(code.join('\n'));
    // 用render()调用函数并绑定this参数：
    this.render = function (model) {
        return fn.apply(model);
    };
}
var str = '<p>Today: { date }</p>\n' +
    '    <a href="/{ user.id|safe }">{ user.company }</a>';
var tpl = new Template(str);
var s = tpl.render({
    date: 20150101,
    user: {
        id: 'A-000&001',
        company: 'AT&T'
    }
});

/*
求二叉树是否存爱和值为N的路径

从二叉树的根到叶子节点称为一条路径，路径上的每个节点的value之和为路径和值，是否存在一条和值为N的。
 */
function getPath(root,total, sum, path){

    if(root== null){
        return;
    }
    path.push(root.val)
    total += root.val;
    if(root.left == null && root.right == null && total == sum){
        print(path);
    }

    if(root.left){
        getPath(root.left, total, sum, path)
    }
    if(root.right){
        getPath(root.right, total, sum, path)
    }
    total -= root.val;
    path.pop();

}

function getPath(root, sum){
    if(root== null){
        return null;
    }
    let stack = [], res = [];
    let total = 0;
    stack.push(root);
    res.push

    while(stack.length > 0){

        /*每次出战加入res*/
        let node = stack.pop();
        res.push(node.val);
        if( node.left == null && node.right == null){
            if(checkNum(res) == total){
                print();
            }
            res.pop();//到叶子节点后，叶子节点出栈
        }
        if(node.right){
            stack.push(node.right)
        }
        if(node.left){
            stack.push(node.left);
        }
        stack.pop();



    }

}

/*
Promise封装ajax请求
 */

function ajax(url,type,param,async,header) {
    return new Promise(function (resolve, reject) {
        var xhr;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }
        else if(window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xhr.onreadystatechange = function(){
            if(xhr.state == 4){
                if(xhr.status >= 200 || xhr.status < 300){

                }
            }
        }

        type == null || type.toUpperCase() == 'GET' ? type = 'get' : type = 'post';
        param = formatParams(param);
        param == null || param == '' ? url : url = url + '?' + param;
        async == null || async == true ? async = true : async = false;
        //设置表单提交时的内容类型，未完
        //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.open(type, url, async);
        req.send();
    });

    function formatParams(data) {
        var _fpArr = [];
        for (var _fpName in data) {
            _fpArr.push(_fpName + "=" + data[_fpName]);
        }
        return _fpArr.join("&");
    };
}

function getNext(str, next){

    next[0] = -1;
    let k = -1;
    for(let i = 1; i < str.length; i++){

        if(str[i] == str[k + 1]){
            k++;
        }
        else{

            while(k != -1 && str[i] != str[k+1]){
                k = next[k];
            }
            next[i] = k;

        }

    }

}
function kmp(str, matchStr){

    let next = [],k = -1;
    getNext(matchStr);
    for(let i = 0; i < str.length; i++){

        if(str[i] == matchStr[k + 1]){
            k++;
            if(k == matchStr.length - 1){
                return i -k ;
            }
        }
        else{

            while(k != -1 && matchStr[k + 1] != str[i]){
                k = next[k];
            }

        }

    }

}