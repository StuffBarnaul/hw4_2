import React from 'react';

export default function Article(props) {

    return <>
        <h1>
            {props.article.title}
            <button onClick={()=>(props.onClick(props.index))}>{props.isOpen ? 'Close' : 'Open'}</button>
        </h1>
        {props.isOpen ? <div>{props.article.content}</div> : null}
    </>

}