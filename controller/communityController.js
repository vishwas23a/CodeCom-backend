import Community from "../models/communityModel.js";
import { User } from "../models/userModel.js";

    export const createCommunity=async(req,res)=>{
    const {name,code,description}=req.body;
    try {
        const communityExisted=await Community.findOne({name});
        if(communityExisted){
            return res.status(400).json({success:false,message:"Community already exists"})
        }
        const community=new Community({
            name,
            description,
            code,
            admin:req.userId,
            members:[req.userId]
        })
       await community.save()
       console.log(community,"community created successfully");
       const user=await User.findById(req.userId)
       user.createdCommunities.push(community._id)
       await user.save()
        res.status(201).json( {success:true,message:"Commuunity created successfully",community})
    } catch (error) {
        console.log(error,"failed to create community");
        res.status(400).json({success:false,message:"Failed to create community"})
        
        
    }
}
export const joinCommunity=async(req,res)=>{
    const {code}=req.body;
    
    try {
        if(!req.userId){
            console.log("user not found");
            
            return res.status(400).json({success:false,message:"User not found"})
        }
        const community= await Community.findOne({code})
        if(!community){
            console.log("community not found");
         return   res.status(400).json({success:false, message:"Community not Found"})
         
         
        }
        if(community.members.includes(req.userId)){
            console.log("already a member");

            return res.status(400).json({success:false,message:"Already a member of this community"})
        }

        community.members.push(req.userId)
        await community.save()
console.log(community,"community joined successfully");

  

        const user=await User.findById(req.userId)
        user.communities.push(community._id)
        await user.save()

     

        res.status(200).json({success:true, message:"Community joined successfully"})


    } catch (error) {
        console.log(error,"failed to join community");
        res.status(400).json({success:false,message:"Failed to join community"})

        
        
    }

}
export const getCommunity=async(req,res)=>{

}