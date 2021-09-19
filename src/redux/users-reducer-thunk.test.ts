import {CommonResponseType, ResultCodesEnum} from "../api/api";
import {usersAPI} from "../api/api";
import {FollowFriend, usersActions} from "./users-reducer";
import actions from "redux-form/lib/actions";

jest.mock("../api/api");
const userApiMock = usersAPI as jest.Mocked<typeof usersAPI>;

const result:CommonResponseType = {
    data:{},
    resultCode: ResultCodesEnum.Fail,
    messages:['asd'],
    fieldsErrors:[]
}

userApiMock.FollowFriends.mockReturnValue(Promise.resolve(result))

test('followThunk', async ()=>{
    const thunk:any = FollowFriend(1)
    const dispatchMock = jest.fn<any,any>()
    const getState = jest.fn<any,any>()

    await thunk(dispatchMock, getState, {})
    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.setToggleFollowing(true,1))
    // expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.follow(1))
    // expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.setToggleFollowing(false,1))

})
