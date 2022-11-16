import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-column'>
            <div className='column1'>
                <div className='footerLogo'>
                    <img src='./images/footer-icon.png' />
                </div>
                <div className='footerIcons'>
                    <img src='./images/fb.png' />
                    <img src='./images/insta.png' />
                    <img src='./images/twitter.png' />
                </div>
            </div>
            <div className='column2'>
                <p>Community</p>
                <ul>
                    <li><a>NFT</a></li>
                    <li><a>Tokens</a></li>
                    <li><a>Landlords</a></li>
                    <li><a>Discord</a></li>
                </ul>
            </div>
            <div className='column3'>
                <p>Places</p>
                <ul>
                    <li><a>Castle</a></li>
                    <li><a>Farms</a></li>
                    <li><a>Beach</a></li>
                    <li><a>Learn more</a></li>
                </ul>
            </div>
            <div className='column4'>
                <p>About us</p>
                <ul>
                    <li><a>Road map</a></li>
                    <li><a>Creators</a></li>
                    <li><a>Career</a></li>
                    <li><a>Contact us</a></li>
                </ul>
            </div>
        </div>
        <div className='copyright'>
            <p>&copy; 2022 Metabnb</p>
        </div>
    </div>
  )
}

export default Footer