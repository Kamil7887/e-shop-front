export function RegisterException() {
  this.message = "Пользователь с таким email уже существует";
  this.name = "RegisterException";
}

RegisterException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
};

export function LoginException() {
  this.message = "Неверная комбинация email и пароля";
  this.name = "TokenException";
}

LoginException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
};

export function UpdateUserException() {
  this.message = "Неудалось обновить данные пользователя";
  this.name = "UpdateUserException";
}

UpdateUserException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
};
