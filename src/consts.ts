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
			{ text: 'Player retention', link: 'mod/en/growth-retention)' },
                        { text: 'Player acquisition', link: 'mod/en/growth-acquisition' },
		],
		'Engaging a community': [
			{ text: 'Community interaction', link: 'mod/en/engagement-interaction' },
		],
		'Staffing a server': [
			{ text: 'Early days', link: 'mod/en/staffing-small' },
                        { text: 'Developing processes', link: 'mod/en/staffing-medium' },
                        { text: 'Scaling processes', link: 'mod/en/staffing-large' },
		],
		'Supervising a community': [
			{ text: 'On rules', link: 'mod/en/supervising-rules' },
                        { text: 'Hard skills', link: 'mod/en/supervising-technical' },
                        { text: 'Soft skills', link: 'mod/en/supervising-social' },
                        { text: 'Emergencies', link: 'mod/en/supervising-emergencies' },
		],
	},
};

export const SIDEBARHOST: Sidebar = {
	en: {
		'General Information': [
			{ text: 'VPS vs Dedicated', link: 'host/en/general-virtualization' },
                        { text: 'Internet Protocol', link: 'host/en/general-protocol' },
                        { text: 'DOS mitigation', link: 'host/en/general-hardening' },
		],
		'Finding a host': [
			{ text: 'Getting ready', link: 'host/en/shopping-preparation' },
                        { text: 'Typical bottlenecks', link: 'host/en/shopping-bottlenecks' },
                        { text: 'Types of hosting', link: 'host/en/shopping-products' },
                        { text: 'Avoiding summerhosts', link: 'host/en/shopping-summerhosts' },
		],
		'Using your host': [
			{ text: 'Self host', link: 'host/en/usage-selfhost' },
                        { text: 'Unmanaged / colo', link: 'host/en/usage-managed' },
                        { text: 'Managed', link: 'host/en/usage-unmanaged' },
		],
	},
};

export const SIDEBARDEV: Sidebar = {
	en: {
		'Prerequisites': [
                        { text: 'Learning java', link: 'dev/en/prerequisites-java' },
                        { text: 'Creating your work environment', link: 'dev/en/prerequisites-ide' },
                        { text: 'What are Minecraft plugins?', link: 'dev/en/prerequisites-minecraft' },
		],
		'Basic plugin development': [
			{ text: 'Choosing your platform', link: 'dev/en/basics-platforms' },
                        { text: 'Spigot/paper', link: 'dev/en/basics-bukkit' },
                        { text: 'Sponge', link: 'dev/en/basics-sponge' },
                        { text: 'Minestom', link: 'dev/en/basics-minestom' },
                        { text: 'Solving problems', link: 'dev/en/basics-debugging' },
                        { text: 'Best practices', link: 'dev/en/basics-practices' },
		],
		'Advanced concepts': [
			{ text: 'Reflecting and NMS', link: 'dev/en/advanced-reflection' },
                        { text: 'Performance', link: 'dev/en/advanced-performance' },
                        { text: 'Testing', link: 'dev/en/advanced-testing' },
                        { text: 'Contributing upstream', link: 'dev/en/advanced-upstream' },
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
                'Realising your server': [
                        { text: 'Choosing a platform', link: 'admin/en/configuration-platforms' },
			{ text: 'Configuring a platform', link: 'admin/en/configuration-servers' },
                        { text: 'Finding plugins', link: 'admin/en/configuration-discernment' },
                        { text: 'Configuring plugins', link: 'admin/en/configuration-plugins' },
                        { text: 'Configuring permissions', link: 'admin/en/configuration-permissions' },
                        { text: 'Databases and storage', link: 'admin/en/configuration-storage' },
		],
		'Troubleshooting and assistance': [
                        { text: 'Troubleshooting tips', link: 'admin/en/help-troubleshooting' },
			{ text: 'Types of assistance', link: 'admin/en/help-solicitation' },
                        { text: 'Finding community support', link: 'admin/en/help-locations' },
                        { text: 'Asking good questions', link: 'admin/en/help-etiquette' },
                        { text: 'Support communities', link: '/admin/en/help-payment' },
		],
                'Monetisation and responsibility': [
			{ text: 'Planting your community', link: 'admin/en/responsibility-stewardship' },
                        { text: 'The EULA and You', link: 'admin/en/responsibility-compliance' },
                        { text: 'The Legality of You', link: 'admin/en/responsibility-legality' },
                        { text: 'Funding your vision', link: 'admin/en/responsibility-monetisation' },
		],
                'Operating your server': [
			{ text: 'Running a server', link: 'admin/en/operations-longevity' },
                        { text: 'Communicating', link: 'admin/en/operations-interaction' },
                        { text: 'Security & emergencies', link: 'admin/en/operations-responding' },
		],
	},
};

export const SIDEBAR: Sidebar = {
	en: {
		'Guides': [
			{ text: 'On hosting', link: 'host' },
                        { text: 'On administrating', link: 'admin' },
                        { text: 'On developing', link: 'dev' },
                        { text: 'On moderating', link: 'mod' },
		],
		'Resources': [
			{ text: 'For hosts', link: 'host/en/resources' },
                        { text: 'For admins', link: 'admin/en/resources' },
                        { text: 'For devs', link: 'dev/en/resources' },
                        { text: 'For mods', link: 'mod/en/resources' },
		],
                'Syscraft': [
                        { text: 'Discord server', link: 'https://discord.gg/Dx6SSkx' },
		],
	},
};