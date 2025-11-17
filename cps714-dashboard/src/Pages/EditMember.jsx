import { useParams, useNavigate } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import supabase from '../supabase-client'

const EditMember = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [first_name, setFirst] = useState("")
    const [last_name, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!first_name || !last_name || !email) {
            setFormError('Invalid fields. Enter information Correctly')
            return
        }

        const { data, error } = await supabase
            .from('members')
            .update({ first_name, last_name, email})
            .eq('member_id', id)
            .select()
            console.log({ data, error })

        if (error) {
            console.log(error)
            setFormError('Invalid fields. Enter information Correctly')
        }

        if (data) {
            console.log(data)
            setFormError(null)
            navigate('/members')
        }
    }

    useEffect(() => {
        const fetchMembers = async () => {
            const { data, error } = await supabase
            .from('members')
            .select()
            .eq('member_id', id)
            .single()

        if (error) {
            navigate('/members', { replace: true})
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
        <form onSubmit={handleSubmit}>
            <label> First Name: </label>
            <input 
                type="text"
                id="fname"
                value={first_name}
                onChange={(e) => setFirst(e.target.value)}
            />

            <label> Last Name: </label>
            <input 
                type="text"
                id="lname"
                value={last_name}
                onChange={(e) => setLast(e.target.value)}
            />

            <label> Email: </label>
            <input 
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button> Update Member Cridentials </button>

            {formError && <p className='error'>{formError}</p>}

        </form>
    </div>
    )
    
}



export default EditMember