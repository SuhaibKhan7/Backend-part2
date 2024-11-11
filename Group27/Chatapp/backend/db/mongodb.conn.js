import mongoose from 'mongoose'
const connnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL,)
        console.log("Database Connected")
    } catch (error) {
        console.log("Db Error occured:", error.message);
    }
}
export default connnection