export interface Options {
  duration?: number;
}

export interface IToast {
  show: (message: string, options?: Options) => void;
}
