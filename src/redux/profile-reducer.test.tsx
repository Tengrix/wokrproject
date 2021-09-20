import profileReducer, {messageType, profileActions, ProfileType} from "./profile-reducer";

let state = {
    message: [
        {id: 1, message: 'Hi, how are you?', likeCount: 22},
        {id: 2, message: 'It is my first post', likeCount: 11},

    ]as messageType[] ,
    profile: null as ProfileType,
    status:'',
    isOwner:false,
    error:'',
    setToggle:false
}
test('add post test', () =>{
    //1.start data
    let action = profileActions.addPost('it-kamasutra')

//2.action
    let newState = profileReducer(state,action);
//3. expectation
    expect(newState.message.length).toBe(3)
    expect(newState.message[2].message).toBe('it-kamasutra')
})

test('Length of array should be decrement', () =>{
    //1.start data
    let action = profileActions.deletePost(2)

//2.action
    let newState = profileReducer(state,action);
//3. expectation
    expect(newState.message.length).toBe(1)
})

test('set profile', ()=>{
    let action = profileActions.setProfile(
        {photos:{large:'',small:''},
            contacts:{
                github:'',
                vk:'',
                facebook: '',
                instagram: '',
                twitter: '',
                website:'',
                youtube: '',
                mainLink: '',
            }, lookingForAJobDescription:'', lookingForAJob:true, fullName:'Damir',aboutMe:'',userId:123})

    let newState = profileReducer(state, action)
    expect(newState.profile.fullName).toBe('Damir')
    expect(newState.profile.userId).toBe(123)
})

test('set status', ()=>{
    let newState = profileReducer(state, profileActions.setStatus('YoYo'))
    expect(newState.status.length).toBe(4)
    expect(newState.status).toBe('YoYo')

})

test('set toggle',()=>{
    let newState = profileReducer(state, profileActions.setToggleFetching(true))
    expect(newState.setToggle).toBeTruthy()
})

test('checking the owner', ()=> {
    let newState = profileReducer(state, profileActions.isOwner(true))
    expect(newState.isOwner).toBeTruthy()
})

test('checking the error from server', ()=>{
    let newState = profileReducer(state, profileActions.setError('wrong address'))
    expect(newState.error).toBe('wrong address')
})

test('photo saved successfully', () =>{
    let newState = profileReducer(state, profileActions.successSavePhoto({small:'', large:'www.google.png'}))
    expect(newState.profile.photos.large).toBe('www.google.png')
})