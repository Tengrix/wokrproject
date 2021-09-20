import {authAPI, GetAuthType, ResultCodesEnum} from "../api/api";
import {appActions, initializeAppTC} from "./app-reducer";

jest.mock("../api/api");
const userApiMock = authAPI as jest.Mocked<typeof authAPI>;

const result:GetAuthType = {
    data:{id:1, email:'', isAuth:false, login:''},
    resultCode: ResultCodesEnum.Success,
    messages:[],
    fieldsErrors:[]
}

userApiMock.getAuthMe.mockReturnValue(Promise.resolve(result))

test('initialize Thunk', async ()=>{
    const thunk = initializeAppTC()
    const dispatchMock = jest.fn()

    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(2)
    expect(dispatchMock).toHaveBeenNthCalledWith(2, appActions.isInitializedAc())
})
