import usersReducer, {InitialStateType, usersActions, UsersType} from "./users-reducer";

let state:InitialStateType

beforeEach(()=>{
    state = {
        users:[
            {id:1, name:'Damir',status:'',photos:{large:'',small:''},photoUrl:'',followed:false},
            {id:2,name:'Alina',status:'',photos:{large:'',small:''},photoUrl:'',followed:false},
            {id:3,name:'Diana',status:'',photos:{large:'',small:''},photoUrl:'',followed:true},
            {id:4,name:'Vika',status:'',photos:{large:'',small:''},photoUrl:'',followed:true},
        ],
        pageCount: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        isFollowing: [1]
    }
})

const newInitState:any = []

test('follow user', ()=>{
    let action = usersActions.follow(2)
    let newState = usersReducer(state, action)
    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
})
test('unFollow user', ()=>{
    let action = usersActions.unfollow(4)
    let newState = usersReducer(state, action)
    expect(newState.users[1].followed).toBeFalsy()
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[3].followed).toBeFalsy()
})

test('set user', ()=>{
    let action = usersActions.setUser([{id:1, name:'Taddd',status:'heyhey',photos:{large:'',small:''},photoUrl:'',followed:false}])
    let newState = usersReducer(newInitState,action)
    expect(newState.users[0].name).toBe('Taddd')
    expect(newState.users[0].status).toBe('heyhey')
})

test('current page',()=>{
    let action = usersActions.setCurrentPage(2)
    let newState = usersReducer(state, action)
    expect(newState.currentPage).toBe(2)
})

test('total users count', ()=>{
    let action = usersActions.setTotalUsersCount(100)
    let newState = usersReducer(state, action)
    expect(newState.totalUsersCount).toBe(100)
})

test('', ()=>{
    let action = usersActions.setToggleFetching(true)
    let newState = usersReducer(state, action)
    expect(newState.isFetching).toBeTruthy()
})

// test('', ()=>{
//     let action = usersActions.setToggleFollowing(false, 1)
//     let newState = usersReducer(state, action)
//     expect(newState.isFollowing).toBeTruthy()
// })