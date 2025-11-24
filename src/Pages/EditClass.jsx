import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import supabase from "../supabase-client"

const EditClass = () => {
    const { id } = useParams()                // get class id from URL
    const navigate = useNavigate()

    const [classData, setClassData] = useState({
        class_name: "",
        date: "",
        time: "",
        capacity: ""
    })

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Fetch class info by ID
    useEffect(() => {
        const fetchClass = async () => {
            const { data, error } = await supabase
                .from("classData")            // <-- UPDATED TABLE NAME
                .select()
                .eq("class_id", id)
                .single()

            if (error) {
                setError("Could not load class data.")
                console.log(error)
            } else {
                setClassData(data)
            }

            setLoading(false)
        }

        fetchClass()
    }, [id])

    // Update the class entry
    const handleSubmit = async (e) => {
        e.preventDefault()

        const { data, error } = await supabase
            .from("classData")               // <-- UPDATED TABLE NAME
            .update({
                class_name: classData.class_name,
                date: classData.date,
                time: classData.time,
                capacity: classData.capacity
            })
            .eq("class_id", id)

        if (error) {
            setError("Failed to update class.")
            console.log(error)
        } else {
            navigate("/class")             // change this path if your classes page is different
        }
    }

    if (loading) return <p>Loading...</p>

    return (
        <div className="edit-class-page">
            <h1>Edit Class</h1>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit} className="edit-form">
                <label>Class Name</label>
                <input
                    type="text"
                    value={classData.class_name}
                    onChange={(e) =>
                        setClassData({ ...classData, class_name: e.target.value })
                    }
                    required
                />

                <label>Date</label>
                <input
                    type="date"
                    value={classData.date}
                    onChange={(e) =>
                        setClassData({ ...classData, date: e.target.value })
                    }
                    required
                />

                <label>Time</label>
                <input
                    type="time"
                    value={classData.time}
                    onChange={(e) =>
                        setClassData({ ...classData, time: e.target.value })
                    }
                    required
                />
                
                <label>Capacity</label>
                <input
                    type="capacity"
                    value={classData.capacity}
                    onChange={(e) =>
                        setClassData({ ...classData, capacity: e.target.value })
                    }
                    required
                />                

                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
}

export default EditClass
