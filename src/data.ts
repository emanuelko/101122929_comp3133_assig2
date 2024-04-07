import { User } from "./app/shared/models/user";
import { Employee } from "./app/shared/models/employee";

export const sample_user: User[] = [
    {
        username: 'emanuelko',
        email: 'emko@mail.com',
        password: 'eman123'
    }
]

export const sample_employee: Employee[] = [
    {
        first_name: 'emanuel',
        last_name: 'ko',
        email: 'emko@mail.com',
        gender: 'male',
        salary: 50000
    }
]