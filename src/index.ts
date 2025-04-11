/**
 * https://www.w3schools.com/howto/howto_js_snackbar.asp
 */
import './styles.css';

export interface Options {
  duration?: number;
}

export interface IToast {
  show: (message: string, options?: Options) => void;
}

const DEFAULT_OPTIONS: Options = {
  duration: 3000,
};

export class Toast implements IToast {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'little-toast';
  }

  public show(message: string, options?: Options): void {
    const { duration } = Object.assign({ ...DEFAULT_OPTIONS }, options || {});

    this.element.textContent = message;
    document.body.appendChild(this.element);
    this.element.classList.add('show');

    if (Number(duration) > 0) {
      setTimeout(() => {
        this.element.className = this.element.className.replace('show', '');
      }, duration);

      setTimeout(() => {
        document.body.removeChild(this.element);
      }, (duration as number) - 100);
    }
  }
}

export function showToast(message: string, options?: Options): void {
  new Toast().show(message, options);
}
