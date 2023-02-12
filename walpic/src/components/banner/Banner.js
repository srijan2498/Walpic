
import React from 'react'
import './Banner.css'

const Banner = ({ bannerImg, searchImg }) => {
  return (
    <>
      <div className="bannerContainer" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="searchBarDiv">
          <h1 className="bannerText">Search for the best free stock photos</h1>
          <div className="searchBar">
            <form onSubmit={(e) => {
              e.preventDefault();
              searchImg(document.getElementById('searchBox').value)
              document.getElementById('searchBox').value=""
            }}>
              <input type="text" placeholder='Search Here' id='searchBox' />
              <input type="submit" value="Search" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

// https://api.unsplash.com/photos/random?client_id=KPYY4OAgpskI1IrFRe0NXHSxbq4I1finqr8trExTBzY

export default Banner
