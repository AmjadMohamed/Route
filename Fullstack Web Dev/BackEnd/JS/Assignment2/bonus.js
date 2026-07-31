/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let freqArr = [2001];
    let tempCounter = 0;

    for(let i = 1 ; i <= 2000 ; i ++)
    {
        freqArr[i] = 0;
    }

    for(let i = 0 ; i < arr.length ; i ++)
    {
        freqArr[arr[i]] = 1
    }

    for(let i = 1 ; i <= 2000 ; i ++)
    {
        if(freqArr[i] == 0)
        {
            tempCounter ++;
        }

        if(tempCounter == k)
        {
            return i;
        }
    }

    return 0;


};