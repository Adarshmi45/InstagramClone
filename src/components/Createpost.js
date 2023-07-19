import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Createpost.css';

function Createpost() {
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  useEffect(() => {
    // Fetch user data
    fetchUser();

    // Fetch user details from the backend
    async function fetchUser() {
      try {
        const response = await fetch('http://localhost:5000/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('jwt'),
          },
        });

        if (response.ok) {
          const user = await response.json();
          setUser(user);
        } else {
          throw new Error('Failed to fetch user details');
        }
      } catch (error) {
        console.log(error);
        // Handle error
      }
    }
  }, []);

  const postDetails = () => {
    if (!body || !image) {
      notifyA('Please add all the fields');
      return;
    }

    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'insta-clone');
    data.append('cloud_name', 'adarshmi');

    // Upload image to Cloudinary
    fetch('https://api.cloudinary.com/v1_1/adarshmi/image/upload', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setUrl(data.url);

        // Save post in MongoDB
        savePost(data.url);
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  };

  const savePost = (imageUrl) => {
    fetch('http://localhost:5000/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
      },
      body: JSON.stringify({
        body,
        pic: imageUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB('Successfully Posted');
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    const reader = new FileReader();
    reader.onload = function () {
      const output = document.getElementById('output');
      output.src = reader.result;
      URL.revokeObjectURL(output.src); // Free memory
    };
    reader.readAsDataURL(selectedImage);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="createPost">
      <div className="post-header">
        <h4 style={{ margin: '3px auto' }}>Create New Post</h4>
        <button id="post-btn" onClick={postDetails}>
          Share
        </button>
      </div>
      <div className="main-div">
        <img
          id="output"
          src={user.Photo ? user.Photo : 'https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png'}
          alt=""
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img
              src={user.Photo ? user.Photo : 'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'}
              alt=""
            />
          </div>
          <h5>{user.name}</h5>
        </div>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder="Write a caption..." />
      </div>
    </div>
  );
}

export default Createpost;
