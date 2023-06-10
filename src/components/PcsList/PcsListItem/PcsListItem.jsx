import { Link } from "react-router-dom";
import './PcsListItem.css'

export default function PcsListItem({pc}){
    return (
        <>
            <p>
                <Link class='list-item'to={`/pcs/${pc._id}`}>
                    {pc.name} &nbsp; | &nbsp; {pc.cost}
                </Link>
            </p>
        </>
    )
}