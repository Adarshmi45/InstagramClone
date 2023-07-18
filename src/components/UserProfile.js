import React, { useEffect, useState } from 'react';
import PostDetail from './PostDetail';
import "./profile.css"
import { useParams } from "react-router-dom";

function UserProfile() {
    var picLink = "https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
    const { userid } = useParams()
    console.log(userid)
    const [user, setUser] = useState("")
    const [isFollow, setIsFollow] = useState(false)
    const [posts, setPosts] = useState([])

    const followUser = (userId) => {

        fetch("http://localhost:5000/follow", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                followId: userId
            })
        })
            .then((res) =>  res.json() )
            .then((data) => {
                console.log(data)
                setIsFollow(true)
            })
    }



    const unfollowUser = (userId) => {
        fetch("http://localhost:5000/unfollow", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                followId: userId
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setIsFollow(false)
            })
    }



    useEffect(() => {
        fetch(`http://localhost:5000/user/${userid}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result)
                setUser(result.user)
                setPosts(result.posts)
                if(result.user.followers.includes(JSON.parse(localStorage.getItem("user"))._id)){
                    setIsFollow(true)
                }
            })

    }, [isFollow])

    return (
        <div className="profile">
            <div className="profile-frame">
                <div className="profile-pic">
                    <img src={user.Photo?user.Photo:picLink} alt='' />
                </div>
                <div className="profile-data">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h1>
                            {user.name}
                        </h1>
                        <button className="followBtn"

                            onClick={() => {
                                if(isFollow){
                                    unfollowUser(user._id)
                                }else{
                                    followUser(user._id) }}
                                }
                                
                        >{isFollow?"Unfollow":"Follow"}</button>
                    </div>
                    <div className="profile-info" style={{ display: "flex" }}>
                        <p>{posts.length} posts</p>
                        <p>{user.followers?user.followers.length:"0"} followers</p>
                        <p>{user.following?user.following.length:"0"} following</p>
                    </div>
                </div>
            </div>
            <hr style={{ width: "90%", margin: "25px auto", opacity: "0.8" }} />
            <div className="gallery">
                {posts.map((pics) => {
                    return <img key={pics._id} src={pics.photo}
                        // onClick={() => {
                        //     toggleDetails(pics)
                        // }}
                        className="item" />
                })}
            </div>
            {/* {
                show &&
                <PostDetail item={posts} toggleDetails={toggleDetails} />
            } */}

        </div>
    )
}

export default UserProfile;
