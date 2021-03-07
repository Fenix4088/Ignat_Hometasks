
export const RequestAPI = {
    getData () {
        return fetch('https://neko-cafe-back.herokuapp.com/auth/test', {
            method: "POST",
            body: JSON.stringify({
                "success": true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}