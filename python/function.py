#double num
def doubleNumber(num):
    return num * 2

print(doubleNumber(4))
print(doubleNumber(10))
print("")

#check if even
def isEven(num):
    return num % 2 == 0

print(isEven(4))
print(isEven(7))
print("")

#convert to min
def convertToMinutes(seconds):
    return int(seconds / 60)

print(convertToMinutes(120))
print(convertToMinutes(185))
print("")

#Find the larger num
def maxOfTwo(num1, num2):
    return max(num1, num2)

print(maxOfTwo(5, 10))
print(maxOfTwo(12, 12))
print("")

#5. Sum of All Numbers Between Two Values (Challenging)
def sumrange(start, end):
    total = 0
    for i in range(start, end+1):
        total += i
        i += 1
    return total

print(sumrange(1, 5))
print(sumrange(3, 7))
print("")
#6.
def averageArray(arr):
    if len(arr) == 0:
        return
    else:
        average = sum(arr) / len(arr)
        return average

print(averageArray([1, 2, 3, 4, 5]))
print(averageArray([10, 20, 30]))
print(averageArray([]))

print("None = null in python")