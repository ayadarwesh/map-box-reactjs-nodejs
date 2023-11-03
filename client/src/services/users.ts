export const users = () => {
    return fetch("/api/users").then((res) => res.json());
}
