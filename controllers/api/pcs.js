const Pc = require ('../../models/pc')

module.exports = {
    index,
    create,
    detail,
    deletePc,
    update
  };
  
async function index(req, res){
    try{
        const pcs = await Pc.find();
        res.status(200).json(pcs)
    }catch(err){
        res.status(400).json(err)
    }
}
async function create(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newPc = await Pc.create(req.body);
        res.status(201).json(newPc)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res){
    try{
        const pc = await Pc.findById(req.params.id)
        res.status(200).json(pc)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deletePc(req, res){
    try{
        await Pc.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function update(req, res){
    try{
        const updatedPc = await Pc.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedPc)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}