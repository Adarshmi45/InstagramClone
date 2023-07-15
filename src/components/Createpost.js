import React from 'react';
import "./Createpost.css"

function Createpost() {

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
                    <button id="post-btn">Share</button>
                </div>
                <div className="main-div">
                    <img id="output" src="https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png"/>
                    <input type="file" accept="image/*"  onChange={(event)=>{loadfile(event)}}/>
                </div>
                <div className="details">
                    <div className="card-header">
                        <div className="card-pic">
                            <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='' />
                        </div>
                        <h5>Ankur</h5>
                    </div>
                    <textarea type="text" placeholder="Write a caption..."></textarea>
                </div>
            </div >
        )

    }

    export default Createpost;