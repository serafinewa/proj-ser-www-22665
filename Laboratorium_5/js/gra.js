// Na początku należy zadeklarować zmienne globalne potrzebne do gry.
var DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};
// Deklarujemy ilość rund w grze, w tym wypadku rozgrywka będzie trwała 3 rundy
var rounds = [3];
// Grę będziemy rozgrywać piłką, więc kolejnym krokiem jest stworzenie obiektu piłka, rozmiar 23x23 jest wystarczający
// żeby była widoczna na planszy
var Ball = {
    new: function (incrementedSpeed) {
        return {
            width: 23,
            height: 23,
            x: (this.canvas.width / 2) - 9,
            y: (this.canvas.height / 2) - 9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementedSpeed || 9
        };
    }
};
// Do odbijania piłki będzie służyła platforma, tworzymy więc nowy obiekt - platforma. Po jednej stronie platformą
// będzie sterował gracz, a po drugiej komputer.
var Paddle = {
    new: function (side) {
        return {
            width: 12,
            height: 100,
            x: side === 'left' ? 150 : this.canvas.width - 150,
            y: (this.canvas.height / 2) - 35,
            score: 0,
            move: DIRECTION.IDLE,
            speed: 10
        };
    }
};
// Nasza gra będzie się odbywała na planszy, kolejny krok to jej utworzenie i dodanie na nią obiektów - paletki oraz piłki.
// Ustalamy tutaj również kolor tła, ramkę
var Game = {
    initialize: function () {
        this.canvas = document.getElementById('canvas-gra');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = 1600;
        this.canvas.height = 900;

        this.player = Paddle.new.call(this, 'left');
        this.paddle = Paddle.new.call(this, 'right');
        this.ball = Ball.new.call(this);

        this.paddle.speed = 8;
        this.running = this.over = false;
        this.turn = this.paddle;
        this.timer = this.round = 0;
        document.body.style.backgroundColor = '#fdb9c8';
        this.color = '#fdb9c8';
        this.canvas.style.border = "5px dashed white";

        Pong.menu();
        Pong.listen();
    },
    endGameMenu: function (text) {
// W tym miejscu możemy ustalić czcionkę i kolor canvasa
        Pong.context.font = '50px Courier New';
        Pong.context.fillStyle = this.color;
// Teraz tworzymy prostokątne okienko, w którym pojawi się komunikat o rozpoczęciu gry
        Pong.context.fillRect(
            Pong.canvas.width / 2 - 350,
            Pong.canvas.height / 2 - 48,
            700,
            100
        );
// Zmieniamy kolor napisu, który wyskoczy na końcu gry
        Pong.context.fillStyle = '#000000';
// Tworzymy prostokątne okienko, w którym pojawi się komunikat o zakończeniu gry
        Pong.context.fillText(text,
            Pong.canvas.width / 2,
            Pong.canvas.height / 2 + 15
        );
        setTimeout(function () {
            Pong = Object.assign({}, Game);
            Pong.initialize();
        }, 3000);
    },

    menu: function () {
// Na tym etapie 'rysujemy' (tworzymy) wszystkie obiekty, które będzie zawierać gra
        Pong.draw();
// Zmieniamy czcionkę i kolor komunikatów
        this.context.font = '50px Courier New';
        this.context.fillStyle = this.color;
// 'Rysujemy' (tworzymy) prostokąt na którym będzie komunikat żeby rozpocząć grę
        this.context.fillRect(
            this.canvas.width / 2 - 350,
            this.canvas.height / 2 - 48,
            700,
            100
        );
// Zmieniamy kolor canvasa
        this.context.fillStyle = '#ffffff';
// 'Rysujemy' (tworzymy) tekst startowego komunikatu
        this.context.fillText('Rozpocznij grę - wciśnij coś!',
            this.canvas.width / 2,
            this.canvas.height / 2 + 15
        );
    },
// Ważnym krokiem będzie stworzenie funkcji update, która będzie służyła do aktualizowania elementów
    update: function () {
        if (!this.over) {
// Sprawdzenie warunku, czy piłka trafiła w którąś z barier, jeżeli tak, to reset lub zmiana kierunku.
            if (this.ball.x <= 0) Pong._resetTurn.call(this, this.paddle, this.player);
            if (this.ball.x >= this.canvas.width - this.ball.width) Pong._resetTurn.call(this, this.player, this.paddle);
            if (this.ball.y <= 0) this.ball.moveY = DIRECTION.DOWN;
            if (this.ball.y >= this.canvas.height - this.ball.height) this.ball.moveY = DIRECTION.UP;
// Zmiana położenia platformy gracza.
            if (this.player.move === DIRECTION.UP) this.player.y -= this.player.speed;
            else if (this.player.move === DIRECTION.DOWN) this.player.y += this.player.speed;
// Ustalenie, żeby po zdobyciu punktu piłka leciała w odpowiednim kierunku oraz losowanie czy poleci w górę, czy w dół.
            if (Pong._turnDelayIsOver.call(this) && this.turn) {
                this.ball.moveX = this.turn === this.player ? DIRECTION.LEFT : DIRECTION.RIGHT;
                this.ball.moveY = [DIRECTION.UP, DIRECTION.DOWN][Math.round(Math.random())];
                this.ball.y = Math.floor(Math.random() * this.canvas.height - 200) + 200;
                this.turn = null;
            }
// Sprawdzenie, czy gracz nie dotknął którejś z barier
            if (this.player.y <= 0) this.player.y = 0;
            else if (this.player.y >= (this.canvas.height - this.player.height)) this.player.y = (this.canvas.height - this.player.height);
// Zmiana kierunku ruchu piłki
            if (this.ball.moveY === DIRECTION.UP) this.ball.y -= (this.ball.speed / 1.5);
            else if (this.ball.moveY === DIRECTION.DOWN) this.ball.y += (this.ball.speed / 1.5);
            if (this.ball.moveX === DIRECTION.LEFT) this.ball.x -= this.ball.speed;
            else if (this.ball.moveX === DIRECTION.RIGHT) this.ball.x += this.ball.speed;
// W tym fragmencie opisujemy ruchy komputera
            if (this.paddle.y > this.ball.y - (this.paddle.height / 2)) {
                if (this.ball.moveX === DIRECTION.RIGHT) this.paddle.y -= this.paddle.speed / 1.5;
                else this.paddle.y -= this.paddle.speed / 4;
            }
            if (this.paddle.y < this.ball.y - (this.paddle.height / 2)) {
                if (this.ball.moveX === DIRECTION.RIGHT) this.paddle.y += this.paddle.speed / 1.5;
                else this.paddle.y += this.paddle.speed / 4;
            }
// Tutaj zajmujemy się kolizjami komputera z barierami
            if (this.paddle.y >= this.canvas.height - this.paddle.height) this.paddle.y = this.canvas.height - this.paddle.height;
            else if (this.paddle.y <= 0) this.paddle.y = 0;
// Tutaj zaś zajmujemy się kolizjami gracza z piłką
            if (this.ball.x - this.ball.width <= this.player.x && this.ball.x >= this.player.x - this.player.width) {
                if (this.ball.y <= this.player.y + this.player.height && this.ball.y + this.ball.height >= this.player.y) {
                    this.ball.x = (this.player.x + this.ball.width);
                    this.ball.moveX = DIRECTION.RIGHT;
                }
            }
// Tutaj zajmujemy się kolizjami platform z piłką
            if (this.ball.x - this.ball.width <= this.paddle.x && this.ball.x >= this.paddle.x - this.paddle.width) {
                if (this.ball.y <= this.paddle.y + this.paddle.height && this.ball.y + this.ball.height >= this.paddle.y) {
                    this.ball.x = (this.paddle.x - this.ball.width);
                    this.ball.moveX = DIRECTION.LEFT;
                }
            }
        }
// Jeżeli wynik punktowy któregoś z graczy osiągnie taką wartość jak okreslona ilość rund to sprawdzamy czy gracz wygrał grę
        if (this.player.score === rounds[this.round]) {
            this.over = true;
            setTimeout(function () { Pong.endGameMenu('Wygrałeś!'); }, 1000);
        }
// Sprawdzenie czy wygrał komputer
        else if (this.paddle.score === rounds[this.round]) {
            this.over = true;
            setTimeout(function () { Pong.endGameMenu('Przegrałeś!'); }, 1000);
        }
    },
// 'Rysujemy' (tworzymy) elementy na canvasie
    draw: function () {
// Czyszczenie canvasa
        this.context.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
// Ustalamy kolor wypełnienia jako czarny
        this.context.fillStyle = this.color;
// 'Rysujemy' (tworzmy) tło
        this.context.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
// Wybieramy kolor dla platform oraz piłki
        this.context.fillStyle = '#ffffff';
// 'Rysujemy' (tworzymy) platformę gracza
        this.context.fillRect(
            this.player.x,
            this.player.y,
            this.player.width,
            this.player.height
        );
// 'Rysujemy' (tworzymy) platformę komputera
        this.context.fillRect(
            this.paddle.x,
            this.paddle.y,
            this.paddle.width,
            this.paddle.height
        );
// 'Rysujemy' (tworzymy) piłkę
        if (Pong._turnDelayIsOver.call(this)) {
            this.context.fillRect(
                this.ball.x,
                this.ball.y,
                this.ball.width,
                this.ball.height
            );
        }
// 'Rysujemy' (tworzymy) linię, która będzie rozgraniczać naszą planszę
        this.context.beginPath();
        this.context.setLineDash([7, 15]);
        this.context.moveTo((this.canvas.width / 2), this.canvas.height - 15);
        this.context.lineTo((this.canvas.width / 2), 140);
        this.context.lineWidth = 10;
        this.context.strokeStyle = '#ffffff';
        this.context.stroke();
        this.context.font = '100px Courier New';
        this.context.textAlign = 'center';
// 'Rysujemy' (tworzymy) wynik gracza
        this.context.fillText(
            this.player.score.toString(),
            (this.canvas.width / 2) - 300,
            200
        );
// 'Rysujemy' (tworzymy) wynik komputera
        this.context.fillText(
            this.paddle.score.toString(),
            (this.canvas.width / 2) + 300,
            200
        );

        this.context.font = '40px Courier';

// 'Rysujemy' (tworzymy) ilość punktów, która jest potrzebna graczowi do wygranej
        this.context.fillText(
            rounds[Pong.round],
            (this.canvas.width / 2),
            100
        );
    },

    loop: function () {
        Pong.update();
        Pong.draw();
// 'Rysujemy' (tworzymy) kolejną klatkę
        if (!Pong.over) requestAnimationFrame(Pong.loop);
    },

    listen: function () {
        document.addEventListener('keydown', function (key) {
// Sprawdzenie, czy gracz wcisnął przycisk by zacząć grę
            if (Pong.running === false) {
                Pong.running = true;
                window.requestAnimationFrame(Pong.loop);
            }
// Sprawdzenie ruchu gracza
            if (key.keyCode === 38 || key.keyCode === 87) Pong.player.move = DIRECTION.UP;

            if (key.keyCode === 40 || key.keyCode === 83) Pong.player.move = DIRECTION.DOWN;
        });
// Kiedy gracz nie wcisnął jeszcze żadnego klawisza, platforma nie może być w ruchu
        document.addEventListener('keyup', function (key) { Pong.player.move = DIRECTION.IDLE; });
    },
// Resetowanie pozycji piłki oraz dodanie punktu po jego zdobyciu przez gracza
    _resetTurn: function(victor, loser) {
        this.ball = Ball.new.call(this, this.ball.speed);
        this.turn = loser;
        this.timer = (new Date()).getTime();
        victor.score++;
    },

// Opóźnienie czasowe między grami
    _turnDelayIsOver: function() {
        return ((new Date()).getTime() - this.timer >= 1000);
    },
};
var Pong = Object.assign({}, Game);
Pong.initialize();
