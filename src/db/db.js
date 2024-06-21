import 'dotenv/config'
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI)
        console.log(`\nMongodb Sucessfully Connected !! At Host : ${connectionDB.connection.host}`)

    } catch (error) {
        console.log(`Error while connecting with database: ${error.message}`)
        process.exit(1)
    }

}

export default connectDB