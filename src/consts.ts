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
export const SIDEBAR: Sidebar = {
	en: {
		'Mod': [
			{ text: 'Growing a Community', link: '' },
			{ text: 'Managing a Community', link: '' }
		],
		'Admin': [
			{ text: 'Introduction', link: '' },
			{ text: 'Getting Started', link: '' },
			{ text: 'Designing Gameplay', link: '' },
		],
		'Dev': [
			{ text: 'Introduction', link: '' },
			{ text: 'Getting Started', link: '' },
			{ text: 'Advanced', link: '' }
		],
		'Host': [
			{ text: 'Introduction', link: '' },
			{ text: 'Using a Host', link: '' },
			{ text: 'Self Hosting', link: '' },
			{ text: 'Hosting for Others', link: '' },
		],
		'Other / Misc': [
			{ text: 'TBD', link: '' },
		],
	},
};

export const MODBAR: Sidebar = {
	en: {
		'Growing a Community': [
			{ text: 'Attracting Players', link: '' },
			{ text: 'Retaining Players', link: '' },
		],
		'Managing a Community': [
			{ text: 'Creating Rules', link: '' },
			{ text: 'Enforcing Your Rules', link: '' },
			{ text: 'Recruiting Staff', link: '' },
			{ text: 'Managing Staff', link: '' },
		],
	},
};

export const ADMINBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: 'Servers in General', link: '' },
			{ text: 'The Minecraft Ecosystem', link: '' },
		],
		'Getting Started': [
			{ text: 'Setting up Your Server', link: '' }, // redirect to host subsite.
			{ text: 'Configuring Plugins', link: '' },
			{ text: 'Setting up Permissions', link: '' },
		],
		'Designing Gameplay': [
			{ text: 'Standard Gamemodes', link: '' },
			{ text: 'Gameplay Objectives', link: '' },
			{ text: 'Virtual Economics', link: '' },
		],
	},
};

export const DEVBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: 'Learning Java', link: '' },
			{ text: 'The Minecraft Ecosystem', link: '' },
			{ text: 'Scripts vs. Plugins', link: '' },
		],
		'Getting Started': [
			{ text: 'Making a Minecraft Plugin', link: '' },
		],
		'Advanced': [
			{ text: 'A Guide to NMS', link: '' },
			{ text: 'Making Paper Pull Requests', link: '' },
		],
	},
};

export const HOSTBAR: Sidebar = {
	en: {
		'General Information': [
			{ text: 'Do You Need a Host?', link: '' },
			{ text: 'Server Security Tips', link: '' },
			{ text: 'Improving Server Performance', link: '' },
		],	
		'Using a Host': [
			{ text: 'Choosing A Server Host', link: '' },
			{ text: 'Starting Your Server', link: '' },
		],
		'Self Hosting': [
			{ text: 'A Guide to Self Hosting', link: '' },
			{ text: 'Deploying a Minecraft Server', link: '' },
		],
		'Hosting for Others': [
		],
	},
};