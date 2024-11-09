import mongoose from "mongoose"
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Db connected..")
    } catch (error) {
        console.log("Error in connecting db",error.message)
    }
}
export default connection