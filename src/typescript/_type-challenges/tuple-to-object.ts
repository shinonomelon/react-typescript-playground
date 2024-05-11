const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

export type Result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

export const result: Result = {
  tesla: "tesla",
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
};
