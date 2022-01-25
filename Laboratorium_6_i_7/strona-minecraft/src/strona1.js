import React from "react";
import {Button, ButtonGroup, Container} from "@material-ui/core";
import Business from "@material-ui/icons/Business";

const Tryby = props => {
    const tryby = ['Freebuild', 'Survival', 'SkyBlock', 'Games']
    const listaTrybow = tryby.map(tryb => <li key={tryb}>{tryb}</li>)
    const tryby2 = ['Survival-Games', 'Speed-building', 'Gildie', 'HideAndSeek']
    const listaTrybow2 = tryby2.map(tryby2 => <li key={tryby2}>{tryby2}</li>)
    return (
        <div>
            {props.test ? <ul>{listaTrybow}</ul> : <ul>{listaTrybow2}</ul>}
        </div>
    )
}

class Tytul extends React.Component {
    state={
        title: 'Dostępne tryby gry'
    }
    przelaczTryby(){
        this.setState({ pokazTryby : !this.state.pokazTryby })
    }
    render(){
        const zmienTytul = () => this.setState({ title: 'Serwer Realcraft' })
        return (
            <div>
                <div>
                    <Container class = "kontener" fixed maxWidth="md">
                        <h1>{this.state.title}</h1>
                        <Tryby test={this.state.pokazTryby}/>
                        <ButtonGroup color="primary" aria-label="outlined secondary button group">
                            <Button startIcon={<Business />} onClick={zmienTytul}> Wyświetl nazwę serwera </Button>
                            <Button  onClick={()=>this.przelaczTryby()}> Inne tryby </Button>
                        </ButtonGroup>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Tytul;