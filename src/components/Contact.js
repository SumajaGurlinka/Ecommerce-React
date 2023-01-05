import React from 'react'

function Contact() {
    return (
        <div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="my-5 col-md-5">
                       
                    </div>
                    <div className='my-5 col-md-6'>
                        <form1>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Seneca" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example Text Area</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type = "submit" className='btn btn-outline-dark'>Send Message</button>
                        </form1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;