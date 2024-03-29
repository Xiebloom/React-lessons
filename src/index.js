import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 5 状态组件
import App from './lessons/3_state'

// 渲染内容
let html = (
    <div>
        hello!
        <App></App>
    </div>
)

ReactDOM.render(html,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
