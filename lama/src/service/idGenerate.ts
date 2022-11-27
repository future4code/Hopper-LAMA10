import {v4} from "uuid"
import { IIdGenarete } from "../bussines/Port"

export class IdGenerate implements IIdGenarete {
    public generate(): string{
        return v4()
    }
}

export default new IdGenerate()