/**
 * https://www.w3schools.com/howto/howto_js_snackbar.asp
 */
import './styles.css';

export class Toast {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'little-toast';
  }

  public show(message: string): void {
    const duration = 3000;
    this.element.textContent = message;
    document.body.appendChild(this.element);
    this.element.classList.add('show');

    setTimeout(() => {
      this.element.className = this.element.className.replace('show', '');
    }, duration);

    setTimeout(() => {
      document.body.removeChild(this.element);
    }, duration - 100);
  }
}

export function showToast(message: string): void {
  new Toast().show(message);
}
