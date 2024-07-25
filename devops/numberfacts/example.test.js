test("example", ()=>{
    const mock = jest.fn()
    //console.log(mock)
    mock(true)
    //expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith(true)
})