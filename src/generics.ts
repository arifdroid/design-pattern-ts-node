//https://www.youtube.com/watch?v=nViEqpgwxHE&t=384s&ab_channel=BenAwad 


function lastArr_2(numArr: Array<number>): number {
    return numArr[numArr.length - 1];
}

function lastArr_3(numArr: number[]): number {
    return numArr[numArr.length - 1];
}

const lastArr_1 = (numArr: Array<number>): number => {
    return numArr[numArr.length - 1];
}

//problem is when the same array will be fix typed

const l = lastArr_1([1, 3, 4]);
console.log('l is ->', l)


const makeArr = (x: number) => {
    return [x]
} // we could do makeArr(1) but not makeArr('a')

//generic 

const makeArr_2 = (x: any) => { // the problem with using any type, we lose the inferring from typed 
    return [x]
}

const array_1 = makeArr_2(1);

// a better generic solution would be 

const makeArr_3 = <T>(x: T) => {
    return [x]
}

const array_2 = makeArr_3('3') // makeArr_3(3)

// multiple generic 

const makeArr_4 = <T, Y>(x: T, y: Y) => {
    return [x, y]
}

const array_3 = makeArr_4(1, '2');

//classic function

function makeArr_4_copy<T, Y>(x: T, y: Y): [T, Y] {

    return [x, y]
}

function makeArr_5_copy<T, Y = any>(x: T, y: Y): [T, Y] {

    return [x, y]
}

const array_4 = makeArr_4_copy(1, '2')

const array_5 = makeArr_4_copy<string, null | number>('1', null)

const array_6 = makeArr_5_copy<string, null>('1', null)