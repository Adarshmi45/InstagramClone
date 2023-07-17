import React, { useEffect, useState } from 'react';
import "./Home.css";
import { json, useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
            navigate("/signup")
        }

        fetch("http://localhost:5000/allposts", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
        }).then(res => res.json())
            .then(result => setData(result))
            .catch(err => console.log(err))

    }, [])

    const likePost = (id) => {
        fetch("http://localhost:5000/like", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then((result) => {
                const newData = data.map((posts) => {
                    if (posts._id == result._id) {
                        return result
                    } else {
                        return posts
                    }
                })
                setData(newData)
                console.log(result)
            })
    }


    const unlikePost = (id) => {
        fetch("http://localhost:5000/unlike", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        }).then(res => res.json())
            .then((result) => {
                const newData = data.map((posts) => {
                    if (posts._id == result._id) {
                        return result
                    } else {
                        return posts
                    }
                });
                setData(newData);
                console.log(result)
            })
    }

    return (
        <div className='home' >
            {/*card*/}
            {data.map((posts) => {
                return (<div className="card">
                    {/* card header */}
                    <div className="card-header">
                        <div className="card-pic">
                            <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='' />
                        </div>
                        <h5>{posts.postedBy.name}</h5>
                    </div>
                    <div className="card-image">
                        <img src={posts.photo} alt='' />
                    </div>
                    <div className="card-content">
                        {
                            posts.likes.includes(JSON.parse(localStorage.getItem("user"))._id) ?
                                (<span className="material-symbols-outlined material-symbols-outlined-red" onClick={() => { unlikePost(posts._id) }}>
                                    favorite
                                </span>)
                                : (<span className="material-symbols-outlined" onClick={() => { likePost(posts._id) }}>
                                    favorite
                                </span>)
                        }


                        <p>{posts.likes.length} Likes</p>
                        <p>{posts.body}</p>
                    </div>
                    <div className="add-comment">
                        <span className="material-symbols-outlined">
                            mood
                        </span>
                        <input type="text" placeholder="Add a comment" />
                        <button className='comment'>Post</button>
                    </div>
                </div>)
            })}


        </div>
    )
}

export default Home;
