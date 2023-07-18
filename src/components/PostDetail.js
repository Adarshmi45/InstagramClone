import React from 'react'
import './PostDetail.css';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function PostDetail({ item, toggleDetails }) {
    const navigate = useNavigate();
    const notifyA = (msg) => toast.error(msg)
    const notifyB = (msg) => toast.success(msg)
    const removePost = (postId) => {
        if (window.confirm("Do you really want to delete this Post?")) {
            fetch(`http://localhost:5000/deletePost/${postId}`, {
                method: "delete",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    notifyB(result.message)
                    toggleDetails()
                    navigate("/")
                })
        }

    }

    return (
        <div className="showComment">
            <div className="container">
                <div className="postPic">
                    <img src={item.photo} alt='' />
                </div>
                <div className="details">
                    <div className="card-header" style={{ borderBottom: "1px solid #00000029" }}>
                        <div className="card-pic">
                            <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='' />
                        </div>
                        <h5>{item.postedBy.name}</h5>
                        <div className="deletePost">
                            <span className="material-symbols-outlined" onClick={() => { removePost(item._id) }}>
                                delete
                            </span>
                        </div>
                    </div>
                    <div className="comment-section" style={{ borderBottom: "1px solid #00000029" }}>
                        {item.comments.map((comment) => {
                            return (<p className='comm'>
                                <span className="commenter" style={{ fontWeight: "bolder" }}>{comment.postedBy.name}{""}  </span>
                                <span className="commentText">{comment.comment}</span>
                            </p>)
                        })}


                    </div>

                    <div className="card-content">



                        <p>{item.likes.length} Likes</p>
                        <p>{item.body}</p>
                    </div>
                    <div className="add-comment">
                        <span className="material-symbols-outlined">
                            mood
                        </span>
                        <input type="text" placeholder="Add a comment"
                        // value={comment} 
                        // onChange={(e) => {
                        //     setComment(e.target.value)
                        // }}
                        />
                        <button className='comment'
                        // onClick={() => {
                        //     makeComment(comment, item._id)
                        //     toggleComment();
                        // }}
                        >Post</button>
                    </div>
                </div>
            </div>
            <div className="close-comment"
                onClick={() => {
                    toggleDetails();
                }}
            >
                <span class="material-symbols-outlined material-symbols-outlined-comment">
                    close
                </span>
            </div>
        </div>

    )

}

export default PostDetail