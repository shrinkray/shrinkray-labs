export const SITE = {
	name: 'ShrinkrayLabs Blog',

	origin: 'https://shrinkray-labs.vercel.app/',
	basePathname: '/',

	title: 'ShrinkrayLabs Portfolio',
	description: 'ShrinkrayLabs is a blog about the Semantic Web, Accessibility, and UX Engineering in the modern web.',

	googleAnalyticsId: 'G-97ZN1P6C1K', // or "G-97ZN1P6C1K", or false
	googleSiteVerificationId: false, // was 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: "blog", // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: "", // empty for /some-post, value for /pathname/some-post
	},

	page: {
		disabled: false,
		pathname: "", //
	},

	category: {
		disabled: false,
		pathname: "category", // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: "tag", // set empty to change from /tag/some-tag to /some-tag
	},
};
