const Collections = ()=>{
  return (
    <div className="collections">
      <div className="header">
        <h1 className="title">Collections</h1>
        <p className="sub-title">Choose from our most exclusive collections</p>
      </div>
      <div className="grid">
        <div className="body">
          <div className="body-img">
            <img src="img/cars/car1.webp" alt="" />
          </div>
          <div className="body-desc">
            <h1>BMW</h1>
            <p>Price From</p>
            <h2>&#8358; 200,000</h2>
            <button>Book Now</button>
          </div>
        </div>
        <div className="body">
          <div className="body-img">
            <img src="img/cars/car7.webp" alt="" />
          </div>
          <div className="body-desc">
            <h1>Lambhorghini</h1>
            <p>Price From</p>
            <h2>&#8358; 560,000</h2>
            <button>Book Now</button>
          </div>
        </div>
        <div className="body">
          <div className="body-img">
            <img src="img/cars/car6.webp" alt="" />
          </div>
          <div className="body-desc">
            <h1>Lincoln</h1>
            <p>Price From</p>
            <h2>&#8358; 700,000</h2>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections;