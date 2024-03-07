const {
  public: { apiBase },
} = useRuntimeConfig();
export default defineEventHandler(async (event) => {
    try {
        const data = await $fetch(`${apiBase}/links-footer`, {
          method: "get",
        });
        return data
      } catch (error) {
          return error;
      }
})