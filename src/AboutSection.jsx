const AboutSection = ()=>{
  return(
    <div className="about">
      <div className="about-text">
        <div className="about-title">
          <h1>About us</h1>
        </div>
        <div className="about-body">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime delectus 
            eum ut doloribus quaerat. Omnis, numquam officiis earum quasi tenetur iure, quia, 
            adipisci vel perspiciatis est illum. Et, magni porro! Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Voluptatum, rerum earum. Aperiam rem iure perferendis pariatur corporis in itaque 
            laborum, dolore ipsa natus et iste dolorum officiis necessitatibus quas earum!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime delectus 
            eum ut doloribus quaerat. Omnis, numquam officiis earum quasi tenetur iure, quia, 
            adipisci vel perspiciatis est illum.
          </p>
        </div>
      </div>
      <div className="about-banners">
        <div className="banner">
          <img src="img/cars/range1.jpg" alt="" />
          <div className="banner-text">
            <h2>Luxery cars</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="button-1">Book Now</button>
          </div>
        </div>
        <div className="banner">
          <img src="img/cars/aston-martin.jpg" alt="" />
          <div className="banner-text">
            <h2>Race cars</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="button-1">Book Now</button>
          </div>
        </div>
        <div className="banner">
          <img src="img/cars/pickuptruck.jpg" alt="" />
          <div className="banner-text">
            <h2>Utility Veheicles</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="button-1">Book Now</button>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default AboutSection;