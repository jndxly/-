/**
 * 
 * 求1+2+3+...+n，要求不能使用
 * 乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）
 */
function Sum_Solution(n)
{
    // write code here
    n && (n = n + Sum_Solution( n - 1));
    return n;
}