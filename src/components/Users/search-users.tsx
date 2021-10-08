import React, {ChangeEvent, useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {filterType, userInitialStateType} from "../../redux/users-reducer";
import {SubmitHandler, useForm} from "react-hook-form";
import Select from "react-select/base";

type useFormType = {
    searchingName: string;
    isFriend: null|boolean
        // 'null' | 'false' | 'true'
}
type PropsType = {
    onFilterChanged: (filter: filterType) => void;
    filter: filterType
}

const SearchUsers = React.memo((props: PropsType) => {
    const {register, handleSubmit, watch, setValue} = useForm<useFormType>()

    const onChangeHandler: SubmitHandler<useFormType> = (data) => {
        debugger
        props.onFilterChanged(data)
    }
    return (
        <form onSubmit={handleSubmit(onChangeHandler)} >
            <div>
                <span>
                    <input type={'submit'}/>
                    <div>
                            <input onClick={()=>setValue("searchingName", props.filter.searchingName)} {...register('searchingName')}/>
                        <select {...register('isFriend')}>
                            <option value='null'>All</option>
                            <option value="true">Followers</option>
                            <option value="false">Not Followers</option>
                        </select>
                    </div>
                </span>

            </div>
        </form>
    )
})
export default SearchUsers