export type Base = {
  id: string;
  title: string;
};

export type Book = {
  id: string;
  title: string;
  author: string;
};

export type Movie = {
  id: string;
  title: string;
  releaseDate: string;
};

export type GenericSelectProps<TValue> = {
  values: TValue[];
  onChange: (value: TValue) => void;
};
