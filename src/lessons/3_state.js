import React from 'react';

// 5 state 和 setState()
// - 5.1 state 状态的使用
class App extends React.Component {
    // 原始语法
    // constructor () {
    //     super()
    //     this.state = {
    //         count : 0
    //     }
    // }

    // 简化语法
    state = {
        count: 0
    }

    render() {
        return (
            <div>
                <div>状态组件: {this.state.count}</div>
                <button onClick={() => {
                    this.setState({
                        // 错误：不会生效！
                        // this.state.cout += 1
                        count: this.state.count+1
                    })
                }}>+1</button>
            </div>
        )
    }
}

export default App