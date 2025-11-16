import { Link } from "react-router-dom"

const MemberCard = ({ members }) => {
    return (
        <div className="members-card">
            <header className="members-head">{members.first_name}</header>
            <p>{members.last_name}</p>
            <p>{members.email}</p>
            <button> <Link to={'/' + members.member_id}> Modify </Link></button>
        </div>
    )
}

export default MemberCard