import { toast } from "react-toastify"

export const addFacility = async(facility) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities` ,{
        method :'POST',
        headers : {
            'content-type': 'application/json'
        },
        body : JSON.stringify(facility)
    })
    const data =await res.json()
    if(data.insertedId){
        toast.success(`${facility.name} is added successful`)
    }
    return data
}