import mongoose from 'mongoose'

const timeSechema =mongoose.Schema({
    fullName:String,
    timeStart:String,
    timeEnd:String,
    newDate:String,

}, {timestamps: true})

export const Stuff=mongoose.model('Stuff', timeSechema)

const absentSechema =mongoose.Schema({
    fullName:String,
    newDate:String,

}, {timestamps: true})

export const Absent=mongoose.model('Absent', absentSechema)

