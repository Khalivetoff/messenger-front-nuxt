import { AuthStoreService } from "~~/services/auth/authStore.service";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.provide(AuthStoreService.serviceName, new AuthStoreService());
});
