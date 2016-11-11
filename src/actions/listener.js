/* global firebase */

export function update(type, data) {
  return {
    type: type,
    data: data
  }
}