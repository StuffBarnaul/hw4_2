import React, {useState} from 'react';
import Lorem from "react-lorem-component";
import Article from "./Article";

export default function Video2() {
    const articles = [
        {title: 'Article1', content: <Lorem count={1}/>},
        {title: 'Article2', content: <Lorem count={2}/>},
        {title: 'Article3', content: <Lorem count={1}/>},
        {title: 'Article4', content: <Lorem count={2}/>},
    ]

    const [openArticleId, setOpenArticleId] = useState(null)

    const onClick = (e) => {
        e === openArticleId ? setOpenArticleId(null) : setOpenArticleId(e)
    }

    return (
        articles.map((article, index) => {
                return <Article key={index}
                                index={index}
                                article={articles[index]}
                                isOpen={openArticleId===index}
                                onClick={onClick}/>
            }
        )
    )

}