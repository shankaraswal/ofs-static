/* eslint-disable camelcase */
import { encode as base64_encode } from 'base-64'

export function createAccessID(cID) {
  const accessIDHashed = `${cID}||PUBLICAPI`
  const encodedAccessID = base64_encode(accessIDHashed)
  return encodedAccessID
}
