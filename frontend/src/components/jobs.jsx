import React, { useEffect, useState } from 'react'
import FilterCard from './filterCard'
import Navvar from './shared/navvar'
import Job from './job';
import { useDispatch, useSelector } from 'react-redux';
import {motion} from "framer-motion"

const Jobs = () => {
  const {allJobs , searchQuery}=useSelector(store=>store.job)
  // const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(()=>{   // because jitni baar bhi tick tick krega filter utni bar useeffect call hoga
    if (searchQuery){
      const filteredJobs = allJobs.filter((job)=>{
        return job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())||
        job.salary.toString().toLowerCase().includes(searchQuery.toLowerCase())
      
      })
      setFilterJobs(filteredJobs)
    }else{
      setFilterJobs(allJobs)    //  agar kuch search nhi kia to initial state yahi rhega
    }


  },[allJobs, searchQuery])
  return (
    <div>
      <Navvar />
      <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
          <div className='w-20%'>
          <FilterCard />
          </div>
        
      {
        allJobs.length <=0? <span>Jobs not found</span> :(
          <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
            <div className='grid grid-cols-3 gap-4'>

              
            {
                       filterJobs.map((job)=>(
                        <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        key={job?._id}>
                          <Job job={job}/>
                        </motion.div>
                       ))
            }

            </div>


          </div>
        )
       
      }  

        </div>
     
      </div>
    
    </div>
  )
}

export default Jobs