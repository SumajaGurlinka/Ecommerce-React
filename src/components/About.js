import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='my-5 col-md-6'>
                        <h1>About Us</h1>
                        <p className='my-3 lead'>
                            An About Page is where you share your brand story, company values, and mission, as well as experiences. So, it boils down to talking about:

                            What makes you unique
                            The story behind you or why you started your business
                            What you stand for i.e., your values
                            Your experience including how long you’ve been in business, awards you’ve won, and similar
                            If you’re a brand, be sure to share your team as well unless you have a separate page introducing your teammates.
                            But the question remains: why do you want to nail sharing all this information? The reason is simple: you want to take your audience backstage to show them you are human and tell them you are worth trusting (and, therefore, buy from).
                            Think of it like this: would you rather buy from a business you know nothing about or would you deal with someone with a friendly face shared on their About page and a story that you find inspiring? I’m willing to bet you’d work with the latter. Isn’t it?
                        </p>
                        <NavLink to ="/contact" className="btn btn-outline-dark">Contact Us</NavLink>
                    </div>
                    <div className='my-5 col-md-6'>
                        
                     </div>
                </div>
            </div>
        </div>
    )
}

export default About