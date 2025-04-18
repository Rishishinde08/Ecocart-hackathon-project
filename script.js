const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



// contact form 

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("loginModal");
const mainContent = document.getElementById("mainContent");

openModalBtn.onclick = () => {
  modal.style.display = "flex";
  mainContent.classList.add("blurred");
  
};

closeModalBtn.onclick = () => {
  modal.style.display = "none";
  mainContent.classList.remove("blurred");
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    mainContent.classList.remove("blurred");
  }
};



  


// subscribe form 

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  var form = new FormData(this);

  fetch('https://script.google.com/macros/s/AKfycbxARF6jSvhrSwv2nTp1Ty94Xod7ZrUyexaPSqw6CHoGe8OdFEeccBe4yGiV56IbvFEC/exec', {
    method: 'POST',
    body: form
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      alert("Thank you for your message!");
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("There was an error sending your message.");
  });
});



function checkProduct() {
  const link = document.getElementById("productLink").value;
  const previewBox = document.getElementById("previewBox");
  const productTitle = document.getElementById("productTitle");
  const carbonScore = document.getElementById("carbonScore");
  const productPrice = document.getElementById("productPrice");

  if (link.includes("amazon")) {
    productTitle.innerText = "Amazon Dummy Product";
  } else if (link.includes("flipkart")) {
    productTitle.innerText = "Flipkart Dummy Product";
  } else {
    alert("Please enter a valid Amazon or Flipkart link.");
    return;
  }

  carbonScore.innerText = (Math.random()).toFixed(2);
  productPrice.innerText = Math.floor(Math.random() * 50) + 1;

  previewBox.style.display = "block";
}
