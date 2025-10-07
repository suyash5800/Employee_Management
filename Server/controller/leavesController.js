import Leave from "../user_modules/leaves.js";


const leaveRegistor = async (req, res)=>{
    try {
        const {emp_name,leave_type,leave_from,leave_to,status}= req.body;
        const newLeave = new Leave({emp_name,leave_type,leave_from,leave_to,status});
        await newLeave.save();
        console.log(newLeave);

        res.status(201).json({message:"New Leave is popsted",leave:newLeave});
    } catch (error) {
        res.status(500).json({message:"Error during posting leave",error:error.message})
    }
};

const leaveGets = async (req, res)=>{
    try {
        const leaves = await Leave.find();
        res.status(200).json(leaves);
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }

}



export {leaveRegistor,leaveGets};