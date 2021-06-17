import React from 'react';


function Home() {
    return (
        <div className="container">
            <article className="row single-post mt-5 no-gutters">

                <h1 className="text-primary display-4"><strong>About Me</strong></h1>
                <div>
                    <img src="assets/imgs/mypic.jpg" id="profilePic" className="image-wrapper float-left pr-3" alt="Will's pic" />
                </div>
                <main className="single-post-content-wrapper p-3">
                    <p className="text-dark">I was born in Nashua, New Hampshire on November 15th, 1990.  Mid year in 1995 my family and I moved to Houston where I live now. I attended the University of Houston and ended up with a degree in Mathematics with a minor in Physics. In 2021, I graduated from the Full Stack Coding Bootcamp through UT Austin.</p>
                    <p className="text-dark">I am looking to make a career change and get into software development.  I have skills in JavaScript as well as technologies like node.js, git/gitbash, databases like MongoDB and MySQL, and many other full stack technologies.  Be sure to check out the highlighted projects on my Portfolio page as well as my GitHub repos!</p>
                </main>
            </article>
        </div>
    )
}

export default Home;

