import mongoose from "mongoose";

const leavesSchema = new mongoose.Schema({
    emp_name: { type: String, required: true },
    leave_type: { type: String, required: true },
    leave_from: { type: Date, required: true },
    leave_to: { type: Date, required: true },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending',
        required: true
    }
}, {
    timestamps: true 
});

const Leave = mongoose.model("Leave", leavesSchema);
export default Leave;
