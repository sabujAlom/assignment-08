export async function getBooks () {
    const res = await fetch('https://assignment-08-99i4.vercel.app/books.json')
    const data = res.json()
    return data
}


export async function features () {
    const res = await fetch('https://assignment-08-99i4.vercel.app/feature.json')
    const data = res.json()
    return data
}


export async function review () {
    const res = await fetch('https://assignment-08-99i4.vercel.app/review.json')
    const data = res.json()
    return data
}




