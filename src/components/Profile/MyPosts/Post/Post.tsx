import React from 'react';

import s from './Post.module.css';

type PostPropsType={
    message: string
    like:number
}

function Post(props:PostPropsType) {
    return (
        <div >
            <div className={s.item}>
                <img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg" alt=""/>
                {props.message}
                <div>
                    <span>
                        {props.like}
                        <button>like</button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Post;
