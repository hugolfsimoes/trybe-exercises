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


print(mediaAritimetica([10, 20, 30, 40, 50]))
