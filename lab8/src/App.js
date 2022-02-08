// na początku należy zaimportować używane funkcje/komponenty z pobranych pakietów
import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
import './App.css';
import { Button, Card } from 'react-bootstrap';

/*  Funkcja MoreText to wersja uproszczona głównej funkcji (bez komponentu card), jej zadanie to stworzenie elementu
    ktory bedzie mial mozliwosc rozwijania sie. Jezeli jest potrzeba stworzenia collapse'a wewnatrz innego collapse'a nalezy
    stworzyc osobną funkcje bo inaczej przycisk bedzie odpowiadal za dwa elementy */

function MoreText() {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    return(
        <div>
            <p {...getCollapseProps()}>Pokaż więcej tekstu!</p>
            <Button style={{  marginTop: '10px' }}
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
                >
                {isExpanded ? 'Pokaż mniej tekstu' : 'Pokaż więcej tekstu'}
            </Button>
        </div>
    );
}
/*  Tutaj znajduje sie główna funkcja, na początku nalezy ustawić wartość isExpanded na false (poniewaz jeśli ustawimy na true to element będzie sie rozwijal)
    [setExpanded odpowiada za zmianę wartości isExpanded] getCollapseProps i getToggleProps to funkcje zwracające obiekt prop, który jest przypisany
    przypisany do odpowiedniego collapse lub toggle  */

function App() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

/*  W div'ie komponent card pomaga w poprawieniu wizualnym wyglądu strony, następnie dodany jest button, który odpowiada za zmianę wartości isExpanded
    przy pomocy setExpanded w momencie naciśnięcia. Napis na przycisku jest ustalany po sprawdzeniu wartości isExpanded. W komponencie p znajduje się
    tekst oraz funkcja MoreText */

  return (
      <div>
          <Card className="text-center center" border="primary" style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '18rem' }}>
              <Card.Body>
                <Button variant="outline-primary" style={{ marginBottom: '10px' }}
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                >
                    {isExpanded ? 'Hide it!' : 'Show me!'}
                </Button>
                  <p {...getCollapseProps()}>ewekmarchewek<MoreText /></p>
              </Card.Body>
          </Card>
      </div>
  )
}

export default App;
