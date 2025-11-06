import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://cupersoft:230486PRO@cluster0.vmsv3.mongodb.net/school_control?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
export default mongoose;
