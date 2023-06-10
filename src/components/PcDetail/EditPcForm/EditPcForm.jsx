import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePcRequest } from '../../../utilities/pcs-api';

export default function EditPcForm({pc, setPc, setEditFormIsOpen}){
    const navigate = useNavigate();
    const nameRef = useRef(pc.name)
    const descriptionRef = useRef(pc.description)
    const caseRef = useRef(pc.case)
    const motherboardRef = useRef(pc.motherboard)
    const cpuRef = useRef(pc.cpu)
    const gpuRef = useRef(pc.gpu)
    const ramRef = useRef(pc.ram)
    const storageRef = useRef(pc.storage)
    const psuRef = useRef(pc.psu)
    const costRef = useRef(pc.cost)
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedPc = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            case: caseRef.current.value,
            motherboard: motherboardRef.current.value,
            cpu: cpuRef.current.value,
            gpu: gpuRef.current.value,
            ram: ramRef.current.value,
            storage: storageRef.current.value,
            psu: psuRef.current.value,
            cost: costRef.current.value
        }
        try{
            const newPc = await updatePcRequest(pc._id, updatedPc)
            setPc(newPc)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Bad update try again")
        }
    }
    return(
        <>
        <h5>Edit</h5>
        { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef} defaultValue={pc.name}/>
                
                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef} defaultValue={pc.description}/>

                <label htmlFor="case">Case</label>
                <input type="text" id="case" ref={caseRef} defaultValue={pc.case}/>

                <label htmlFor="motherboard">MotherBoard</label>
                <input type="text" id="motherboard" ref={motherboardRef} defaultValue={pc.motherboard}/>

                <label htmlFor="cpu">CPU</label>
                <input type="text" id="cpu" ref={cpuRef} defaultValue={pc.cpu}/>

                <label htmlFor="gpu">GPU</label>
                <input type="text" id="gpu" ref={gpuRef} defaultValue={pc.gpu}/>

                <label htmlFor="ram">RAM</label>
                <input type="text" id="ram" ref={ramRef} defaultValue={pc.ram}/>

                <label htmlFor="storage">Storage</label>
                <input type="text" id="storage" ref={storageRef} defaultValue={pc.storage}/>

                <label htmlFor="psu">PSU</label>
                <input type="text" id="psu" ref={psuRef} defaultValue={pc.psu}/>

                <label htmlFor="cost">Cost</label>
                <input type="text" id="cost" ref={costRef} defaultValue={pc.cost}/>

                <button>Edit Pc</button>

            </form>
            </>
    )
}