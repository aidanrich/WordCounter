import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import ProfileList from '../components/ProfileList';
import ProjectList from '../components/ProjectList';

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
              <h4 className="card-header bg-dark text-light p-2 m-0">
                {project.title} <br />
              </h4>
            )}
          </div>
          {/* <div className="col-12 col-md-10 my-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ProjectList
                projects={projects}
                title="Here's your projects..."
              />
            )}
          </div> */}
        </div>
      ) : (
        <h2>Please login.</h2>
      )}

    </main>
  );
};

export default Home;
