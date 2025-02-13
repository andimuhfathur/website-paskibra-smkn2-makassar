import { auth } from "../../../auth";

export async function GetUserDat() {
    return await auth()
}