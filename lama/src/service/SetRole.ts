
import { Router } from "express";
import { ISetRole } from "../bussines/Port";
import { ROLE } from "../model/User"

export class SetRole implements ISetRole {
    public setRole(role: any): ROLE {
        

        switch (role.toLocaleUpperCase()) {
            case "ADMIN":
                role  = ROLE.ADMIN
                break;
            case "NORMAL":
                role = ROLE.NORMAL
                break;
            case undefined:
                role = ROLE.NORMAL
                break;
        }
        return role 
    }
}