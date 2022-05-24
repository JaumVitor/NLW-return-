window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  // navigation é meu id referenciando ao meu nav (objeto)
  // acessando o classList - posso adicionar .add uma classe.
  showNavOnScroll()
  showButtonToHomeOnScroll()
  activeCurrentSection(home)
  activeCurrentSection(services)
  activeCurrentSection(about)
  activeCurrentSection(contact)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showButtonToHomeOnScroll() {
  if (scrollY > 444) {
    backToHome.classList.add('visible')
  } else {
    backToHome.classList.remove('visible')
  }
}

// Não padronizei o modo de capturar o elemento
const openButton = document.querySelector('button.open-button')
const closeButton = document.querySelector('button.close-button')

openButton.addEventListener('click', function () {
  document.body.classList.add('menu-expanded')
})

closeButton.addEventListener('click', function () {
  document.body.classList.remove('menu-expanded')
})

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function activeCurrentSection(section) {
  // Linha que vai representar a metade da minha viewport height
  const targetLine = scrollY + innerHeight / 2

  // Inicio e fim da minhas sections
  const initialTopSection = section.offsetTop
  const endBottomSection = section.offsetTop + section.offsetHeight
  const targetActive = document.querySelector(
    `.menu a[href*=${section.getAttribute('id')}]`
  )

  if (targetLine >= initialTopSection && !(targetLine > endBottomSection)) {
    // Pegando o elemento que esta no .menu a, que tenha o valor no atributo href especificado por esse id.
    targetActive.classList.add('active')
  } else {
    targetActive.classList.remove('active')
  }
}
// ----------- show button "back to top"

// Funcao simplificada
// function funcExt() {
//   return {
//     funcInt: function () {
//       console.log('execultando função interna')
//     }
//   }
// }

// Funcao não simplificada
// function funcExt1() {
//   var object = {
//     funcInt1: function () {
//       console.log('executando func interna 1')
//     }
//   }
//   return object
// }

// funcExt().funcInt()
// funcExt1().funcInt1()

ScrollReveal({
  origin: 'top',
  duration: 200,
  distance: '30px'
}).reveal(
  ` #home, #home .girl-image, .stats,
    #services header, .card,
    #about header, #about .content, #about img,
    #contact header, #contact .content, #contact .man-using-phone`
)
