export function validateCPF(cpf: string): boolean {
  // Remove caracteres não numéricos
  const cleanedCPF = cpf.replace(/[^\d]/g, "");

  // Verifica se tem 11 dígitos
  if (cleanedCPF.length !== 11) {
    return false;
  }

  // Elimina CPFs com todos os dígitos iguais
  if (/^(\d)\1+$/.test(cleanedCPF)) {
    return false;
  }

  // Função para calcular os dígitos verificadores
  const calcularDigito = (cpfParcial: string, fator: number): number => {
    let total = 0;

    for (let i = 0; i < cpfParcial.length; i++) {
      total += parseInt(cpfParcial.charAt(i)) * fator--;
    }

    const resto = total % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const primeiroDigito = calcularDigito(cleanedCPF.slice(0, 9), 10);
  const segundoDigito = calcularDigito(
    cleanedCPF.slice(0, 9) + primeiroDigito,
    11
  );

  // Compara com os dígitos reais do CPF
  return cleanedCPF.endsWith(`${primeiroDigito}${segundoDigito}`);
}
