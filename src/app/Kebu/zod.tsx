import { z } from "zod"


export const schemaCrendential = z.object({
    email: z.string().email().min(3, { message: "email anda kurang 3 karakter" }),
    password: z.string().min(6, { message: 'password anda kurang 6 karakter' }),
})

export const schemaLoginCrendential = z.object({
    email: z.string().email().min(3, { message: "email anda kurang 3 karakter" }),
    password: z.string().min(6, { message: 'password anda kurang 6 karakter' }),
})

