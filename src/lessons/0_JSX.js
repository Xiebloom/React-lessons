import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// 1 标题
const name = 'JAXK'
const title = <h1 className="title">Hello JSX, {name}</h1>

// 2 列表渲染
const songs = [
    {id:1, name:'song1'},
    {id:2, name:'song2'}
]
const list = (
    <ul style={{color:'red'}} className="title">
        {songs.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
)
// 渲染内容
let html = (
    <div>
        <h1>渲染</h1>
        <h2>标题</h2>
        {title}
        <h2>列表渲染</h2>
        {list}
    </div>
)

ReactDOM.render(html,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
