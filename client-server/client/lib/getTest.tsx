export default async function getTest() {
    const res = await fetch('http://localhost:3001/api/test')

    if (!res.ok) throw new Error('failed to fetch data')

    return res.json()
}