import { DatabaseSchema } from 'databaseSchema'
import { LowdbSync } from 'lowdb'

declare global {
  namespace Express {
    interface Request {
      context: {
        db: LowdbSync<DatabaseSchema>
      }
    }
  }
}
