const {
  public: { apiBase },
} = useRuntimeConfig();
export default defineEventHandler(async (event) => {
    try {
        const data = await $fetch(`${apiBase}/journals`, {
          method: "get",
        });
        return data
      } catch (error) {
          return error;
      }
})