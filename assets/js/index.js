var people = [
  {
    name: 'Fernando Henrique Caversan Santos Duro',
    tel: '14999999999',
    xp: true
  },
  {
    name: 'Anderson Arcenio Matos da Costa',
    tel: '14999999999',
    xp: true
  },
  {
    name: 'Karina do Amaral',
    tel: '14999999999',
    xp: false
  }
]

console.log(document.querySelector('table.lista tbody').innerHTML);

for (person in people){
  document.querySelector('table.lista tbody').innerHTML += `<tr>
    <td>
      ${ people[person].name }
    </td>
    <td>
      ${ people[person].tel }
    </td>
    <td>
      ${ (people[person].xp ? 'Sim' : 'Não') }
    </td>
    <td>
      <button>Alterar</button>
    </td>
  </tr>`
}