import app from "./app"
import userRouter from "./router/UserRouter"
import bandRouter from "./router/BandRouter"
import showRouter from "./router/showRouter"

app.use("/user",userRouter)
app.use("/band",bandRouter)
app.use("/show",showRouter)