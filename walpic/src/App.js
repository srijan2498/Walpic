import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import ImgDisplayArea from './components/imgDisplayArea/ImgDisplayArea'
import Footer from './components/Footer'

const App = () => {
  // E3pB90xvd0oyFTi08BIYe9d6GJFFxbGiSNBVXXGImLg
  // KPYY4OAgpskI1IrFRe0NXHSxbq4I1finqr8trExTBzY
  const id = 'E3pB90xvd0oyFTi08BIYe9d6GJFFxbGiSNBVXXGImLg'
  const bannerUrl = `https://api.unsplash.com/photos/random?client_id=${id}`

  const [bannerImg, setBannerImg] = useState()
  useEffect(() => {
    axios.get(bannerUrl).then((res) => {
      setBannerImg(res.data.urls.regular)
    })
  }, [])


  const [search, setSearch] = useState("nature")
  let searchUrl = `https://api.unsplash.com/search/photos?client_id=${id}&query=${search}`

  const searchImg = (searchQuery) => {
    setSearch(searchQuery)
  }

  const [dark, setDark] = useState(false)

  const [images, setImages] = useState()
  useEffect(() => {
    axios.get(searchUrl).then((res) => {
      setImages(res.data.results)
    })
  }, [searchUrl])

  return (
    <div className={`${dark?"grey":""}`}>
      <Navbar setDark={setDark} dark={dark} />
      {bannerImg ? <Banner bannerImg={bannerImg} searchImg={searchImg} /> : <Banner bannerImg={'https://images.unsplash.com/photo-1526137755315-124801590ce5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'} searchImg={searchImg} />}
      {images && <ImgDisplayArea images={images} search={search} />}
      <Footer dark={dark} />
    </div>
  )
}

export default App
