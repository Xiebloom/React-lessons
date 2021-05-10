import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';


// 4 React 的事件处理
// - 4.1 类组件的事件绑定
class App1 extends React.Component {
    handleClick () {
        console.log('click!');
    }
    render () {
        return (
            <div onClick={this.handleClick}>click me</div>
        )
    }
}
// - 4.2 函数组件的事件绑定
function App2 () {
    function handleClick () {
        console.log('click!');
    }
    return (
        <div onClick={handleClick}>click me!</div>
    )
}

// - 4.3 获取事件对象
class App3 extends React.Component {
    handleClick (e) {
        e.preventDefault()
        console.log(e)
    }
    render () {
        return (
            <a href="http://www.baidu.com" onClick={this.handleClick}>百度</a>
        )
    }
}


// 渲染内容
let html = (
    <div>
        <h2>类组件的事件绑定</h2>
        <App1></App1>
        <h2>函数组件的事件绑定</h2>
        <App2></App2>
        <h2>事件对象</h2>
        <App3></App3>
    </div>
)

ReactDOM.render(html,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
