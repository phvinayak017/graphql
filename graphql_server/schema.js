const {
    GraphQLObjectType, 
    GraphQLBoolean,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLSchema, 
    GraphQLNonNull
} = require('graphql')

const Axios = require("axios")

// const customerList = [
//     {id:1, name:"foo", email:"foo@gmai.com", age:25},
//     {id:2, name:"boo", email:"boo@gmai.com", age:35},
//     {id:3, name:"too", email:"too@gmai.com", age:45},   
// ]

const CustomerType = new GraphQLObjectType({
    name:"Customer",
    fields: ()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        age:{type:GraphQLInt}
    })
})

const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields: () =>({
        customer:{
            type:CustomerType,
            args:{
                id:{type:GraphQLInt}
            },
            resolve(parent, args){
                // for(let i =0; i<customerList.length; i++){
                //     if(customerList[i].id === args.id){
                //         return customerList[i]
                //     }
                // }
                return Axios.get(`http://localhost:3000/customerlist/${args.id}`)
                .then(response => response.data)
            }
        },
        customers:{
            type: new GraphQLList(CustomerType),
            resolve(parent, args){
                return Axios.get(`http://localhost:3000/customerlist/`)
                .then(response => response.data)
            }
        }
    })
})

const mutation = new GraphQLObjectType({
  name:"Mutation",
  fields: ()=>({
      addCustomer:{
          type: CustomerType,
          args:{
              id:{type:new GraphQLNonNull(GraphQLID)},
              name:{type:new GraphQLNonNull(GraphQLString)},
              age:{type:new GraphQLNonNull(GraphQLInt)},              
          },
          resolve(parent, args){
            return Axios.post(`http://localhost:3000/customerlist`, {
                name:args.name,
                id:args.id,
                age:args.age
            })
            .then(response => response.data)
          }
      },
      editCustomer:{
          type:CustomerType,
          args:{
              id:{type:new GraphQLNonNull(GraphQLID)},
              name:{type: GraphQLString},
              age:{type: GraphQLInt}
          },
          resolve(parent, args){
              return Axios.patch(`http://localhost:3000/customerlist/${args.id}`,{
                  id:args.id,
                  name:args.name,
                  age:args.age
              })
              .then (res => res.data)
          }
      },
      deleteCustomer:{
          type:CustomerType,
          args:{
              id:{type:GraphQLID}
          },
          resolve(parent, args){
              return Axios.delete(`http://localhost:3000/customerlist/${args.id}`)
              .then(res =>res.data)
          }
      }
  })
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:mutation
})