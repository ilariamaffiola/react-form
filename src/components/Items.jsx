import React from 'react'
import { useState } from 'react'
const blogItems = [
  "7 ricette facili e veloci per cene dell’ultimo minuto",
  "Come organizzare un viaggio low cost senza rinunciare al comfort",
  "10 idee per arredare casa con stile spendendo poco",
  "I benefici del camminare ogni giorno: salute e mente",
  "Come migliorare la comunicazione nella coppia",
  "Guida pratica al decluttering: fai spazio nella tua vita",
  "I migliori libri da leggere almeno una volta nella vita",
  "Routine mattutina per iniziare la giornata con energia",
  "Come risparmiare sulla spesa settimanale senza rinunciare alla qualità",
  "Weekend fuori porta: 5 mete perfette per rigenerarsi"
];
const Items = () => {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState(blogItems);
    const addItem = (e) => {
            e.preventDefault();
            console.log(`aggiunto ${newItem}`);
            const item = newItem.trim();
            setItems([...items, item]);
            setNewItem("");
        }
    const handleRemoveItem = (index) => {
        const updatedItems = items.filter((item, i) => {
            return i !== index;
        });
        setItems(updatedItems);
    }
    return (
        <div className='py-3'>
        <div className="container">
            <div className="list-group">
                <ul className="p-0 m-0">
                    {items.map((item, index) => (
                        <li 
                            key={index} className='list-group-item list-group-item d-flex justify-content-between align-items-center'>{item}
                            <button
                                className='btn btn-danger btn-sm '
                                onClick={() =>{
                                    handleRemoveItem(index);
                                }}
                                >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </li>
                    ))} 
                </ul>
                <form className="mt-3" onSubmit={addItem}>
                    <div className="input-group mb-3">
                        <input
                            value={newItem}
                            onChange={(e) =>{
                                setNewItem(e.target.value);
                            }} //onChange aggiorna newTask in tempo reale.
                            type="text"
                            className='form-control'
                            placeholder='Aggiungi un nuovo titolo'
                        />
                        <button className='btn btn-primary'>Aggiungi</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Items
