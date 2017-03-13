/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result =[];
    for(var i = 0; i<nums.length; i++){
        for (j = i+1; j<nums.length; j++){
            var sum = nums[i] + nums[j];
            if(sum == target){
                result.push(i);
                result.push(j);
                break;
            }
        }
    }
    return result;
};
