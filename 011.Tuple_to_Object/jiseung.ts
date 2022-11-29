type TupleToObject<T extends readonly any[]> = { [k in T[number]]: k };
