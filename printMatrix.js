/**
 * 
输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 
则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */
function printMatrix(matrix)
{
    // write code here
    if(!matrix) return [];
    let top = 0, left = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
    let arr = [];
    while(top <= bottom && left <= right){
        for(let m = left; m <= right; m++){
            arr.push(matrix[top][m])
        }
        top++;
        for(let m = top; m <= bottom; m++){
            arr.push(matrix[m][right])
        }
        right--;
        if(left > right || top > bottom) break;
        for(let m = right; m >= left; m--){
            arr.push(matrix[bottom][m])
        }
        bottom--;
        for(let m = bottom; m >= top; m--){
            arr.push(matrix[m][left])
        }
        left++;
    }
    return arr;
}