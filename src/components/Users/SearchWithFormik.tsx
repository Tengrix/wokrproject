import React from "react";
import {filterType} from "../../redux/users-reducer";
import {SubmitHandler, useForm} from "react-hook-form";
import {Formik, Field, Form} from "formik";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type IsFriend = 'null' | 'false' | 'true';
type useFormType = {
    searchingName: string;
    isFriend: IsFriend
}
type PropsType = {
    onFilterChanged: (filter: filterType) => void;

}

const SearchWithFormik = React.memo((props: PropsType) => {
    const filter = useSelector<AppStateType, filterType>(state => state.usersPage.filter)
    const submit = (values: useFormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filterConverter = {
            searchingName: values.searchingName,
            isFriend: values.isFriend === 'null' ? null : values.isFriend === 'true' ? true : false
        }
        props.onFilterChanged(filterConverter)
        setSubmitting(false)
    }
    return <div>
        <Formik
            enableReinitialize
            initialValues={{searchingName: filter.searchingName, isFriend: String(filter.isFriend) as IsFriend}}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type={'text'} name={'searchingName'}/>
                    <Field name={'isFriend'} as='select'>
                        <option value='null'>All</option>
                        <option value="true">Followers</option>
                        <option value="false">Not Followers</option>
                    </Field>
                    <button disabled={isSubmitting} type={'submit'}>Search</button>
                </Form>
                )}
        </Formik>
    </div>
})
export default SearchWithFormik