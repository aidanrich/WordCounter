import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
// import ProfileList from '../components/ProfileList';
// import ProjectList from '../components/ProjectList';

import { QUERY_MY_PROJECTS } from '../utils/queries';

import Auth from '../utils/auth';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MY_PROJECTS, {
    variables: { projectAuthor: Auth.getProfile().data._id }
  });
  const projects = data?.myProjects || [];
 
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data)
  return (
    <main>
      {Auth.loggedIn() ? (

        <div className="flex-row justify-center">
          <Link
            className="btn btn-block btn-squared btn-light text-dark"
            to={`/profiles/${Auth.getProfile().data._id}`}
          >
            Add projects
          </Link>
          <div>
            {projects.map((project) =>
            <div className="card bg-dark mb-3">
              <h4 className="card-header bg-dark text-light p-2 m-0">
                Title: {project.title} <br />
              </h4>
              <div className="text-light bg-dark p-2 m-0" style={{ fontSize: '1rem' }}>
                Word Count: {project.wordCount}
              </div>
              <div className="text-light bg-dark p-2 m-0" style={{ fontSize: '1rem' }}>
                Start Date: {project.startDate}
              </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h2>Please login.</h2>
      )}

    </main>
  );
};

export default Home;
