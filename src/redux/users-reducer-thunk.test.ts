import {CommonResponseType, ResultCodesEnum} from "../api/api";
import {usersAPI} from "../api/api";
import {FollowFriend, UnFollowFriend, usersActions} from "./users-reducer";
import actions from "redux-form/lib/actions";

jest.mock("../api/api");
const userApiMock = usersAPI as jest.Mocked<typeof usersAPI>;

const result:CommonResponseType = {
    data:{},
    resultCode: ResultCodesEnum.Success,
    messages:[],
    fieldsErrors:[]
}

userApiMock.FollowFriends.mockResolvedValueOnce(Promise.resolve(result))

test('followThunk', async ()=>{
    const thunk = UnFollowFriend(3)
    const dispatchMock = jest.fn()

    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(3)
    // expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.setToggleFollowing(true,1))
    // expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.follow(1))
    // expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.setToggleFollowing(false,1))

})
