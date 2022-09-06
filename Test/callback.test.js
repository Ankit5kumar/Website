function testPromise(){
    return Promise.reject('rejected')
}
test('test promise',()=>{
 testPromise().then((data)=>{
    expect(data).toBe(4)
 }).catch(err=>{
    expect(err).toBe('hey i am error')
 }) 
})