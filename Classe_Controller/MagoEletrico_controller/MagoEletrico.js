import { Magos } from '../Magos_controller/Magos.js';

export class MagoEletrico extends Magos {
	#tiposAtaque;
	constructor(nome, idade, rank = 'B') {
		super(nome, idade, 100, 100, rank);
		this.#tiposAtaque = [{ nome: 'raios', agressao: 40, perdaMana: 30 }];
	}

	raios(dano = 30, custoMana = 30) {
		console.log('O feitiço "Raios" foi lançado');
		// if (this.caracteristicas.mana >= 15) this.caracteristcas.mana = this.caracteristicas.mana - 30;
		// else throw new Error('Sua mana acabou');
	}

	lightingDash(custoMana = 50) {
		console.log('O passivo "lightingDash" foi ativado'); //desvia de 1 ataque inimigo/consome 50 de mana
		custoMana = 50;
	}

	gaiolaEletrica(dano = 20, custoMana = 100) {
		console.log('O Feitiço "Gaiola Eletrica" foi lançado'); //deixa o inimigo incapaz de atacar por 1 round e da 20 de dano nele/consome 100 de mana
		dano = 20;
		custoMana = 100;
	}
}
