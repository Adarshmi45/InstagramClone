import React, { useState, useEffect } from 'react';
import "./Createpost.css"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"

function Createpost() {

    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
    const navigate = useNavigate()

    const notifyA = (msg) => toast.error(msg)
    const notifyB = (msg) => toast.success(msg)

    useEffect(() => {
        //Saving in mongodb
        if (url) {
            fetch("http://localhost:5000/createPost", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    body,
                    pic: url
                })
            }).then(res => res.json())
                .then(data => {if(data.error){
                    notifyA(data.error)
                }else{
                    notifyB("Successfully Posted")
                    navigate("/")
                }})
                .catch(err => console.log(err))

        }



    }, [url])

    //Cloudinary
    const postDetails = () => {


        console.log(body, image)
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "adarshmi")
        fetch("https://api.cloudinary.com/v1_1/adarshmi/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(data => setUrl(data.url))
            .catch(err => console.log(err))
        console.log(url)


    }

    const loadfile = (event) => {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory

        };
    };
    return (

        < div className='createPost' >
            <div className="post-header">
                <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
                <button id="post-btn" onClick={() => { postDetails() }}>Share</button>
            </div>
            <div className="main-div">
                <img id="output" src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png" />
                <input type="file" accept="image/*" onChange={(event) => {
                    loadfile(event);
                    setImage(event.target.files[0])
                }} />
            </div>
            <div className="details">
                <div className="card-header">
                    <div className="card-pic">
                        <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='' />
                    </div>
                    <h5>Ankur</h5>
                </div>
                <textarea value={body} onChange={(e) => {
                    setBody(e.target.value)
                }} type="text" placeholder="Write a caption..."></textarea>
            </div>
        </div >
    )

}

export default Createpost;