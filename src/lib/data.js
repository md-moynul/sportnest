import { headers } from "next/headers"
import { auth } from "./auth"

export const getAllFacility = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`)
    return res.json()
}
export const getFeaturedFacility = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`,{
        cache:'no-store'
    })
    return res.json()
}
export const getFacilityById = async (id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}
export const getFacilityByEmail = async (email) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/user/${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}
export const getAllBookingsByUserId = async (userId) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${userId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}