import pymongo
import datetime
import sys

# establish a connection to the database
connection = pymongo.Connection("mongodb://localhost", safe=True)


def hw3_1():
    db = connection.school
    results=db.students.find()

    for doc in results:
       hlist=[ item for item in doc['scores'] if 'homework'==item['type']]
       if len(hlist) >0 :
           lscore=sorted(hlist, key=lambda score: score['score'])[0]#['score']
           doc['scores'].remove(lscore  )
           db.students.update({'_id':doc['_id']},doc)

hw3_1()
