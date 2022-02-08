import React, { useState } from 'react'
import useCollapse from 'react-collapsed'
import './App.css';
import { Button, Card } from 'react-bootstrap';

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
function App() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
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
