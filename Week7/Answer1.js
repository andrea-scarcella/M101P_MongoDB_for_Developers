db.messages.find({'headers.To':'john.lavorato@enron.com','headers.From':'andrew.fastow@enron.com'}).limit(30).pretty();
db.messages.find({'headers.To':'jeff.skilling@enron.com', 'headers.From':'andrew.fastow@enron.com'}).count();

db.messages.find({'headers.To':{'$in':['jeff.skilling@enron.com']}, 'headers.From':'andrew.fastow@enron.com'}).count();
