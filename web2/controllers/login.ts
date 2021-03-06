require('dotenv').config()
const queries = require("./../graphql/queries")
import { GraphQLClient } from 'graphql-request'

export default async function LoginController(email: String, password: String) {
    return new Promise(async (resolve, reject) => {
        try {
            let loginMutation = queries.login;
            let variables = {
                email: email,
                password: password
            }
    
            const data = await new GraphQLClient(process.env.ENDPOINT!)
                            .request(loginMutation, variables)

            resolve(data.login.accessToken)
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}