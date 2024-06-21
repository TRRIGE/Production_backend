import 'dotenv/config'
import connectDB from "./db/db.js";
import app from "./app.js";

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000,
            () => {
                console.log('Server is running on port 3000');
            })
    }).catch((error) => {
        console.log(`Error in connectoin with database: ${error.message}`)
        process.exit(1)
    })