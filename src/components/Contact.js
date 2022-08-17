

const Contact = () => {
    return (
        <section className='contact flex' id='contact'>
          <h3>Contact</h3>
          <section className="contactForm">
            <form name = "contact">
            
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your first name.."></input>
            
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject"></input>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" placeholder="Your email.."></input>
              
            
              <label htmlFor="details">Message</label>
              <textarea id="details" name="details" placeholder="Send me a message.."></textarea>
            
              <input type="submit" value="Submit"></input>
            
            </form>
        </section>
    </section>
    )
}

export default Contact