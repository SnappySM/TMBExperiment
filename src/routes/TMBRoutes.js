import express from 'express';
import tmbController from '../controller/TMBController.js'

const router = express.Router()

router.get('/busLines', tmbController.getBusLines)
router.get('/metroLines', tmbController.getMetroLines)

export default router;