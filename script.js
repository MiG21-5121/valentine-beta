function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = '❤️';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
                heart.remove();
                }, 5000);
  }
  
  setInterval(createHeart, 150);

  //login

  function login() {
    const password = document.getElementById('passwordInput').value;

    if (password === '2111') {
        // hiện ảnh
        document.querySelector('.container2').style.display = 'flex';       

        // Xóa trang login
        document.querySelector('.container').style.display = 'none';
    } else {
        alert('Sai ròi ! Nhập lại đi nè :>');
    }
}
