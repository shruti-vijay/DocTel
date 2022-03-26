# BTech Final Project

DocTel, an health data application based on blockchain technology, where health data are stored with different levels of access controls and privacy policies to give the best benefits. In DocTel admins (hospital management) or IoT devices can regularly update the users' health data. Doctors and AI health analyzers can anywhere and anytime diagnose these data and this data will build up all the historical data of that particular user and will be connected by a unique identification number (Aadhar no.) to every patient. The data will continuously keep on growing and blockchain is incapable of storing huge amounts of data as the resource requirements will become too high and complexity will increase to maintain, search and verify. The optimal solution at this point will be to use the InterPlanetary File System (IPFS), which is a content-addressable, distributed file system to store data. The data is distributed over different nodes in the network as there is no central server. Even if some nodes are disconnected still the data is accessible from other running nodes and it can distribute large amounts of data without duplication. Every file uploaded to IPFS has a unique hash string through which the file can be retrieved. In the DocTel application, most of the data is stored in the IPFS and that particular hash of that file is stored in the blockchain and helps to verify data integrity and map the data in the ipfs storage. The health data has to be accessed by the doctors and health analyzers so access control is added to the application so only specific groups of people can access the sensitive health data.