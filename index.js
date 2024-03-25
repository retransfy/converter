// This links the rate page
document.getElementById("logo").addEventListener("dblclick", function(){
  window.location.href = "rate.html";
})


let rate = 22.5;
let rate2 = rate - 1;
let senderCountry = document.getElementById("senderCountry").value;
let receiverCountry = document.getElementById("receiverCountry").value;
let sendAmountInput = document.getElementById("sendAmount");
let receiveAmountInput = document.getElementById("receiveAmount");
let handleFee = document.getElementById("handleFee").value;
let sendAmount = parseFloat(sendAmountInput.value);
let receiveAmount = parseFloat(receiveAmountInput.value);
let withdrawalFee = 0;
let maxForFcfa = (((rate * 1000)/2)+(rate*5));
let maxForGhs = 10010;
let maxCfaToCedis = ((10010/rate2)*1000);
let maxCedisToCfa = (((10000 * 1000) / rate)+5000);
const supportEl = document.getElementById("support");
const wFee = document.getElementById("Wfee");
const addTextEl = document.getElementById("addW");
const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, "0");
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const year = currentDate.getFullYear();
const formattedDate = `${day}/${month}/${year}`;
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const formattedTime = hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
let messageError = document.getElementById("errorMessage");
let resultMessage = document.getElementById("resultMessage");
let senderFieldError = document.getElementById("senderField");
let receiverFieldError = document.getElementById("receiverField");
let withdrawalError = document.getElementById("wdrlError");



//Clear Send field Error messages
senderFieldError.textContent = "";
senderFieldError.className = "";
senderFieldError.style.display = "none";

//Clear Send field Error messages
receiverFieldError.textContent = "";
receiverFieldError.className = "";
receiverFieldError.style.display = "none";


// Toggle between Amount to Send and Amount to Receive
toggleButton.addEventListener("click", function () {
const toggleButton = document.getElementById("toggleButton");
const senderDiv = document.getElementById("senderDiv");
const receiverDiv = document.getElementById("receiverDiv");
const handler = document.getElementById("handleFee");
const checkFeeDiv = document.getElementById("checkfee");
copyButton.style.display = "none";
copierButton.style.display = "none";
supportEl.style.display="none";
clearWithdrawalError();

  if (senderDiv.classList.contains("receiverHidden")) {
    senderDiv.classList.remove("receiverHidden");
    receiverDiv.classList.add("receiverHidden");
    toggleButton.innerHTML = "Switch to Amount to receive";
    handler.disabled = false;
    checkFeeDiv.style.display = "none";
    receiveAmountInput.value = "";
    messageError.textContent = "";
    messageError.className = "";
    resultMessage.textContent = "";
    resultMessage.style.display = "none";
    proceedButton.style.display = "none";
    
    

  } else {
    senderDiv.classList.add("receiverHidden");
    receiverDiv.classList.remove("receiverHidden");
    toggleButton.innerHTML = "Switch to Amount to send";
    handler.disabled = true;
    checkFeeDiv.style.display = "flex";
    sendAmountInput.value = "";
    messageError.textContent = "";
    messageError.className = "";
    resultMessage.textContent = "";
    resultMessage.style.display = "none";
    proceedButton.style.display = "none";
    wFee.hidden = false;
    addTextEl.hidden = false;
  }
});

// Changes the placeholder between Cedis and Cfa.
function onSenderCountryChange() {
  senderCountry = document.getElementById("senderCountry").value;
  sendAmountInput = document.getElementById("sendAmount");
  receiveAmountInput = document.getElementById("receiveAmount");
  senderFieldError = document.getElementById("senderField");
  
  if (senderCountry === "GHANA") {
    sendAmountInput.placeholder = "Enter Amount in GHS";
    receiveAmountInput.placeholder = "Enter Amount in FCFA";
  }
  else {
    sendAmountInput.placeholder = "Enter Amount in FCFA";
    receiveAmountInput.placeholder = "Enter Amount in GHS";
  }
  sendAmountInput.style.textAlign = "center";
  receiveAmountInput.style.textAlign = "center";

  if (senderCountry) {
    senderFieldError.textContent = "";
    senderFieldError.className = "";
    senderFieldError.style.display = "none";
  }}



//These are the functions to help round amounts
//function 1.
function roundDown(number) {
  return Math.floor(number / 5) * 5;
}

//function 2
function roundUp(number) {
  return Math.ceil(number / 5) * 5;
}

//function 3
function roundDecimal(number) {
  if (number % 1 === 0) {
    return number;
  } else if (number % 1 <= 0.5) {
    return Math.floor(number) + 0.50;
  } else {
    return Math.ceil(number);
  }
}


//Calculate the transaction fee when Amount to Send is selected.
function calculateTransactionFee() {
  let transactionFee = 0;
//(GHANA to TOGO)
  if (senderCountry === "GHANA" && receiverCountry === "TOGO") {
    if (sendAmount >= rate && sendAmount <= 150) { transactionFee = 5; }
    else if (sendAmount >= 151 && sendAmount <= 500) { transactionFee = 10; }
    else if (sendAmount >= 501 && sendAmount <= 800) { transactionFee = 15; }
    else if (sendAmount >= 801 && sendAmount <= 1200) { transactionFee = 20; }
    else if (sendAmount >= 1201 && sendAmount <= 3000) { transactionFee = 25; }
    else if (sendAmount >= 3001 && sendAmount <= 5000) { transactionFee = 40; }
    else if (sendAmount >= 5001 && sendAmount <= 8000) { transactionFee = 60; }
    else if (sendAmount >= 8001 && sendAmount <= maxForFcfa) { transactionFee = 80; }
  }
//(GHANA to BCB)
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO") {
    if (sendAmount >= rate && sendAmount <= 150) { transactionFee = 10; }
    else if (sendAmount >= 151 && sendAmount <= 500) { transactionFee = 15; }
    else if (sendAmount >= 501 && sendAmount <= 800) { transactionFee = 20; }
    else if (sendAmount >= 801 && sendAmount <= 1200) { transactionFee = 25; }
    else if (sendAmount >= 1201 && sendAmount <= 3000) { transactionFee = 40; }
    else if (sendAmount >= 3001 && sendAmount <= 5000) { transactionFee = 50; }
    else if (sendAmount >= 5001 && sendAmount <= 8000) { transactionFee = 80; }
    else if (sendAmount >= 8001 && sendAmount <= maxForFcfa) { transactionFee = 100; }}
//(ALL COUNTRIES to GHANA)
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA") {
    if (sendAmount < 1000) { transactionFee = 0; }
    else if (sendAmount >= 1000 && sendAmount <= 6000) { transactionFee = 500; }
    else if (sendAmount >= 6001 && sendAmount <= 20000) { transactionFee = 1000; }
    else if (sendAmount >= 20001 && sendAmount <= 40000) { transactionFee = 2000; }
    else if (sendAmount >= 40001 && sendAmount <= 60000) { transactionFee = 3000; }
    else if (sendAmount >= 60001 && sendAmount <= 100000) { transactionFee = 4000; }
    else if (sendAmount >= 100001 && sendAmount <= 300000) { transactionFee = 5000; }
    else if (sendAmount >= 300001 && sendAmount <= 400000) { transactionFee = 7000; }
    else if (sendAmount >= 400001 && sendAmount <= 505000) { transactionFee = 8000; }}

  return transactionFee;
}



// Calculate the transaction fee when Amount to receive is entered
function calculateTransactionFee2() {
  let transactionFee2 = 0;
//(GHANA to TOGO)
  if (senderCountry === "GHANA" && receiverCountry === "TOGO") {
    if (receiveAmount >= ((rate * 1000) / rate) && receiveAmount <= ((150 * 1000) / rate)) { transactionFee2 = 5; }
    else if (receiveAmount >= ((151 * 1000) / rate) && receiveAmount <= ((500 * 1000) / rate)) { transactionFee2 = 10; }
    else if (receiveAmount >= ((501 * 1000) / rate) && receiveAmount <= ((800 * 1000) / rate)) { transactionFee2 = 15; }
    else if (receiveAmount >= ((801 * 1000) / rate) && receiveAmount <= ((1200 * 1000) / rate)) { transactionFee2 = 20; }
    else if (receiveAmount >= ((1201 * 1000) / rate) && receiveAmount <= ((3000 * 1000) / rate)) { transactionFee2 = 25; }
    else if (receiveAmount >= ((3001 * 1000) / rate) && receiveAmount <= ((5000 * 1000) / rate)) { transactionFee2 = 40; }
    else if (receiveAmount >= ((5001 * 1000) / rate) && receiveAmount <= ((8000 * 1000) / rate)) { transactionFee2 = 60; }
    else if (receiveAmount >= ((8001 * 1000) / rate) && receiveAmount <= maxCedisToCfa) { transactionFee2 = 80; }
  }
//(GHANA to BCB)
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO") {
    if (receiveAmount >= ((rate * 1000) / rate) && receiveAmount <= ((150 * 1000) / rate)) { transactionFee2 = 10; }
    else if (receiveAmount >= ((151 * 1000) / rate) && receiveAmount <= ((500 * 1000) / rate)) { transactionFee2 = 15; }
    else if (receiveAmount >= ((501 * 1000) / rate) && receiveAmount <= ((800 * 1000) / rate)) { transactionFee2 = 20; }
    else if (receiveAmount >= ((801 * 1000) / rate) && receiveAmount <= ((1200 * 1000) / rate)) { transactionFee2 = 25; }
    else if (receiveAmount >= ((1201 * 1000) / rate) && receiveAmount <= ((3000 * 1000) / rate)) { transactionFee2 = 40; }
    else if (receiveAmount >= ((3001 * 1000) / rate) && receiveAmount <= ((5000 * 1000) / rate)) { transactionFee2 = 50; }
    else if (receiveAmount >= ((5001 * 1000) / rate) && receiveAmount <= ((8000 * 1000) / rate)) { transactionFee2 = 80; }
    else if (receiveAmount >= ((8001 * 1000) / rate) && receiveAmount <= maxCedisToCfa) { transactionFee2 = 100; }
  }
//(ALL COUNTRIES to GHANA)
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && receiveAmount) {
    if (receiveAmount < ((rate2 * 1000) / 1000)) { transactionFee2 = 0; }
    else if ((receiveAmount >= ((rate2 * 1000) / 1000) && receiveAmount <= ((rate2 * 6000) / 1000))) { transactionFee2 = 500; }
    else if ((receiveAmount >= ((rate2 * 6001) / 1000) && receiveAmount <= ((rate2 * 20000) / 1000))) { transactionFee2 = 1000; }
    else if ((receiveAmount >= ((rate2 * 20001) / 1000) && receiveAmount <= ((rate2 * 40000) / 1000))) { transactionFee2 = 2000; }
    else if ((receiveAmount >= ((rate2 * 40001) / 1000) && receiveAmount <= ((rate2 * 60000) / 1000))) { transactionFee2 = 3000; }
    else if ((receiveAmount >= ((rate2 * 60001) / 1000) && receiveAmount <= ((rate2 * 100000) / 1000))) { transactionFee2 = 4000; }
    else if ((receiveAmount >= ((rate2 * 100001) / 1000) && receiveAmount <= ((rate2 * 300000) / 1000))) { transactionFee2 = 5000; }
    else if ((receiveAmount >= ((rate2 * 300001) / 1000) && receiveAmount <= ((rate2 * 400000) / 1000))) { transactionFee2 = 7000; }
    else if ((receiveAmount >= ((rate2 * 400001) / 1000) && receiveAmount <= maxForGhs)) { transactionFee2 = 8000; }
  }
  return transactionFee2;
}


//Calculate Amount to send and withdrawal fee.
function calculateAmountToSend() {
  transactionFee2 = calculateTransactionFee2();
  
  //Withdrawal fee
  if (wFee.checked) {
    function cannotAddWithdrawalFee(){
      document.getElementById("addW").textContent = "Can't add. Maximum amount exceeded";
      document.getElementById("addW").className = "wdrlError";
      document.getElementById("addW").style.color = "red";
      wFee.checked = false;
    } 

        if (senderCountry === "GHANA" && receiverCountry === "TOGO") 
          {
              if (receiveAmount >= 1000 && receiveAmount <= 5000) { withdrawalFee = 150;}
              else if (receiveAmount >= 5001 && receiveAmount <= 13000) { withdrawalFee = 400;}
              else if (receiveAmount >= 13001 && receiveAmount <= 15000) { withdrawalFee = 450;}
              else if (receiveAmount >= 15001 && receiveAmount <= 16600) { withdrawalFee = 500;}
              else if (receiveAmount >= 16601 && receiveAmount <= 20000) { withdrawalFee = 600;}
              else if (receiveAmount >= 20001 && receiveAmount <= 47000) { withdrawalFee = 850;}
              else if (receiveAmount >= 47001 && receiveAmount <= 50000) { withdrawalFee = 900;}
              else if (receiveAmount >= 50001 && receiveAmount <= 94000) { withdrawalFee = 1700;}
              else if (receiveAmount >= 94001 && receiveAmount <= 100000) { withdrawalFee = 1800;}
              else if (receiveAmount >= 100001 && receiveAmount <= 188000) { withdrawalFee = 3400;}
              else if (receiveAmount >= 188001 && receiveAmount <= 200000) { withdrawalFee = 3600;}
              else if (receiveAmount >= 200001 && receiveAmount <= 283000) { withdrawalFee = 4000;}
              else if (receiveAmount >= 283001 && receiveAmount <= 479000) { withdrawalFee = 4500;}
              else if (receiveAmount >= 479001 && receiveAmount <= 500000) { withdrawalFee = 4700;}
              else if (receiveAmount > maxForFcfa) { 
                cannotAddWithdrawalFee();
              }
          receiveAmount = receiveAmount + withdrawalFee;
          }
            
        else if (senderCountry === "GHANA" && receiverCountry === "BENIN") 
              {
                if (receiveAmount >= 1000 && receiveAmount <= 5000) { withdrawalFee = 100;}
                else if (receiveAmount >= 5001 && receiveAmount <= 10000) { withdrawalFee = 200;}
                else if (receiveAmount >= 10001 && receiveAmount <= 20000) { withdrawalFee = 350;}
                else if (receiveAmount >= 20001 && receiveAmount <= 50000) { withdrawalFee = 700;}
                else if (receiveAmount >= 50001 && receiveAmount <= 100000) { withdrawalFee = 1000;}
                else if (receiveAmount >= 100001 && receiveAmount <= 200000) { withdrawalFee = 2000;}
                else if (receiveAmount >= 200001 && receiveAmount <= 300000) { withdrawalFee = 3000;}
                else if (receiveAmount >= 300001 && receiveAmount <= 500000) { withdrawalFee = 3500;}
                else if (receiveAmount > maxForFcfa) { 
                  cannotAddWithdrawalFee();
                }
          receiveAmount = receiveAmount + withdrawalFee;
              }

              else if (senderCountry === "GHANA" && receiverCountry !== "TOGO" && receiverCountry !== "BENIN") 
              {
                if (receiveAmount >= 1000 && receiveAmount <= 500000) {withdrawalFee = receiveAmount/100;}

                else if (receiveAmount > maxForFcfa) { 
                  cannotAddWithdrawalFee();
                }
                
          receiveAmount = receiveAmount + withdrawalFee;
              }

        else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && receiveAmount) 
              {if (receiveAmount >= 1 && receiveAmount <= 50) { withdrawalFee = 0.50;}
              else if (receiveAmount >= 50.5 && receiveAmount <= 1000) { withdrawalFee = receiveAmount/100;}
              else if (receiveAmount >= 1001 && receiveAmount <= 10000) { withdrawalFee = 10;}
              
              else if (receiveAmount > maxForGhs) { 
                cannotAddWithdrawalFee();
              }

              receiveAmount = receiveAmount + withdrawalFee;
              }
  } 

  //Calculate Amount to Send
  let amountToSend = 0;
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiveAmount) {
    amountToSend = (receiveAmount / 1000) * rate;
    return amountToSend;
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && receiveAmount) {
    amountToSend = (receiveAmount * 1000) / rate2;
    return amountToSend;
  }
}


//Calculate Amount to receive
function calculateAmountToReceive() {
  transactionFee = calculateTransactionFee();
  let amountToReceive = 0;
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && handleFee === "ADD FEE") {
    amountToReceive = ((sendAmount / rate) * 1000);
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && handleFee === "ADD FEE") {
    amountToReceive = ((sendAmount / 1000) * rate2);
  } else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && handleFee === "SUBSTRACT FEE") {
    amountToReceive = (((sendAmount - transactionFee) / rate) * 1000);
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && handleFee === "SUBSTRACT FEE") {
    amountToReceive = (((sendAmount - transactionFee) / 1000) * rate2);
  }
  return amountToReceive;
}


// This function clear all errors for Withdrawal fee functions.
function clearWithdrawalError() {
  document.getElementById("addW").textContent = "Add withdrawal fee";
  document.getElementById("addW").className = "wdrlErrorOff";
  document.getElementById("addW").style.color = "#006dac";
  }

// Main function for the conversion results
function rtConvertAndDisplayRt(event) {
  event.preventDefault();  

  senderCountry = document.getElementById("senderCountry").value;
  receiverCountry = document.getElementById("receiverCountry").value;
  sendAmountInput = document.getElementById("sendAmount");
  receiveAmountInput = document.getElementById("receiveAmount");
  handleFee = document.getElementById("handleFee").value;
  sendAmount = parseFloat(sendAmountInput.value);
  receiveAmount = parseFloat(receiveAmountInput.value);
  transactionFee = calculateTransactionFee();
  transactionFee2 = calculateTransactionFee2();
  amountToReceive = calculateAmountToReceive();
  amountToSend = calculateAmountToSend();

 
//Clear all error  
messageError.textContent = "";
messageError.className = "";
messageError.style.display = "none";


//Field validations/Error messages
if (sendAmountInput.value === "" && receiveAmountInput.value === "") {
  messageError.textContent = "Please Enter the Amount";
  messageError.className = "red_error";
  messageError.style.display = "block";
  supportEl.style.display="none";
  copyButton.style.display = "none";
  copierButton.style.display = "none";
  clearWithdrawalError();
  
} 
else if (sendAmountInput.value !== "" && receiveAmountInput.value === "") {
  messageError.textContent = "";
  messageError.className = "";
  messageError.style.display = "none";
}
if (receiveAmountInput.value === "" && sendAmountInput.value === "") {
  messageError.textContent = "Please Enter the Amount";
  messageError.className = "red_error";
  messageError.style.display = "block";
  supportEl.style.display="none";
  copyButton.style.display = "none";
  copierButton.style.display = "none";
  clearWithdrawalError();
} 
else if (receiveAmountInput.value !== "" && sendAmountInput.value === ""){
  messageError.textContent = "";
  messageError.className = "";
  messageError.style.display = "none";
}


// Domestic transactions errors
  if (senderCountry === receiverCountry) {
    messageError.textContent = `Domestic transfer within ${senderCountry} is not available at the moment`;

    supportEl.style.display="none";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
    copierButton.style.display = "none";
    clearWithdrawalError();

  } else if (senderCountry !== "GHANA" && receiverCountry !== "GHANA") {
    messageError.textContent = `Transaction between ${senderCountry} and ${receiverCountry} is not available at the moment`;

    supportEl.style.display="none";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
    copierButton.style.display = "none";
    clearWithdrawalError();
  }


// Minimum amount errors for Amound to Send
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && sendAmount < rate) {
    messageError.textContent = `The minimum to send from GHANA to ${receiverCountry} is ${rate} GHS.`;

    supportEl.style.display="none";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
    copierButton.style.display = "none";
    clearWithdrawalError();
  }
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount < 1000) {
    messageError.textContent = "The minimum to send from " + senderCountry + " to GHANA is 1000 FCFA";

    supportEl.style.display="none";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
    copierButton.style.display = "none";
    clearWithdrawalError();
  }
// Minimum amount error for amount to receive
if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && !sendAmount && receiveAmount < ((rate * 1000) / rate)) {
  messageError.textContent = `The minimum to be received from GHANA to ${receiverCountry} is ${roundUp(Math.round((rate * 1000) / rate)).toLocaleString('fr-FR')} FCFA`;

  supportEl.style.display="none";
  messageError.className = "red_error";
  messageError.style.display = "block";
  resultMessage.textContent="";
  resultMessage.className = "";
  resultMessage.style.display = "none";
  copyButton.style.display = "none";
  copierButton.style.display = "none";
  clearWithdrawalError();

}
else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && !sendAmount && receiveAmount < rate2) {
  messageError.textContent = `The minimum to be received from ${senderCountry} to GHANA is ${rate2.toFixed(2)} GHS`;

  supportEl.style.display="none";
  messageError.className = "red_error";
  messageError.style.display = "block";
  resultMessage.textContent="";
  resultMessage.className = "";
  resultMessage.style.display = "none";
  copyButton.style.display = "none";
  copierButton.style.display = "none";
  clearWithdrawalError();

}


// Maximum amount errors for amount to Send
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && sendAmount > maxForFcfa) {
    messageError.textContent = `The maximum to send from GHANA to ${receiverCountry} without transaction fee is GHS ${maxForFcfa.toFixed(2)}.
    For transactions exceeding this amount, please contact our Support Team`;

    supportEl.style.display="block";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
    copierButton.style.display = "none";

  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount > maxCfaToCedis) {
    messageError.textContent = `The maximum to send from ${senderCountry} to GHANA to without transaction fee is ${Math.round(maxCfaToCedis).toLocaleString("fr-FR")} FCFA.
    For transactions exceeding this amount, please contact our Support Team`;

    supportEl.style.display="block";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
    copierButton.style.display = "none";
  }
//Maximum amount error for amount to receive.
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && !sendAmount && receiveAmount > maxCedisToCfa) {
    messageError.textContent = `The maximum to be received from GHANA to ${receiverCountry} is ${maxCedisToCfa} FCFA.
    For transactions exceeding this amount, please contact our Support Team`;

    supportEl.style.display="block";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
    copierButton.style.display = "none";
  }

  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && !sendAmount && receiveAmount > maxForGhs) {
    messageError.textContent = `The maximum to be received from ${senderCountry} to GHANA is GHS ${maxForGhs.toFixed(2)}. For transactions exceeding this amount, please contact our Support Team`;

    supportEl.style.display="block";
    messageError.className = "red_error";
    messageError.style.display = "block";
    resultMessage.textContent="";
    resultMessage.className = "";
    resultMessage.style.display = "none";
    copyButton.style.display = "none";
    copierButton.style.display = "none";
}


// RESULTS FOR VALID ENTRIES --------------------------------------------------------------------------------------------
  resultMessage.textContent = ""; 
  resultMessage.style.display = "none";
  let totalAmount = sendAmount + transactionFee;
 
  // Function for valid entries
  function resultForValidEntries() {
  if (senderCountry === "GHANA" && handleFee === "ADD FEE"){
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry} 
    ${formattedDate} || Rate: ${rate}

    Amount to send: GHS ${sendAmount.toFixed(2)}
    Transaction fee: GHS ${transactionFee.toFixed(2)}
    Amount to receive: ${roundDown(Math.round(amountToReceive)).toLocaleString('fr-FR')} FCFA
    
    Total to Pay: GHS ${totalAmount.toFixed(2)}`;
  }

  else if (senderCountry !== "GHANA" && handleFee === "ADD FEE"){
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    ${formattedDate} || Rate: ${rate2}

    Amount to send: ${sendAmount.toLocaleString('fr-FR')} FCFA 
    Transaction fee: ${transactionFee.toLocaleString('fr-FR')} FCFA
    Amount to receive: GHS ${Math.floor(amountToReceive).toFixed(2)}
    
    Total to Pay: ${Math.round(totalAmount).toLocaleString('fr-FR')} FCFA`;
  }

  else if (senderCountry === "GHANA" && handleFee === "SUBSTRACT FEE"){
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    ${formattedDate} || Rate: ${rate}

    Amount to send: GHS ${(sendAmount - transactionFee).toFixed(2)}
    Transaction fee: GHS ${transactionFee.toFixed(2)}
    Amount to receive: ${roundDown(Math.round(amountToReceive)).toLocaleString('fr-FR')} FCFA
    
    Total to Pay: GHS ${sendAmount.toFixed(2)}`;
  }
  
  else if(senderCountry !== "GHANA" && handleFee === "SUBSTRACT FEE"){
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    ${formattedDate} || Rate: ${rate2}
    Amount to send: ${Math.round(sendAmount - transactionFee).toLocaleString('fr-FR')} FCFA
    Transaction fee: ${(transactionFee).toLocaleString('fr-FR')} FCFA
    Amount to receive: GHS ${Math.floor(amountToReceive).toFixed(2)}
    
    Total to Pay: ${Math.round(sendAmount).toLocaleString('fr-FR')} FCFA`;
  }

  //Results for Amount to Receive
  if (senderCountry === "GHANA" && receiveAmount){
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    ${formattedDate} || Rate: ${rate}

    Amount to send: GHS ${roundDecimal(amountToSend).toFixed(2)}
    Transaction fee: GHS ${transactionFee2.toFixed(2)}
    Amount to receive: ${roundDown(receiveAmount).toLocaleString('fr-FR')} FCFA
    
    Total to Pay: GHS ${roundDecimal(amountToSend + transactionFee2).toFixed(2)}`;
  }

else if (senderCountry !== "GHANA" && receiveAmount){
    resultMessage.innerHTML = `${senderCountry} to ${receiverCountry}
    ${formattedDate} || Rate: ${rate2}
    
    Amount to send: ${roundUp(Math.round(amountToSend)).toLocaleString('fr-FR')} FCFA
    Transaction fee: ${Math.round(transactionFee2).toLocaleString('fr-FR')} FCFA
    Amount to receive: GHS ${receiveAmount.toFixed(2)}
    
    Total to Pay: ${roundUp(Math.round((amountToSend + transactionFee2))).toLocaleString('fr-FR')} FCFA`;
}

resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    copyButton.style.display = "block";
    copyButton.textContent = "Copy";
    copyButton.style.backgroundColor = "#006dac";
    copierButton.style.display = "block";
    copierButton.textContent = "Copier";
    copierButton.style.backgroundColor = "#ac1400";
    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    supportEl.style.display="none";
    clearWithdrawalError();
  }



  //(GHANA to TOGO) / ADDFee
  if (senderCountry === "GHANA" && receiverCountry === "TOGO" && sendAmount >= rate && sendAmount <= maxForFcfa && handleFee === "ADD FEE" && true) {resultForValidEntries();}
  

  //(GHANA to BCB) / ADDFee
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && sendAmount >= rate && sendAmount <= maxForFcfa && handleFee === "ADD FEE") {resultForValidEntries();}


  //(ALL COUNTRIES to GHANA) / ADDFee
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount >= 1000 && sendAmount <= maxCfaToCedis && handleFee === "ADD FEE") {resultForValidEntries();}


  //(GHANA to TOGO) / SUBSTRACTFee
  else if (senderCountry === "GHANA" && receiverCountry === "TOGO" && sendAmount >= rate && sendAmount <= maxForFcfa && handleFee === "SUBSTRACT FEE") {resultForValidEntries();}


  //(GHANA to BCB) / SUBSTRACTFee
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && sendAmount >= rate && sendAmount <= maxForFcfa && handleFee === "SUBSTRACT FEE") {resultForValidEntries();}


  //(ALL COUNTRIES to GHANA) / SUBSTRACTFee
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount >= 1000 && sendAmount <= maxCfaToCedis && handleFee === "SUBSTRACT FEE") {resultForValidEntries();}


  //(GHANA to TOGO) when Amount to receive is entered
  if (senderCountry === "GHANA" && receiverCountry === "TOGO" && receiveAmount >= (((rate * 1000) / rate)) && receiveAmount <= maxCedisToCfa) {resultForValidEntries();}

  //(GHANA to BCB) when amount to receive is entered
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && receiveAmount >= ((rate * 1000) / rate) && receiveAmount <= maxCedisToCfa) {resultForValidEntries();}

  //(ALL COUNTRIES to GHANA) when amount to receive is entered
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && receiveAmount >= rate2 && receiveAmount <= maxForGhs) 
  {resultForValidEntries();}
}


// Function to copy the results.
document.getElementById("copyButton").addEventListener("click", function () {
  const textArea = document.createElement("textarea");
  const resultMessage = document.getElementById("resultMessage").innerText;

  if (resultMessage.includes("Amount to receive") || resultMessage.includes("Total to Pay")) {
      // Split the result message by newline characters
      const paragraphs = resultMessage.split("\n");

      // Iterate over each paragraph
      const copiedMessage = paragraphs.map((paragraph, index) => {
          // Add asterisks around "Amount to receive" paragraph
          if (paragraph.includes("Amount to receive") || paragraph.includes("Total to Pay")) {
              return `*${paragraph}*`;
          }
          return paragraph;
      }).join("\n"); // Join the paragraphs back together

      // Set the modified message to the text area
      textArea.value = copiedMessage;
  } else {
      textArea.value = resultMessage;
  }

  // Append text area to the document body for copying
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");

  // Remove the text area from the document body
  document.body.removeChild(textArea);

  // Change copy button text and style
  document.getElementById("copyButton").textContent = "Copied";
  document.getElementById("copyButton").style.backgroundColor = "gray";
});




document.getElementById("copierButton").addEventListener("click", function () {
  const textArea = document.createElement("textarea");
  const resultMessage = document.getElementById("resultMessage").innerText;

  const translations = {
    "Rate": "Taux",
    "Amount to send": "Montant à envoyer",
    "Transaction fee": "Frais de transaction",
    "Amount to receive": "Montant à recevoir",
    "Total to Pay": "Total à Payer"
  };

  if (resultMessage.includes("Amount to receive") || resultMessage.includes("Total to Pay")) {
      // Split the result message by newline characters
      const paragraphs = resultMessage.split("\n");

      // Iterate over each paragraph
      const copiedMessage = paragraphs.map((paragraph, index) => {
          // Add asterisks around "Amount to receive" paragraph
          if (paragraph.includes("Amount to receive") || paragraph.includes("Total to Pay")) {
              return `*${paragraph}*`;
          }
          return paragraph;
      }).join("\n"); // Join the paragraphs back together

      // Replace English phrases with French translations
      let translatedMessage = copiedMessage;
      Object.keys(translations).forEach(englishPhrase => {
        const frenchPhrase = translations[englishPhrase];
        translatedMessage = translatedMessage.replace(englishPhrase, frenchPhrase);
      });

      // Set the modified message to the text area
      textArea.value = translatedMessage;
  } else {
      // Replace English phrases with French translations
      let translatedMessage = resultMessage;
      Object.keys(translations).forEach(englishPhrase => {
        const frenchPhrase = translations[englishPhrase];
        translatedMessage = translatedMessage.replace(englishPhrase, frenchPhrase);
      });

      textArea.value = translatedMessage;
  }

  // Append text area to the document body for copying
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");

  // Remove the text area from the document body
  document.body.removeChild(textArea);

  // Change copy button text and style
  document.getElementById("copierButton").textContent = "Copié";
  document.getElementById("copierButton").style.backgroundColor = "gray";
});


//Function to contact Support
function contactSupport() {
  const phoneNumber = "233535060144";
  const message = "Hello. I intend to send an amount that exceeds your maximum limit";
  const WhatsAppLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(WhatsAppLink, '_blank');
}
