import React from "react";
import {filterType} from "../../redux/users-reducer";
import {SubmitHandler, useForm} from "react-hook-form";

type IsFriend = 'null' | 'false' | 'true';
type useFormType = {
    searchingName: string;
    isFriend: IsFriend
}
type PropsType = {
    onFilterChanged: (filter: filterType) => void;
    filter: filterType
}

const SearchUsersWithHookForm = React.memo((props: PropsType) => {
    console.log('isFriend', props.filter.isFriend)
    console.log('name', props.filter.searchingName)
    const {register, handleSubmit} = useForm<useFormType>()

    const onChangeHandler: SubmitHandler<useFormType> = (data) => {
        debugger
        const filterConverter = {
            searchingName: data.searchingName,
            isFriend: data.isFriend === 'null' ? null : data.isFriend === 'true' ? true : false
        }
        props.onFilterChanged(filterConverter)
    }
    return (
        <form onSubmit={handleSubmit(onChangeHandler)}>
            <div>
                <span>
                    <input type={'submit'}/>
                    <div>
                        <input defaultValue={props.filter.searchingName} {...register('searchingName')}/>
                        <select defaultValue={String(props.filter.isFriend) as IsFriend} {...register('isFriend')}>
                            <option value="null">All</option>
                            <option value="true">Followers</option>
                            <option value="false">Not Followers</option>
                        </select>
                    </div>
                </span>

            </div>
        </form>
    )
})
export default SearchUsersWithHookForm