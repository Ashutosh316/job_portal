import { setAllAdminJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/api'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminjobs = () => {
 const   dispatch = useDispatch();

    useEffect(()=>{
        const fetchAllAdminJobs = async ()=>{
           
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getAdminjobs`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllAdminJobs(res.data.jobs));

                }
                console.log(res.data); // Add this line
                
            } catch (error) {
                console.log(error);
                
                
            }
        }
        fetchAllAdminJobs();
    },[])
}

export default useGetAllAdminjobs