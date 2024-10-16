//1
function min(nums) {

    i = 1
    minn = nums[0]
    while (i < nums.length){
        if (nums[i] <= minn){
            minn = nums[i]
        } 
        i += 1
    
    }
    return minn;
    /*
      returns the minimum value in nums
        ex.
          if the following array is provided as a parameter
          
          nums: [77, 80, 72, 76, 88, 91]
          
          the result should be 72, since that is the least value
      
      tip:  use a variable to keep track of the minimum 
            as you loop through nums
    */
  }
  
  //2
  function sumOfSquares(nums) {
    i = 0
    total = 0
    while (i < nums.length){
        total += (nums[i] ** 2)
        i += 1
    }
    return total;
    /*
      returns the sum of the squares of the values in nums
        ex.
          if the following array is provided as a parameter
          
          nums: [4, 6, 3, 2, 5]
          
          the result should be 90
      
      tip:  use a variable to accumulate the sum of the squares
            as you loop through nums
    */
  }
  
  //3
  function sumEvens(nums) {
    i = 0
    total = 0
    while (i < nums.length){
        if ((nums[i] % 2) == 0){
            total += nums[i]
        }
        i += 1
    }
    return total;
    /*
      returns the sum of the even values in nums
        ex.
          if the following array is provided as a parameter
          
          nums: [4, 6, 3, 2, 5]
          
          the result should be 12, since 4 + 6 + 2 = 12
      
      tip:  if an even number is divided by 2, the remainder is 0
    */
  }
  
  //4
  function numOccurrences(nums, target) {
    i = 0
    occurrence = 0
    while (i < nums.length){
        if (nums[i] == target){
            occurrence += 1
        }
        i += 1
    }
    return occurrence
    /*
      returns the number of times target appears in nums
        ex.
          if the following values are provided as parameters
          
          nums: [3, 4, 5, 3, 2, 3, 3, 1, 3, 5]
          target: 3
          
          the result should be 5, since 3 appears 5 times
      
      tip: create a variable to store the number of occurences
    */
  }
  
  //5
  function numsGreaterThan(nums, target) {
    i = 0
    greater = []
    while (i < nums.length){
        if (nums[i] > target){
            greater.push(nums[i])
        }
        i += 1
    }
    return greater;
    /*
      returns an array of numbers greater than the target
        ex.
          if the following values are provided as parameters
          
          nums: [3, 4, 5, 3, 2, 3, 3, 1, 3, 5]
          target: 3
          
          the result should be [4, 5, 5]
          
      tip:  create an empty array before you loop through nums
    */
  }
  
  //test code...feel free to modify it to test other cases
  console.log("min test: " + min([77, 80, 72, 76, 88, 91]));
  console.log("sumOfSquares test: " + sumOfSquares([4, 6, 3, 2, 5]));
  console.log("sumEvens test: " + sumEvens([4, 6, 3, 2, 5]));
  console.log("numOccurrences test: " + numOccurrences([3, 4, 5, 3, 2, 3, 3, 1, 3, 5], 3));
  console.log("numsGreaterThan test: " + numsGreaterThan([3, 4, 5, 3, 2, 3, 3, 1, 3, 5], 3));
