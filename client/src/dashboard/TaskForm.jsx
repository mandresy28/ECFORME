import React, { useState } from 'react';

import axios from 'axios';

 

const TaskForm = () => {

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

 

  const handleSubmit = (e) => {

    e.preventDefault();

    const newTask = { title, description };

    axios.post('http://localhost:8800/server/tasks', newTask)

      .then((response) => {

        console.log(response.data);

        // Update the task list with the new task

      })

      .catch((error) => console.error(error));

  };

 

  return (

    <div>

      <h2>Add New Task</h2>

      <form onSubmit={handleSubmit}>

        {/* ... Form fields ... */}

      </form>

    </div>

  );

};

 

export default TaskForm;

 