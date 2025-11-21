import { Link } from "react-router-dom"

const MemberCard = ({ members }) => {
    return (
        <div className="members-card">
            <header className="members-head">{members.first_name}</header>
            <p className='cardSubtitle'>{members.last_name}</p>
            <p style={{fontStyle: 'italic'}}>{members.email}</p>
            <button> <Link to={'/editmembers/' + members.member_id}> Modify </Link></button>
        </div>
    )
}

export default MemberCard