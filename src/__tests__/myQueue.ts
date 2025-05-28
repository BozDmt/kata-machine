import Queue from '@code/Queue'

test('myQueueTest', function(){
    const myQueue = new Queue<string>()
    
    const word = 'gargleblaster'

    for(const char of word){
        myQueue.enqueue(char)
    }
    for(let i = 0; i< word.length; ++i){
        // expect(myQueue.peekAt(i)).toEqual(word[i])
        //manual implementation
        const queChar = myQueue.peekAt(i)
        const char = word[i]
        if(queChar === char){
            console.log('test passed')
        }else{
            console.error("test failed")
        }
    }
    
    
    expect(myQueue.peek()).toEqual('g')
    for(let i =0; i< word.length; ++i){
        myQueue.deque()

    }
})