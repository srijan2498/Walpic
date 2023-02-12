import React from 'react'
import './ImgDisplayArea.css'
import { BsFillHeartFill, BsGlobe2 } from 'react-icons/bs'
import { BiDownload } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'

const ImgDisplayArea = ({ images, search }) => {
  console.log(images)
  return (
    <div className="displayImgContainer">
      <h1 className="searchHeading">{search}</h1>
      <div className='imgDisplayArea'>
        {images.map((image) => {
          return <div className="imageItem" key={image.id}>
            <div className="imgUpperSection">
              <div className="likes">
                <BsFillHeartFill />
                <div className="likeText">{image.likes}</div>
              </div>
            </div>
            <img src={image.urls.regular} alt="" />
            <div className="creatorInfo">
              <div className="profilePic" style={{ backgroundImage: `url(${image.user.profile_image.medium})` }}></div>
              <div className="nameNSocial">
                <div className="creatorName">{image.user.username}</div>
                <div className="socialLiks">
                  {image.user.social.portfolio_url ? <a href={image.user.social.portfolio_url} target='_blank'><div className='social portfolio'><BsGlobe2 /></div></a> : ""}{image.user.social.instagram_username ? <a href={`https://www.instagram.com/${image.user.social.instagram_username}`} target='_blank'><div className='social instagram'><AiFillInstagram /></div></a> : ""}
                  {image.user.social.twitter_username ? <a href={`https://twitter.com/${image.user.social.twitter_username}`} target='_blank'><div className='social twitter'><FaTwitterSquare /></div></a> : ""}
                </div>
              </div>
            </div>
            <div className="imgLowerSection">
              <div className="creator">
                <div className="creatorPic" style={{ backgroundImage: `url(${image.user.profile_image.small})` }}></div>
                <div className="creatorName">{image.user.username}</div>
              </div>
              <a href={image.links.download} download target={'_blank'}>
                <div className="download">
                  <BiDownload />
                </div>
              </a>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default ImgDisplayArea
