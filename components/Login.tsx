import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [secretType, setSecretType] = useState("password");
  const [authError, setAuthError] = useState("");
  const router = useRouter();

  const attemptLogin = async (event: any) => {
    event.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      body: JSON.stringify({
        login,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((r) => r.json())
      .then((payload) => {
        if (payload && payload.error) {
          setAuthError(payload.message);
          console.log(authError);
        }
        if (payload && payload.token) {
          Cookies.set("token", payload.token, { expires: 1 });
          router.push("/main");
        }
      });

    setLogin("");
    setPassword("");
  };

  const handleSecretType = async (event: any) => {
    return secretType === "password"
      ? setSecretType("text")
      : setSecretType("password");
  };

  return (
    <div className="flex items-center justify-center min-h-screen min-w-full bg-gray-500">
      <section className="flex flex-col items-center justify-center h-96 w-1/3 rounded-md shadow-lg bg-white">
        <form onSubmit={attemptLogin} className="flex flex-col">
          <label htmlFor="login">Login:</label>
          <input
            required
            type="text"
            id="login"
            name="login"
            value={login}
            autoComplete="true"
            onChange={(e) => setLogin(e.target.value)}
            className="border-2 border-gray-100 rounded-md shadow-md mb-6"
          />
          <label htmlFor="password">Password:</label>
          <input
            required
            type={secretType}
            id="password"
            name="password"
            value={password}
            autoComplete="true"
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-100 rounded-md shadow-md"
          />
          <span className="flex items-center gap-1 mt-2 text-sm">
            <input type="checkbox" onClick={handleSecretType} />
            Exibir senha
          </span>

          <button
            type="submit"
            className="my-12 bg-gray-600 text-white rounded-md max-w-max self-center px-8 py-3"
          >
            Entrar
          </button>
          {authError && (
            <p className="container text-center text-xs text-red-500">
              {authError}
            </p>
          )}
        </form>
        <a className="cursor-pointer">Esqueceu sua senha?</a>
      </section>
    </div>
  );
}
