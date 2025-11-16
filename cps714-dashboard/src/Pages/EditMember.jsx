import { useParams, useNavigate } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import supabase from '../supabase-client'

const EditMember = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [first_name, setFirst] = useState("")
    const [last_name, setLast] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        const fetchMembers = async () => {
            const { data, error } = await supabase
            .from('members')
            .select()
            .eq('member_id', id)
            .single()

        if (error) {
            navigate('/', { replace: true})
        }
        
        if (data) {
            setFirst(data.first_name)
            setLast(data.last_name)
            setEmail(data.email)
            console.log(data)
        }

        }

        fetchMembers()
    }, [id, navigate]) 

    return (
    <div>
        <h2>Update - {id}</h2>
    </div>
    )
    
}



export default EditMember