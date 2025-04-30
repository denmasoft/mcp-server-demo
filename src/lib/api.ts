
export async function fetchData(q: string) {
    try {
        const data = await fetch(`${process.env.API_ENDPOINT}?q=${q}`);
        return await data.json();
    } catch (error) {
      throw new Error('Failed to fetch data.');
    }
  }
