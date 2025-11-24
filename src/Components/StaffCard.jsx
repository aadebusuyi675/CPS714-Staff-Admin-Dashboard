import { Link } from "react-router-dom"

const StaffCard = ({ instructor }) => {
    return (
        <div className="members-card">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=id_card,mark_email_unread" />
            <span class="material-symbols-outlined icon-setting">id_card</span>
            <header className="members-head">{instructor.first_name}</header>
            <p className='cardSubtitle'>{instructor.last_name}</p>
            <p style={{fontStyle: 'italic'}} className="email"> <span class="material-symbols-outlined icon-setting">mark_email_unread</span> {instructor.email}</p>
            <br/>
            <button className="button">  <Link to={'/editstaff/' + instructor.instructor_id}> Modify </Link></button>
        </div>
    )
}

export default StaffCard