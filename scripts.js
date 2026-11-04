"use strict";

// ========================================
// COTAÇÕES DAS MOEDAS
// ========================================

// Cotações fixas para fins de estudo.
const USD = 5.49;
const EUR = 6.16;
const GBP = 7.38;

// ========================================
// ELEMENTOS DO FORMULÁRIO
// ========================================

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// ========================================
// VALIDAÇÃO DO CAMPO
// ========================================

// Permite somente números inteiros.
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharactersRegex, "");

  // Oculta o resultado anterior ao alterar o valor.
  footer.classList.remove("show-result");
});

// Oculta o resultado ao alterar a moeda.
currency.addEventListener("change", () => {
  footer.classList.remove("show-result");
});

// ========================================
// ENVIO DO FORMULÁRIO
// ========================================

form.addEventListener("submit", (event) => {
  // Impede o comportamento padrão do formulário.
  event.preventDefault();

  // Converte o valor digitado para número.
  const value = Number(amount.value);

  // Verifica se o valor informado é válido.
  if (!Number.isSafeInteger(value) || value <= 0) {
    footer.classList.remove("show-result");

    alert("Por favor, digite um valor válido maior que zero.");
    amount.focus();
    return;
  }

  // Identifica a moeda selecionada.
  switch (currency.value) {
    case "USD":
      convertCurrency(value, USD, "US$");
      break;

    case "EUR":
      convertCurrency(value, EUR, "€");
      break;

    case "GBP":
      convertCurrency(value, GBP, "£");
      break;

    default:
      footer.classList.remove("show-result");
      alert("Por favor, selecione uma moeda válida.");
      currency.focus();
      break;
  }
});

// ========================================
// CONVERSÃO DE MOEDAS
// ========================================

function convertCurrency(amount, price, symbol) {
  try {
    // Calcula o valor convertido para reais.
    const total = amount * price;

    // Verifica se o resultado é um número válido.
    if (!Number.isFinite(total)) {
      throw new Error("Resultado da conversão inválido.");
    }

    // Exibe a cotação da moeda selecionada.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Formata o valor total em reais.
    const formattedTotal = formatCurrencyBRL(total).replace("R$", "").trim();

    // Atualiza o resultado na página.
    result.textContent = `${formattedTotal} Reais`;

    // Exibe o resultado da conversão.
    footer.classList.add("show-result");
  } catch (error) {
    // Registra o erro no console.
    console.error("Erro ao converter moeda:", error);

    // Oculta o resultado em caso de erro.
    footer.classList.remove("show-result");

    // Informa o usuário sobre o erro.
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}

// ========================================
// FORMATAÇÃO DE MOEDA
// ========================================

function formatCurrencyBRL(value) {
  // Formata o número para o padrão monetário brasileiro.
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
