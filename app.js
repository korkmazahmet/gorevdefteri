// HTML'deki input öğesini seç
const inputBox = document.getElementById("input-box");

// HTML'deki liste öğesini seç
const listContainer = document.getElementById("list-container");

// Görev ekleme fonksiyonu
function addTask() {
    // Eğer input kutusu boşsa, uyarı göster
    if (inputBox.value === '') {
        alert("Bir şeyler yazmalısın");
    } else {
        // Yeni bir <li> öğesi oluştur
        let li = document.createElement("li");
        // <li> öğesinin içeriğine input kutusundaki değeri ata
        li.innerHTML = inputBox.value;
        // Yeni bir <span> öğesi oluştur
        let span = document.createElement("span");
        // <span> öğesine "spann" sınıfını ata
        span.className = "spann";
        // <span> öğesinin içeriğine silme simgesi (×) ekle
        span.innerHTML = "\u00d7";
        // <span> öğesini <li> öğesine ekle
        li.appendChild(span);
        // <li> öğesini listeye ekle
        listContainer.appendChild(li);
    }
    // Input kutusunun değerini temizle
    inputBox.value = "";
    // Güncellenmiş listeyi kaydet
    saveData();
}

// Listeye tıklama olay dinleyicisi ekle
listContainer.addEventListener("click", function(e) {
    // Eğer tıklanan öğe bir <li> ise, "checked" sınıfını ekle veya çıkar
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        // Güncellenmiş listeyi kaydet
        saveData();
    } 
    // Eğer tıklanan öğe bir <span> ise, <li> öğesini kaldır
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        // Güncellenmiş listeyi kaydet
        saveData();
    }
});

// Listeyi yerel depolamaya kaydet
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Yerel depolamadan listeyi yükle ve göster
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Sayfa yüklendiğinde görevleri göster
showTask();
