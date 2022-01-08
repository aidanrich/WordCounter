const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String!
    email: String!
    password: String!
    projects: [String]
  }

  type Project {
    _id: ID
    title: String!
    projectAuthor: String!
    startDate: String
    finished: Boolean
    wordCount: Int
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    projects: [Project]
    myProjects(projectAuthor: String!): [Project]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(title: String!, projectAuthor: String!): Project

    # addSkill(profileId: ID!, project: String!): Profile
    removeProfile(profileId: ID!): Profile
    # removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
