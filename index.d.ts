declare module 'isvalidatedarray';

export type TIsValidatedArrayConfig = {
  allowEmptyArray: boolean;
  allowEmptyObject: boolean;
};

export default function isValidatedArray(
  arr: any,
  config?: TIsValidatedArrayConfig
): boolean;
