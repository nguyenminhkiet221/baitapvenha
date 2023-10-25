// truy vấn HTML element
let titleElem =  document.getElementById("title");

console.log(titleElem);

// truy vấn nội dung (inner HTML) của element
console.log(titleElem.innerHTML);

titleElem.innerHTML = "Average Mark Calculation";
titleElem.style.color = "red";

// Thê, element mới vào student list

// Tạo thẻ li mới
let newItemElem = document.createElement("li");

// Setuo nội dung cho element mới
newItemElem.innerHTML = "3. Evan - 9 - 8 - 8.5"

// Thêm phần tử mới vào thẻ ul
let studentListElem = document.getElementById("student-list");
studentListElem.appendChild(newItemElem);

// Xóa form element ra khỏi trang web
let studentFormElem = document.getElementById("student-form");
studentFormElem.remove();