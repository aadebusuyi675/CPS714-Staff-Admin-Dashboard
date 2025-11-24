import { useParams, useNavigate } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import supabase from '../supabase-client'
import '../Components/EditMembers.css'

const EditMember = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [first_name, setFirst] = useState("")
    const [last_name, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [formError, setFormError] = useState(null)

    const [status, setStatus] = useState("Member")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!first_name || !last_name || !email) {
            setFormError('Invalid fields. Enter information Correctly')
            return
        }

        if (status === "Staff") {
            const memberInfo = { first_name, last_name, email}

            const { error: removeError } = await supabase
                .from('members')
                .delete()
                .eq('member_id', id)
            
            if (removeError) {
                console.log(removeError)
                setFormError('Could not remove member from database.')
                return
            }

            const { error: insertError } = await supabase
                .from('instructor')
                .insert(memberInfo)

            if (insertError) {
                console.log(insertError)
                setFormError('Could not insert new staff into database.')
                return
            }

            navigate('/staff')
            return
        }


        const { data, error } = await supabase
            .from('members')
            .update({ first_name, last_name, email})
            .eq('member_id', id)
            .select()

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
        <header className='title'> Edit Member Information </header>
        <br/>

        <form onSubmit={handleSubmit}>

            <div className='centerInput'>

            <label className='input'> First Name: </label>
            <input className='field' 
                type="text"
                id="fname"
                value={first_name}
                onChange={(e) => setFirst(e.target.value)}
            />

            <br/>

            <label className='input'> Last Name: </label>
            <input className='field'
                type="text"
                id="lname"
                value={last_name}
                onChange={(e) => setLast(e.target.value)}
            />

            <br/>

            <label className='input'> Email: </label>
            <input className='field'
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br/>

            <label className='input'> Status: </label>
                <select className='field' value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Member"> Member </option>
                    <option value="Staff"> Staff </option>
                </select>

            <br/> <br/>

            </div>

            <button className='buttSize'> Update Member Cridentials </button>

            {formError && <p className='error'>{formError}</p>}

        </form>
    </div>
    )
    
}



export default EditMember