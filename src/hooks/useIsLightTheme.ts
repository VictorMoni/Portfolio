import { useSyncExternalStore } from 'react';

const getTheme = () => document.documentElement.dataset.theme === 'light';
const getServerTheme = () => false;
const subscribeToTheme = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
};

export function useIsLightTheme() {
  return useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);
}
