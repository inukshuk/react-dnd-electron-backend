import ElectronBackend from './ElectronBackend';
import getEmptyImage from './getEmptyImage';
import * as NativeTypes from './NativeTypes';

export { NativeTypes, getEmptyImage };

export default function createElectronBackend(manager) {
  return new ElectronBackend(manager);
}
