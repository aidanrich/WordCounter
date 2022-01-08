import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PROJECT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SkillForm = ({ profileId }) => {
  const [title, setSkill] = useState('');
  console.log(Auth.getProfile().data._id)

  const [addSkill, { error }] = useMutation(ADD_PROJECT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      addSkill({
        variables: { projectAuthor: Auth.getProfile().data._id, 
          title: title },
      });
      
      setSkill('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
    <h4>Add Project.</h4>

{Auth.loggedIn() ? (
  <form
    className="flex-row justify-center justify-space-between-md align-center"
    onSubmit={handleFormSubmit}
  >
    <div className="col-12 col-lg-9">
      <input
        placeholder="Project Title..."
        value={title}
        className="form-input w-100"
        onChange={(event) => setSkill(event.target.value)}
      />
    </div>

    <div className="col-12 col-lg-3">
      <button className="btn btn-info btn-block py-3" type="submit">
        Save
      </button>
    </div>
    {error && (
      <div className="col-12 my-3 bg-danger text-white p-3">
        {error.message}
      </div>
    )}
  </form>
) : (
  <p>
    You need to be logged in to endorse skills. Please{' '}
    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
  </p>
)}
    </div>
  );
};

export default SkillForm;
