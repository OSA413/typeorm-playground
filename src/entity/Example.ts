import { AfterLoad, Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity("employee")
export class Employee {
    // employee_id INT NOT NULL,
    // CONSTRAINT employee_pkey PRIMARY KEY  (employee_id)
    @PrimaryColumn({ name: "employee_id", primaryKeyConstraintName: "employee_pkey" })
    employeeId!: number;

    // birth_date TIMESTAMP,
    @Column({ name: "birth_date", nullable: true })
    birthDate!: Date;
    
    // hire_date TIMESTAMP,
    @Column({ name: "hire_date", nullable: true })
    hireDate!: Date;
}