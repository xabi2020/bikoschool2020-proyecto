import '@testing-library/jest-dom/extend-expect'

import { server } from './mocks/server'

process.env.REACT_APP_API_URL = 'http://localhost:3001/api/v1'

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
