export interface LoginForm{

    email: string
    password: string
}

export class AuthUser implements LoginForm{
    email!: string
    username?: string = this.email
    password!: string
}

export class Token {
    type!: string
    token!: string
}