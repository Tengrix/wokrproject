import authReducer, {authActions, AuthInitialStateType} from "./auth-reducer";

let state:AuthInitialStateType

beforeEach(()=>{
    state = {
        data: {
            id: null,
            email: null,
            login: null,
            isAuth: false
        },
        isFetching: false,
        resultCode: 0,
        messages: [''],
        captcha: ''
    }
})

test('checking user data', ()=>{
    let newState = authReducer(state, authActions.setAuthUserData(1, 'damir861@gmail.com', 'Tengrix', false))
    expect(newState.data.id).toEqual(1)
    expect(newState.data.email).toBe('damir861@gmail.com')
})

test('checkgin toggle', ()=>{
    let newState = authReducer(state, authActions.setToggleFetching(true))
    expect(newState.isFetching).toBeTruthy()
})

test('checking captcha', ()=>{
    let newState = authReducer(state, authActions.getCaptcha('random.png'))
    expect(newState.captcha).toBe('random.png')
})

