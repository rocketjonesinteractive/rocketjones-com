'use client';

declare global {
  // eslint-disable-next-line no-var
  var isAutoScrolling: boolean | undefined;
  // eslint-disable-next-line no-var
  var autoScrollTimeout: NodeJS.Timeout | undefined;
}

export const scrollToElementId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    global.isAutoScrolling = true;
    if (global.autoScrollTimeout) clearTimeout(global.autoScrollTimeout);
    global.autoScrollTimeout = setTimeout(() => {
      global.isAutoScrolling = false;
    }, 1500);
    history.pushState({}, '', '#' + id);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }
};
