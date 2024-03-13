


function setIncrementalValue() {
    let input = document.getElementById("incrementalInput");
    let incrementalValue = document.getElementById("incrementalValue");
    const capacityValue = document.getElementById("capacityValue");

    let value = input.value;

    if (value === "") {
        input.style.borderColor = "red"; // Change the border color to red
    } else if (Number(value) > Number(capacityValue.textContent)) {
        alert("Incremental value cannot be greater than capacity value!");
    } else {
        incrementalValue.textContent = value;
        input.value = ""; // Clear the input field
        input.style.borderColor = ""; // Reset the border color
    }
}

    
function setCurrentValue() {
    let input = document.getElementById("currentInput");
    let value = input.value;
    let water = document.querySelector(".water");

    if (value == "") {
        input.style.borderColor = "red";
        alert("Erorror");
        return;
    } else {
        let current = Number(water.style.height.replace("%", ""));
        let capacity = Number(document.getElementById("capacityValue").textContent);

        if (current > 0 && Number(value) < capacity) {
            alert("Cannot set Max Cap to a value less than the current capacity while there is water filled!");
        } else {
            document.getElementById("capacityValue").textContent = value;
            input.value = ""; // Clear the input field
            input.style.borderColor = ""; // Reset the border color
        }
    }
}

function fillContainer() {
    let incrementalValue = Number(document.getElementById("incrementalValue").textContent);
    let currentCapacityA = Number(document.getElementById("statusCapacity").textContent);
    let maxCapacityA = Number(document.getElementById("capacityValue").textContent);
    let waterA = document.querySelector("#containerA .water");

    let currentCapacityB = Number(document.getElementById("tankBCurrent").textContent);
    let maxCapacityB = Number(document.getElementById("tankBMaxCap").textContent);
    let waterB = document.querySelector("#containerB .water");

    if (incrementalValue === 0 && maxCapacityA === 0) {
        alert("Both incremental value and max capacity cannot be 0!");
    } else if (currentCapacityA + incrementalValue <= maxCapacityA) {
        currentCapacityA += incrementalValue;
        waterA.style.height = (currentCapacityA / maxCapacityA) * 100 + "%";
        document.getElementById("statusCapacity").textContent = currentCapacityA;
        document.getElementById("statusPercentage").textContent = (currentCapacityA / maxCapacityA) * 100;
    } else {
        let overflow = currentCapacityA + incrementalValue - maxCapacityA;
        currentCapacityA = maxCapacityA;
        waterA.style.height = "100%";
        document.getElementById("statusCapacity").textContent = currentCapacityA;
        document.getElementById("statusPercentage").textContent = "100";

        if (currentCapacityB + overflow <= maxCapacityB) {
            currentCapacityB += overflow;
            waterB.style.height = (currentCapacityB / maxCapacityB) * 100 + "%";
            document.getElementById("tankBCurrent").textContent = currentCapacityB;
            waterB.style.backgroundColor = "green"; // Set background color of containerB to green
        } else if (currentCapacityB === maxCapacityB) {
            alert("Overflow!!");
        } else {
            alert("Error: Maximum capacity exceeded in Tank B!");
        }
        let tankBCapacityInput = document.getElementById("tankBCapacityInput");
        let tankBMaxCap = document.getElementById("tankBMaxCap");
        let tankBCurrent = document.getElementById("tankBCurrent");
        let currentBPercentage = document.getElementById("currentBPercentage");
        let percentage = (parseInt(tankBCurrent.textContent) / parseInt(tankBMaxCap.textContent)) * 100;
        currentBPercentage.textContent = percentage.toFixed(2);
    }
}

function setTankBCapacity() {
        let tankBCapacityInput = document.getElementById("tankBCapacityInput");
        let tankBMaxCap = document.getElementById("tankBMaxCap");
        let tankBCurrent = document.getElementById("tankBCurrent");
        let currentBPercentage = document.getElementById("currentBPercentage");

        // Check if the input is empty
        if (tankBCapacityInput.value === "") {
            tankBCapacityInput.style.borderColor = "red";
            return; // Exit the function if the input is empty
        }
        
        // Check if the input is below 100
        if (parseInt(tankBCapacityInput.value) < 100) {
            alert("Please don't input below the default")
            return; // Exit the function if the input is below 100
        }
        
        tankBCapacityInput.style.borderColor = "";

        tankBMaxCap.textContent = tankBCapacityInput.value;
        tankBCapacityInput.value = "";
    }