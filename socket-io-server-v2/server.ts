import express, { Application } from 'express'
import cors from 'cors'
import routes from './routes'

export const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => res.send('Project somethingGame'))

app.use('/api', routes)
const PORT = 8080
try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`)
  })
} catch (error) {
  console.error(`Error occured: ${(error as Error).message}`)
}
