import React, { Component } from "react";
import { Button } from "antd";

interface Greeting {
    name: string;
    firstName?: string;
    lastName?: string;
}

/**
 * 状态接口
 *
 * @interface State
 */
interface State {
    count: number;
}
/**
 *  类组件
 *
 * @class HelloClass
 * @extends {Component<Greeting, State>}
 */
class HelloClass extends Component<Greeting, State> {
    state: State = {
        count: 0
    };
    static defaultProps = {
        firstName: "",
        lastName: ""
    };
    render() {
        return (
            <>
                <p>你点击了 {this.state.count} 次</p>
                <Button
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 });
                    }}
                >
                    Hello {this.props.name}
                </Button>
            </>
        );
    }
}

export default HelloClass;
