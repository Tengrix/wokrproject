import {authAPI, GetAuthType, PostAuthLoginType, ResultCodesEnum} from "../api/api";
import {appActions, initializeAppTC} from "./app-reducer";
import {AuthLogin} from "./auth-reducer";

jest.mock("../api/api");
const userApiMock = authAPI as jest.Mocked<typeof authAPI>;

const result:PostAuthLoginType = {
    data:{email:'',captcha:'',rememberMe:false,password:''},
    resultCode: 1,
    messages:[],
    fieldsError:[]
}

userApiMock.getLogin.mockResolvedValue(Promise.resolve(result))

test('testing login Thunk', async ()=>{
    const thunk = AuthLogin('damir@gmail.com', 'qwerty', false, '123cxz')
    const dispatchMock = jest.fn()

    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(4)
    // expect(dispatchMock).toHaveBeenNthCalledWith(2, appActions.isInitializedAc())
})
