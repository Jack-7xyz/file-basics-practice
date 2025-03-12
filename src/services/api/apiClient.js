// API client service
export class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    return fetch(`${this.baseUrl}${endpoint}`);
  }
}