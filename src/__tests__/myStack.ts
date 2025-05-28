import Stack from "@code/Stack"

test('myStackTest',function(){
    const myStack = new Stack<boolean>()
    const boolArr = [true,false,false,true,true]
    for(let i = 0; i < 5; ++i){
        myStack.push(boolArr[i])
    }
    expect(myStack.pop()).toEqual(true)
    expect(myStack.peekAt(1)).toEqual(false)
    expect(myStack.peekAt(2)).toEqual(false)
    expect(myStack.peekAt(3)).toEqual(true)
})