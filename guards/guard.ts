import { EGuard } from "~~/enums/guard.enum";
import { ERole } from "~~/enums/role.enum";
import { AuthStoreService } from "~~/services/auth/authStore.service"


export async function useGuard(guard: EGuard): Promise<boolean> {
    const authStore = inject<AuthStoreService>(AuthStoreService.serviceName);
    const userData = await authStore.$state;
    if (!userData?.roles || !userData.roles.size) {
        return false;
    }
    switch (guard) {
        case EGuard.Dialogs: 
            return userData.roles.get(ERole.User);
        default:
            return false;
    }
}