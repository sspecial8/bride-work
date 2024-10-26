document.getElementById("submit").addEventListener("click", () => {
    const calculate = () => {
        let name = document.getElementById("name").value.trim();
        let price = Number(document.getElementById("startingBid").value);

        // Validation
        if (!name || isNaN(price)) {
            alert("Please provide a name and a valid starting bid.");
            return;
        }

        // Coefficient retrieval from dropdowns
        const education = Number(document.getElementById("education").value);
        const netWorth = Number(document.getElementById("networth").value);
        const caste = Number(document.getElementById("caste").value);

        // Using filter and reduce to calculate skills
        const skills = Array.from(document.querySelectorAll(".skills:checked"))
            .map(skill => Number(skill.value))
            .reduce((total, value) => total + value, 0);

        // Using forEach to get the selected age
        let age = 0; 
        document.querySelectorAll('input[name="age"]').forEach(input => {
            if (input.checked) age = Number(input.value);
        });

        // Using filter and reduce for reputation
        const reputation = Array.from(document.querySelectorAll(".reputation:checked"))
            .map(rep => Number(rep.value))
            .reduce((total, value) => total + value, 0);

        // Total price calculation
        let totalPrice = (price * education * netWorth) + caste + skills + (age * price) + reputation;

        // Create the object
        const loveLetter = document.getElementById("loveLetter").value;
        let person = {
            bride_name: name,
            bride_price: totalPrice.toFixed(2),
            letter_to_bride: loveLetter
        };

        // Display the result using template strings
        document.getElementById("result").innerHTML = `Your price for ${person.bride_name} is $${person.bride_price}.<br> Love Letter: ${person.letter_to_bride}`;
    };

    calculate();
});
