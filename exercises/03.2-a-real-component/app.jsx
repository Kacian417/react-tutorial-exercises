import React from "react";
import ReactDOM from "react-dom";

// Create your function here
const BootstrapCard = () => {
    return (
        <div className="card m-5">
            <img className="card-img-top" alt="Card image cap" src="../../.learn/assets/Dylan.png?raw=true" />;
            <div class="card-body">
                <h5 class="card-title">Bob Dylan</h5>
                <p class="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an
                influential figure in popular music and culture for more than five decades.
                </p>
                <a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">
                    Go to Wikipedia
                </a>
            </div>
        </div>
    );}
    
    ReactDOM.render(<BootstrapCard />, document.getElementById("#myDiv"));

// Remember to use ReactDOM.render to include the component into the website

