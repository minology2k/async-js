N = input()
print("N", N)
list_num = input().split("")
def investor(arr):
    min = int(arr[0])
    max = int(arr[1])

    for i in range(2, len(arr)):
        if int(arr[i]) < min:
            min = arr[i]
            max = arr[i + 1]

        if int(arr[i]) > max:
            max = arr[i]
    return int(max) - int(min) if max else 0

print(investor(list_num))