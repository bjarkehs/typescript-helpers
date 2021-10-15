type DistributedPick<T, K extends keyof T> = T extends unknown
  ? Pick<T, K>
  : never;
