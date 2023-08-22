export const load = ({ url }) => {
	return {
		url: url.pathname
	};
};

// https://kit.svelte.dev/docs/page-options#trailingslash
export const trailingSlash = 'always';
export const prerender = true;
