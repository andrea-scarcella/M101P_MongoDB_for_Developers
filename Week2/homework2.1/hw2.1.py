import pymongo
import datetime
import sys

# establish a connection to the database
connection = pymongo.Connection("mongodb://localhost", safe=True)


def hw2_1():
    db = connection.students
    result=db.grades.find({'score':{'$gt':65}}).sort('score', pymongo.ASCENDING).limit(1)
    for doc in result:
        print(doc)



hw2_1()
