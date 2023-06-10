import { pcsIndexRequest } from '../../utilities/pcs-api';
import { useEffect, useState} from 'react'
import PcsList from '../../components/PcsList/PcsList'

export default function PcIndexPage(){
    const [pcs, setPcs] = useState([])
    useEffect(()=>{
        async function getPcs(){
            const pcs = await pcsIndexRequest();
            setPcs(pcs)
        }
        getPcs();
    }, [])
    return(
    <>
        <h1>List of Existing Computer Builds</h1>
        <PcsList pcs={pcs}></PcsList>
</>
)
}