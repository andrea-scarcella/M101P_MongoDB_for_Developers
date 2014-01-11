// Please add the email address "mrpotatohead@10gen.com" to the list of addresses in the "headers.To" array for the document with "headers.Message-ID" of "<8147308.1075851042335.JavaMail.evans@thyme>" 
use enron;
db.messages.update({'headers.Message-ID':'<8147308.1075851042335.JavaMail.evans@thyme>'},{'$pull':{'headers.To':'mrpotatohead@10gen.com'}});
db.messages.find({'headers.Message-ID':'<8147308.1075851042335.JavaMail.evans@thyme>'}).limit(10).pretty();
db.messages.update({'headers.Message-ID':'<8147308.1075851042335.JavaMail.evans@thyme>'},{'$push':{'headers.To':'mrpotatohead@10gen.com'}});
db.messages.find({'headers.Message-ID':'<8147308.1075851042335.JavaMail.evans@thyme>'}).limit(10).pretty();