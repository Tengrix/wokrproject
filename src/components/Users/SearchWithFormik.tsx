import React from "react";
import {filterType} from "../../redux/users-reducer";
import {SubmitHandler, useForm} from "react-hook-form";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type IsFriend = 'null' | 'false' | 'true';
type useFormikType = {
    searchingName: string;
    isFriend: IsFriend
}
type PropsType = {
    onFilterChanged: (filter: filterType) => void;

}

const SearchWithFormik = React.memo((props: PropsType) => {
    const filter = useSelector<AppStateType,filterType>(state => state.usersPage.filter)

    const initialValues:useFormikType = {searchingName:filter.searchingName,isFriend:String(filter.isFriend) as IsFriend}
    const formik = useFormik({
        enableReinitialize:true,
        initialValues:initialValues,
        onSubmit:(values:useFormikType) => {
            debugger
            const filterConverter = {
                searchingName:values.searchingName,
                isFriend:values.isFriend === 'null'? null: values.isFriend === 'true'?true: false
            }
            props.onFilterChanged(filterConverter)
        }
    })
    console.log(filter.searchingName,'isFriend',filter.isFriend)
    return (
        <form onSubmit={formik.handleSubmit} >
            <div>
                <span>
                    <button type={'submit'}>Search</button>
                    <div>
                            <input defaultValue={filter.searchingName} name={'searchingName'} onChange={formik.handleChange} />
                        <select value={String(filter.isFriend) as 'true'|'false'|'null'} name={'isFriend'} onChange={formik.handleChange}>
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
export default SearchWithFormik