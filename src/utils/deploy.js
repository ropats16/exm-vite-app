import { ContractType } from '@execution-machine/sdk'
import fs from 'fs'
import { exmInstance } from './exm.js'
import { state } from './state.js'

const contractSource = fs.readFileSync('./src/utils/handler.js')
const data = await exmInstance.functions.deploy(contractSource, state, ContractType.JS)

console.log({ data })

/* after the contract is deployed, write the function id to a local file */
fs.writeFileSync('./src/utils/functionId.js', `export const functionId = "${data.id}"`)
