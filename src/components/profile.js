import React, { useEffect, useState } from 'react';
import PostDetail from './PostDetail';
import "./profile.css"

function Profile() {
    const [pic, setPic] = useState([])
    const [show, setShow] = useState(false)
    const [posts, setPosts] = useState([])


    const toggleDetails = (posts) => {
        if (show) {
            setShow(false);
        } else {

            setShow(true);
            setPosts(posts);

        }
    }

    useEffect(() => {
        fetch("http://localhost:5000/myposts", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then((result) => {
                setPic(result)
                console.log(pic)
            })

    }, [])

    return (
        <div className="profile">
            <div className="profile-frame">
                <div className="profile-pic">
                    <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='' />
                </div>
                <div className="profile-data">
                    <h1>
                        {JSON.parse(localStorage.getItem("user")).name}
                    </h1>
                    <div className="profile-info" style={{ display: "flex" }}>
                        <p>40 posts</p>
                        <p>40 followers</p>
                        <p>40 following</p>
                    </div>
                </div>
            </div>
            <hr style={{ width: "90%", margin: "25px auto", opacity: "0.8" }} />
            <div className="gallery">
                {pic.map((pics) => {
                    return <img key={pics._id} src={pics.photo}
                        onClick={() => {
                            toggleDetails(pics)
                        }}
                        className="item" />
                })}
            </div>
            {
                show &&
                <PostDetail item={posts} toggleDetails={toggleDetails} />
            }

        </div>
    )
}

export default Profile;
