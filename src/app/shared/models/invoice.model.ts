import { Employee } from "./employee.model";

export class Invoice{
    invNo!: string;
    invMonth!: string;
    invYear!:string;

    invGenDate!: Date;
    invDueDate!: Date;

    employee!: Employee;
    hours!: Number;
    totAmt: number =0;
    
    description!: string;
    orgName!: string;
    orgAdd1!: string;
    orgAdd2!: string;
    orgAdd3: string = "";
    logoPath!: string;

}