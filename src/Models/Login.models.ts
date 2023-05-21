export interface Login {
    Username: string,
    Password: string,
    Roles: string
}

export interface UserDetail {
    UserId: string,
    FirstName: string,
    LastName: string,
    EmailId: string,
    Password: string,
    ContactNo: number
}

export interface ResetPassword {
    token: string,
    Password: string,
    ConfirmPassword: string
}