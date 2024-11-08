import * as yaml from 'js-yaml'
import { join } from 'node:path'
import { readFileSync } from 'node:fs'

const configFileName = {
  development: 'dev',
  production: 'prod',
  test: 'test'
}

export default () => {
  return yaml.load(readFileSync(join(__dirname, `./${configFileName[process.env.NODE_ENV]}.yml`), 'utf8')) as Record<string, any>
}
