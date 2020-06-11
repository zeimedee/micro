const express = require('express')
const router = express.Router();


let User = require('./user.model')

router.route('/').get( (req,res) => {
    User.find( (err, user) => {
        return res.json(user);
    })
})

router.route('/loggedin').get( (req,res) => {
    
    User.find((err, user) => {
        let result =[];
        if(err){
            res.json(err)
        }else{
              user.map(n=>{
                    if(n.is_user_Logged === true){ 
                         result.push(n.user_first_name)        
                    }   
              })
          return res.json(result)
             
        }
    })
});

router.route('/post').post( (req,res) => {
    let user = new User(req.body);
    user.save()
        .then( () => {
            res.status(200).json({'post': user + 'successfully'})
        })
        .catch( (err) => {
            res.status(400).json({'post':err})
        })
});



module.exports = router;