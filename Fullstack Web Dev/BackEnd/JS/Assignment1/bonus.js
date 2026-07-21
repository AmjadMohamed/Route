/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let res = init;

    function increment() {
        res++;
        return res;
    }
    function decrement() {
        res--;
        return res;
    }
    function reset() {
        res = init;
        return res;
    }

    return {
        increment,
        decrement,
        reset
    };

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


// LeetCode Submission: https://leetcode.com/problems/counter-ii/submissions/2076024660