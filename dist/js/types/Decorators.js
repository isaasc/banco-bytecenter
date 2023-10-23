export function ValidaDeposito(target, propertyKey, descriptor) {
    console.log(target, 'target');
    console.log(propertyKey, 'propertyKey');
    console.log(descriptor, 'descriptor');
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito) {
        if (valorDoDeposito <= 0) {
            throw new Error("O valor a ser depositado deve ser maior do que zero!");
        }
        return originalMethod.apply(this, [valorDoDeposito]);
    };
    return descriptor;
}
