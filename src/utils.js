//gets random integer
function d6(){
    return Math.floor(Math.random() *6)+1
}

//get N rolls => [num, ...]
function getRolls(n){
    //Array.from(obj to convert into array, fn for each element)
    return Array.from({length: n}, ()=> d6())
}

//sum of nums
function sum(nums){
    //The reduce() method returns a single value that is the result of the accumulation process.
    return nums.reduce((prev,curr)=>prev+curr, 0)
}

//export the fn has below
export {d6, getRolls, sum}