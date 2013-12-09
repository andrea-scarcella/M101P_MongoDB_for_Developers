import pymongo
import datetime
import sys

# establish a connection to the database
connection = pymongo.Connection("mongodb://localhost", safe=True)


def hw2_2():
    db = connection.students


    result=db.grades.aggregate({'$group':{'_id':'$student_id', 'average':{'$avg':'$score'}}}, {'$sort':{'average':-1}}, {'$limit':1})
    print(result)

    #result=db.grades.find().sort('student_id',pymongo.ASCENDING).sort('score', pymongo.ASCENDING).limit(10)
    result= db.grades.find({'type': 'homework'})
    keys=result.distinct('student_id')
        #.sort([('student_id',pymongo.ASCENDING),('score', pymongo.ASCENDING)]).limit(10)
    for currentKey in keys:
        resultt=db.grades.find({'type': 'homework','student_id':currentKey})\
            .sort('student_id',pymongo.ASCENDING).sort('score', pymongo.ASCENDING).limit(1)
          #resultt=db.grades.find([{'type': 'homework'},{'student_id':currentKey}])\

        for doc in resultt:
            db.grades.remove({'_id':doc["_id"]})





hw2_2()
