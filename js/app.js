var form = document.getElementById('addForm');
var MissionList = document.getElementById('Missions');
var filter = document.getElementById('filter');

// do submita
form.addEventListener('submit', addMission);
// usuwa zadanie
MissionList.addEventListener('click', removeMission);
// filtrowanie zadań
filter.addEventListener('keyup', filterMissions);

// dodaj zadanie
function addMission(e){
  e.preventDefault();

  //weź input
  var newMission = document.getElementById('Mission').value;

  // stworzenia li
  var li = document.createElement('li');
  // dodanie klasy
  li.className = 'list-group-item';
  // dodanie textNode
  li.appendChild(document.createTextNode(newMission));

  // stworzenie butonu X
  var deleteBtn = document.createElement('button');

  // dodanie klasy do butonu
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // dodanie textu do butona
  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);

  MissionList.appendChild(li);
}

// usunięcie zadania
function removeMission(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Na pewno?')){
      var li = e.target.parentElement;
      MissionList.removeChild(li);
    }
  }
}

// filtowanie
function filterMissions(e){
  // konwersja do lowerCase
  var text = e.target.value.toLowerCase();

  var Missions = MissionList.getElementsByTagName('li');
  // konwersja do tablicy
  Array.from(Missions).forEach(function(Mission){
    var MissionName = Mission.firstChild.textContent;
    if(MissionName.toLowerCase().indexOf(text) != -1){
      Mission.style.display = 'block';
    } else {
      Mission.style.display = 'none';
    }
  });
}
