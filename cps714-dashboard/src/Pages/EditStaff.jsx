import { useParams, useNavigate } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import supabase from '../supabase-client'
import '../Components/EditMembers.css'

const EditStaff = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [first_name, setFirst] = useState("")
    const [last_name, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [formError, setFormError] = useState(null)

    const [status, setStatus] = useState("Staff")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!first_name || !last_name || !email) {
            setFormError('Invalid fields. Enter information Correctly')
            return
        }

        if (status === "Member") {
            const staffInfo = { first_name, last_name, email}

            const { error: removeError } = await supabase
                .from('instructor')
                .delete()
                .eq('instructor_id', id)
            
            if (removeError) {
                console.log(removeError)
                setFormError('Could not remove staff from database.')
                return
            }

            const { error: insertError } = await supabase
                .from('members')
                .insert(staffInfo)

            if (insertError) {
                console.log(insertError)
                setFormError('Could not insert new member into database.')
                return
            }

            navigate('/members')
            return
        }


        const { data, error } = await supabase
            .from('instructor')
            .update({ first_name, last_name, email})
            .eq('instructor_id', id)
            .select()

        if (error) {
            console.log(error)
            setFormError('Invalid fields. Enter information Correctly')
        }

        if (data) {
            console.log(data)
            setFormError(null)
            navigate('/staff')
        }
    }

    useEffect(() => {
        const fetchInstructor = async () => {
            const { data, error } = await supabase
            .from('instructor')
            .select()
            .eq('instructor_id', id)
            .single()

        if (error) {
            navigate('/staff', { replace: true})
        }
        
        if (data) {
            setFirst(data.first_name)
            setLast(data.last_name)
            setEmail(data.email)
            console.log(data)
        }

        }

        fetchInstructor()
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

            <label className='input'> Last Name: </label>
            <input className='field'
                type="text"
                id="lname"
                value={last_name}
                onChange={(e) => setLast(e.target.value)}
            />

            <label className='input'> Email: </label>
            <input className='field'
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label className='input'> Status </label>
                <select className='field' value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Staff"> Staff </option>
                    <option value="Member"> Member </option>
                </select>

            <button className='buttSize'> Update Staff Cridentials </button>

            {formError && <p className='error'>{formError}</p>}
            </div>

        </form>
    </div>
    )
    
}



export default EditStaff