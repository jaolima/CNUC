// adiciona mascara de cnpj
function MascaraCNPJ(cnpj) {
  if (mascaraInteiro(cnpj) == false) {
    event.returnValue = false;
  }
  return formataCampo(cnpj, '00.000.000/0000-00', event);
}

// adiciona mascara de cep
function MascaraCep(cep) {
  if (mascaraInteiro(cep) == false) {
    event.returnValue = false;
  }
  return formataCampo(cep, '00.000-000', event);
}

// adiciona mascara de data
function MascaraData(data) {
  if (mascaraInteiro(data) == false) {
    event.returnValue = false;
  }
  return formataCampo(data, '00/00/0000', event);
}

// adiciona mascara ao telefone
function MascaraTelefone(tel) {
  if (mascaraInteiro(tel) == false) {
    event.returnValue = false;
  }
  return formataCampo(tel, '(00) 0000-0000', event);
}

// adiciona mascara ao RG
function MascaraRG(rg) {
  if (rg == false) {
    event.returnValue = false;
  }
  return formataCampo(rg, '00.000.000-0', event);
}

// adiciona mascara ao CPF
function MascaraCPF(cpf) {
  if (mascaraInteiro(cpf) == false) {
    event.returnValue = false;
  }
  return formataCampo(cpf, '000.000.000-00', event);
}

// valida telefone
function ValidaTelefone(tel) {
  exp = /\(\d{2}\)\ \d{4}\-\d{4}/;
  if (!exp.test(tel.value)) alert('Numero de Telefone Invalido!');
}

// valida CEP
function ValidaCep(cep) {
  exp = /\d{2}\.\d{3}\-\d{3}/;
  if (!exp.test(cep.value)) alert('Numero de Cep Invalido!');
}

// valida data
function ValidaData(data) {
  exp = /\d{2}\/\d{2}\/\d{4}/;
  if (!exp.test(data.value)) alert('Data Invalida!');
}

// valida o CPF digitado
function ValidarCPF(Objcpf) {
  let cpf = Objcpf.value;
  exp = /\.|\-/g;
  cpf = cpf.toString().replace(exp, '');
  const digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
  let soma1 = 0;
  let soma2 = 0;
  let vlr = 11;

  for (i = 0; i < 9; i++) {
    soma1 += eval(cpf.charAt(i) * (vlr - 1));
    soma2 += eval(cpf.charAt(i) * vlr);
    vlr--;
  }
  soma1 = (soma1 * 10) % 11 == 10 ? 0 : (soma1 * 10) % 11;
  soma2 = ((soma2 + 2 * soma1) * 10) % 11;

  const digitoGerado = soma1 * 10 + soma2;
  if (digitoGerado != digitoDigitado) alert('CPF Invalido!');
}

// valida numero inteiro com mascara
function mascaraInteiro() {
  if (event.keyCode < 48 || event.keyCode > 57) {
    event.returnValue = false;
    return false;
  }
  return true;
}

// valida o CNPJ digitado
function ValidarCNPJ(ObjCnpj) {
  let cnpj = ObjCnpj.value;
  const valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
  let dig1 = new Number();
  let dig2 = new Number();

  exp = /\.|\-|\//g;
  cnpj = cnpj.toString().replace(exp, '');
  const digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

  for (i = 0; i < valida.length; i++) {
    dig1 += i > 0 ? cnpj.charAt(i - 1) * valida[i] : 0;
    dig2 += cnpj.charAt(i) * valida[i];
  }
  dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11);
  dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11);

  if (dig1 * 10 + dig2 != digito) alert('CNPJ Invalido!');
}

// formata de forma generica os campos
function formataCampo(campo, Mascara, evento) {
  let boleanoMascara;

  const Digitato = evento.keyCode;
  exp = /\-|\.|\/|\(|\)| /g;
  campoSoNumeros = campo.value.toString().replace(exp, '');

  let posicaoCampo = 0;
  let NovoValorCampo = '';
  let TamanhoMascara = campoSoNumeros.length;

  if (Digitato != 8) {
    // backspace
    for (i = 0; i <= TamanhoMascara; i++) {
      boleanoMascara =
        Mascara.charAt(i) == '-' || Mascara.charAt(i) == '.' || Mascara.charAt(i) == '/';
      boleanoMascara =
        boleanoMascara ||
        Mascara.charAt(i) == '(' ||
        Mascara.charAt(i) == ')' ||
        Mascara.charAt(i) == ' ';
      if (boleanoMascara) {
        NovoValorCampo += Mascara.charAt(i);
        TamanhoMascara++;
      } else {
        NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
        posicaoCampo++;
      }
    }
    campo.value = NovoValorCampo;
    return true;
  }
  return true;
}
