import { useState } from 'react';
import { Color } from './components/Color';
import styles from './app.module.css';

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

  const [colorName, setcolorName] = useState('');
  const [color, setcolor] = useState('');
  const [colorList, setcolorList] = useState([]);


  const handleColorSubmit = (event) => {
    event.preventDefault();

    const newColor = { name: colorName, cor: color};
    setcolorList((OldColorList) => [...OldColorList, newColor]);
  }

  console.log(colorList);


  return (
    <main className={styles.main}>
    <div className={styles.FormContainer}>
     <h1>Adicionar Nova Cor</h1>
     <form className={styles.FormContainer} onSubmit={handleColorSubmit}>
        <h3>Adicione a nova cor a lista</h3>
        <input className={styles.inputText}
            type="text"
            name='colorName'
            id='colorName'
            placeholder='Insira a cor'
            onChange={(event) => setcolorName(event.target.value)}
            value={colorName}
          />        
        <input className={styles.inputText}
            type="text"
            name='color'
            id='color'
            placeholder='Insira sua cor no formato hexadecimal'
            onChange={(event) => setcolor(event.target.value)}
            value={color}
          />        

          <div className={styles.button}>
            <button className={styles.button} type="submit" disabled={colorName === '' && color === ''}>Adicionar
            </button>
          </div>
          <h3 className={styles.listContainer}>Minhas cores selecionadas:</h3>
     </form>

     <section className={styles.main}>
          
          <div className={styles.listContainer}>
            <ul>
            
              {colorList && (                
                colorList.map((cor, index) => {
                  return (
                    
                    <Color
                      key={index}
                      color={cor}
                      
                    />
                  )
                })
              )}
            </ul>
          </div>
        </section>





    </div>

    </main>
  )
}

export default App