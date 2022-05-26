const numberColumnList = (letter: string, range: number[]) => {
    let baseNumber = range[0]
    let maxNumber = range[1]
    let numberList = []

    while(baseNumber <= maxNumber){
        numberList.push(baseNumber)
        baseNumber++
    }
    console.log(numberList);
    return numberList
}

export default numberColumnList