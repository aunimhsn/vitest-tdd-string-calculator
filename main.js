export function add(numbersStr) {
    if (numbersStr === "")  return 0

    let delimiter = getDelimiter(numbersStr)
    numbersStr = deleteDelimiter(numbersStr)

    let numbersIntArr = numbersStr.replaceAll('\n', ',')
            .replaceAll(delimiter, ',')
            .split(',')
            .map(number => parseInt(number))

    let negatives = numbersIntArr.filter(elem => elem < 0) 
    if (negatives.length > 0)
        throw new Error(`Negatives not allowed. [${negatives[0]}]`)
    else 
        return numbersIntArr.reduce((sum, current) => sum + current)
}

function hasDelimiter(numbersStr) {
    return numbersStr.includes('//')
}

function getDelimiter(numbersStr) {
    if (hasDelimiter(numbersStr)) 
        return numbersStr.charAt(2)
    
    return ','
}

function deleteDelimiter(numbersStr) {
    if (hasDelimiter(numbersStr))
        return numbersStr.split('\n', 2)[1]

    return numbersStr;
}