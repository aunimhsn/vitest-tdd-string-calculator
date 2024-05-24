export function add(numbersStr) {
    if (numbersStr === "")  return 0

    let delimiters = getDelimiters(numbersStr)
    numbersStr = deleteDelimiter(numbersStr)

    delimiters.forEach(delimiter => {
        numbersStr = numbersStr.replaceAll(delimiter, ',');
    });

    let numbersIntArr = numbersStr.replaceAll('\n', ',')
            .split(',')
            .map(number => parseInt(number))
            .filter(number => number <= 1000)

    let negatives = numbersIntArr.filter(elem => elem < 0) 
    if (negatives.length > 0)
        throw new Error(`Negatives not allowed. [${negatives.join()}]`)
    else 
        return numbersIntArr.reduce((sum, current) => sum + current)
}

function hasDelimiter(numbersStr) {
    return numbersStr.includes('//')
}

function getDelimiters(numbersStr) {
    if (hasDelimiter(numbersStr)) {
        if (numbersStr.includes('[')) 
            return numbersStr.split(/\[(.*?)\]/) // Get delimiters between square brackets
                    .filter((elem, key) => (key % 2 !== 0));
        else 
            return [numbersStr.charAt(2)];
    }

    return [','];
}


function deleteDelimiter(numbersStr) {
    if (hasDelimiter(numbersStr))
        return numbersStr.split('\n', 2)[1]

    return numbersStr;
}