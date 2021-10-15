import {GraphQLClient} from "graphql-request"


  const graphQLClient = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
      authorization: 'Bearer ' +  process.env.REACT_APP_GITHUB_ACESS_TOKEN,
    },
  })

  export default graphQLClient
