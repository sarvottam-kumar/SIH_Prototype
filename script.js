const imageUpload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");
const predictBtn = document.getElementById("predictBtn");
const predictionText = document.getElementById("predictionText");

// Preview the uploaded image
imageUpload.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// Placeholder predict function (simulate response)
predictBtn.addEventListener("click", function () {
    const file = imageUpload.files[0];
    if (!file) {
        alert("Please upload an image first.");
        return;
    }

    predictionText.innerText = "Predicting...";

    // Simulate sending to backend
    setTimeout(() => {
        // Replace this logic with real API call to your backend
        const fakeBreeds = ["Gir", "Murrah", "Sahiwal", "Jaffarabadi", "Red Sindhi"];
        const randomBreed = fakeBreeds[Math.floor(Math.random() * fakeBreeds.length)];
        predictionText.innerText = `Predicted Breed: ${randomBreed}`;
    }, 1500);
});
