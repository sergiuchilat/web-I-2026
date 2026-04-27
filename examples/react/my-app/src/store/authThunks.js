import { loginStart, loginSuccess, loginFailure } from "@/store/slices/authSlice";

const FAKE_USERS = [
    { email: "admin@test.com", password: "123", name: "Alice", role: "admin" },
    { email: "user@test.com",  password: "123", name: "Bob",   role: "user"  },
];

export function loginThunk(email, password) {
    return async (dispatch) => {
        dispatch(loginStart());

        await new Promise((res) => setTimeout(res, 1000)); // simulate API call

        const found = FAKE_USERS.find(
            (u) => u.email === email && u.password === password
        );

        if (found) {
            const { password: _, ...safeUser } = found;
            dispatch(loginSuccess(safeUser));
        } else {
            dispatch(loginFailure("Invalid email or password"));
        }
    };
}