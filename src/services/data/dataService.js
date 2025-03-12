// Data management service
export const dataService = {
  cache: new Map(),
  getData: (key) => this.cache.get(key)
};