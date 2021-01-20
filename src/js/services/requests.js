export const request = async (url, data,method) => {
    let res = await fetch(url, {
        method: method,
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: data
    });

    if (!res.ok) {
        throw new Error(`Cloud not fetch ${url}, status ${res.status}`)
    }
    return await res.json()
};



