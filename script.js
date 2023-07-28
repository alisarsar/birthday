const data = [
  {
    id: 1,
    name: 'Bertie Yates',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    age: 32,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    id: 3,
    name: 'Larry Little',
    age: 36,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
  {
    id: 4,
    name: 'Sean Walsh',
    age: 34,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  },
  {
    id: 5,
    name: 'Lola Gardner',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  },
];

function renderPerson(person) {
    const personList = document.getElementById('personList');

    const personCard = document.createElement('div');
    personCard.classList.add('person-card');

    const personImg = document.createElement('img');
    personImg.classList.add('person-img');
    personImg.src = person.image;

    const personInfo = document.createElement('div');
    personInfo.textContent = `${person.name}, ${person.age} yaş`;

    personCard.appendChild(personImg);
    personCard.appendChild(personInfo);
    personList.appendChild(personCard);
}

function renderPeople() {
    data.forEach(person => {
        renderPerson(person);
    });
}

function clearList() {
  const personList = document.getElementById('personList');
  personList.innerHTML = '';

 
  const comeBackButton = document.createElement('button');
  comeBackButton.innerHTML = 'Come Back';
  comeBackButton.classList.add('come-back-btn');
  comeBackButton.addEventListener('click', comeBack);

  personList.appendChild(comeBackButton);
}

function comeBack() {
 
  const personList = document.getElementById('personList');
  personList.innerHTML = '';

  
  renderPeople();
}

renderPeople();