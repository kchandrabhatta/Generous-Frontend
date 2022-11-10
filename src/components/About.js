import React from 'react';

// Create function
function About() {
    return (
        <div className="div-public-page about-page">
            <div className="div-public-header">
                <h1>About</h1>
                <p>Generous is the app that will help you figure out which cause you connec with the most.</p>
                <div className="div-screenshots">
                    <div className="div-screenshot1">
                        <h2>
                            Get started by signing up for a free account.
                        </h2>
                        <img 
                            //src="" 
                            alt="Sign-up form" 
                        />

                        <h2>
                            Look up your favorite organizations on the this page.
                        </h2>
                        <img 
                            //src="" 
                            alt="Overview page" 
                        />


                    </div>
                </div>
            </div>
            
            <div className="div-created-by">
                <h2>Created By</h2>
                
                <div>
                    <h3>Tanner Eschmann</h3>
                    <a 
                        href="https://github.com/TannerEsch" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <img 
                            src="https://imgur.com/bBaCmqP" 
                            alt="GitHub logo"
                        />
                    </a>
                </div>

                <div>
                    <h3>Connor Cappello</h3>
                    <a 
                        href="https://github.com/connorGA" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <img 
                            src="https://imgur.com/wYMx7Kg" 
                            alt="GitHub logo"
                        />
                    </a>
                </div>

                <div>
                    <h3>Nainoa Villegas</h3>
                    <a 
                        href="https://github.com/nainoaktv" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <img 
                            src="https://imgur.com/xu4Slax" 
                            alt="GitHub logo"
                        />
                    </a>
                </div>

                <div>
                    <h3>Krishna Chandrabhatta</h3>
                    <a 
                        href="https://github.com/kchandrabhatta" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <img 
                            src="https://imgur.com/yActEWk" 
                            alt="GitHub logo"
                        />
                    </a>
                </div>

                <p>
                    Developed November 2022. See the code behind this site on the app's <a target="_blank" rel="noreferrer" href="https://github.com/TannerEsch/Generous-Frontend">repository on GitHub</a>.
                </p>
            </div>
        </div>
    )
}

// Export function
export default About
