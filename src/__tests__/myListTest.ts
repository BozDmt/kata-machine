import ArrayList from "@code/ArrayList";

export function test_list(list: ArrayList): void {
    for(let i =0; i< 600; ++i){
        list.append((Math.random()*10)+i)
    }
    const valArr = function(){
        const a = []
        for(let i = 0; i < 600; ++i){
            a.push(list.get(i))
        }
        return a 
    }
    
    for(let i = 0; i < 420; ++i){
        const num = valArr()[i]
        expect(list.remove(i)).toEqual(valArr()[i])
    }
    // expect(list.get(3)).toEqual(valArr()[3])
    // expect(list.removeAt(3)).toEqual(valArr()[3])
    // expect(list.get(2)).toEqual(9);
    // expect(list.removeAt(1)).toEqual(7);
    // expect(list.length).toEqual(2);

    // list.append(11);
    // expect(list.removeAt(1)).toEqual(9);
    // expect(list.remove(9)).toEqual(undefined);
    // expect(list.removeAt(0)).toEqual(5);
    // expect(list.removeAt(0)).toEqual(11);
    // expect(list.length).toEqual(0);

    // list.prepend(5);
    // list.prepend(7);
    // list.prepend(9);

    // expect(list.get(2)).toEqual(5);
    // expect(list.get(0)).toEqual(9);
    // expect(list.remove(9)).toEqual(9);
    // expect(list.length).toEqual(2);
    // expect(list.get(0)).toEqual(7);
}
