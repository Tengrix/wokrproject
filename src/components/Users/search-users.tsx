import React from "react";
import {filterType} from "../../redux/users-reducer";
import {SubmitHandler, useForm} from "react-hook-form";

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
    console.log('isFriend',props.filter.isFriend)
    console.log('name',props.filter.searchingName)
    const {register, handleSubmit} = useForm<useFormType>({
        defaultValues: {
            searchingName:props.filter.searchingName,
            isFriend:props.filter.isFriend
        }
    })

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
                            <input {...register('searchingName')}/>
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