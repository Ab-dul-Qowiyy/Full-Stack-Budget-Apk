import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const mongoDB = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to database: ${mongoDB.connection.host}`);
        
    } catch (err) {
        console.log(err.message);
        return err.message
        
    }
};

export default connectDB;