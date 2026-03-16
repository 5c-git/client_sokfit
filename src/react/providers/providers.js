function importAll(r) {
  r.keys().forEach(r);
}

// common + pages
importAll(require.context('./common', true, /\.(js|jsx)$/));
importAll(require.context('./pages', true, /\.(js|jsx)$/));
