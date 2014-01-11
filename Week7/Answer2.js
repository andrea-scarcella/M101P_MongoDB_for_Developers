// Please use the Enron dataset you imported for the previous problem. For this question you will use the aggregation framework to figure out pairs of people that tend to communicate a lot. To do this, you will need to unwind the To list for each message. 

// This problem is a little tricky because a recipient may appear more than once in the To list for a message. You will need to fix that in a stage of the aggregation before doing your grouping and counting of (sender, recipient) pairs. 
use enron
db.messages.aggregate([
{'$project':{
	'headers.From':1,
	'headers.To':1
	}
},

{
'$group':{
	'_id':'$_id',
	'from':{'$first':'$headers.From'},	
	'to':{'$addToSet':'$headers.To'}
}
},
{
 '$unwind':'$to'
},
 {
'$group':{
	'_id':{	'from':'$from',		'to':'$to'},
	'count':{'$sum':1}
	}
},

{
'$sort':{'count':-1}
},{'$limit':5}

]);

// db.messages.aggregate([
// {
// '$unwind':'$headers.To'
// },
// {
// '$group':{
	// '_id':'$_id',
	// 'headers':{
	// 'From':{'$max':'$headers.From'},
	// 'To':{
		// '$addToSet':'$headers.To'
		// }
	// }
// }
// },{'$group':{
	// '_id':{'from':'headers.From','to':'headers.To'},
	// 'count':{'$sum':1}
	// }
// },
// {'$sort':{'$count':1}
// }]);
