export const login = (action:any) => {
    return fetch("/api/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email:action.payload.email,password: action.payload.password})
    }).then((res) => res.json());
}
