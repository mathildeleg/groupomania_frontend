// custom fetch 
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

// check if token is expired
export const isTokenExpired = (token) => {
    if(token == null){
        return true
    }
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date()).getTime() / 1000)) >= expiry;
}