import fs from 'node:fs'
import path from 'node:path'

const postcssBinPath = path.join(process.cwd(), 'node_modules', '.bin', 'postcss')
const postcssCliPath = path.join(process.cwd(), 'node_modules', 'postcss-cli', 'index.js')

if (!fs.existsSync(postcssCliPath)) {
  throw new Error(`postcss-cli was not found at ${postcssCliPath}`)
}

const nodeModulesPath = path.join(process.cwd(), 'node_modules')

const wrapper = `#!/usr/bin/env -S node --allow-fs-read=${nodeModulesPath}
import '../postcss-cli/index.js'
`

fs.mkdirSync(path.dirname(postcssBinPath), { recursive: true })
fs.writeFileSync(postcssBinPath, wrapper)
fs.chmodSync(postcssBinPath, 0o755)
