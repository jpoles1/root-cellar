export type Duration = number;
//Ingredient stores data for an amount of an ingredient
export interface Ingredient {
	quantity: number;
	unit: string;
	ingredient: string;
	notes: string;
}

//Instruction stores data for a step in the recipe
export interface Instruction {
	instruction: string;
	duration: Duration;
	optional: boolean;
}

//Recipe contains data regarding a recipe for a certain dish
export interface Recipe {
	id: string;
	uid: string;
	og_id: string;
	parent_id: string;
	name: string;
	desc: string;
	ingredients: Ingredient[];
	instructions: Instruction[];
	servings: string;
	active_time: Duration;
	total_time: Duration;
	tags: string[];
	url: string;
	archived: boolean;
	last_updated: Date;
}
