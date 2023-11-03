export const polygons = () => {
    return fetch("/api/polygons").then((res) => res.json());
}
