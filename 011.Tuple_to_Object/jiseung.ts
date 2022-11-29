type TupleToObject<T extends readonly (number | string)[]> = {
  [k in T[number]]: k;
};
