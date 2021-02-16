const express=require('express')
const router=express.Router()

const {addWord, getWordFrequency}= require ('../controllers/word')

router.put('/word/:word',addWord)
router.get('/word/:word',getWordFrequency)

module.exports=router