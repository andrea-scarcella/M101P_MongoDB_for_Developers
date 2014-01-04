
// Please calculate the average population of cities in California (abbreviation CA) and New York (NY) (taken together) with populations over 25,000. 

// For this problem, assume that a city name that appears in more than one state represents two separate cities. 

// Please round the answer to a whole number. 
// Hint: The answer for CT and NJ is 49749. 

// Please note:
// One zip code may cover cities in different states.
// Different states might have the same city name.
// A city might have multiple zip codes.


db.zips.aggregate([
{
'$match':{
	'$or':[
	{'state':'CA'},
	{'state':'NY'}]
	}
},
{
'$group':{
	'_id':{'city':'$city',
	'state':'$state'},
	'pop':{'$sum':'$pop'}
}
},
{
'$match':{
	'pop':{'$gt':25000},
	
	}
},
{
	'$group':{
		'_id':1,
		'pcount':{
		'$avg':'$pop'
		}
	}
}

]
);

 db.zips.find().limit(1).pretty()
{
        "city" : "ACMAR",
        "loc" : [
                -86.51557,
                33.584132
        ],
        "pop" : 6055,
        "state" : "AL",
        "_id" : "35004"
}
>