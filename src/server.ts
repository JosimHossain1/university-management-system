import mongoose from "mongoose";
import app from './app'
import * as dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT
const db_url = process.env.DATABASE_URL

async function main() {

  try {
    await mongoose.connect(db_url as string);
    
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })

  } catch (err) {
    console.log(err);
  }
}
main()