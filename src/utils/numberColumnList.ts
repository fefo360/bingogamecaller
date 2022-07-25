import { NUMBER_RANGE } from "../types/interfaces"

const numberColumnList = (range: NUMBER_RANGE) => {
    let numberList = []

    while(range.start <= range.end){
        numberList.push(range.start)
        range.start++
    }
    console.log(numberList);
    return numberList
}

export default numberColumnList