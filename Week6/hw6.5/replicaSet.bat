mkdir  "E:\data\rs1" "E:\data\rs2" "E:\data\rs3"

start mongod --replSet m101 --logpath "E:\data\rs1\rs1.log" --dbpath "E:\data\rs1" --port 27017 --smallfiles --oplogSize 64 
 
start mongod --replSet m101 --logpath "E:\data\rs2\rs2.log" --dbpath "E:\data\rs2" --port 27018 --smallfiles --oplogSize 64 

start mongod --replSet m101 --logpath "E:\data\rs3\rs3.log" --dbpath "E:\data\rs3" --port 27019 --smallfiles --oplogSize 64 

