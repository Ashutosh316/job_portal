import React, { useEffect } from 'react'
import Navvar from '../shared/navvar'
import ApplicantTable from './applicantTable'
import axios from 'axios'
import { App_API_END_POINT } from '@/utils/api'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {applicants} = useSelector(store=>store.application)
  useEffect(()=>{
    const fetchAllApplicants = async ()=>{

      try {
        const res = await axios.get(`${App_API_END_POINT}/${params.id}/applicants`,{withCredentials:true});
        //console.log(res.data);
      
          dispatch(setAllApplicants(res.data.job))
        
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchAllApplicants();
  },[])
  return (
    <div className='max-w-7xl mx-auto'>
      <Navvar/>
      <div>
        <h1 className='font-bold text-xl my-5'>Applicants {applicants?.applications?.length}</h1>
        <ApplicantTable/>
      </div>
    </div>
  )
}

export default Applicants