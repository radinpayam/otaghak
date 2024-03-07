const {
    public: { apiBase },
  } = useRuntimeConfig();
  export default defineEventHandler(async (event) => {
      try {
          const data = await $fetch(`${apiBase}/search-popular-cities`, {
            method: "get",
          });
          return data
        } catch (error) {
            return error;
        }
  })