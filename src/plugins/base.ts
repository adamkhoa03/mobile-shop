import type { App, Component } from 'vue';

export default function registerGlobalComponents(app: App) {
  const components = import.meta.glob('@/components/base/*.vue', { eager: true }) as Record<string, { default: Component }>;
  Object.entries(components).forEach(([path, module]) => {
    const nameConfig = path
      .split('/')
      .pop()
      ?.replace(/\.\w+$/, '');
    app.component(`Base${nameConfig}`, module.default);
  });
}
