import axios from "axios";


interface IRegisterUser{
    username: string;
    email: string;
    password: string;
}

export async function registerUser({email, password, username}:IRegisterUser) {
    const response = await axios.post('http://localhost:3335/users', {email: email, password: password, username:username}).then(response => {return response}).catch(response => {return response;})
    if (response.data !== undefined) {
        const responseSucess  = {
            data: "Congrats the user register sucsess",
            statusCode: 200
        }
        return responseSucess
    }
    else {
        const responseError = {
            data: response.response.data.message,
            statusCode: 400
        }
        return responseError
    }
    
    



}