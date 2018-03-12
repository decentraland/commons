import { abi } from './artifacts/ServiceLocator.json'
import { Contract } from '../ethereum'
import { env } from '../env'

/** ServiceLocator contract class */
export class ServiceLocator extends Contract {
  static getContractName() {
    return 'ServiceLocator'
  }

  static getDefaultAddress() {
    return env.universalGet('SERVICE_LOCATOR_CONTRACT_ADDRESS')
  }

  static getDefaultAbi() {
    return abi
  }
}
