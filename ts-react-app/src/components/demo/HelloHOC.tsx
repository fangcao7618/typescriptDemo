import React, { Component } from "react";
import HelloClass from "./HelloClass";

/**
 * @interface Loading
 */
interface Loading {
    loading: boolean;
}

/**
 * 高阶组件
 * @template P
 * @param {React.ComponentType<P>} WrappedComponent
 * @returns
 */
function HelloHOC<P>(WrappedComponent: React.ComponentType<P>) {
    return class extends Component<P & Loading> {
        render() {
            const { loading, ...props } = this.props;
            return loading ? (
                <div>Loading...</div>
            ) : (
                <WrappedComponent {...(props as P)}></WrappedComponent>
            );
        }
    };
}

export default HelloHOC(HelloClass);
