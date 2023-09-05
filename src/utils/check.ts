export const isJsonString = (str: string) => {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

export const isEmptyValue = (value: any) => {
  if (
    isNaN(value) ||
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0) ||
    (Array.isArray(value) && value.length === 0)
  ) {
    return true
  }
  return false
}

export const isExist = (value: any) => {
  return !isEmptyValue(value)
}

export function cleanObject(obj: any) {
  for (const propName in obj) {
    if (isEmptyValue(obj[propName])) {
      delete obj[propName]
    }
  }
  return obj
}
