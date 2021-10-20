import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('gmail', 'moin1223', e.target, 'user_vnEuih3WYZyExUx5blqm0')
      .then((result) => {
          console.log(result.text);

      }, (error) => {

          console.log(error.text);

      });
      e.target.reset();
    }

    return (
        <div id="contact">
                    <div className="contact py-5">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h1 className="text-white" style={{fontWeight: 'bold'}}>Connect with me</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form onSubmit={sendEmail} action="">
                        <div className="form-group my-3">
                            <input className="form-control" name="name" placeholder="Your Name" type="text"/>
                        </div>
                        <div className="form-group my-3">
                            <input className="form-control" name="email" placeholder="Email Address" type="email"/>
                        </div>
                        <div className="form-group my-3">
                            <textarea name="feedback" className="form-control" placeholder="Write your feedback & I will contact you through email"id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-group text-center">
                        <button type="submit" class="btn btn-success">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;