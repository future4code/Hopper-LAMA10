import app from "./app"
import userRouter from "./router/UserRouter"
import bandRouter from "./router/BandRouter"

app.use("/user",userRouter)
app.use("/band",bandRouter)