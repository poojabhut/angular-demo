	const DragonEvenet = [
			{type:"attack",value:"12",target:"Player-dorkman"},
			{type:"yawn",value:"12"},
			{type:"eat",value:"horse"},
			{type:"attack",value:"24",target:"Player-anish"},
			{type:"attack",value:"36",target:"Player-dorkman"}
];

/*const TotalDamageOnDormark = DragonEvenet.
			filter(function(event){
				return event.type ==='attack';
			})
			.filter(function(event){
				return event.target === "Player-dorkman";
			})
			.map(function(event){
				return event.value;
			})
			.reduce(function(prev, value){
				return (prev || 0 ) + value
			})*/
  
const TotalAttack = e => e.type ==='attack'; 
const Players = e=> e.target === "Player-dorkman";
const MapVal = e=>e.value;
const TotalDamageOnDormark = DragonEvenet
			.filter(TotalAttack)
			.filter(Players)
			.map(MapVal)
			
console.log(TotalDamageOnDormark);
