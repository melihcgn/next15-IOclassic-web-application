import { auth } from "@/auth"

export default async function GetUserMail() {
    const session = await auth()
    console.log("session: ", session)
    if (!session) return null
    if (!session.user) return null

    return (
        <div>
            {session.user.email}
        </div>
    )
}