export function ProductsException() {
  this.message = "Не удалось получить список товаров";
  this.name = "ProductsException";
}

ProductsException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
};
