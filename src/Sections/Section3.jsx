import React from "react";

export const Section3 = () => {
    return (
        <section className="three" >
            <div className="three-content" >
                <div className="three-content-top" >
                    <div className="three-content-top-container" >
                        <div className="three-content-top-container-color purple" />
                        <div className="three-content-top-container-content" >
                            <h1 className="headline white" >Up Next:</h1>
                            <div className="events" >
                                <div className="next-event" >
                                    <h1 className="small-description blue-text" >21 Sept 2024</h1>
                                    <h1 className="small-headline animated-text-two" >What's in the box?</h1>
                                    <h1 className="small-description blue-text" >Lagos, Nigeria:<br/>Artificial Intelligence</h1>
                                </div>
                                <div className="next-event" >
                                    <h1 className="small-description blue-text" >21 Sept 2024</h1>
                                    <h1 className="small-headline animated-text-two" >What's in the box?</h1>
                                    <h1 className="small-description blue-text" >Lagos, Nigeria:<br/>Artificial Intelligence</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="three-content-top-container" >
                        <div className="three-content-top-container-color yellow" />
                        <div className="three-content-top-container-content" >
                            <h1 className="headline blue-text" >Sign Up For Exclusive Updates On Our Future Events</h1>
                            <form>
                            <div className="form-group">
                                <input className="blue-input" type="text" id="name" name="name" required placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input className="blue-input"  type="email" id="email" name="email" required placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input className="blue-input"  type="email" id="email" name="email" required placeholder="Phone" />
                            </div>
                            <button type="submit" className="button-one" >
                                <h1 className="small-headline white" >Sign Up</h1>
                            </button>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="three-content-bottom" >
                <div className="three-content-bottom-container" >
                    <div className="three-content-bottom-container-color blue" />
                    <div className="three-content-bottom-container-content" >
                        <h1 className="headline white" >See Previous Events</h1>
                        <div className="instagram-posts">
                            <iframe src="https://www.instagram.com/p/C6gJUsoOuUF/embed/" frameBorder={ 0 } className="iframe" />
                            <iframe src="https://www.instagram.com/p/C6gJUsoOuUF/embed/" frameBorder={ 0 } className="iframe" />
                            <iframe src="https://www.instagram.com/p/C6gJUsoOuUF/embed/" frameBorder={ 0 }className="iframe" />
                            <iframe src="https://www.instagram.com/p/C6gJUsoOuUF/embed/" frameBorder={ 0 } className="iframe" />
                            <iframe src="https://www.instagram.com/p/C6gJUsoOuUF/embed/" frameBorder={ 0 } className="iframe" />
                            <iframe src="https://www.instagram.com/p/C6gJUsoOuUF/embed/" frameBorder={ 0 } className="iframe" />
                        </div>
                    </div>
                </div>
                <div className="three-content-bottom-container-two" >
                    <div className="three-content-bottom-container-color-box red" />
                    <div className="three-content-bottom-container-content-box" >
                        <h1 className="headline white" >Contact Us</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" id="name" name="name" required placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" required placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" required placeholder="Phone" />
                            </div>
                            <div className="form-group">
                                <input type="text" id="name" name="name" required placeholder="Message" />
                            </div>
                            <button type="submit" className="button-two" >
                                <h1 className="small-headline" >Send Now</h1>
                            </button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}