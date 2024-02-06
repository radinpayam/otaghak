export default defineEventHandler(async (event) => {
    try {
        const data = await $fetch(`http://localhost:8000/popular-cities`, {
            method: "get",
        });
        return data
    } catch (error) {
        return error;
    }
})