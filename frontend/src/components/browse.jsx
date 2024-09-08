import React, { useEffect } from 'react'
import Navvar from './shared/navvar'
import Job from './job'
import { useDispatch, useSelector } from 'react-redux'
import useGetAlljobs from '@/hooks/useGetAlljobs'
import { setSearchQuery } from '@/redux/jobSlice'

//const randomJobs = [1,2,3,4,5,6]


const Browse = () => {   
    useGetAlljobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchQuery(""));
        }
    },[]) 
    return (
        <div>
            <Navvar/>
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Browse