import { find, connect, isDeviceConnected, isDeviceSupported, DeviceType, checkProperties, isSerialType } from "./SerialAPI";

interface SerialType {
  find: () => Array<DeviceType>;
  connect: () => void;
  isDeviceConnected: (device: DeviceType) => boolean;
  isDeviceSupported: (device: DeviceType) => Promise<boolean>;
}

const serial: SerialType | any = {};
serial.find = find;
serial.connect = connect;
serial.isDeviceConnected = isDeviceConnected;
serial.isDeviceSupported = isDeviceSupported;
serial.checkProperties = checkProperties;

export default serial;
export { DeviceType, isSerialType };
