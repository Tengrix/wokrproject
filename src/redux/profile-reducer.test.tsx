import profileReducer, {addPost, deletePost, messageType} from "./profile-reducer";

let state = {
    message: [
        {id: 1, message: 'Hi, how are you?', likeCount: 22},
        {id: 2, message: 'It is my first post', likeCount: 11},

    ]as messageType[] ,
    profile: null,
    status:''
}
test('length of posts should be incremented', () =>{
    //1.start data
    let action = addPost('it-kamasutra')

//2.action
    let newState = profileReducer(state,action);
//3. expectation
    expect(newState.message.length).toBe(3)

})
test('The name of new post should be correct', () =>{
    //1.start data
    let action = addPost('it-kamasutra')

//2.action
    let newState = profileReducer(state,action);
//3. expectation
    expect(newState.message[2].message).toBe('it-kamasutra')

})
test('Length of array should be decrement', () =>{
    //1.start data
    let action = deletePost(2)

//2.action
    let newState = profileReducer(state,action);
//3. expectation
    expect(newState.message.length).toBe(1)
})
