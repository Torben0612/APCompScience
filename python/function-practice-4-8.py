def sumArray(arr):
    total = 0
    for i in range(len(arr)):
        total += arr[i]
    return total

def maxInArr(arr):
    max = 0
    for i in range(len(arr)):
        if arr[i] > max:
            max = arr[i]
    return max

def countOccurrences(arr, target):
    count = 0
    for i in range(len(arr)):
        if arr[i] == target:
            count += 1
    return count

def removeDuplicates(arr):
    newArr = []
    for i in range(len(arr)):
        if arr[i] not in newArr:
            newArr.append(arr[i])
    return newArr

#
def longestIncreasingSubsequence(nums):
    dp = [1] * len(nums)

    for i in range(1, len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    return max(dp)

print(sumArray([1,2,3,4]))
print(maxInArr([10, 25, 7, 3]))
print(countOccurrences([1, 2, 3, 2, 4, 2], 2))
print(removeDuplicates([1, 2, 2, 3, 4, 4]))
print(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]))
