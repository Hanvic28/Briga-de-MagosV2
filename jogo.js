import { MagoPyromantico } from './Classe_Controller/MagoPyromantico_controller/MagoPyromantico.js';
import { MagoEletrico } from './Classe_Controller/MagoEletrico_controller/MagoEletrico.js';
import { Magos } from './Classe_Controller/Magos_controller/Magos.js';

function jogo() {
	const magoFogo = new MagoPyromantico('Zord', 345);
	console.log(magoFogo.caracteristicas.nome);
	magoFogo.bolaFogo();
	recebeMagia();
	console.log('vida:' + magoFogo.caracteristicas.vida);
	console.log('mana:' + magoFogo.caracteristicas.mana);

	console.log('');

	const magoEletrico = new MagoEletrico('Zenith', 43);
	console.log(magoEletrico.caracteristicas.nome);
	magoEletrico.raios();
	recebeMagia();
	console.log('vida:' + magoEletrico.caracteristicas.vida);
	console.log('mana:' + magoEletrico.caracteristicas.mana);
}

function recebeMagia() {
	if (this?.caracteristicas.vida <= this?.tiposAtaque.agressao) {
		throw new Error('Game Over...sua vida acabou');
	}

	if (this?.caracteristcas.mana <= 0) {
		throw new Error('Game Over...sua mana acabou');
	}

	this.caracteristcas.vida = this.caracteristicas.vida - this.tiposAtaque[0].agressao;
}
jogo();
//jogador 1: criar mago 1
//bot: cria mago 2

//definir quem começa o jogo

//jogador 1 escolhe o ataque
//jogador 1 ataca

//bot valida-se, tem defesa

/*
digite seu nome
Ola Nome seja bem vindo a terra do nunca
voce ja escolher seu avatar?!
esolha agora
1.
2.
3.
4.

boa escolha a partir de agora voce e o grande Lorde do Fogo


*/
