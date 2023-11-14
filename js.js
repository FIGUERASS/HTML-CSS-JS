const btnAdicionar = document.getElementById('btnAdicionar')
const modalAdicionar = document.getElementById('modalAdicionarContato')
let menu = document.getElementById("overlay")
 btnAdicionar.addEventListener('click', function() {
 modalAdicionar.style.display = 'block';
 if (menubar.style.display === "block") {
    menubar.style.display = "none";
 } else { 
    menubar.style.display = "block";
 }
 });
 document.getElementById('closeModal').addEventListener('click', function() {
 modalAdicionar.style.display = 'none';
 });
 document.getElementById('formAdicionarContato').addEventListener('submit',
function(event) {
 event.preventDefault();
 let nome = document.getElementById('nome').value;
 let idade = document.getElementById('idade').value;
 let telefone = document.getElementById('telefone').value;
 let email = document.getElementById('email').value;
 const contato = {
 nome: nome,
 idade: idade,
 telefone: telefone,
 email: email
 };
 contatos.push(contato);
 document.getElementById('modalAdicionarContato').style.display = 'none';
 document.getElementById('formAdicionarContato').reset();
});
