import pymongo
from pymongo import MongoClient
client = MongoClient()
db = client.photosharing
albums = db.albums
images = db.images.find()
# print images.count()
# out = [image['_id']  for image in images if albums.find({'images': {'$in':[image['_id']]}}).count()==0]
# print len(out)
# db.images.remove({'_id':{'$in':out}})
# print db.images.count()
print db.images.find({'tags':{'$in':['kittens']}}).count()