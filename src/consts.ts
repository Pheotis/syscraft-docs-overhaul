export const SITE = {
	title: 'Syscraft',
	description: 'A community for Minecraft server admins, developers and hosts.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: '/default-og-image.jpg',
		alt:
			'syscraft logo with a dark blue background,' +
			' with text saying "A community for Minecraft server admins, developers and hosts"',
	},
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/syscraft-mc/syscraft.dev/blob/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/Dx6SSkx`;

export const REDDIT_URL = `https://reddit.com/r/syscraft`;

export const GITHUB_ORG_URL = `https://github.com/syscraft-mc`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'syscraft',
	appId: 'G3UIT7DZCW',
	apiKey: 'dc2aa8b99cc010d3ae8c61e6d5139a39',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBARMOD: Sidebar = {
	en: {
		'Growing a community': [
			{ text: 'Player retention', link: 'javascript:void(0)' },
                        { text: 'Player acquisition', link: 'javascript:void(0)' },
		],
		'Engaging a community': [
			{ text: 'Community interaction', link: 'javascript:void(0)' },
		],
		'Staffing a server': [
			{ text: 'Early days', link: 'javascript:void(0)' },
                        { text: 'Developing processes', link: 'javascript:void(0)' },
                        { text: 'Scaling processes', link: 'javascript:void(0)' },
		],
		'Supervising a community': [
			{ text: 'On rules', link: 'javascript:void(0)' },
                        { text: 'Hard skills', link: 'javascript:void(0)' },
                        { text: 'Soft skills', link: 'javascript:void(0)' },
                        { text: 'Emergencies', link: 'javascript:void(0)' },
		],
	},
};

export const SIDEBARHOST: Sidebar = {
	en: {
		'General Information': [
			{ text: 'VPS vs Dedicated', link: 'javascript:void(0)' },
                        { text: 'NAT vs Ipv4 vs Ipv6', link: 'javascript:void(0)' },
                        { text: 'DNS & websites', link: 'javascript:void(0)' },
                        { text: 'DOS mitigation', link: 'javascript:void(0)' },
		],
		'Finding a host': [
			{ text: 'Getting ready', link: 'javascript:void(0)' },
                        { text: 'Typical bottlenecks', link: 'javascript:void(0)' },
                        { text: 'Types of hosting', link: 'javascript:void(0)' },
                        { text: 'Avoiding summerhosts', link: 'javascript:void(0)' },
		],
		'Using your host': [
			{ text: 'Self host', link: 'javascript:void(0)' },
                        { text: 'Unmanaged / colo', link: 'javascript:void(0)' },
                        { text: 'Managed', link: 'javascript:void(0)' },
		],
	},
};

export const SIDEBARDEV: Sidebar = {
	en: {
		'Prerequisites': [
			{ text: 'What is plugin development?', link: 'javascript:void(0)' },
                        { text: 'Learning java (some tips)', link: 'javascript:void(0)' },
                        { text: 'Generally applicable concepts', link: 'javascript:void(0)' },
                        { text: 'Setting up a workspace', link: 'javascript:void(0)' },
		],
		'Basic plugin development': [
			{ text: 'Choosing your platform', link: 'javascript:void(0)' },
                        { text: 'Spigot/paper', link: 'javascript:void(0)' },
                        { text: 'Sponge', link: 'javascript:void(0)' },
                        { text: 'Minestom', link: 'javascript:void(0)' },
                        { text: 'On Documentation', link: 'javascript:void(0)' },
		],
		'Advanced concepts': [
			{ text: 'Reflecting on NMS', link: 'javascript:void(0)' },
                        { text: 'Kotlin, mixins, etc.', link: 'javascript:void(0)' },
                        { text: 'Performance', link: 'javascript:void(0)' },
                        { text: 'Testing', link: 'javascript:void(0)' },
                        { text: 'Contributing upstream', link: 'javascript:void(0)' },
		],
	},
};

export const SIDEBARADMIN: Sidebar = {
	en: {
		'Designing your server': [
			{ text: 'Game design', link: 'admin/en/design-gameplay' },
                        { text: 'Creativity and archetypes', link: 'admin/en/design-archetypes' },
                        { text: 'Economy design', link: 'admin/en/design-economy' },
                        { text: 'QA & balancing', link: 'admin/en/design-balancing' },
                        { text: 'Project management', link: 'admin/en/design-fruition' },
		],
		'Troubleshooting and assistance': [
			{ text: 'Troubleshooting', link: 'javascript:void(0)' },
                        { text: 'Seeking assistance', link: 'javascript:void(0)' },
                        { text: 'Paid Help', link: 'javascript:void(0)' },
		],
                'Monetisation and responsibility': [
			{ text: 'The EULA and you', link: 'javascript:void(0)' },
                        { text: 'Monetisation practices', link: 'javascript:void(0)' },
                        { text: 'Tebex, taxes, and TOS', link: 'javascript:void(0)' },
                        { text: 'Setting rules', link: 'javascript:void(0)' },
		],
                'Operating your server': [
			{ text: 'Emergency management', link: 'javascript:void(0)' },
                        { text: 'Communication', link: 'javascript:void(0)' },
                        { text: 'Pacing and longevity', link: 'javascript:void(0)' },
		],
	},
};

export const SIDEBAR: Sidebar = {
	en: {
		'Generic': [
			{ text: 'placeholder', link: 'javascript:void(0)' },
		],
	},
};