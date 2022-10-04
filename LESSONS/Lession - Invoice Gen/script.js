// Select all elements
editInvoiceBtn = document.querySelector(".edit");
previewInvoiceBtn = document.querySelector(".preview-btn");
invoiceForm = document.querySelector(".invoice-form");
invoiceContainer = document.querySelector(".invoice-container");
formContainer = document.querySelector(".form-container");
console.log(formContainer);
// Inoice Elements
const logoEl = document.querySelector(".logo");
// Form Elements
logoNameEl = document.querySelector("#logoName");
companyNameEl = document.querySelector("#companyName");
companyLocationEl = document.querySelector("#companyLocation");
// eventListeners
console.log(logoEl);
invoiceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (logoNameEl.value === "") {
    alert("logoName is Required");
    return;
  }
  if (logoNameEl.value.length < 3) {
    alert("logoName should be atleast 3 Character");
    return;
  }
  const logoName = logoNameEl.value;
  logoEl.textContent = logoName;
  console.log(logoName);

  invoiceContainer.classList.remove("hidden");
  invoiceContainer.classList.add("show");
  formContainer.classList.add("hidden");
});

editInvoiceBtn.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
  invoiceContainer.classList.remove("show");
  invoiceContainer.classList.add("hidden");
});
