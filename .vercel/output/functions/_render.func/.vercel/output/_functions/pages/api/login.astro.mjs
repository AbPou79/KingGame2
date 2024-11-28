import wbtl from 'jsonwebtoken';
export { renderers } from '../../renderers.mjs';

function dbLogin(email, password) {
  let username = null;
  let success = true;
  return new Promise((resolve, reject) => {
    if (email === "farzan@king.com" && password === "farzan123") {
      username = "User Test";
    } else {
      success = false;
    }
    resolve({ success, username });
  });
}

async function login({
  email,
  password,
  maxAge,
  secret
}) {
  const getLoginData = await dbLogin(email, password).then((data) => {
    return data;
  });
  if (getLoginData.success === false) {
    return { success: false, token: null, max: null };
  }
  const expire = Math.floor(Date.now() / 1e3) + maxAge;
  const token = wbtl.sign(
    {
      exp: expire,
      email,
      username: getLoginData.username
    },
    secret
  );
  return { success: true, token: `${token}`, max: maxAge };
}

const cookieName = "_Security_Login_";
let maxAge = 604800;
const POST = async ({ cookies, redirect, request }) => {
  const data = Object.fromEntries(new URLSearchParams(await request.text()));
  const d = await login({
    email: data.email,
    password: data.password,
    maxAge: Number("604800"),
    secret: "secret"
  });
  let token = "none";
  if (d.success === true) {
    token = d?.token || "none";
    maxAge = d?.max || 604800;
    cookies.set(cookieName, token, {
      path: "/",
      maxAge,
      secure: Boolean("false")
    });
    return redirect("/");
  }
  return redirect("/login?error=true");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
