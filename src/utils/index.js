import MainApi from "@/utils/MainApi";

export async function setToken(email, password) {
    try {
        const res = await MainApi.authorization(email, password)
        localStorage.setItem('jwt', res.token)
        return res.token;
    } catch (err) {
        console.error(`Ошибка при авторизации ${err}`)
    }
}
