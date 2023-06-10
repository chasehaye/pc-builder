import PcsListItem from './PcsListItem/PcsListItem'
export default function PcList({pcs}){
    const pcsComp = pcs.map(pc => <PcsListItem key={pc._id} pc={pc}></PcsListItem>)
    return (
        <>
            {pcsComp}
        </>
    )
}