export function NumberFormat(numero: number) {
  const response = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numero);
  return response;
}