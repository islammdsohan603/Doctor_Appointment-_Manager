

export const getData = async () => {
  const res = await fetch('http://localhost:5000/doctor');
  const data = await res.json()

  return data
}