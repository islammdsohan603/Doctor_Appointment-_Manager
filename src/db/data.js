

export const getData = async () => {
  const res = await fetch('http://localhost:5000/doctor');
  const data = await res.json()

  return data
}

export const getDoctorData = async () => {
  const res = await fetch('http://localhost:5000/doctors')
  const data = await res.json()
  return data
}

export const getSingleDoctorsData = async (id) => {
  const res = await fetch(`http://localhost:5000/doctors/${id}`)
  const data = await res.json()
  return data
}
