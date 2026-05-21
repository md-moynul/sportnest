export const getAllFacility = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`)
    return res.json()
}
export const getFacilityById = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`)
    return res.json()
}
export const getAllBookingsByUserId = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${userId}`)
    return res.json()
}