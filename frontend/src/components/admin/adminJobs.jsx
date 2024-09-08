import React, { useEffect, useState } from 'react'
import Navvar from '../shared/navvar'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import AdminJobsTable from './adminJobsTable'
import useGetAllAdminjobs from '@/hooks/useGetAdminAllJobs'
import { setSearchJobByText } from '@/redux/jobSlice'

const AdminJobs = () => {

  useGetAllAdminjobs();

  const [input , setInput] =  useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setSearchJobByText(input));
  },[input]);
  return (
    <div>
        <Navvar/>
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between my-5'>
                <Input
                className = "w-fit"
                placeholder="Filter by name"
                onChange={(e)=>setInput(e.target.value)}
                />

                <Button onClick={()=>navigate("/admin/jobs/create")}>New Jobs</Button>
            </div>

            <AdminJobsTable/>

        </div>
    </div>
  )
}

export default AdminJobs