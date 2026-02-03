/**
 * API Configuration
 * Centralized API configuration and base URLs
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:9099'
const API_PREFIX = '/api'

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  prefix: API_PREFIX,
  timeout: 30000,
}

export default API_CONFIG
