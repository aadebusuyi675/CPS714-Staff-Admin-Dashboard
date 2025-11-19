import { Link } from "react-router-dom"

const ClassCard = ({ classData }) => {
    return (
        <div className="class-card">
            <header className="members-head">{classData.class_name}</header>
            <p>{classData.date}</p>
            <p>{classData.time}</p>
            <button> <Link to={'/editClass/' + classData.class_id}> Modify </Link></button>
        </div>
    )
}

export default ClassCard