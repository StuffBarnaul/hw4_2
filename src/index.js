import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Video1 from "./video1/Video1";
import Video2 from "./video2/Video2";

ReactDOM.render(
    <React.StrictMode>
        <Video1/>
        <Video2/>
    </React.StrictMode>,
    document.getElementById('root')
);
