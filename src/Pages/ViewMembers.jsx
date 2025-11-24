import React, {useState, useEffect} from 'react'
import supabase from '../supabase-client'
import MemberCard from '../Components/MemberCard'
import '../Components/ViewMembers.css'

const viewMembers = () => {

  const [members, setMembers] = useState([])
  const [fetchError, setFetchError] = useState([])
  

  useEffect(() => {
    const fetchMembers = async() => {
      const { data, error } = await supabase
        .from('members')
        .select()

        if (error) {
          setFetchError('Could not get member data.')
          setMembers([])
          console.log(error)
        }

        if (data) {
          setMembers(data)
          console.log(data)
          setFetchError([])
        }
    }

    fetchMembers()

  }, [])
  

  return (
    <div className='main'>
      <header className='title'> FitHub - Member Management  </header>
      {fetchError && (<p>{fetchError}</p>)}
      {members && (
        <div className='members'> 
          <div className='members-grid'>
            {members.map(members => (
            <MemberCard key={members.id} members={members} />
          ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default viewMembers