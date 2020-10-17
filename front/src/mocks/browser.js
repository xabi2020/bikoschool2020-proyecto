// src/mocks/server.js
import { setupWorker } from 'msw/node'
import { handlers } from './handler'

// This configures a request mocking server with the given request handlers.
export const worker = setupWorker(...handlers)