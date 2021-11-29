def biggerNumber(numOne, numTwo):
    if numOne > numTwo:
        return numOne
    elif numTwo > numOne:
        return numTwo
    else:
        return "Same numbers"


print(biggerNumber(3, 3))
