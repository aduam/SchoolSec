var btn = document.getElementById('boton')

function login(){
btn.addEventListener('click', () => {
  let user = document.getElementById('user').value
  let pass = document.getElementById('pass').value
  if (user == 'school' && pass == '123'){
    console.log(user,pass)
    window.location.href = './map.html'
  }
})
}