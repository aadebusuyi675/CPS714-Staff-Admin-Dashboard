import { Link } from "react-router-dom"

export default function ViewHome() {
    return (
        <>
            <button> <Link to={"/members"}>View Members</Link></button>
            <button><Link to={"/staff"}> View Staff </Link></button>
            <button> Manage Members </button>
        </>
    )
}

