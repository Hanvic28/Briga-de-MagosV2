import { Magos } from '../Magos_controller/Magos.js';

export class MagoPyromantico extends Magos {
	tiposAtaque;
	constructor(nome, idade, rank = 'A') {
		super(nome, idade, 100, 100, rank);
		this.tiposAtaque = [{ nome: 'BolaFogo', agressao: 30, perdaMana: 15 }];
	}

	bolaFogo() {
		console.log('O feitiço "Bola de Fogo" foi lançado');
		if (this.caracteristicas.mana >= 15) this.caracteristicas.mana = this.caracteristicas.mana - 15;
		else throw new Error('Voce nao tem forca apra isso');
	}

	lancaChamas() {
		console.log('O feitiço "lança Chamas" foi lançado'); //o inimigo perde 35/consome 40 de mana
		const dano = 35;
		const custoMana = 40;
	}

	derretimento() {
		console.log('O Passivo "Derretimento" foi ativado'); //abilidade passiva  que o deixa imune a danos/consome 80 de mana
		const custoMana = 80;
		console.log('ddddd');
	}

	recebeMagia() {
		if (this.caracteristicas.vida <= this.caracteristcas.agressao) {
			throw new Error('Game Over...sua vida acabou');
		}

		if (this.caracteristcas.mana <= 0) {
			throw new Error('Game Over...sua mana acabou');
		}
	}
}
