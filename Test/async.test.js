// running some test before every test is executed

beforeEach(()=>{
    console.log("before every test this will be executed");
})
afterEach(()=>{
    console.log("after every test this will be executed");
})

beforeAll(()=>{
    console.log('Before all');
})
afterAll(()=>{
    console.log('after all')
})

test('to be truthy',()=>{
    console.log('truthy')
    expect(4).toBeTruthy();
})

// testing  the call back function improperly
test('tesing callback',()=>{
    function callback(data){
        expect(data).toBe('Vishwa');
    }
    fetchData(callback);
})
// testing the call back function properly

test("tesing call back function properly",()=>{
    function callback(data){
        try {
            expect(data).toBe('Vishwa');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
})

function fetchData(callback) {
    setTimeout(()=>{
        callback('Vishwa')
    },2000)
}

// testing Promise 

function promiseFunc(){
    return new Promise((resolve,reject)=>{
        resolve("Vishwa")
    });
}


test("testing Promise",()=>{
        return promiseFunc().then((msg)=>{
            expect(msg).toBe('Vishwa');
        })
})

test.only('only I will run',()=>{
  console.log('Only this executes')
});