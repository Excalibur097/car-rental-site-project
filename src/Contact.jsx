const Contact = ()=>{
  return(
    <div className="contact">
      <div className="header">
        <h1>Contact Us</h1>
      </div>
      <div className="body">
        <div className="contact-info">
          <h2>Get In Touch With Us</h2>
          <p className="header-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            rem laudantium error adipisci e Ullam dolor corrupti totam.
            Id rem laudantium error adipisci esse vero 
          </p>
          <div className="indi-contact">
            <span className="icon"><i class="fa-solid fa-home"></i></span>
            <div className="text">
              <h3>Our Location</h3>
              <p>Plot ABZ Route 23 Lugbe Abuja</p>
            </div>
          </div>
          <div className="indi-contact">
            <span className="icon"><i class="fa-solid fa-phone"></i></span>
            <div className="text">
              <h3>Phone Number</h3>
              <p>+234 8074 663 163</p>
            </div>
          </div>
          <div className="indi-contact">
            <span className="icon"><i class="fa-solid fa-envelope"></i></span>
            <div className="text">
              <h3>Email Adress</h3>
              <p>raphachris144@gmail.com</p>
            </div>
          </div>
        </div>
        <form action="">
          <input type="name" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input className="message" type="message" placeholder="Your Message" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;