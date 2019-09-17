/**
 * 类型检查，信息提示
 *
 * @export
 * @interface EmployeeRequest
 */
export interface EmployeeRequest {
    name: string;
    departmentId: number | undefined;
}
interface EmployeeInfo {
    id: number;
    key: number;
    name: string;
    department: string;
    hiredate: string;
    lever: string;
}
export type EmployeeResponse = EmployeeInfo[] | undefined;
