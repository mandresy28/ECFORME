import React, { useState, useEffect } from 'react';

import axios from 'axios';

 

const TaskDetail = ({ taskId }) => {

  const [task, setTask] = useState(null);

 

  useEffect(() => {

    axios.get(`http://localhost:8800/server/tasks/${taskId}`)

      .then((response) => setTask(response.data))

      .catch((error) => console.error(error));

  }, [taskId]);

 

  if (!task) {

    return <div>Loading...</div>;

  }

 

  return (

    <div>

      <h2>{task.title}</h2>

      <p>{task.description}</p>

    </div>

  );

};

 

export default TaskDetail;

 