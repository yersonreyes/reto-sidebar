
let sidebar = document.getElementById('sidebar')
let button = document.getElementById('button')
let logo = document.getElementById('logo')
let categorias = document.getElementById('categorias')
let span = document.querySelectorAll('span')
let option = document.querySelectorAll('.option')


button.addEventListener('click', openSidebar)

function openSidebar(){
    sidebar.classList.toggle("sidebar-mini");
    logo.classList.toggle('optionNone');
    categorias.classList.toggle('optionNone')

    span.forEach((item)=>{
        item.classList.toggle('optionNone')
    })
}

option.forEach((item) =>
  item.addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
  })
);


