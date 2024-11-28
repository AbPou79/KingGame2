import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro } from './astro/server_CMFNTK8X.mjs';
import 'kleur/colors';
import 'clsx';
import wbtl from 'jsonwebtoken';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.jpg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200 min-h-screen"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/john/Documents/projects/Farzan-Game/King-Game-Intro/src/layouts/Layout.astro", void 0);

function hasProfile(myToken, secret) {
  let email = null;
  let username = null;
  let success = true;
  switch (myToken) {
    case "undefined":
      success = false;
      return { success, email, username };
    case void 0:
      success = false;
      return { success, email, username };
    case "null":
      success = false;
      return { success, email, username };
    case null:
      success = false;
      return { success, email, username };
    default: {
      const data = wbtl.verify(myToken, secret);
      if (data.email && data.username) {
        email = data.email;
        username = data.username;
      } else {
        success = false;
      }
      return { success, email, username };
    }
  }
}

export { $$Layout as $, hasProfile as h };
