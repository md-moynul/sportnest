import { toast } from "react-toastify"

export const addFacility = async (facility) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(facility)
    })
    const data = await res.json()
    if (data.insertedId) {
        toast.success(`${facility.name} is added successful`)
    }
    return data
}
export const deleteFacility = async (facility) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${facility._id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
        
    }
    )
    const data = await res.json();
    if (data.deletedCount > 0) {
        toast.warning(`${facility.name} is Deleted`)
         window.location.reload()
    }

}
export const updateFacility = async (facility,id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(facility)
    }
    )
    const data = await res.json();
    if (data.modifiedCount  > 0) {
        toast.warning(`${facility.name} is Updated`)
         window.location.reload()
    }

}
export const bookFacility = async (bookingData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    const data = await res.json()
    console.log(data);

    if (data.insertedId) {
        toast.success(`${bookingData.facility_name} is successfully booked`)
    }

    return data
}
export const cancelBooking = async (booking) => {
    console.log('from cancel action', booking);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    const data = await res.json()
    if (data) {
        window.location.reload()
    }
}