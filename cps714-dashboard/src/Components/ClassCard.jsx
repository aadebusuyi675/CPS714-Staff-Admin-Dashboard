import { Link } from "react-router-dom"

const ClassCard = ({ classData }) => {
    return (
        <div className="members-card">
            <Link to="/" className="home-button">Home</Link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=mark_email_unread,person_apron,schedule" />
            <header className="members-head">{classData.class_name}</header>
            <br/>
            <span class="material-symbols-outlined icon-setting">schedule</span>
            <p className='cardSubtitle'>{classData.date}</p>
            <p className='cardSubtitle'>{classData.time}</p>
            <p className='cardSubtitle'>Capacity: {classData.capacity}</p>
            <span class="material-symbols-outlined icon-setting">person_apron</span>
            <p className='cardSubtitle'> Instructor: {classData.instructor?.first_name} {classData.instructor?.last_name}</p>
            <span class="material-symbols-outlined icon-setting">mark_email_unread</span>
            <p className='cardSubtitle'>{classData.instructor?.email}</p>
            <br/>
            <button className="button">  <Link to={'/editClass/' + classData.class_id}> Modify </Link></button>
            
        </div>
    )
}
export default ClassCard
