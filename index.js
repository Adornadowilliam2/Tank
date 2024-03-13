let input, incrementalValue, capacityValue, value, water, current, capacity, currentCapacityA, maxCapacityA, waterA, currentCapacityB, maxCapacityB, waterB, overflow, tankBCapacityInput, tankBMaxCap, tankBCurrent, currentBPercentage;
        
function setIncrementalValue() {
    input = document.getElementById("incrementalInput");
    incrementalValue = document.getElementById("incrementalValue");
    capacityValue = document.getElementById("capacityValue");

    value = input.value;

    if (value == "") {
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
    input = document.getElementById("currentInput");
    value = input.value;
    water = document.querySelector(".water");

    if (value == "") {
        input.style.borderColor = "red"; // Change the border color to red
    } else {
        current = Number(water.style.height.replace("%", ""));
        capacity = Number(document.getElementById("capacityValue").textContent);

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
    incrementalValue = Number(document.getElementById("incrementalValue").textContent);
    currentCapacityA = Number(document.getElementById("statusCapacity").textContent);
    maxCapacityA = Number(document.getElementById("capacityValue").textContent);
    waterA = document.querySelector("#containerA .water");

    currentCapacityB = Number(document.getElementById("tankBCurrent").textContent);
    maxCapacityB = Number(document.getElementById("tankBMaxCap").textContent);
    waterB = document.querySelector("#containerB .water");

    if (incrementalValue === 0 && maxCapacityA === 0) {
        alert("Both incremental value and max capacity cannot be 0!");
    } else if (currentCapacityA + incrementalValue <= maxCapacityA) {
        currentCapacityA += incrementalValue;
        waterA.style.height = (currentCapacityA / maxCapacityA) * 100 + "%";
        document.getElementById("statusCapacity").textContent = currentCapacityA;
        document.getElementById("statusPercentage").textContent = (currentCapacityA / maxCapacityA) * 100;
    } else {
        overflow = currentCapacityA + incrementalValue - maxCapacityA;
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
        tankBCapacityInput = document.getElementById("tankBCapacityInput");
        tankBMaxCap = document.getElementById("tankBMaxCap");
        tankBCurrent = document.getElementById("tankBCurrent");
        currentBPercentage = document.getElementById("currentBPercentage");
        let percentage = (parseInt(tankBCurrent.textContent) / parseInt(tankBMaxCap.textContent)) * 100;
        currentBPercentage.textContent = percentage.toFixed(2);
    }
}

function setTankBCapacity() {
    tankBCapacityInput = document.getElementById("tankBCapacityInput");
    tankBMaxCap = document.getElementById("tankBMaxCap");
    tankBCurrent = document.getElementById("tankBCurrent");
    currentBPercentage = document.getElementById("currentBPercentage");

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