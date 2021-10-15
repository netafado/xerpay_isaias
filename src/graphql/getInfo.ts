import { gql } from 'graphql-request'

export const getUserAndRepositories = gql`
query getList($login: String!){ 
    user(login: $login){
    bio
    name
    avatarUrl
    location
    email
    url
    starredRepositories{
        totalCount
        edges{
            node{
            id
            name
            description
            url
            }
        }
    }
    }
}
`