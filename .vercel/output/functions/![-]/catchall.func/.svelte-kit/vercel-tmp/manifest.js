export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cv.pdf","robots.txt"]),
	mimeTypes: {".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CM3HqacS.js",app:"_app/immutable/entry/app.BuaBJGut.js",imports:["_app/immutable/entry/start.CM3HqacS.js","_app/immutable/chunks/D1-jrELl.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/CqeUMiEI.js","_app/immutable/chunks/mX6Ghj-x.js","_app/immutable/entry/app.BuaBJGut.js","_app/immutable/chunks/DuEA2Xsp.js","_app/immutable/chunks/D1-jrELl.js","_app/immutable/chunks/C0PKilKW.js","_app/immutable/chunks/BWIkxH78.js","_app/immutable/chunks/OCMeuVF5.js","_app/immutable/chunks/mX6Ghj-x.js","_app/immutable/chunks/BD3SoiKX.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/blog/","/cv/","/publications/","/research/","/talks/","/teaching/","/blog/welcome/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
