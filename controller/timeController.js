import { Absent, Stuff } from "../Modal/TimeTable.js"

//Post methode insert time data
const timePost=(async(req,res)=>{
    const timePost = req.body;
    try {
        const postTime =await Stuff.create(timePost)
        res.status(200).json(postTime)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
//Get methode get all post
const getData=(async(req,res)=>{
 
    try {
        const getData =await Stuff.find({})
        res.status(200).json(getData)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

//Get by id
const getById=(async(req,res)=>{
    try {
        const getbyId =await Stuff.findById({_id:req.params.id})
        res.status(200).json(getbyId )
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
//Delete methode delete by id
const deleteData=(async(req,res)=>{
  
    try {
        const data =await Stuff.findByIdAndDelete({_id:req.params.id})
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
//Put methode update by id
const timeUpdate=(async(req,res)=>{
  const {name, timeStart,timeEnd} = req.body
    try {
        const dataUpdate =await Stuff.findByIdAndUpdate(req.params.id)
      if(dataUpdate){
          dataUpdate.name=name;
          dataUpdate.timeStart=timeStart;
          dataUpdate.timeEnd=timeEnd;

          const dataSave =await dataUpdate.save();
          res.status(200).json(dataSave)
      }
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

//Absent here

//Post methode insert absent
const absentPost=(async(req,res)=>{
    const absentPost = req.body;
    try {
        const postTime =await Absent.create(absentPost)
        res.status(200).json(postTime)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
//Get methode get all post
const getAbsentData=(async(req,res)=>{
 
    try {
        const getData =await Absent.find({})
        res.status(200).json(getData)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

const deleteAbsent =(async(req,res)=>{
    try {
        const deleteAbsent =await Absent.findByIdAndDelete({_id:req.params.id})
        res.status(200).json(deleteAbsent)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})



export {timePost, getData,deleteData, timeUpdate,getById, deleteAbsent, getAbsentData, absentPost}