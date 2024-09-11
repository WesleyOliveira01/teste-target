export class InverterStringUseCase {
  execute(str: string): string {
    let inverted = "";
    for (let i = str.length - 1; i >= 0; i--) {
      inverted += str[i];
    }
    return `String invertida: ${inverted}`;
  }
}
