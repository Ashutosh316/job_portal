import React, { useEffect } from 'react'
import Navvar from './shared/navvar'
import HeroSection from './heroSection'
import CategoryCarousel from './categoryCarousel'
import LatestJob from './latestJob'
import Footer from './shared/footer'
import useGetAlljobs from '@/hooks/useGetAlljobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAlljobs();
  const {user} = useSelector(store=> store.auth)
  const navigate = useNavigate();

  useEffect(()=>{
    if(user?.role=== 'recruiter'){
      navigate('/admin/companies');
    }

  },[]);
  return (
    <div>
        <Navvar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJob/>
        <Footer/>
    </div>
  )
}

export default Home