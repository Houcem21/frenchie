//Applies next auth to the entire project

export {default} from "next-auth/middleware"

//Applies next auth only to matching routes - can use regex
export const config = { matcher: ["/software", "/dashboard"] } 