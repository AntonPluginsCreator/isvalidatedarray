/*!
 * isvalidatedarray v1.0.1 (https://github.com/AntonPluginsCreator/isvalidatedarray)
 * Copyright (c) 2022 Anton Maklakov
 * Licensed under MIT (https://github.com/AntonPluginsCreator/isvalidatedarray/blob/main/LICENSE)
 */
export default function isValidatedArray(
  arr,
  config = { allowEmptyArray: false, allowEmptyObject: false }
) {
  if (Array.isArray(arr) && arr.length > 0 && arr) {
    let bool = false;
    arr.forEach((el) => {
      if (
        !el ||
        (!config.allowEmptyObject &&
          Object.getPrototypeOf(el) === Object.prototype &&
          Object.keys(el).length === 0) ||
        (!config.allowEmptyArray && Array.isArray(el) && el.length === 0)
      )
        bool = true;
    });
    if (bool) return false;
    return true;
  } else return false;
}
