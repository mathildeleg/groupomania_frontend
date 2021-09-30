export const customFetch = async (clientURLObject, JSONvalue) => {
    const token = localStorage.getItem("token");
    console.log(JSONvalue)
    const res = await fetch(clientURLObject.url, {
            method: clientURLObject.method,
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // ...(clientURLObject.shouldBeAuthenticated ? {"Authorization" : `Bearer ${token}`} : {}),
            },
            body: JSON.stringify(JSONvalue)
        });
        console.log(res)
    try {
            return res.json();
        } catch(error) {
            console.log(error);
        }
}