import { useRef, useState } from 'react';
import { createPcRequest } from '../../utilities/pcs-api';
import { useNavigate, useParams } from "react-router-dom";
import './NewPcForm.css'

export default function NewPcForm(){
    const navigate = useNavigate();
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const caseRef = useRef('')
    const motherboardRef = useRef('')
    const cpuRef = useRef('')
    const gpuRef = useRef('')
    const ramRef = useRef('')
    const storageRef = useRef('')
    const psuRef = useRef('')
    const costRef = useRef('')
    const [error, setError] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newPc = {
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
            const newPcResponse = await createPcRequest(newPc)
            navigate('/pcs')
        }catch(err){
            setError(err)
            console.log(err)
        }
        console.log(newPc)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef}/>
                
                <label htmlFor="description">Description</label>
                <input type="text" id="description" ref={descriptionRef}/>

                <label htmlFor="case">Case</label>
                <input type="text" id="case" ref={caseRef}/>

                <label htmlFor="motherboard">MotherBoard</label>
                <input type="text" id="motherboard" ref={motherboardRef}/>

                <label htmlFor="cpu">CPU</label>
                <input type="text" id="cpu" ref={cpuRef}/>

                <label htmlFor="gpu">GPU</label>
                <input type="text" id="gpu" ref={gpuRef}/>

                <label htmlFor="ram">RAM</label>
                <input type="text" id="ram" ref={ramRef}/>

                <label htmlFor="storage">Storage</label>
                <input type="text" id="storage" ref={storageRef}/>

                <label htmlFor="psu">PSU</label>
                <input type="text" id="psu" ref={psuRef}/>

                <label htmlFor="cost">Cost</label>
                <input type="text" id="cost" ref={costRef}/>

                <button>Create Pc</button>

            </form>
        </>
    )
}