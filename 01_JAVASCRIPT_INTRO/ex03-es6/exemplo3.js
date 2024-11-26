// Template Literals - interpolação de strings
const pNome = "Jonh";
const uNome = "Donh";
const anoNascimento = 2004;

console.log(`O usuário ${pNome} ${uNome} 
    tem ${new Date().getFullYear() - anoNascimento} anos de idade.`);