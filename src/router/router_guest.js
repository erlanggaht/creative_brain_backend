import express from 'express'
import Get_Guest_Controller from '../controllers/get_guest_controller.js'
import Delete_Guest_Controller from '../controllers/delete_guest_controller.js'
import Add_Guest_Controller from '../controllers/add_guest_controll.js'
const router = express.Router()


const {get_guest} = Get_Guest_Controller 
const {delete_guest} = Delete_Guest_Controller
const {add_guest} = Add_Guest_Controller

router.get('/guest_comment',get_guest)
router.post('/guest_add',add_guest)
router.delete('/guest_delete',delete_guest)



export default router