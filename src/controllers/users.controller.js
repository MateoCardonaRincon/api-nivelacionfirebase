const db = require('../database')
const Users = db.collection('users');
const userCtrl = {}


userCtrl.getOne = async(req,res)=>{

    try
    {
        var id = req.params.id;

        var peticion = await Users.doc(id).get()
    
        const user = peticion.data();
        
        if (user)
            return res.status(200).json(user);
        return res.status(401).json({msg:"User doesn´t exist"});
        
        
    }
    catch(err)
    {
        console.log(err);
        return res.json(err);
    }
  
}

userCtrl.getAll = async (req,res)=>{

    try
    {
        var peticion = await  (await Users.get())
        const {docs} = peticion;
        var users = docs.map(user =>({id:user.id,data:user.data()}))
        //users = users.map( user =>({id:user.id,name:user.data.name,lastname:user.data.lastname}));
        console.log(users);
    
        res.json(users);
    }
    catch(err)
    {
        console.log(err);
    }
    
}

userCtrl.createOne = async (req,res)=>{

    try
    {
        var user = req.body;
        
        await Users.add(user);
        
       return  res.status(200).json({msg:"User created"});
    }
    catch(err)
    {
        console.log(err)
     
    }
    

    res.status(200).json({msg:"User created"})
}

userCtrl.updateOne =async (req,res) => {
   
    try
 {

       var id =  req.params.id;
       var data =  req.body;

     await Users.doc(id).update(data);
     
     return  res.status(200).json({msg:"User updated"});
 }
 catch(err)
 {
     console.log(err)
  
 }
}


userCtrl.deleteOne =async (req,res) => {
   
       try
    {
        const { id } = req.params;
        await Users.doc(id).delete();
        
        return  res.status(200).json({msg:"User deleted"});
    }
    catch(err)
    {
        console.log(err)
     
    }
}



module.exports = userCtrl;