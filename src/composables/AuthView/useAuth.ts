import { reactive, UnwrapNestedRefs } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
export interface State {
    name: string;
    email: string;
    select: string | null;
    checkbox: boolean | null | string;
    password?: string;
}
export function useAuth() {

    const initialState: State = {
        name: "",
        email: "",
        select: null,
        checkbox: null,
        password: "",
    };

    const state: UnwrapNestedRefs<State> = reactive<State>({
        ...initialState,
    });

    const items = ["Customer", "Employee", "Editor", "Admin"];

    const rules = {
        name: { required },
        email: { required, email },
        select: { required },
        items: { required },
        checkbox: { required },
        password: { required },
    };

    const v$ = useVuelidate<State>(rules, state);

    return {
        items: items,
        state: state,
        v$: v$,
        initialState: initialState,
    }
}
