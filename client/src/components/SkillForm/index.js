import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PROJECT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SkillForm = ({ profileId }) => {
  const [skill, setSkill] = useState('');

  const [addSkill, { error }] = useMutation(ADD_PROJECT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addSkill({
        variables: { profileId, skill },
      });

      setSkill('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
   
    </div>
  );
};

export default SkillForm;
