import React, {useState} from 'react'
import supabase from '../supabase-client'

const viewMembers = () => {

  const [members, setMembers] = useState([])
  console.log(members)

  async function fetchMembers() {
    const {data} = supabase
      .from('members')
      .select('*')
      setMembers(data)
  }

  return (
    <div>viewMembers</div>
  )
}

export default viewMembers