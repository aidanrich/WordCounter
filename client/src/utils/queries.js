import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
    }
  }
`;

export const QUERY_MY_PROJECTS = gql`
query myProj($projectAuthor: String!) {
  myProjects(projectAuthor: $projectAuthor) {
    _id
    title
    projectAuthor
    startDate
    finished
    wordCount
  }
}
`;
