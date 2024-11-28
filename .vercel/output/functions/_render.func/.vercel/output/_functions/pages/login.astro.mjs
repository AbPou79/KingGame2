/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as createAstro, a as addAttribute } from '../chunks/astro/server_CMFNTK8X.mjs';
import 'kleur/colors';
import { h as hasProfile, $ as $$Layout } from '../chunks/profile_kB-ACRko.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="/api/login" accept-charset="UTF-8" method="POST" class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"> <h1 class="text-2xl font-bold text-center text-gray-700">Login</h1> <!-- Email Field --> <div class="flex flex-col space-y-2"> <label for="email" class="text-sm font-medium text-gray-600">Email:</label> <input type="email" name="email" id="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email"> </div> <!-- Password Field --> <div class="flex flex-col space-y-2"> <label for="password" class="text-sm font-medium text-gray-600">Password:</label> <input type="password" name="password" id="password" required class="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password"> </div> <!-- Submit Button --> <button type="submit" class="w-full py-2 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition duration-300">
Submit
</button> </form>`;
}, "/home/john/Documents/projects/Farzan-Game/King-Game-Intro/src/components/LoginForm.astro", void 0);

const $$Astro = createAstro();
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const cookie = `${Astro2.cookies.get("_Security_Login_")?.value}`;
  const d = hasProfile(cookie, "secret");
  if (d.success === true) {
    return Astro2.redirect("/");
  }
  const error = new URL(Astro2.request.url).searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "login", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-sgpqyurt> <div class="absolute inset-0 -z-10 overflow-hidden" data-astro-cid-sgpqyurt> <svg class="absolute top-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" data-astro-cid-sgpqyurt> <path fill="#4f46e5" fill-opacity="0.2" d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,160C420,139,480,85,540,64C600,43,660,53,720,96C780,139,840,213,900,213.3C960,213,1020,139,1080,96C1140,53,1200,43,1260,74.7C1320,107,1380,181,1410,218.7L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z" data-astro-cid-sgpqyurt></path> </svg> <svg class="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" data-astro-cid-sgpqyurt> <path fill="#4f46e5" fill-opacity="0.2" d="M0,224L30,202.7C60,181,120,139,180,133.3C240,128,300,160,360,192C420,224,480,256,540,234.7C600,213,660,139,720,128C780,117,840,171,900,181.3C960,192,1020,160,1080,144C1140,128,1200,128,1260,149.3C1320,171,1380,213,1410,234.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" data-astro-cid-sgpqyurt></path> </svg> </div> <div${addAttribute(`min-h-screen flex items-center justify-center ${error === "true" ? "error-active" : ""}`, "class")} data-astro-cid-sgpqyurt>  ${error === "true" && renderTemplate`<div class="absolute top-4 w-full max-w-md mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded" data-astro-cid-sgpqyurt> <p data-astro-cid-sgpqyurt>Error: Could not login. Please verify your credentials.</p> </div>`}  <div class="w-full max-w-md p-6 " data-astro-cid-sgpqyurt> ${renderComponent($$result2, "LoginForm", $$LoginForm, { "data-astro-cid-sgpqyurt": true })} </div> </div> </main> ` })} `;
}, "/home/john/Documents/projects/Farzan-Game/King-Game-Intro/src/pages/login.astro", void 0);
const $$file = "/home/john/Documents/projects/Farzan-Game/King-Game-Intro/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
