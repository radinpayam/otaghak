const {
    public: { apiBase },
  } = useRuntimeConfig();
export default defineEventHandler(async (event) => {
    try {
        const data = await $fetch(`${apiBase}/features-otaghak`, {
            method: "get",
            cache: 'force-cache',
        });
        setHeader(event, 'Cache-Control', 'public, max-age=3600');
        return data
    } catch (error) {
        return error;
    }
})