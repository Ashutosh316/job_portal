import { setAllAppliedJobs } from '@/redux/jobSlice'
import { App_API_END_POINT } from '@/utils/api'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`${App_API_END_POINT}/get`, { withCredentials: true });
                console.log(res.data);

                if (res.data.success) {
                    dispatch(setAllAppliedJobs(res.data.application))

                }

            } catch (error) {
                console.log(error);


            }
        }
        fetchAppliedJobs();
    }, [])
}

export default useGetAppliedJobs