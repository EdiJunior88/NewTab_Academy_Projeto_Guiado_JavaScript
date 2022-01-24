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
  },
  {
    name: 'Cauê Sanches Padula',
    tel: '14999999999',
    xp: true
  }
]


for (person in people){
  console.log(person)
  document.querySelector('table.lista tbody').innerHTML += `
  <tr style = "background-color: ${ ((person % 2 == 0) ? '#fff' : '#eee')}">
    <td>
      ${ people[person].name }
    </td>
    <td>
      ${ people[person].tel }
    </td>
    <td>
      ${ (people[person].xp ? '<strong style = "color:green">Sim</strong>' : '<strong style = "color:red">Não</strong>') }
    </td>
    <td>
      <button>Alterar</button>
    </td>
  </tr>
  `
}