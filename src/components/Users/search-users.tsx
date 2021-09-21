import {ChangeEvent, useState} from "react";


type PropsType = {
    searchUsers: (term:string) => void
}

const SearchUsers = (props: PropsType) => {

    const [searchMode, setSearchMode] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>('')
    const activateMode = () => {
        setSearchMode(!searchMode)
    }
    const onSearchQuestionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.searchUsers(userName)
        // setUserName('')
    }

    return (
        <div>
            <button onClick={activateMode}>find</button>
            {!searchMode &&
            <span>
                    <button onClick={onClickHandler}>search</button>
                    <div>
                            <input type="text"
                                   value={userName}
                                   onChange={onSearchQuestionHandler}
                                   placeholder={'Search name'}
                            />
                    </div>
                </span>
            }
        </div>
    )
}
export default SearchUsers