import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qf8iyij', 'template_xdvb4na', form.current, '9qdWMuQHEXyFed0yR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          alert("Email has been sent!")
      };

  return (
    <div className="Join" id="Join-us">
        <div className="left-J">
            <hr/>
            <div>
                <span className="stroke-text">ready to</span><span>level up</span>
            </div>
            <div>
                <span>your body</span><span className="stroke-text">with us?</span>
            </div>
        </div>
        <div className="right-J">
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your email'/>
                <button className="btn btn-j">Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join