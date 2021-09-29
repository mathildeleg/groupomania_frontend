export const customFetch = async (url, method, JSONvalue, shouldBeAuthenticated) => {
    const token = localStorage.getItem("token");
    const res = await fetch(url, {
            method: method,
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...(shouldBeAuthenticated ? {"Authorization" : `Bearer ${token}`} : {}),
            },
            body: JSON.stringify(JSONvalue)
        });
        try {
            return res.json();
        } catch(error) {
            console.log(error);
        }
}