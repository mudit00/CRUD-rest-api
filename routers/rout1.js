const express = require('express')
const router =express.Router()
const Person = require('../models/persons.js')

router.get('/',async(req,res)=>{
    try {
        const person = await Person.find()
        res.json(person)
    } catch (err) {
        res.send('Error :' +err)
    }
})

router.post('/',async(req,res)=>{
  const person = new Person({
      name: req.body.name,
      tech: req.body.tech,
      sub:  req.body.sub
  })   
  try {
      const a1= await Person.save()
      res.json(a1)
  } catch (error) {
      res.send('Error')
  }
})
module.exports=router // Make it accessible to app.js or others
