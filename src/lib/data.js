export async function getBooks () {
    const res = await fetch('https://neyamul-assignment-8.vercel.app/books.json')
    const data = res.json()
    return data
}


export async function features () {
    const res = await fetch('https://neyamul-assignment-8.vercel.app/feature.json')
    const data = res.json()
    return data
}


export async function review () {
    const res = await fetch('https://neyamul-assignment-8.vercel.app/review.json')
    const data = res.json()
    return data
}




