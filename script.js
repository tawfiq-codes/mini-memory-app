let items = ["7", "3", "5", "1", "9"]; // می‌تونی عدد یا رنگ بذاری
let current = 0;
let hideTimer;

function showItem(){
    // انتخاب تصادفی آیتم
    current = Math.floor(Math.random() * items.length);
    
    // نمایش آیتم
    document.getElementById("memoryItem").textContent = items[current];
    document.getElementById("result").textContent = "";
    document.getElementById("answer").value = "";

    // بعد 3 ثانیه آیتم را پنهان کن
    clearTimeout(hideTimer);
    hideTimer = setTimeout(()=>{
        document.getElementById("memoryItem").textContent = "?";
    }, 3000); // 3000 میلی‌ثانیه = 3 ثانیه
}

function checkAnswer(){
    let input = document.getElementById("answer").value.trim();
    if(input === items[current]){
        document.getElementById("result").textContent = "Correct ✅";
    } else {
        document.getElementById("result").textContent = "Wrong ❌ Correct: " + items[current];
    }
}

function nextItem(){
    showItem();
}

// نمایش اولین آیتم
showItem();
