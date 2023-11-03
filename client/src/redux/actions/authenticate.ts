
export const login = (payload:any) => ({
    type: 'GET_LOGIN',
    payload
})

export const setUser = (user:string) => ({
    type: 'AUTHENTICATE',
    payload: user
})

