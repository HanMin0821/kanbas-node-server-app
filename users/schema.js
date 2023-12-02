import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: {type:String, default: "xxxxxxx@xxxxx"},
        role: {
            type: String,
            enum: ["ADMIN", "USER", "FACULTY", "STUDENT"],
            default: "USER",
        },
        salary: { type: Number, default: 75000 },
        married: { type: Boolean, default: false },
        dob: Date,
        doh: { type: Date, default: Date.now },
        firstName: String,
        lastName: String,
    },
    { collection: "users" }
);
export default schema;