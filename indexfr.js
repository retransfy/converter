// Currency placeholder Change
// Networks options based on selected sender Country
function onSenderCountryChange() {
  const senderCountry = document.getElementById("senderCountry").value;
  const sendAmountInput = document.getElementById("sendAmount");

  if (senderCountry === "GHANA") { sendAmountInput.placeholder = "Entrer le montant en GHS"; }
  else { sendAmountInput.placeholder = "Entrer le montant en FCFA"; }
  sendAmountInput.style.textAlign = "center";


  const senderCountrySelect = document.querySelector('#senderCountry');
  const senderNetworkSelect = document.querySelector('#senderNetwork');
  const selectedCountry = senderCountrySelect.value;

  // Clear existing options
  senderNetworkSelect.innerHTML = '';

  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = 'N/A';
  defaultOption.textContent = 'Choisir';
  senderNetworkSelect.appendChild(defaultOption);

  // Add appropriate network options based on selected country
  if (selectedCountry === "TOGO") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov';

    const togocelOption = document.createElement('option');
    togocelOption.value = 'TOGOCEL';
    togocelOption.textContent = 'Togocel';

    senderNetworkSelect.appendChild(moovOption);
    senderNetworkSelect.appendChild(togocelOption);
  }

  else if (selectedCountry === "BENIN") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov';

    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN';

    senderNetworkSelect.appendChild(moovOption);
    senderNetworkSelect.appendChild(mtnOption);
  }

  else if (selectedCountry === "BURKINA-FASO") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov';

    const orangeOption = document.createElement('option');
    orangeOption.value = 'ORANGE';
    orangeOption.textContent = 'Orange';

    senderNetworkSelect.appendChild(moovOption);
    senderNetworkSelect.appendChild(orangeOption);
  }

  else if (selectedCountry === "CÔTE D'IVOIRE") {
    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN';

    const orangeOption = document.createElement('option');
    orangeOption.value = 'ORANGE';
    orangeOption.textContent = 'Orange';

    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov';

    senderNetworkSelect.appendChild(mtnOption);
    senderNetworkSelect.appendChild(orangeOption);
    senderNetworkSelect.appendChild(moovOption);
  }

  else {
    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN';

    const vodafoneOption = document.createElement('option');
    vodafoneOption.value = 'VODAFONE';
    vodafoneOption.textContent = 'Vodafone';

    const airtelTigoOption = document.createElement('option');
    airtelTigoOption.value = 'AIRTELTIGO';
    airtelTigoOption.textContent = 'AirtelTigo';

    senderNetworkSelect.appendChild(mtnOption);
    senderNetworkSelect.appendChild(vodafoneOption);
    senderNetworkSelect.appendChild(airtelTigoOption);
  }
}


// Networks options based on selected senderCountry and receiverCountry
function onReceiverCountryChange() {
  const receiverCountrySelect = document.querySelector('#receiverCountry');
  const receiverNetworkSelect = document.querySelector('#receiverNetwork');
  const selectedReceiverCountry = receiverCountrySelect.value;

  // Clear existing options
  receiverNetworkSelect.innerHTML = '';

  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = 'N/A';
  defaultOption.textContent = 'Choisir';
  receiverNetworkSelect.appendChild(defaultOption);

  // Add appropriate network options based on selected country
  if (selectedReceiverCountry === "TOGO") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov';

    const togocelOption = document.createElement('option');
    togocelOption.value = 'TOGOCEL';
    togocelOption.textContent = 'Togocel';

    receiverNetworkSelect.appendChild(moovOption);
    receiverNetworkSelect.appendChild(togocelOption);
  }

  else if (selectedReceiverCountry === "BENIN") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov';

    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN';

    receiverNetworkSelect.appendChild(moovOption);
    receiverNetworkSelect.appendChild(mtnOption);
  }

  else if (selectedReceiverCountry === "BURKINA-FASO") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov';

    const orangeOption = document.createElement('option');
    orangeOption.value = 'ORANGE';
    orangeOption.textContent = 'Orange';

    receiverNetworkSelect.appendChild(moovOption);
    receiverNetworkSelect.appendChild(orangeOption);
  }

  else if (selectedReceiverCountry === "CÔTE D'IVOIRE") {
    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN';

    const orangeOption = document.createElement('option');
    orangeOption.value = 'ORANGE';
    orangeOption.textContent = 'Orange';

    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov';

    receiverNetworkSelect.appendChild(mtnOption);
    receiverNetworkSelect.appendChild(orangeOption);
    receiverNetworkSelect.appendChild(moovOption);
  }

  else {
    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN';

    const vodafoneOption = document.createElement('option');
    vodafoneOption.value = 'VODAFONE';
    vodafoneOption.textContent = 'Vodafone';

    const airtelTigoOption = document.createElement('option');
    airtelTigoOption.value = 'AIRTELTIGO';
    airtelTigoOption.textContent = 'AirtelTigo';

    receiverNetworkSelect.appendChild(mtnOption);
    receiverNetworkSelect.appendChild(vodafoneOption);
    receiverNetworkSelect.appendChild(airtelTigoOption);
  }


}


//Transaction fee calculation
function calculateTransactionFee() {
  let transactionFee = 0;

  // Transaction Fees (GHANA to TOGO)
  if (senderCountry === "GHANA" && receiverCountry === "TOGO") {
    if (sendAmount >= 50 && sendAmount <= 150) { transactionFee = 5; }
    else if (sendAmount >= 151 && sendAmount <= 500) { transactionFee = 10; }
    else if (sendAmount >= 501 && sendAmount <= 800) { transactionFee = 15; }
    else if (sendAmount >= 801 && sendAmount <= 1200) { transactionFee = 20; }
    else if (sendAmount >= 1201 && sendAmount <= 2000) { transactionFee = 25; }
    else if (sendAmount >= 2001 && sendAmount <= 5000) { transactionFee = 40; }
    else if (sendAmount >= 5001 && sendAmount <= 8000) { transactionFee = 70; }
    else if (sendAmount >= 8001 && sendAmount <= 10000) { transactionFee = 95; }
    else if (sendAmount >= 10001 && sendAmount <= 30000) { transactionFee = ((sendAmount * 1) / 100); }
    else if (sendAmount >= 30001 && sendAmount <= 100000) { transactionFee = ((sendAmount * 9) / 1000); }

  }

  // Transaction Fees (GHANA to BCB)
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO") {
    if (sendAmount >= 100 && sendAmount <= 150) { transactionFee = 10; }
    else if (sendAmount >= 151 && sendAmount <= 500) { transactionFee = 15; }
    else if (sendAmount >= 501 && sendAmount <= 800) { transactionFee = 20; }
    else if (sendAmount >= 801 && sendAmount <= 1200) { transactionFee = 25; }
    else if (sendAmount >= 1201 && sendAmount <= 2000) { transactionFee = 40; }
    else if (sendAmount >= 2001 && sendAmount <= 5000) { transactionFee = 50; }
    else if (sendAmount >= 5001 && sendAmount <= 8000) { transactionFee = 80; }
    else if (sendAmount >= 8001 && sendAmount <= 10000) { transactionFee = 120; }
    else if (sendAmount >= 10001 && sendAmount <= 30000) { transactionFee = ((sendAmount * 11) / 1000); }
    else if (sendAmount >= 30001 && sendAmount <= 100000) { transactionFee = ((sendAmount * 1) / 100); }

  }

  // Transaction Fees (ALL COUNTRIES to GHANA)
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA") {
    if (sendAmount < 1000) { transactionFee = 0; }
    else if (sendAmount >= 1000 && sendAmount <= 5000) { transactionFee = 500; }
    else if (sendAmount >= 6000 && sendAmount <= 20000) { transactionFee = 1000; }
    else if (sendAmount >= 21000 && sendAmount <= 40000) { transactionFee = 2000; }
    else if (sendAmount >= 41000 && sendAmount <= 60000) { transactionFee = 3000; }
    else if (sendAmount >= 61000 && sendAmount <= 100000) { transactionFee = 4000; }
    else if (sendAmount >= 101000 && sendAmount <= 200000) { transactionFee = 5000; }
    else if (sendAmount >= 201000 && sendAmount <= 600000) { transactionFee = 8000; }
    else if (sendAmount >= 601000 && sendAmount <= 1000000) { transactionFee = 10000; }
    else if (sendAmount >= 1001000 && sendAmount <= 5000000) { transactionFee = ((sendAmount * 15) / 1000); }
  }
  return transactionFee;
}


// Calculation of the Amount to be received
function calculateAmountToReceive() {
  transactionFee = calculateTransactionFee();
  let rate = 19;
  let amountToReceive = (((sendAmount - transactionFee) / rate) * 1000);

  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && handleFee === "ADD FEE") {
    amountToReceive = ((sendAmount / rate) * 1000);
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && handleFee === "ADD FEE") {
    amountToReceive = ((sendAmount / 1000) * (rate - 1));
  } else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && handleFee === "SUBSTRACT FEE") {
    amountToReceive = (((sendAmount - transactionFee) / rate) * 1000);
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && handleFee === "SUBSTRACT FEE") {
    amountToReceive = (((sendAmount - transactionFee) / 1000) * (rate - 1));
  }
  return amountToReceive;
}


//Convert and display results
function rtConvertAndDisplayRt(event) {
  event.preventDefault();
  senderCountry = document.getElementById("senderCountry").value;
  receiverCountry = document.getElementById("receiverCountry").value;
  sendAmountInput = document.getElementById("sendAmount");
  sendAmount = parseFloat(sendAmountInput.value);
  handleFee = document.getElementById("handleFee").value;
  transactionFee = calculateTransactionFee();
  amountToReceive = calculateAmountToReceive();

  messageError = document.getElementById("errorMessage");
  resultMessage = document.getElementById("resultMessage");


  let totalAmount = sendAmount + transactionFee;

  // Clear the error message
  messageError.textContent = "";
  messageError.className = "";

  // Clear the result message
  resultMessage.textContent = ""; // Clear the content
  resultMessage.style.display = "none"; // Hide the result message

  proceedButton.style.display = "none";

  //All fields validation
  if (!senderCountry || !receiverCountry || isNaN(sendAmount) || !sendAmount || !handleFee) {
    messageError.textContent = "Veuillez compléter tous les champs requis";
    messageError.className = "red_error";
    messageError.style.display = "block";
    return;
  }

  // When the amount to be sent is below the minimum / Display error
  if (senderCountry === "GHANA" && receiverCountry === "TOGO" && sendAmount < 50) {
    messageError.textContent = "Le minimum à envoyer du GHANA vers le TOGO est de 50 GHS.";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "CÔTE D'IVOIRE" && receiverCountry !== "TOGO" && sendAmount < 100) {
    messageError.textContent = "Le minimum à envoyer du GHANA vers le " + receiverCountry + " est de 100 GHS.";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }

  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry === "CÔTE D'IVOIRE" && sendAmount < 100) {
    messageError.textContent = "Le minimum à envoyer du GHANA vers la " + receiverCountry + " est de 100 GHS.";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }

  else if (senderCountry !== "GHANA" && senderCountry !== "CÔTE D'IVOIRE" && sendAmount < 1000) {
    messageError.textContent = "Le minimum à envoyer du " + senderCountry + " vers le GHANA est  1000 FCFA";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }

  else if (senderCountry === "CÔTE D'IVOIRE" && sendAmount < 1000) {
    messageError.textContent = "Le minimum à envoyer de la " + senderCountry + " vers le GHANA est  1000 FCFA";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }


  // When the amount to be sent is above the maximum / Display error
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "CÔTE D'IVOIRE" && sendAmount > 100000) {
    messageError.textContent = "Le maximum à envoyer du GHANA vers le " + receiverCountry + " est de 100000 GHS.";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }

  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry === "CÔTE D'IVOIRE" && sendAmount > 100000) {
    messageError.textContent = "Le maximum à envoyer du GHANA vers la " + receiverCountry + " est de 100000 GHS.";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }

  else if (senderCountry !== "GHANA" && senderCountry !== "CÔTE D'IVOIRE" && receiverCountry === "GHANA" && sendAmount > 5000000) {
    messageError.textContent = "Le maximum à envoyer du " + senderCountry + " vers le GHANA est de 5000000 FCFA";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }

  else if (senderCountry === "CÔTE D'IVOIRE" && receiverCountry === "GHANA" && sendAmount > 5000000) {
    messageError.textContent = "Le maximum à envoyer de la " + senderCountry + " vers le GHANA est de 5000000 FCFA";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }

  // Countries validations / Prevents same countries and CFA to CFA transactions
  if (senderCountry === receiverCountry) {
    messageError.textContent = "Désolé, vous ne pouvez pas envoyer entre le même pays";
    messageError.className = "red_error";
    messageError.style.display = "block";
  } else if (senderCountry !== "GHANA" && receiverCountry !== "GHANA") {
    messageError.textContent = "Vous ne pouvez qu'envoyer entre le Ghana et d'autres pays";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }

  // The Convertion result (GHANA to TOGO) / ADD transaction Fee
  else if (senderCountry === "GHANA" && receiverCountry === "TOGO" && sendAmount >= 50 && sendAmount <= 100000 && handleFee === "ADD FEE") {
    resultMessage.textContent = `Vous envoyez: ${sendAmount.toFixed(2)} GHS\n
          Montant à recevoir: ${amountToReceive.toFixed(0)} FCFA\n
          Frais: ${transactionFee.toFixed(2)} GHS\n
          Vous payez: ${totalAmount.toFixed(2)} GHS`;
    resultMessage.style.whiteSpace = "pre-line"
    resultMessage.style.display = "block";
    resultMessage.className = "green_result"
    proceedButton.style.display = "block";
  }
  // The Convertion result (GHANA to BCB) / ADD transaction Fee
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && sendAmount >= 100 && sendAmount <= 100000 && handleFee === "ADD FEE") {
    resultMessage.textContent = `Vous envoyez: ${sendAmount.toFixed(2)} GHS\n
      Montant à recevoir: ${amountToReceive.toFixed(0)} FCFA\n
      Frais: ${transactionFee.toFixed(2)} GHS\n
      Vous payez: ${totalAmount.toFixed(2)} GHS`;
    resultMessage.style.whiteSpace = "pre-line"
    resultMessage.style.display = "block";
    resultMessage.className = "green_result"
    proceedButton.style.display = "block";
  }

  //The Convertion result (ALL COUNTRIES to GHANA) / ADD transaction Fee
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount >= 1000 && sendAmount <= 5000000 && handleFee === "ADD FEE") {
    resultMessage.textContent = `Vous envoyez: ${sendAmount.toLocaleString('fr-FR')} FCFA\n
        Montant à recevoir: ${amountToReceive.toFixed(2)} GHS\n
        Frais: ${transactionFee.toLocaleString('fr-FR')} FCFA\n
        Vous payez: ${totalAmount.toLocaleString('fr-FR')} FCFA`;
    resultMessage.style.whiteSpace = "pre-line"
    resultMessage.style.display = "block";
    resultMessage.className = "green_result"
    proceedButton.style.display = "block";
  }

  // The Convertion result (GHANA to TOGO) / SUBSTRACT transaction Fee
  else if (senderCountry === "GHANA" && receiverCountry === "TOGO" && sendAmount >= 50 && sendAmount <= 100000 && handleFee === "SUBSTRACT FEE") {
    resultMessage.textContent = `Vous envoyez: ${sendAmount.toFixed(2) - transactionFee.toFixed(2)} GHS\n
      Montant à recevoir: ${amountToReceive.toFixed(0)} FCFA\n
      Frais: ${transactionFee.toFixed(2)} GHS\n
      Vous payez: ${sendAmount.toFixed(2)} GHS`;
    resultMessage.style.whiteSpace = "pre-line"
    resultMessage.style.display = "block";
    resultMessage.className = "green_result"
    proceedButton.style.display = "block";
  }

  // The Convertion result (GHANA to BCB) / SUBSTRACT transaction Fee
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && sendAmount >= 100 && sendAmount <= 100000 && handleFee === "SUBSTRACT FEE") {
    resultMessage.textContent = `Vous envoyez: ${sendAmount.toFixed(2) - transactionFee.toFixed(2)} GHS\n
      Montant à recevoir: ${amountToReceive.toFixed(0)} FCFA\n
      Frais: ${transactionFee.toFixed(2)} GHS\n
      Vous payez: ${sendAmount.toFixed(2)} GHS`;
    resultMessage.style.whiteSpace = "pre-line"
    resultMessage.style.display = "block";
    resultMessage.className = "green_result"
    proceedButton.style.display = "block";
  }

  //The Convertion result (ALL COUNTRIES to GHANA) / SUBSTRACT transaction Fee
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount >= 1000 && sendAmount <= 5000000 && handleFee === "SUBSTRACT FEE") {
    resultMessage.textContent = `Vous envoyez: ${(sendAmount - transactionFee).toLocaleString('fr-FR')} FCFA\n
      Montant à recevoir: ${amountToReceive.toFixed(2)} GHS\n
      Frais: ${(transactionFee).toLocaleString('fr-FR')} FCFA\n
      Vous payez: ${sendAmount.toLocaleString('fr-FR')} FCFA`;
    resultMessage.style.whiteSpace = "pre-line"
    resultMessage.style.display = "block";
    resultMessage.className = "green_result"
    proceedButton.style.display = "block";
  }
}


//Store form data
let formData = {};

function showrtformFollow() {
  const mainFormContainer = document.getElementById("rtformMainKtn");
  const followFormContainer = document.getElementById("rtformFollowKtn");

  // Save entered data before switching
  formData.senderCountry = document.getElementById("senderCountry").value;
  formData.receiverCountry = document.getElementById("receiverCountry").value;
  formData.sendAmount = document.getElementById("sendAmount").value;
  formData.handleFee = document.getElementById("handleFee").value;

  mainFormContainer.classList.add("fade-in", "secondary");
  followFormContainer.classList.remove("secondary");
}


//Saves data and restores it when you go back
function goBack() {
  const mainFormContainer = document.getElementById("rtformMainKtn");
  const followFormContainer = document.getElementById("rtformFollowKtn");

  mainFormContainer.classList.remove("secondary");
  followFormContainer.classList.add("secondary");

  // Restore entered data
  document.getElementById("senderCountry").value = formData.senderCountry;
  document.getElementById("receiverCountry").value = formData.receiverCountry;
  document.getElementById("sendAmount").value = formData.sendAmount;
  document.getElementById("handleFee").value = formData.handleFee;
}


//Gathers all the transaction details and send them to our Official WhatSapp page
function shareOnWhatsApp() {
  const senderCountry = document.getElementById("senderCountry").value;
  const receiverCountry = document.getElementById("receiverCountry").value;
  const sendAmountInput = document.getElementById("sendAmount");
  const sendAmount = parseFloat(sendAmountInput.value);
  const senderNetwork = document.getElementById("senderNetwork").value;
  const senderMmNumber = document.getElementById("senderMmNumber").value;
  const receiverNetwork = document.getElementById("receiverNetwork").value;
  const receiverMmNumber = document.getElementById("receiverMmNumber").value;
  const transactionFee = calculateTransactionFee();


  const totalAmount = sendAmount + transactionFee;
  let message = `Hello`;

  if (senderCountry === "GHANA" && handleFee === "ADD FEE") {
    message = `Expéditeur: 
${senderMmNumber} (${senderNetwork}) ${senderCountry}
Bénéficiare: 
${receiverMmNumber} (${receiverNetwork}) ${receiverCountry}\n
Montant: ${sendAmount.toFixed(2)} GHS
Fee: ${transactionFee.toFixed(2)} GHS
Total: ${totalAmount.toFixed(2)} GHS\n
Montant à recevoir: ${amountToReceive.toFixed(0)} FCFA`;
  }

  else if (senderCountry === "GHANA" && handleFee === "SUBSTRACT FEE") {
    message = `Expéditeur: 
${senderMmNumber} (${senderNetwork}) ${senderCountry}
Bénéficiare: 
${receiverMmNumber} (${receiverNetwork}) ${receiverCountry}\n
Montant: ${sendAmount.toFixed(2) - transactionFee} GHS
Fee: ${transactionFee.toFixed(2)} GHS
Total: ${sendAmount.toFixed(2)} GHS\n
Montant à recevoir: ${amountToReceive.toFixed(0)} FCFA`;
  }

  else if (senderCountry !== "GHANA" && handleFee === "ADD FEE") {
    message = `Expéditeur: 
${senderMmNumber} (${senderNetwork}) ${senderCountry}
Bénéficiare: 
${receiverMmNumber} (${receiverNetwork}) ${receiverCountry}\n
Montant: ${sendAmount} FCFA
Fee: ${transactionFee} FCFA
Total: ${totalAmount} FCFA\n
Montant à recevoir: ${amountToReceive.toFixed(0)} GHS`;
  }

  else if (senderCountry !== "GHANA" && handleFee === "SUBSTRACT FEE") {
    message = `Expéditeur: 
${senderMmNumber} (${senderNetwork}) ${senderCountry}
Bénéficiare: ${receiverMmNumber} (${receiverNetwork}) ${receiverCountry}\n
Montant: 
${sendAmount - transactionFee} FCFA
Fee: ${transactionFee} FCFA
Total: ${sendAmount} FCFA\n
Montant à recevoir: ${amountToReceive.toFixed(0)} GHS`;
  }

  let messageOutput = document.getElementById("messageOutput");
  messageOutput.textContent = message;


  message = document.getElementById("messageOutput").textContent;
  var encodedMessage = encodeURIComponent(message);
  var receiverNumber = "233554459813";

  var whatsappURL = "https://wa.me/" + receiverNumber + "?text=" + encodedMessage;

  window.open(whatsappURL, "_blank");

}
