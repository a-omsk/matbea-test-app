import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql';

let counter = 42;
let links = [{counter: 42}, {counter: 43}, {counter: 54}, {counter: 65}];

const Schema = (db) => {

const LinkType = new GraphQLObjectType({
    name: "Link",
    fields: () => ({
        _id: { type: GraphQLString },
        title: { type: GraphQLString },
        url: { type: GraphQLString },
    })
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: () => ({
            links: {
                type: new GraphQLList(LinkType),
                resolve: () => db.collection('links').find({}).toArray()
            },

            message: {
                type: GraphQLString,
                resolve: () => "Hello GraphQl"
            }
        })
    }),

    mutation: new GraphQLObjectType({
        name: "Mutation",
        fields: () => ({
            incrementCounter: {
                type: GraphQLInt,
                resolve: () => ++counter
            }
        })
    })
});

return schema
}

export default Schema;
