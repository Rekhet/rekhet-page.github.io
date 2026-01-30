import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.g110qf-z.js","_app/immutable/chunks/OCMeuVF5.js","_app/immutable/chunks/D1-jrELl.js","_app/immutable/chunks/BLX2tk0C.js","_app/immutable/chunks/C0PKilKW.js"];
export const stylesheets = [];
export const fonts = [];
