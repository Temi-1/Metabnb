import React from "react";

function Hero() {
    return (
        <div className="hero">
            <div className="heroBanner">
                <div className="heroText">
                    <h1>Rent a <span className="purpleText">Place</span> away from <span className="purpleText">Home</span> in the <span className="purpleText">Metaverse</span></h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div class="searchContainer">
                        <form>
                          <input className="searchInput" type="text" placeholder="Search for location" name="search" />
                          <button className="searchBtn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            
                <div className="heroImg">
                    <div className="heroImgDown">
                        <img src="./images/image1.png" alt="" />
                        <img src="./images/image2.png" alt="" />
                    </div>
                    <div className="heroImgUp">
                        <img src="./images/image3.png" alt="" />
                        <img src="./images/image4.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="heroBottom">
                <div className="">
                    <img src="./images/mbtoken.png"></img>  
                </div>
                <div className="">
                    <img src="./images/metamask.png"></img>  
                </div>
                <div className="">
                    <img src="./images/opensea.png"></img>  
                </div>
            </div>
        </div>
    )
}

export default Hero