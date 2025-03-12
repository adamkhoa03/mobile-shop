export type ConfigProps = {
    Sidebar_drawer: boolean;
    mini_sidebar: boolean;
    actTheme: string;
    fontTheme: string;
};

const config: ConfigProps = {
    Sidebar_drawer: true,
    mini_sidebar: false,
    actTheme: 'light',
    fontTheme: 'Public sans'
};

export const app = {
    api: {
        url: import.meta.env.VITE_API_URL
    },
    paging: {
        pageSize: 10
    }
}

export default config;
