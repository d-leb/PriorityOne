import path from 'path'

const __dirname = process.cwd()

export const paths = {
  base: __dirname,
  build: path.join(__dirname, 'build/'),
  files: path.join(__dirname, 'public/'),
  src: path.join(__dirname, 'src/'),
}

const errorColor = '\x1b[31m'
const defaultColor = '\x1b[0m'

export const handleError = (error) => {
  if (error) {
    console.error(`${errorColor}An error occurred:${defaultColor}\n`)
    throw error
  }
}
