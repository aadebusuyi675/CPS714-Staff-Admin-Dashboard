import React, {useState, useEffect} from 'react'
import supabase from '../supabase-client'

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
    <div>viewMembers</div>
  )
}

export default viewMembers