import { useState} from 'react'
import EditPcForm from './EditPcForm/EditPcForm'
import './PcDetail.css'
export default function PcDetail({pc, handleDelete, setPc}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    function toggleEditForm(){
        setEditFormIsOpen((prevState) => {
            return !prevState
            }
        )
    }
    return (
        <>
            <div>

                <h3>{pc.name}</h3>
                <p>Description: {pc.description}</p>
                <p>Cost: {pc.cost}</p>
                <br />
                <p>Case: {pc.case}</p>
                <p>Motherboard: {pc.motherboard}</p>
                <p>CPU: {pc.cpu}</p>
                <p>GPU: {pc.gpu}</p>
                <p>RAM: {pc.ram}</p>
                <p>Storage: {pc.storage}</p>
                <p>PSU: {pc.psu}</p>

                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditPcForm pc={pc} setPc={setPc} setEditFormIsOpen={setEditFormIsOpen}></EditPcForm>
                }
                <button onClick={handleDelete}>DELETE</button>
            </div>
        </>
    )
}