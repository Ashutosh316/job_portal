import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import React, { useEffect, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const CompaniesTable = () => {

    const { companies , searchCompanyText} = useSelector(store => store.company)
    const [filterCompany , setFilterCompany] =useState(companies)
    const navigate = useNavigate();

    useEffect(()=>{
        const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
            if(!searchCompanyText){
                return true
            };
            return company?.name?.toLowerCase().includes(searchCompanyText.toLowerCase());

        });
        setFilterCompany(filteredCompany);
    },[companies,searchCompanyText])


    return (

        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                {
                                    // companies?.map((company) => (
                                        filterCompany?.map((company) => (

                                       
                                            <TableRow>

                                            <TableCell>
                                                <Avatar>
                                                    <AvatarImage className="w-auto h-16 object-contain" src={company?.logo} />
                                                </Avatar>
                                            </TableCell>
                                            <TableCell>{company?.name}</TableCell>
                                            <TableCell>{company.createdAt.split("T")[0]}</TableCell>

                                            <TableCell className="text-right cursor-pointer">
                                                <Popover>
                                                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                                    <PopoverContent className='w-32'>

                                                        <div onClick={()=> navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                            <Edit2  />
                                                            <span>Edit</span>
                                                        </div>

                                                    </PopoverContent>
                                                </Popover>

                                            </TableCell>

                                            </TableRow>


                                       

                                    ))

                                }


                </TableBody>

            </Table>
        </div>
    )
}

export default CompaniesTable