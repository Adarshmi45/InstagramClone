import React from 'react';
import "./Home.css";


function Home() {
    return (
        <div className='home' >
            {/*card*/}
            <div className="card">
                {/* card header */}
                <div className="card-header">
                    <div className="card-pic">
                        <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt='' />
                    </div>
                    <h5>Ankur</h5>
                </div>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt='' />
                </div>
                <div className="card-content">
                    <span className="material-symbols-outlined">
                        favorite
                    </span>
                    <p>1 like</p>
                    <p>This is amazing</p>
                </div>
                <div className="add-comment">
                    <span className="material-symbols-outlined">
                        mood
                    </span>
                    <input type="text" placeholder="Add a comment" />
                    <button className='comment'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
