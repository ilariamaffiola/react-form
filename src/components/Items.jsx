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

    return (
        <div>
        <div className="container">
            <div className="list-group">
                <ul>
                    {items.map((item, index) => (
                        <li key={index} className='list-group-item'>{item}</li>
                    ))} 
                </ul>
                <form onSubmit={addItem}>
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
