export function OrderException() {
  this.message = "Не удалось получить список заказов";
  this.name = "OrderException";
}

OrderException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
};
