import React, { useEffect, useState } from 'react'
import Navvar from '../shared/navvar'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '@/utils/api'
import { toast } from 'sonner'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'


const Signup = () => {

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  })

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading , user}= useSelector(store=>store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData=new FormData();   // beacuse hum file bhi send kr rhe hai isliye humne formData object banaya hai otheriwse simple send krdete data ko
    formData.append("fullname",input.fullname);
    formData.append("email",input.email);
    formData.append("phoneNumber",input.phoneNumber);
    formData.append("password",input.password);
    formData.append("role",input.role);

    if(input.file){
      formData.append("file",input.file)
    }
    
    
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData,{
        headers:{'Content-Type': "multipart/form-data"}, //this we are not sending data as json we are sending data as formData
       withCredentials: true,
      });
      if(res.data.success){
        navigate("/login")
        toast.success(res.data.message);
      }

      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      
    }finally{
      dispatch(setLoading(false))
    }
    
  }

  useEffect(()=>{
    if(user){
      navigate('/');
    }
  })
  return (
    <div>
      <Navvar />

      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10 '>
          <h1 className='font-bold text-xl mb-5 '>Sign Up</h1>

          <div className='my-2'>
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="sharma"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}

            />
          </div>

          <div>

            <Label>Email</Label>
            <Input
              type="text"
              placeholder="sharma@gmail.com"
              name="email"
              value={input.email}
              onChange={changeEventHandler}

            />


          </div>

          <div>

            <Label>Phone Number</Label>
            <Input
              type="text"
              placeholder="999999999"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}

            />


          </div>

          <div>

            <Label>Password</Label>
            <Input
              type="password"
              placeholder="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}

            />


          </div>

          <div className='flex items-center justify-between'>

            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <input type="radio" name='role' value="student" className='cursor-pointer' 
                checked={input.role === "student"}
                  onChange={changeEventHandler}
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" name='role' value="recruiter" className='cursor-pointer'
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}

                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>

            </RadioGroup>

            <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={changeFileHandler}
                                className="cursor-pointer"
                            />
                        </div>
          </div>

          {
            loading ? <Button><Loader2/>Please wait</Button> :  <Button type="submit" className="w-full my-6">Signup</Button>
          }

         
          <span className='text-sm'>Already have an account ? <Link to="/login" className='text-blue-600'>Login</Link></span>












        </form>
      </div>
    </div >
  )
}

export default Signup