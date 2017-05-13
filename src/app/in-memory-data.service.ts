import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let heroes = [
			{id: 11, name: 'Niel'},
			{id: 12, name: 'Noime'},
			{id: 13, name: 'Honey'},
			{id: 14, name: 'Judea'},
			{id: 15, name: 'Magneta'},
			{id: 16, name: 'Spider Man'},
			{id: 17, name: 'Gagamboy'},
			{id: 18, name: 'Lastic Man'},
			{id: 19, name: 'Pacquiao'},
			{id: 20, name: 'Mayang'}
		];
		return {heroes};
	}
}