import { json } from "better-auth";


export const getData = async () => {
  const res = await fetch('http://localhost:5000/doctor',);
  const data = await res.json()

  return data
}

export const getDoctorData = async () => {
  const res = await fetch('http://localhost:5000/doctors',)
  const data = await res.json()
  return data
}

export const getSingleDoctorsData = async (id) => {
  const res = await fetch(`http://localhost:5000/doctors/${id}`, {
    next: { revalidate: 60 },
  })
  const data = await res.json()
  return data
}

export const boctorsBooking = async (bookingData) => {
  const res = await fetch('http://localhost:5000/bookings', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),


  });

  const data = await res.json()

  return data


}
