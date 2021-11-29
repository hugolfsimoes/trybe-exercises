def biggerNumber(numOne, numTwo):
    if numOne > numTwo:
        return numOne
    elif numTwo > numOne:
        return numTwo
    else:
        return "Same numbers"


def mediaAritimetica(lista):
    result = 0
    for num in lista:
        result += num

    return result / len(lista)


def square(n):

    for x in range(n):
        result = ""
        for y in range(n):
            result += "*"
        print(result)


square(5)
