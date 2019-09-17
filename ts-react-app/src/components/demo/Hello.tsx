import React from "react";
import { Button } from "antd";

interface Greeting {
    name: string;
    firstName?: string;
    lastName?: string;
}

const Hello = (props: Greeting) => <Button> Hello {props.name}</Button>;
//typescript的函数组件
// const Hello: React.FC<Greeting> = ({ name, firstName, lastName, children }) => (
//     <Button> Hello {name}</Button>
// );

Hello.defaultProps = {
    firstName: "",
    lastName: ""
};

export default Hello;
