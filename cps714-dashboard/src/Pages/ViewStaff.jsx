import React, {useState, useEffect} from 'react'
import supabase from '../supabase-client'
import MemberCard from '../Components/MemberCard'
import '../Components/ViewMembers.css'
import StaffCard from '../Components/StaffCard'

const ViewStaff = () => {

  const [instructor, setInstructor] = useState([])
  const [fetchError, setFetchError] = useState([])
  

  useEffect(() => {
    const fetchInstructor = async() => {
      const { data, error } = await supabase
        .from('instructor')
        .select()

        if (error) {
          setFetchError('Could not get staff data.')
          setInstructor([])
          console.log(error)
        }

        if (data) {
          setInstructor(data)
          console.log(data)
          setFetchError([])
        }
    }

    fetchInstructor()

  }, [])
  

  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {instructor && (
        <div className='members'> 
          <div className='members-grid'>
            {instructor.map(instructor => (
            <StaffCard key={instructor.id} instructor={instructor} />
          ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewStaff