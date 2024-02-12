import React, { useState } from 'react';
import axios from 'axios';

const EntrepriseForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cover, setCover] = useState(null);

  const handleFileChange = (e) => {
    setCover(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('cover', cover);

    try {
      const response = await axios.post('http://localhost:3001/entreprise', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error adding entreprise:', error);
    }
  };

  return (
    <div>
      <h1>Add Entreprise</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Cover Image:
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Add Entreprise</button>
      </form>
    </div>
  );
};

export default EntrepriseForm;
