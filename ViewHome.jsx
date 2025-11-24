import { Link } from "react-router-dom"
import '../Components/ViewHome.css'


export default function ViewHome() {
    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=exercise,id_card,person_apron,quiz" />
            <div className="border">
            <span class="material-symbols-outlined icon-title">exercise</span>
            <header className="title"> FitHub - Staff Admin Dashboard </header>
            <br/>
            <button className="button"> <span className="material-symbols-outlined icon-setting">id_card</span> <Link to={"/members"}>View Members</Link></button>
            <br/><br/>
            <button className="button"> <span class="material-symbols-outlined icon-setting">person_apron</span><Link to={"/staff"}> View Staff </Link></button>
            <br/><br/>
            <button className="button"> <span class="material-symbols-outlined icon-setting">quiz</span> <Link to={"/class"}>View Classes</Link></button>
            <button className="button"> <span className="material-symbols-outlined icon-setting">quiz</span> <Link to={"/reports"}>View Reports</Link> </button>
            </div>
        </div>
    )
}

