import React from 'react'
import s from './FormControl.module.css'
export const TextArea = ({input, meta, ...props}:any) => {
    const TextAreaError = meta.touched && meta.error
    return(
        <div className={s.formControl + '' + (TextAreaError? s.error:'')}>
            <div >
                <textarea {...input}{...props} />
            </div>
            {TextAreaError && <span> {meta.error} </span>}
        </div>
    )
}
export const InputArea = ({input, meta, ...props}:any) => {
    const TextAreaError = meta.touched && meta.error
    return(
        <div className={s.formControl + '' + (TextAreaError? s.error:'')}>
            <input {...input} {...props}/>
            {TextAreaError && <span className={s.error}> {meta.error} </span>}
        </div>
    )
}