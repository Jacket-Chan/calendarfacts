var cf = [];
/*
	cf is a list of the possibilities used to generate the calendar fact, which can be changed
	to whatever is wanted. the syntax is as follows
	
	[string] - a string is treated as something that can't be changed, aka filler text.
	[array] - an array can be filled with strings or more arrays, and will randomly have an index in it chosen
		from it, if the index chosen is also an array, the cycle continues until it doesn't come across an array.
*/
function calendarfact() {
	//normal calendar fact generator, will return a randomly generated calendar fact according to the XKCD comic
}