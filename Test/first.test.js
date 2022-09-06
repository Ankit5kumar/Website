test('testing the object',()=>{
    const data = {
        one:1
    }
    data.two = 2

    expect(data.two).toBe(2)
})

function sum(a,b){
    return a + b;
}
test('sum ',()=>{
    expect(sum(1,2)).toBe(3)
})


const animals = ['cat', 'dog']

test('tobeTruthy and tobefalse',()=>{
    let a = 7;
    let b = true;
    let c = undefined;
    expect(a).toBeTruthy();
    expect(b).toBeTruthy();
    expect(c).toBeFalsy();
})
// testing the number
test('two plus two',()=>{
   const value = 2+2;
   expect(value).toBeGreaterThan(3)
})

// testing the string representation

test('testing the string',()=>{
    expect('team').not.toMatch(/I/)
});
test('but there is a stopp in christoph',()=>{
    expect('christoph').toMatch(/stop/)
});

// testing Array and iterableOne

const shoppinglist = [
    "joe biden",
    "putin",
    "xi",
    "modi",
    "macron"
];

test('the shopping list has milk on it',()=>{
    expect(shoppinglist).toContain('xi');
    expect(new Set(shoppinglist)).toContain('xi');
})

// testing ecception

// function compileAndroidcode(){
//     throw new Error('you are using the wrong jdk');
// }

// test('compiling android code as expected',()=>{
//     expect(()=>{
        
//     })
// })