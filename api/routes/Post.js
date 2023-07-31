const router =require ("express").Router();

// const User=require("../models/User")

const Post=require("../models/Post")


//create new post
router.post("/", async (req, res)=>{
    const newPost=new Post(req.body);
    try{
        const savedPost=  await newPost.save()
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
})


//update post
router.put("./id", async (req, res)=>{
     try{
        const post= await Post.findById(req.params.id)
        try{const updatedPost=await Post.findByIdAndUpdate(req.params.id, {$set:req.body, }, {new:true }) ;
        res.status(200).json(updatedPost)}catch(err){}
     }catch(err){
        res.status(500).json(err)
     }
})



//delete post
router.delete("/:id", async (req, res)=>{
    try{
       const post= await Post.findByIdAndDelete(req.params.id)
      //  try{ 
      //    await post.remove();
      //  res.status(200).json("post has been deleted")}catch(err){
      //    console.error
      //  }
    }catch(err){
       res.status(500).json(err)
    }
})


//get post
router.get("/:id", async (req, res)=>{
    try{
       const post= await Post.findById(req.params.id)
      
       res.status(200).json(post)
    }catch(err){
       res.status(500).json(err)
    }
})

//get all posts
router.get("/", async (req, res)=>{
   // const username=req.query.user;
   // console.log(req)
    try{
      let posts;
      // if (username){
      //     posts= await Post.find({username})
      // }
      // else{
         posts=await Post.find()
      // }
      
       res.status(200).json(posts)
    }catch(err){
       res.status(500).json(err)
    }
})


module.exports = router
