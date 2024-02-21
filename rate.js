document.getElementById("logo").addEventListener("dblclick", function(){
    window.location.href = "index.html";
  })
function calculateRate(event){
event.preventDefault();
const Currency = document.getElementById("currency").value;
const Buy = document.getElementById("buyBN");
const BuyInput = parseFloat(Buy.value);
const Sell = document.getElementById("sellBN");
const SellInput = parseFloat(Sell.value);
const amountEl = document.getElementById("amount");
const amount = parseFloat(amountEl.value);
const payingEl = document.getElementById("paying");
const paying = parseFloat(payingEl.value);
const rate = document.getElementById("showrate");
const pnl = document.getElementById("pnl");
let amountToReceiveEl = 0;
let rateEl = 0;
let pnlEl = 0;
let other = 0;

if (Currency === "FCFA" && BuyInput && SellInput && amount && paying){
rateEl = (1000 * BuyInput) / SellInput;
amountToReceiveEl = Math.round((amount / rateEl) * 1000);
pnlEl = Math.round(amountToReceiveEl - paying);
other = Math.round(pnlEl / 1000 * rateEl);

rate.style.display = "block";
rate.textContent = `${rateEl.toFixed(5)} | ${amountToReceiveEl.toLocaleString('fr-FR')} FCFA`;

pnl.style.display = "block";
pnl.textContent = `${pnlEl.toLocaleString('fr-FR')} FCFA | ${other.toFixed(2)} GHS`;
}

else if (Currency === "GHS" && BuyInput && SellInput && amount && paying){
rateEl = ((1000 * SellInput) / BuyInput);
amountToReceiveEl = ((amount / 1000) * rateEl);
pnlEl = amountToReceiveEl - paying;
other = Math.round(pnlEl * 1000 / rateEl);

rate.style.display = "block";
rate.textContent = `${rateEl.toFixed(5)} | ${amountToReceiveEl.toFixed(2)} GHS`;

pnl.style.display = "block"
pnl.textContent = `${pnlEl.toFixed(2)} GHS | ${other.toLocaleString('fr-FR')} FCFA`;
}
}
