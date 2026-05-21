

export const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctor`, {
    cache: 'no-store',
  });

  return await res.json();
};

export const getDoctorData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`, {
    cache: 'no-store',
  });

  return await res.json();
};

export const getSingleDoctorsData = async id => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`, {
    cache: 'no-store',
  });

  return await res.json();
};

export const boctorsBooking = async (bookingData, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(bookingData),
  });

  return await res.json();
};
