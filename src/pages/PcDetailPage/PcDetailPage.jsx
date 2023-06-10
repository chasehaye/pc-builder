import { useNavigate, useParams } from "react-router-dom";
import { getPcRequest, deletePcRequest } from "../../utilities/pcs-api";
import { useEffect, useState } from 'react';
import PcDetail from "../../components/PcDetail/PcDetail";
export default function PcDetailPage(){
    let { pcId } = useParams();
    const [pc, setPc] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getPc(){
            const pc = await getPcRequest(pcId);
            if(pc){
                setPc(pc)
                setTimeout(()=>{
                    setLoading(false)
                }, 1000)
            }else{
                setError('No Pcs here')
                setLoading(false)
            }
        }
        getPc()
    }, [])

    async function handleDelete(e){
        const deleteResponse = await deletePcRequest(pc._id);
        if(deleteResponse.data === 'success'){
            navigate('/pcs')
        }
    }
    return (
        <>
        <h1>Here's a pc</h1>
        { loading ? <p>Loading....</p>
        :
        error ? <p>{error}</p> 
        :
        <PcDetail pc={pc} handleDelete={handleDelete} setPc={setPc}></PcDetail>
        }
        </>
    )
}