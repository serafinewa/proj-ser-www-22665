import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Screensv() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 980 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[300] }} aria-label="Screensv">
                        S
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Nowa ZIMOWA Edycja Serwera!"
                subheader="25 January, 2022"
            />
            <CardMedia
                component="img"
                height="680"
                image="https://mcdn.wallpapersafari.com/medium/20/67/wcZWPs.jpg"
                alt="ScreenshotMC"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Witajcie! Już w piątek o godzinie 18:00 wystartuje Nowa Edycja! Zmiany, które się pojawią to :
                    <li>wersja 1.18.1 oraz usunięcie całkowicie Gildii</li>
                    <li>Nowy, tematyczny Spawn!</li>
                    <li>System przyjaciół – /friend – umożliwia dodanie do listy znajomych dzięki temu  „przyjaciel” nie będzie mógł Cię zabić oprócz areny pvp.</li>
                    <li>Powodem dodania takiego systemu jest to, iż na nowej edycji za tpakill nie będzie bana ;).</li>
                    <li>Trade – możliwość wymiany pomiędzy graczami /trade.</li>
                    <li>Dodano listę topek /topka – od tej edycji topki będą miały większe znaczenie, iż pod koniec edycji najlepsi zostaną nagrodzeni.</li>
                    <li>Konkursy lotto – /lotto + regularne eventy OX co dwa tygodnie</li>
                    Dodano możliwość stworzenia specjalnej skrzyni, do której można włożyć Itemy, po czym ustalasz cenę takiej skrzynki i inny Gracz może ją kupić ;).
                    To oczywiście nie wszystko! Resztę odkryjecie w sami w trakcie gry 😉
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                         Witajcie! Już w piątek o godzinie 18:00 wystartuje Nowa Edycja! Zmiany, które się pojawią to :
                    </Typography>
                    <Typography paragraph>
                    <li>wersja 1.18.1 oraz usunięcie całkowicie Gildii</li>
                    <li>Nowy, tematyczny Spawn!</li>
                    <li>System przyjaciół – /friend – umożliwia dodanie do listy znajomych dzięki temu  „przyjaciel” nie będzie mógł Cię zabić oprócz areny pvp.</li>
                    <li>Powodem dodania takiego systemu jest to, iż na nowej edycji za tpakill nie będzie bana ;).</li>
                    <li>Trade – możliwość wymiany pomiędzy graczami /trade.</li>
                    <li>Dodano listę topek /topka – od tej edycji topki będą miały większe znaczenie, iż pod koniec edycji najlepsi zostaną nagrodzeni.</li>
                    <li>Konkursy lotto – /lotto + regularne eventy OX co dwa tygodnie</li>
                    </Typography>
                    <Typography>
                         Dodano możliwość stworzenia specjalnej skrzyni, do której można włożyć Itemy, po czym ustalasz cenę takiej skrzynki i inny Gracz może ją kupić ;).
                         To oczywiście nie wszystko! Resztę odkryjecie w sami w trakcie gry 😉
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Screensv;