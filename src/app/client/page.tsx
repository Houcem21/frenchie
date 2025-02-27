'use client'

import Hero from "@/components/user-card"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function ClientPage() {
    const {data: session} = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    return (
        <Hero user={session?.user} pagetype={"Client"} /> 
    )

}