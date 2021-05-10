import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import Hello4 from './lHello4';

// 3 React 组件
// - 3.1 函数组件
// * 函数名大写 / 必须有返回值
function Hello () {
    return (
        <div>函数组件</div>
    )
}
// - 箭头函数更加简洁
const Hello2 = () => <div>箭头函数组成的函数组件</div>
// - 3.2 类组件
// * 必须继承，必须有render，render必须有返回值作为骨架
class Hello3 extends React.Component {
    render () {
        return (
            <div>类组件1</div>
        )
    }
}
// - 3.3 单独文件组件
// 看最上面，已经导入了 Hello4
// import Hello4 from './Hello4';


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


// 渲染内容
let html = (
    <div>
        <h1>渲染</h1>
        <h2>标题</h2>
        {title}
        <h2>列表渲染</h2>
        {list}
        <h2>组件</h2>
        <h2>函数组件</h2>
        {/* 这里直接用 函数名的HTML标签即可 */}
        <Hello/>
        <Hello2/>
        <h2>类组件</h2>
        <Hello3/>
        <h2>模块化组件</h2>
        <Hello4></Hello4>
        <h1>事件</h1>
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
