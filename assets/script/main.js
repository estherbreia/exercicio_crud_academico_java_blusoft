
function login() {
    var usuario = document.getElementsByName('email')[0].value.toLowerCase();
    var senha = document.getElementsByName('password')[0].value.toLowerCase();

    if (usuario == 'usuario@senac.com' && senha == '1234') {
        window.location.href = 'portal.html';
        return false;
    } else {
        alert('Dados incorretos, tente novamente');
        return false;
    }
}

function mostrar(secao) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('perfil').style.display = 'none';
    document.getElementById('notas').style.display = 'none';
    document.getElementById('contato').style.display = 'none';

    document.getElementById(secao).style.display = 'block';
}

console.log("JS conectado!")