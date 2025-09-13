export async function getCountry(name) {
  try {
    const res = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=10&language=en&format=json`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
