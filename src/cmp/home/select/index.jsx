import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Patna', unavailable: false },
  { id: 2, name: 'New Delhi', unavailable: false },
  { id: 3, name: 'Ranchi', unavailable: false },
  { id: 4, name: 'Kolkata', unavailable: true },
  { id: 5, name: 'Mumbai', unavailable: false },
]

const MyListbox =() => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson} >
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
export default MyListbox;
