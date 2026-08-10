/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let res = "";
    let smallestWord = strs[0];
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length < smallestWord.length) {
            smallestWord = strs[i];
        }
    }

    let pos = 0;
    let char = smallestWord[pos];
    while (true) {
        let allSame = true;
        for (let i = 0; i < strs.length; i++) {
            if (strs[i][pos] != char) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            res += char;
            pos++;
            char = smallestWord[pos];
            if (pos >= smallestWord.length) {
                break;
            }
        }
        else {
            break;
        }
    }

    return res === "undefined" ? "" : res;
};

// problem link: https://leetcode.com/problems/longest-common-prefix/submissions/2098567124