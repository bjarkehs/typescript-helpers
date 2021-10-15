type DistributedOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;
