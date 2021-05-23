import React from 'react';

function Home(props) {
  return (
      <div class="container">
          <article class="row single-post mt-5 no-gutters">
            <div class="col-8">
                <h1 class="text-primary display-4"><strong>About Me</strong></h1>
                <div>
                    <img src="assets/imgs/mypic.jpg" id="profilePic" class="image-wrapper float-left pr-3" alt="Will's pic" />
                </div>
                <main class="single-post-content-wrapper p-3">
                    <p class="text">I was born in Nashua, New Hampshire on November 15th, 1990.  Mid year in 1995 my family and I moved to Houston where I live now.  I spent most of my youth playing sports and spent a lot of time outdoors.  In high school, I played football and when I graduated in 2009, started a short career in Mixed Martial Arts. I attended the University of Houston and ended up with a degree in Mathematics with a minor in Physics.  I am currently enrolled in the Full Stack Development Bootcamp at University of Texas in Austin and hope to become a full time developer after the course.</p>
                    <p class="text"></p>
                </main>
                <section>
                    <ul class="text">
                        <li><a href="./assets/WilliamPappResumeUPDATED.docx">Resume</a></li>
                    </ul>
                </section>
            </div>
          </article>
      </div>
  )
}

export default Home;

