//BUSCANDO ELEMENTOS
const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
ondeVoceEsta.parentNode.style.backgroundColor = 'green';

const primeiroFilho = document.getElementById('primeiroFilho');
primeiroFilho.innerText = 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Sapien in monti palavris qui num significa nadis i pareci latim.Diuretics paradis num copo é motivis de denguis.'
document.getElementById('pai').firstElementChild;
ondeVoceEsta.previousElementSibling;
ondeVoceEsta.nextSibling;
ondeVoceEsta.nextElementSibling;
document.getElementById('pai').childNodes[5];

//CRIANDO ELEMENTOS
//1 
const irmaoOndeVoceEsta = document.createElement('section');
irmaoOndeVoceEsta.setAttribute('id', 'irmaoDoOndeVoceEsta');
ondeVoceEsta.parentNode.insertBefore(irmaoOndeVoceEsta, ondeVoceEsta.nextSibling);

//2
const filhoOndeVoceEsta = document.createElement('section');
filhoOndeVoceEsta.setAttribute('id', 'filho-onde-esta');
ondeVoceEsta.appendChild(filhoOndeVoceEsta);

//3
const primeiroFilhodoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.setAttribute('id', 'filhoDoPrimeiroFilhoDoFilho');
primeiroFilhodoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

//4
filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextSibling.nextSibling.nextSibling;

//REMOVENDO ELEMENTOS
const pai = document.getElementById('pai');

for (let i = pai.childNodes.length -1; i >= 0; i -= 1) {
  const currentChildren = pai.childNodes[i];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();
