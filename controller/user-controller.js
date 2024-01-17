import user from "../model/user.js"

export const addUser = async (req,res) => {
    try{
        const exist = await user.findOne({sub : req.body.sub});

        if(exist){
            res.status(200).json({message : 'User already exist'});
            return;
        }

        const newUser = new user(req.body);
        await newUser.save();
        res.status(200).json(newUser);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}

export const getUsers = async (req,res) => {
    try{
        const users = await user.find({});
        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}