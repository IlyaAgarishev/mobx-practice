import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
  timer = 60;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }

  // Computed св-во. Если юзаем автоматическое слежение makeAutoObservable, то любая ф-ия  помеченная ключевым словом get будет
  // являться ключевым св-ом.
  // Ф-я будет вызываться только в том случае, если какой-то из параметров состояния timer/counter изменил свое значение.
  get total() {
    return `Count + Timer = ${this.count + this.timer}`;
  }
}

export default new Counter();
