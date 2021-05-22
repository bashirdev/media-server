import express from 'express'
const router = express.Router();
import { deleteData, getById, getData, timePost, timeUpdate, deleteAbsent, getAbsentData, absentPost } from '../controller/timeController.js';


router.route('/postData').post(timePost)
router.route('/getData').get(getData)
router.route('/getDatabyid/:id').get(getById)
router.route('/delete/:id').delete(deleteData)
router.route('/update/:id').put(timeUpdate)

router.route('/absentpost').post(absentPost)
router.route('/getabsent').get(getAbsentData)
router.route('/deleteabsent/:id').delete(deleteAbsent)

export default router