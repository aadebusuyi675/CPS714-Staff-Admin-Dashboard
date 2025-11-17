import { Link } from "react-router-dom"

const StaffCard = ({ instructor }) => {
    return (
        <div className="members-card">
            <header className="members-head">{instructor.first_name}</header>
            <p>{instructor.last_name}</p>
            <p>{instructor.email}</p>
            <button> <Link to={'/editstaff/' + instructor.instructor_id}> Modify </Link></button>
        </div>
    )
}

export default StaffCard