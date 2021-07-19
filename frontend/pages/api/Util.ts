export const asJson =
  <T>() =>
  (p: Response): Promise<T> =>
    p.json();
