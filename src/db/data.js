const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';
const REQUEST_TIMEOUT = 3000;

const fetchJson = async (path, options = {}) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      cache: 'no-store',
      ...options,
      signal: controller.signal,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || `Request failed with ${res.status}`);
    }

    return data;
  } catch (error) {
    if (error?.digest === 'DYNAMIC_SERVER_USAGE') {
      throw error;
    }

    console.error(`API request failed: ${path}`, error);
    return null;
  } finally {
    clearTimeout(timeout);
  }
};

const asArray = data => (Array.isArray(data) ? data : []);

export const getData = async () => {
  const data = await fetchJson('/doctor');
  return asArray(data);
};

export const getDoctorData = async () => {
  const data = await fetchJson('/doctors');
  return asArray(data);
};

export const getSingleDoctorsData = async id => {
  return fetchJson(`/doctors/${id}`);
};

export const boctorsBooking = async bookingData => {
  const data = await fetchJson('/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookingData),
  });

  return data || { error: true, message: 'Backend server is not responding' };
};


