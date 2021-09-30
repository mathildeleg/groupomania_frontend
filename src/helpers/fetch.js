export const customFetch = async (clientURLObject, JSONvalue) => {
    const token = localStorage.getItem("token");
    const res = await fetch(clientURLObject.url, {
            method: clientURLObject.method,
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...(clientURLObject.shouldBeAuthenticated ? {"Authorization" : `Bearer ${token}`} : {}),
            },
            ...(clientURLObject.method === 'GET' || clientURLObject.method === 'DELETE' ? {} : {'body': JSON.stringify(JSONvalue)}),
        });
    try {
            return res.json();
        } catch(error) {
            console.log(error);
        }
}