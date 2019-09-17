import React, { Component } from "react";
import { Table } from "antd";

import "./index.css";

import QueryFrom from "./QueryForm";

import { employeeColumns } from "./colums";
import { EmployeeResponse } from "../../interface/employee";

interface State {
    employee: EmployeeResponse;
}

class Employee extends Component<{}, State> {
    state: State = {
        employee: undefined
    };
    setEmployee = (employee: EmployeeResponse) => {
        this.setState({
            employee
        });
    };
    getTotal = () => {
        let total: number;
        if (typeof this.state.employee !== "undefined") {
            total = this.state.employee.length;
        } else {
            total = 0;
        }
        return <p>共有 {total} 名员工</p>;
    };
    render() {
        return (
            <>
                <QueryFrom onDateChange={this.setEmployee}></QueryFrom>
                {this.getTotal()}
                <Table
                    columns={employeeColumns}
                    dataSource={this.state.employee}
                    className="table"
                ></Table>
            </>
        );
    }
}
export default Employee;
