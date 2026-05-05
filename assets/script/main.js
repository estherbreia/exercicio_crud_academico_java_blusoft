


var done = 0;
var usuario = document.getElementsByName('email').value.toLowerCase(); [^1^]
var senha = document.getElementsByName('password').value.toLowerCase(); [^1^]
if (usuario == 'usuario@senac.com' && senha == '1234') {
window.location = 'portal.html';
done = 1;
}
if (done == 0) {
alert('Dados incorretos, tente novamente');
}