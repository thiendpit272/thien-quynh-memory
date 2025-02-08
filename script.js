const messages = [
    "Bé chắc chưa?",
    "Thật sự??",
    "Thôi mà, năn nỉ...",
    "Bé suy nghĩ kĩ đi nè!",
    "Bé mà nói không, anh sẽ buồn lắm ó...",
    "Anh sẽ rất rất rất buồn 😞😞...",
    "Oke, anh sẽ không hỏi nữa...",
    "Anh giỡn hoi, nói có đi mà! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}