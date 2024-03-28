create database all_table_database;

use all_table_database;

create table states(
id int primary key auto_increment,
state_name varchar(255));

select * from states;

create table cities(
id int primary key auto_increment,
stateid int,
foreign key (stateid) references states(id),
city varchar(255));

select states.*,cities.* from states left join cities on states.id = cities.stateid;

insert into states (id,state_name) values ( 1 , 'Andaman & Nicobar Islands' ),
( 2 , 'Andhra Pradesh' ),
( 3 , 'Arunachal Pradesh' ),
( 4 , 'Assam' ),
( 5 , 'Bihar' ),
( 6 , 'Chandigarh' ),
( 7 , 'Chhattisgarh' ),
( 8 , 'Dadra & Nagar Haveli' ),
( 9 , 'Daman & Diu' ),
( 10 , 'Delhi' ),
( 11 , 'Goa' ),
( 12 , 'Gujarat' ),
( 13 , 'Haryana' ),
( 14 , 'Himachal Pradesh' ),
( 15 , 'Jammu & Kashmir' ),
( 16 , 'Jharkhand' ),
( 17 , 'Karnataka' ),
( 18 , 'Kerala' ),
( 19 , 'Lakshadweep' ),
( 20 , 'Madhya Pradesh' ),
( 21 , 'Maharashtra' ),
( 22 , 'Manipur' ),
( 23 , 'Meghalaya' ),
( 24 , 'Mizoram' ),
( 25 , 'Nagaland' ),
( 26 , 'Odisha' ),
( 27 , 'Puducherry' ),
( 28 , 'Punjab' ),
( 29 , 'Rajasthan' ),
( 30 , 'Sikkim' ),
( 31 , 'Tamil Nadu' ),
( 32 , 'Telangana' ),
( 33 , 'Tripura' ),
( 34 , 'Uttar Pradesh' ),
( 35 , 'Uttarakhand' ),
( 36 , 'West Bengal' );

insert into cities (stateid,city) values ( 1 ,"Nicobar");
insert into cities (stateid,city) values ( 1 ,"North Middle Andaman");
insert into cities (stateid,city) values ( 1 ,"South Andaman");
insert into cities (stateid,city) values ( 2 ,'Anantapur');
insert into cities (stateid,city) values ( 2 ,'Chittoor');
insert into cities (stateid,city) values ( 2 ,'East Godavari');
insert into cities (stateid,city) values ( 2 ,'Guntur');
insert into cities (stateid,city) values ( 2 ,'Kadapa');
insert into cities (stateid,city) values ( 2 ,'Krishna');
insert into cities (stateid,city) values ( 2 ,'Kurnool');
insert into cities (stateid,city) values ( 2 ,'Prakasam');
insert into cities (stateid,city) values ( 2 ,'Nellore');
insert into cities (stateid,city) values ( 2 ,'Srikakulam');
insert into cities (stateid,city) values ( 2 ,'Visakhapatnam');
insert into cities (stateid,city) values ( 2 ,'Vizianagaram');
insert into cities (stateid,city) values ( 2 ,'West Godavari');

insert into cities (stateid,city) values ( 3 ,'Anjaw');
insert into cities (stateid,city) values ( 3 ,'Changlang');
insert into cities (stateid,city) values ( 3 ,'Dibang Valley');
insert into cities (stateid,city) values ( 3 ,'East Kameng');
insert into cities (stateid,city) values ( 3 ,'East Siang');
insert into cities (stateid,city) values ( 3 ,'Kra Daadi');
insert into cities (stateid,city) values ( 3 ,'Kurung Kumey');
insert into cities (stateid,city) values ( 3 ,'Lohit');
insert into cities (stateid,city) values ( 3 ,'Longding');
insert into cities (stateid,city) values ( 3 ,'Lower Dibang Valley');
insert into cities (stateid,city) values ( 3 ,'Lower Subansiri');
insert into cities (stateid,city) values ( 3 ,'Namsai');
insert into cities (stateid,city) values ( 3 ,'Papum Pare');
insert into cities (stateid,city) values ( 3 ,'Siang');
insert into cities (stateid,city) values ( 3 ,'Tawang');
insert into cities (stateid,city) values ( 3 ,'Tirap');
insert into cities (stateid,city) values ( 3 ,'Upper Siang');
insert into cities (stateid,city) values ( 3 ,'Upper Subansiri');
insert into cities (stateid,city) values ( 3 ,'West Kameng');
insert into cities (stateid,city) values ( 3 ,'West Siang');
insert into cities (stateid,city) values ( 3 ,'Itanagar');

insert into cities (stateid,city) values ( 4 ,'Baksa');
insert into cities (stateid,city) values ( 4 ,'Barpeta');
insert into cities (stateid,city) values ( 4 ,'Biswanath');
insert into cities (stateid,city) values ( 4 ,'Bongaigaon');
insert into cities (stateid,city) values ( 4 ,'Cachar');
insert into cities (stateid,city) values ( 4 ,'Charaideo');
insert into cities (stateid,city) values ( 4 ,'Chirang');
insert into cities (stateid,city) values ( 4 ,'Darrang');
insert into cities (stateid,city) values ( 4 ,'Dhemaji');
insert into cities (stateid,city) values ( 4 ,'Dhubri');
insert into cities (stateid,city) values ( 4 ,'Dibrugarh');
insert into cities (stateid,city) values ( 4 ,'Goalpara');
insert into cities (stateid,city) values ( 4 ,'Golaghat');
insert into cities (stateid,city) values ( 4 ,'Hailakandi');
insert into cities (stateid,city) values ( 4 ,'Hojai');
insert into cities (stateid,city) values ( 4 ,'Jorhat');
insert into cities (stateid,city) values ( 4 ,'Kamrup Metropolitan');
insert into cities (stateid,city) values ( 4 ,'Kamrup (Rural)');
insert into cities (stateid,city) values ( 4 ,'Karbi Anglong');
insert into cities (stateid,city) values ( 4 ,'Karimganj');
insert into cities (stateid,city) values ( 4 ,'Kokrajhar');
insert into cities (stateid,city) values ( 4 ,'Lakhimpur');
insert into cities (stateid,city) values ( 4 ,'Majuli');
insert into cities (stateid,city) values ( 4 ,'Morigaon');
insert into cities (stateid,city) values ( 4 ,'Nagaon');
insert into cities (stateid,city) values ( 4 ,'Nalbari');
insert into cities (stateid,city) values ( 4 ,'Dima Hasao');
insert into cities (stateid,city) values ( 4 ,'Sivasagar');
insert into cities (stateid,city) values ( 4 ,'Sonitpur');
insert into cities (stateid,city) values ( 4 ,'South Salmara Mankachar');
insert into cities (stateid,city) values ( 4 ,'Tinsukia');
insert into cities (stateid,city) values ( 4 ,'Udalguri');
insert into cities (stateid,city) values ( 4 ,'West Karbi Anglong');

insert into cities (stateid,city) values ( 5 ,'Araria');
insert into cities (stateid,city) values ( 5 ,'Arwal');
insert into cities (stateid,city) values ( 5 ,'Aurangabad');
insert into cities (stateid,city) values ( 5 ,'Banka');
insert into cities (stateid,city) values ( 5 ,'Begusarai');
insert into cities (stateid,city) values ( 5 ,'Bhagalpur');
insert into cities (stateid,city) values ( 5 ,'Bhojpur');
insert into cities (stateid,city) values ( 5 ,'Buxar');
insert into cities (stateid,city) values ( 5 ,'Darbhanga');
insert into cities (stateid,city) values ( 5 ,'East Champaran');
insert into cities (stateid,city) values ( 5 ,'Gaya');
insert into cities (stateid,city) values ( 5 ,'Gopalganj');
insert into cities (stateid,city) values ( 5 ,'Jamui');
insert into cities (stateid,city) values ( 5 ,'Jehanabad');
insert into cities (stateid,city) values ( 5 ,'Kaimur');
insert into cities (stateid,city) values ( 5 ,'Katihar');
insert into cities (stateid,city) values ( 5 ,'Khagaria');
insert into cities (stateid,city) values ( 5 ,'Kishanganj');
insert into cities (stateid,city) values ( 5 ,'Lakhisarai');
insert into cities (stateid,city) values ( 5 ,'Madhepura');
insert into cities (stateid,city) values ( 5 ,'Madhubani');
insert into cities (stateid,city) values ( 5 ,'Munger');
insert into cities (stateid,city) values ( 5 ,'Muzaffarpur');
insert into cities (stateid,city) values ( 5 ,'Nalanda');
insert into cities (stateid,city) values ( 5 ,'Nawada');
insert into cities (stateid,city) values ( 5 ,'Patna');
insert into cities (stateid,city) values ( 5 ,'Purnia');
insert into cities (stateid,city) values ( 5 ,'Rohtas');
insert into cities (stateid,city) values ( 5 ,'Saharsa');
insert into cities (stateid,city) values ( 5 ,'Samastipur');
insert into cities (stateid,city) values ( 5 ,'Saran');
insert into cities (stateid,city) values ( 5 ,'Sheikhpura');
insert into cities (stateid,city) values ( 5 ,'Sheohar');
insert into cities (stateid,city) values ( 5 ,'Sitamarhi');
insert into cities (stateid,city) values ( 5 ,'Siwan');
insert into cities (stateid,city) values ( 5 ,'Supaul');
insert into cities (stateid,city) values ( 5 ,'Vaishali');
insert into cities (stateid,city) values ( 5 ,'West Champaran');

insert into cities (stateid,city) values ( 6 ,'Chandigarh');

insert into cities (stateid,city) values ( 7 ,'Balod');
insert into cities (stateid,city) values ( 7 ,'Baloda Bazar');
insert into cities (stateid,city) values ( 7 ,'Balrampur');
insert into cities (stateid,city) values ( 7 ,'Bastar');
insert into cities (stateid,city) values ( 7 ,'Bemetara');
insert into cities (stateid,city) values ( 7 ,'Bijapur');
insert into cities (stateid,city) values ( 7 ,'Bilaspur');
insert into cities (stateid,city) values ( 7 ,'Dantewada');
insert into cities (stateid,city) values ( 7 ,'Dhamtari');
insert into cities (stateid,city) values ( 7 ,'Durg');
insert into cities (stateid,city) values ( 7 ,'Gariaband');
insert into cities (stateid,city) values ( 7 ,'Janjgir Champa');
insert into cities (stateid,city) values ( 7 ,'Jashpur');
insert into cities (stateid,city) values ( 7 ,'Kabirdham');
insert into cities (stateid,city) values ( 7 ,'Kanker');
insert into cities (stateid,city) values ( 7 ,'Kondagaon');
insert into cities (stateid,city) values ( 7 ,'Korba');
insert into cities (stateid,city) values ( 7 ,'Koriya');
insert into cities (stateid,city) values ( 7 ,'Mahasamund');
insert into cities (stateid,city) values ( 7 ,'Mungeli');
insert into cities (stateid,city) values ( 7 ,'Narayanpur');
insert into cities (stateid,city) values ( 7 ,'Raigarh');
insert into cities (stateid,city) values ( 7 ,'Raipur');
insert into cities (stateid,city) values ( 7 ,'Rajnandgaon');
insert into cities (stateid,city) values ( 7 ,'Sukma');
insert into cities (stateid,city) values ( 7 ,'Surajpur');
insert into cities (stateid,city) values ( 7 ,'Surguja');

insert into cities (stateid,city) values ( 8 ,'Dadra Nagar Haveli');

insert into cities (stateid,city) values ( 9 ,'Daman');
insert into cities (stateid,city) values ( 9 ,'Diu');

insert into cities (stateid,city) values ( 10 ,'Central Delhi');
insert into cities (stateid,city) values ( 10 ,'East Delhi');
insert into cities (stateid,city) values ( 10 ,'New Delhi');
insert into cities (stateid,city) values ( 10 ,'North Delhi');
insert into cities (stateid,city) values ( 10 ,'North East Delhi');
insert into cities (stateid,city) values ( 10 ,'North West Delhi');
insert into cities (stateid,city) values ( 10 ,'Shahdara');
insert into cities (stateid,city) values ( 10 ,'South Delhi');
insert into cities (stateid,city) values ( 10 ,'South East Delhi');
insert into cities (stateid,city) values ( 10 ,'South West Delhi');
insert into cities (stateid,city) values ( 10 ,'West Delhi');

insert into cities (stateid,city) values ( 11 ,'North Goa');
insert into cities (stateid,city) values ( 11 ,'South Goa');

insert into cities (stateid,city) values ( 12 ,'Ahmedabad');
insert into cities (stateid,city) values ( 12 ,'Amreli');
insert into cities (stateid,city) values ( 12 ,'Anand');
insert into cities (stateid,city) values ( 12 ,'Aravalli');
insert into cities (stateid,city) values ( 12 ,'Banaskantha');
insert into cities (stateid,city) values ( 12 ,'Bharuch');
insert into cities (stateid,city) values ( 12 ,'Bhavnagar');
insert into cities (stateid,city) values ( 12 ,'Botad');
insert into cities (stateid,city) values ( 12 ,'Chhota Udaipur');
insert into cities (stateid,city) values ( 12 ,'Dahod');
insert into cities (stateid,city) values ( 12 ,'Dang');
insert into cities (stateid,city) values ( 12 ,'Devbhoomi Dwarka');
insert into cities (stateid,city) values ( 12 ,'Gandhinagar');
insert into cities (stateid,city) values ( 12 ,'Gir Somnath');
insert into cities (stateid,city) values ( 12 ,'Jamnagar');
insert into cities (stateid,city) values ( 12 ,'Junagadh');
insert into cities (stateid,city) values ( 12 ,'Kheda');
insert into cities (stateid,city) values ( 12 ,'Kutch');
insert into cities (stateid,city) values ( 12 ,'Mahisagar');
insert into cities (stateid,city) values ( 12 ,'Mehsana');
insert into cities (stateid,city) values ( 12 ,'Morbi');
insert into cities (stateid,city) values ( 12 ,'Narmada');
insert into cities (stateid,city) values ( 12 ,'Navsari');
insert into cities (stateid,city) values ( 12 ,'Panchmahal');
insert into cities (stateid,city) values ( 12 ,'Patan');
insert into cities (stateid,city) values ( 12 ,'Porbandar');
insert into cities (stateid,city) values ( 12 ,'Rajkot');
insert into cities (stateid,city) values ( 12 ,'Sabarkantha');
insert into cities (stateid,city) values ( 12 ,'Surat');
insert into cities (stateid,city) values ( 12 ,'Surendranagar');
insert into cities (stateid,city) values ( 12 ,'Tapi');
insert into cities (stateid,city) values ( 12 ,'Vadodara');
insert into cities (stateid,city) values ( 12 ,'Valsad');

insert into cities (stateid,city) values ( 13 ,'Ambala');
insert into cities (stateid,city) values ( 13 ,'Bhiwani');
insert into cities (stateid,city) values ( 13 ,'Charkhi Dadri');
insert into cities (stateid,city) values ( 13 ,'Faridabad');
insert into cities (stateid,city) values ( 13 ,'Fatehabad');
insert into cities (stateid,city) values ( 13 ,'Gurugram');
insert into cities (stateid,city) values ( 13 ,'Hisar');
insert into cities (stateid,city) values ( 13 ,'Jhajjar');
insert into cities (stateid,city) values ( 13 ,'Jind');
insert into cities (stateid,city) values ( 13 ,'Kaithal');
insert into cities (stateid,city) values ( 13 ,'Karnal');
insert into cities (stateid,city) values ( 13 ,'Kurukshetra');
insert into cities (stateid,city) values ( 13 ,'Mahendragarh');
insert into cities (stateid,city) values ( 13 ,'Mewat');
insert into cities (stateid,city) values ( 13 ,'Palwal');
insert into cities (stateid,city) values ( 13 ,'Panchkula');
insert into cities (stateid,city) values ( 13 ,'Panipat');
insert into cities (stateid,city) values ( 13 ,'Rewari');
insert into cities (stateid,city) values ( 13 ,'Rohtak');
insert into cities (stateid,city) values ( 13 ,'Sirsa');
insert into cities (stateid,city) values ( 13 ,'Sonipat');
insert into cities (stateid,city) values ( 13 ,'Yamunanagar');

insert into cities (stateid,city) values ( 14 ,'Bilaspur');
insert into cities (stateid,city) values ( 14 ,'Chamba');
insert into cities (stateid,city) values ( 14 ,'Hamirpur');
insert into cities (stateid,city) values ( 14 ,'Kangra');
insert into cities (stateid,city) values ( 14 ,'Kinnaur');
insert into cities (stateid,city) values ( 14 ,'Kullu');
insert into cities (stateid,city) values ( 14 ,'Lahaul Spiti');
insert into cities (stateid,city) values ( 14 ,'Mandi');
insert into cities (stateid,city) values ( 14 ,'Shimla');
insert into cities (stateid,city) values ( 14 ,'Sirmaur');
insert into cities (stateid,city) values ( 14 ,'Solan');
insert into cities (stateid,city) values ( 14 ,'Una');

insert into cities (stateid,city) values ( 15 ,'Anantnag');
insert into cities (stateid,city) values ( 15 ,'Bandipora');
insert into cities (stateid,city) values ( 15 ,'Baramulla');
insert into cities (stateid,city) values ( 15 ,'Budgam');
insert into cities (stateid,city) values ( 15 ,'Doda');
insert into cities (stateid,city) values ( 15 ,'Ganderbal');
insert into cities (stateid,city) values ( 15 ,'Jammu');
insert into cities (stateid,city) values ( 15 ,'Kargil');
insert into cities (stateid,city) values ( 15 ,'Kathua');
insert into cities (stateid,city) values ( 15 ,'Kishtwar');
insert into cities (stateid,city) values ( 15 ,'Kulgam');
insert into cities (stateid,city) values ( 15 ,'Kupwara');
insert into cities (stateid,city) values ( 15 ,'Leh');
insert into cities (stateid,city) values ( 15 ,'Poonch');
insert into cities (stateid,city) values ( 15 ,'Pulwama');
insert into cities (stateid,city) values ( 15 ,'Rajouri');
insert into cities (stateid,city) values ( 15 ,'Ramban');
insert into cities (stateid,city) values ( 15 ,'Reasi');
insert into cities (stateid,city) values ( 15 ,'Samba');
insert into cities (stateid,city) values ( 15 ,'Shopian');
insert into cities (stateid,city) values ( 15 ,'Srinagar');
insert into cities (stateid,city) values ( 15 ,'Udhampur');

insert into cities (stateid,city) values ( 16 ,'Bokaro');
insert into cities (stateid,city) values ( 16 ,'Chatra');
insert into cities (stateid,city) values ( 16 ,'Deoghar');
insert into cities (stateid,city) values ( 16 ,'Dhanbad');
insert into cities (stateid,city) values ( 16 ,'Dumka');
insert into cities (stateid,city) values ( 16 ,'East Singhbhum');
insert into cities (stateid,city) values ( 16 ,'Garhwa');
insert into cities (stateid,city) values ( 16 ,'Giridih');
insert into cities (stateid,city) values ( 16 ,'Godda');
insert into cities (stateid,city) values ( 16 ,'Gumla');
insert into cities (stateid,city) values ( 16 ,'Hazaribagh');
insert into cities (stateid,city) values ( 16 ,'Jamtara');
insert into cities (stateid,city) values ( 16 ,'Khunti');
insert into cities (stateid,city) values ( 16 ,'Koderma');
insert into cities (stateid,city) values ( 16 ,'Latehar');
insert into cities (stateid,city) values ( 16 ,'Lohardaga');
insert into cities (stateid,city) values ( 16 ,'Pakur');
insert into cities (stateid,city) values ( 16 ,'Palamu');
insert into cities (stateid,city) values ( 16 ,'Ramgarh');
insert into cities (stateid,city) values ( 16 ,'Ranchi');
insert into cities (stateid,city) values ( 16 ,'Sahebganj');
insert into cities (stateid,city) values ( 16 ,'Seraikela Kharsawan');
insert into cities (stateid,city) values ( 16 ,'Simdega');
insert into cities (stateid,city) values ( 16 ,'West Singhbhum');

insert into cities (stateid,city) values ( 17 ,'Bagalkot');
insert into cities (stateid,city) values ( 17 ,'Bangalore Rural');
insert into cities (stateid,city) values ( 17 ,'Bangalore Urban');
insert into cities (stateid,city) values ( 17 ,'Belgaum');
insert into cities (stateid,city) values ( 17 ,'Bellary');
insert into cities (stateid,city) values ( 17 ,'Bidar');
insert into cities (stateid,city) values ( 17 ,'Vijayapura');
insert into cities (stateid,city) values ( 17 ,'Chamarajanagar');
insert into cities (stateid,city) values ( 17 ,'Chikkaballapur');
insert into cities (stateid,city) values ( 17 ,'Chikkamagaluru');
insert into cities (stateid,city) values ( 17 ,'Chitradurga');
insert into cities (stateid,city) values ( 17 ,'Dakshina Kannada');
insert into cities (stateid,city) values ( 17 ,'Davanagere');
insert into cities (stateid,city) values ( 17 ,'Dharwad');
insert into cities (stateid,city) values ( 17 ,'Gadag');
insert into cities (stateid,city) values ( 17 ,'Gulbarga');
insert into cities (stateid,city) values ( 17 ,'Hassan');
insert into cities (stateid,city) values ( 17 ,'Haveri');
insert into cities (stateid,city) values ( 17 ,'Kodagu');
insert into cities (stateid,city) values ( 17 ,'Kolar');
insert into cities (stateid,city) values ( 17 ,'Koppal');
insert into cities (stateid,city) values ( 17 ,'Mandya');
insert into cities (stateid,city) values ( 17 ,'Mysore');
insert into cities (stateid,city) values ( 17 ,'Raichur');
insert into cities (stateid,city) values ( 17 ,'Ramanagara');
insert into cities (stateid,city) values ( 17 ,'Shimoga');
insert into cities (stateid,city) values ( 17 ,'Tumkur');
insert into cities (stateid,city) values ( 17 ,'Udupi');
insert into cities (stateid,city) values ( 17 ,'Uttara Kannada');
insert into cities (stateid,city) values ( 17 ,'Yadgir');

insert into cities (stateid,city) values ( 18 ,'Alappuzha');
insert into cities (stateid,city) values ( 18 ,'Ernakulam');
insert into cities (stateid,city) values ( 18 ,'Idukki');
insert into cities (stateid,city) values ( 18 ,'Kannur');
insert into cities (stateid,city) values ( 18 ,'Kasaragod');
insert into cities (stateid,city) values ( 18 ,'Kollam');
insert into cities (stateid,city) values ( 18 ,'Kottayam');
insert into cities (stateid,city) values ( 18 ,'Kozhikode');
insert into cities (stateid,city) values ( 18 ,'Malappuram');
insert into cities (stateid,city) values ( 18 ,'Palakkad');
insert into cities (stateid,city) values ( 18 ,'Pathanamthitta');
insert into cities (stateid,city) values ( 18 ,'Thiruvananthapuram');
insert into cities (stateid,city) values ( 18 ,'Thrissur');
insert into cities (stateid,city) values ( 18 ,'Wayanad');

insert into cities (stateid,city) values ( 19 ,'Lakshadweep');

insert into cities (stateid,city) values ( 20 ,'Agar Malwa');
insert into cities (stateid,city) values ( 20 ,'Alirajpur');
insert into cities (stateid,city) values ( 20 ,'Anuppur');
insert into cities (stateid,city) values ( 20 ,'Ashoknagar');
insert into cities (stateid,city) values ( 20 ,'Balaghat');
insert into cities (stateid,city) values ( 20 ,'Barwani');
insert into cities (stateid,city) values ( 20 ,'Betul');
insert into cities (stateid,city) values ( 20 ,'Bhind');
insert into cities (stateid,city) values ( 20 ,'Bhopal');
insert into cities (stateid,city) values ( 20 ,'Burhanpur');
insert into cities (stateid,city) values ( 20 ,'Chhatarpur');
insert into cities (stateid,city) values ( 20 ,'Chhindwara');
insert into cities (stateid,city) values ( 20 ,'Damoh');
insert into cities (stateid,city) values ( 20 ,'Datia');
insert into cities (stateid,city) values ( 20 ,'Dewas');
insert into cities (stateid,city) values ( 20 ,'Dhar');
insert into cities (stateid,city) values ( 20 ,'Dindori');
insert into cities (stateid,city) values ( 20 ,'Guna');
insert into cities (stateid,city) values ( 20 ,'Gwalior');
insert into cities (stateid,city) values ( 20 ,'Harda');
insert into cities (stateid,city) values ( 20 ,'Hoshangabad');
insert into cities (stateid,city) values ( 20 ,'Indore');
insert into cities (stateid,city) values ( 20 ,'Jabalpur');
insert into cities (stateid,city) values ( 20 ,'Jhabua');
insert into cities (stateid,city) values ( 20 ,'Katni');
insert into cities (stateid,city) values ( 20 ,'Khandwa');
insert into cities (stateid,city) values ( 20 ,'Khargone');
insert into cities (stateid,city) values ( 20 ,'Mandla');
insert into cities (stateid,city) values ( 20 ,'Mandsaur');
insert into cities (stateid,city) values ( 20 ,'Morena');
insert into cities (stateid,city) values ( 20 ,'Narsinghpur');
insert into cities (stateid,city) values ( 20 ,'Neemuch');
insert into cities (stateid,city) values ( 20 ,'Panna');
insert into cities (stateid,city) values ( 20 ,'Raisen');
insert into cities (stateid,city) values ( 20 ,'Rajgarh');
insert into cities (stateid,city) values ( 20 ,'Ratlam');
insert into cities (stateid,city) values ( 20 ,'Rewa');
insert into cities (stateid,city) values ( 20 ,'Sagar');
insert into cities (stateid,city) values ( 20 ,'Satna');
insert into cities (stateid,city) values ( 20 ,'Sehore');
insert into cities (stateid,city) values ( 20 ,'Seoni');
insert into cities (stateid,city) values ( 20 ,'Shahdol');
insert into cities (stateid,city) values ( 20 ,'Shajapur');
insert into cities (stateid,city) values ( 20 ,'Sheopur');
insert into cities (stateid,city) values ( 20 ,'Shivpuri');
insert into cities (stateid,city) values ( 20 ,'Sidhi');
insert into cities (stateid,city) values ( 20 ,'Singrauli');
insert into cities (stateid,city) values ( 20 ,'Tikamgarh');
insert into cities (stateid,city) values ( 20 ,'Ujjain');
insert into cities (stateid,city) values ( 20 ,'Umaria');
insert into cities (stateid,city) values ( 20 ,'Vidisha');

insert into cities (stateid,city) values ( 21 ,'Ahmednagar');
insert into cities (stateid,city) values ( 21 ,'Akola');
insert into cities (stateid,city) values ( 21 ,'Amravati');
insert into cities (stateid,city) values ( 21 ,'Aurangabad');
insert into cities (stateid,city) values ( 21 ,'Beed');
insert into cities (stateid,city) values ( 21 ,'Bhandara');
insert into cities (stateid,city) values ( 21 ,'Buldhana');
insert into cities (stateid,city) values ( 21 ,'Chandrapur');
insert into cities (stateid,city) values ( 21 ,'Dhule');
insert into cities (stateid,city) values ( 21 ,'Gadchiroli');
insert into cities (stateid,city) values ( 21 ,'Gondia');
insert into cities (stateid,city) values ( 21 ,'Hingoli');
insert into cities (stateid,city) values ( 21 ,'Jalgaon');
insert into cities (stateid,city) values ( 21 ,'Jalna');
insert into cities (stateid,city) values ( 21 ,'Kolhapur');
insert into cities (stateid,city) values ( 21 ,'Latur');
insert into cities (stateid,city) values ( 21 ,'Mumbai City');
insert into cities (stateid,city) values ( 21 ,'Mumbai Suburban');
insert into cities (stateid,city) values ( 21 ,'Nagpur');
insert into cities (stateid,city) values ( 21 ,'Nanded');
insert into cities (stateid,city) values ( 21 ,'Nandurbar');
insert into cities (stateid,city) values ( 21 ,'Nashik');
insert into cities (stateid,city) values ( 21 ,'Osmanabad');
insert into cities (stateid,city) values ( 21 ,'Palghar');
insert into cities (stateid,city) values ( 21 ,'Parbhani');
insert into cities (stateid,city) values ( 21 ,'Pune');
insert into cities (stateid,city) values ( 21 ,'Raigad');
insert into cities (stateid,city) values ( 21 ,'Ratnagiri');
insert into cities (stateid,city) values ( 21 ,'Sangli');
insert into cities (stateid,city) values ( 21 ,'Satara');
insert into cities (stateid,city) values ( 21 ,'Sindhudurg');
insert into cities (stateid,city) values ( 21 ,'Solapur');
insert into cities (stateid,city) values ( 21 ,'Thane');
insert into cities (stateid,city) values ( 21 ,'Wardha');
insert into cities (stateid,city) values ( 21 ,'Washim');
insert into cities (stateid,city) values ( 21 ,'Yavatmal');

insert into cities (stateid,city) values ( 22 ,'Bishnupur');
insert into cities (stateid,city) values ( 22 ,'Chandel');
insert into cities (stateid,city) values ( 22 ,'Churachandpur');
insert into cities (stateid,city) values ( 22 ,'Imphal East');
insert into cities (stateid,city) values ( 22 ,'Imphal West');
insert into cities (stateid,city) values ( 22 ,'Jiribam');
insert into cities (stateid,city) values ( 22 ,'Kakching');
insert into cities (stateid,city) values ( 22 ,'Kamjong');
insert into cities (stateid,city) values ( 22 ,'Kangpokpi');
insert into cities (stateid,city) values ( 22 ,'Noney');
insert into cities (stateid,city) values ( 22 ,'Pherzawl');
insert into cities (stateid,city) values ( 22 ,'Senapati');
insert into cities (stateid,city) values ( 22 ,'Tamenglong');
insert into cities (stateid,city) values ( 22 ,'Tengnoupal');
insert into cities (stateid,city) values ( 22 ,'Thoubal');
insert into cities (stateid,city) values ( 22 ,'Ukhrul');

insert into cities (stateid,city) values ( 23 ,'East Garo Hills');
insert into cities (stateid,city) values ( 23 ,'East Jaintia Hills');
insert into cities (stateid,city) values ( 23 ,'East Khasi Hills');
insert into cities (stateid,city) values ( 23 ,'North Garo Hills');
insert into cities (stateid,city) values ( 23 ,'Ri Bhoi');
insert into cities (stateid,city) values ( 23 ,'South Garo Hills');
insert into cities (stateid,city) values ( 23 ,'South West Garo Hills');
insert into cities (stateid,city) values ( 23 ,'South West Khasi Hills');
insert into cities (stateid,city) values ( 23 ,'West Garo Hills');
insert into cities (stateid,city) values ( 23 ,'West Jaintia Hills');
insert into cities (stateid,city) values ( 23 ,'West Khasi Hills');

insert into cities (stateid,city) values ( 24 ,'Aizawl');
insert into cities (stateid,city) values ( 24 ,'Champhai');
insert into cities (stateid,city) values ( 24 ,'Kolasib');
insert into cities (stateid,city) values ( 24 ,'Lawngtlai');
insert into cities (stateid,city) values ( 24 ,'Lunglei');
insert into cities (stateid,city) values ( 24 ,'Mamit');
insert into cities (stateid,city) values ( 24 ,'Saiha');
insert into cities (stateid,city) values ( 24 ,'Serchhip');
insert into cities (stateid,city) values ( 24 ,'Aizawl');
insert into cities (stateid,city) values ( 24 ,'Champhai');
insert into cities (stateid,city) values ( 24 ,'Kolasib');
insert into cities (stateid,city) values ( 24 ,'Lawngtlai');
insert into cities (stateid,city) values ( 24 ,'Lunglei');
insert into cities (stateid,city) values ( 24 ,'Mamit');
insert into cities (stateid,city) values ( 24 ,'Saiha');
insert into cities (stateid,city) values ( 24 ,'Serchhip');

insert into cities (stateid,city) values ( 25 ,'Dimapur');
insert into cities (stateid,city) values ( 25 ,'Kiphire');
insert into cities (stateid,city) values ( 25 ,'Kohima');
insert into cities (stateid,city) values ( 25 ,'Longleng');
insert into cities (stateid,city) values ( 25 ,'Mokokchung');
insert into cities (stateid,city) values ( 25 ,'Mon');
insert into cities (stateid,city) values ( 25 ,'Peren');
insert into cities (stateid,city) values ( 25 ,'Phek');
insert into cities (stateid,city) values ( 25 ,'Tuensang');
insert into cities (stateid,city) values ( 25 ,'Wokha');
insert into cities (stateid,city) values ( 25 ,'Zunheboto');

insert into cities (stateid,city) values ( 26 ,'Angul');
insert into cities (stateid,city) values ( 26 ,'Balangir');
insert into cities (stateid,city) values ( 26 ,'Balasore');
insert into cities (stateid,city) values ( 26 ,'Bargarh');
insert into cities (stateid,city) values ( 26 ,'Bhadrak');
insert into cities (stateid,city) values ( 26 ,'Boudh');
insert into cities (stateid,city) values ( 26 ,'Cuttack');
insert into cities (stateid,city) values ( 26 ,'Debagarh');
insert into cities (stateid,city) values ( 26 ,'Dhenkanal');
insert into cities (stateid,city) values ( 26 ,'Gajapati');
insert into cities (stateid,city) values ( 26 ,'Ganjam');
insert into cities (stateid,city) values ( 26 ,'Jagatsinghpur');
insert into cities (stateid,city) values ( 26 ,'Jajpur');
insert into cities (stateid,city) values ( 26 ,'Jharsuguda');
insert into cities (stateid,city) values ( 26 ,'Kalahandi');
insert into cities (stateid,city) values ( 26 ,'Kandhamal');
insert into cities (stateid,city) values ( 26 ,'Kendrapara');
insert into cities (stateid,city) values ( 26 ,'Kendujhar');
insert into cities (stateid,city) values ( 26 ,'Khordha');
insert into cities (stateid,city) values ( 26 ,'Koraput');
insert into cities (stateid,city) values ( 26 ,'Malkangiri');
insert into cities (stateid,city) values ( 26 ,'Mayurbhanj');
insert into cities (stateid,city) values ( 26 ,'Nabarangpur');
insert into cities (stateid,city) values ( 26 ,'Nayagarh');
insert into cities (stateid,city) values ( 26 ,'Nuapada');
insert into cities (stateid,city) values ( 26 ,'Puri');
insert into cities (stateid,city) values ( 26 ,'Rayagada');
insert into cities (stateid,city) values ( 26 ,'Sambalpur');
insert into cities (stateid,city) values ( 26 ,'Subarnapur');
insert into cities (stateid,city) values ( 26 ,'Sundergarh');

insert into cities (stateid,city) values ( 27 ,'Karaikal');
insert into cities (stateid,city) values ( 27 ,'Mahe');
insert into cities (stateid,city) values ( 27 ,'Puducherry');
insert into cities (stateid,city) values ( 27 ,'Yanam');

insert into cities (stateid,city) values ( 28 ,'Amritsar');
insert into cities (stateid,city) values ( 28 ,'Barnala');
insert into cities (stateid,city) values ( 28 ,'Bathinda');
insert into cities (stateid,city) values ( 28 ,'Faridkot');
insert into cities (stateid,city) values ( 28 ,'Fatehgarh Sahib');
insert into cities (stateid,city) values ( 28 ,'Fazilka');
insert into cities (stateid,city) values ( 28 ,'Firozpur');
insert into cities (stateid,city) values ( 28 ,'Gurdaspur');
insert into cities (stateid,city) values ( 28 ,'Hoshiarpur');
insert into cities (stateid,city) values ( 28 ,'Jalandhar');
insert into cities (stateid,city) values ( 28 ,'Kapurthala');
insert into cities (stateid,city) values ( 28 ,'Ludhiana');
insert into cities (stateid,city) values ( 28 ,'Mansa');
insert into cities (stateid,city) values ( 28 ,'Moga');
insert into cities (stateid,city) values ( 28 ,'Mohali');
insert into cities (stateid,city) values ( 28 ,'Muktsar');
insert into cities (stateid,city) values ( 28 ,'Pathankot');
insert into cities (stateid,city) values ( 28 ,'Patiala');
insert into cities (stateid,city) values ( 28 ,'Rupnagar');
insert into cities (stateid,city) values ( 28 ,'Sangrur');
insert into cities (stateid,city) values ( 28 ,'Shaheed Bhagat Singh Nagar');
insert into cities (stateid,city) values ( 28 ,'Tarn Taran');

insert into cities (stateid,city) values ( 29 ,'Ajmer');
insert into cities (stateid,city) values ( 29 ,'Alwar');
insert into cities (stateid,city) values ( 29 ,'Banswara');
insert into cities (stateid,city) values ( 29 ,'Baran');
insert into cities (stateid,city) values ( 29 ,'Barmer');
insert into cities (stateid,city) values ( 29 ,'Bharatpur');
insert into cities (stateid,city) values ( 29 ,'Bhilwara');
insert into cities (stateid,city) values ( 29 ,'Bikaner');
insert into cities (stateid,city) values ( 29 ,'Bundi');
insert into cities (stateid,city) values ( 29 ,'Chittorgarh');
insert into cities (stateid,city) values ( 29 ,'Churu');
insert into cities (stateid,city) values ( 29 ,'Dausa');
insert into cities (stateid,city) values ( 29 ,'Dholpur');
insert into cities (stateid,city) values ( 29 ,'Dungarpur');
insert into cities (stateid,city) values ( 29 ,'Ganganagar');
insert into cities (stateid,city) values ( 29 ,'Hanumangarh');
insert into cities (stateid,city) values ( 29 ,'Jaipur');
insert into cities (stateid,city) values ( 29 ,'Jaisalmer');
insert into cities (stateid,city) values ( 29 ,'Jalore');
insert into cities (stateid,city) values ( 29 ,'Jhalawar');
insert into cities (stateid,city) values ( 29 ,'Jhunjhunu');
insert into cities (stateid,city) values ( 29 ,'Jodhpur');
insert into cities (stateid,city) values ( 29 ,'Karauli');
insert into cities (stateid,city) values ( 29 ,'Kota');
insert into cities (stateid,city) values ( 29 ,'Nagaur');
insert into cities (stateid,city) values ( 29 ,'Pali');
insert into cities (stateid,city) values ( 29 ,'Pratapgarh');
insert into cities (stateid,city) values ( 29 ,'Rajsamand');
insert into cities (stateid,city) values ( 29 ,'Sawai Madhopur');
insert into cities (stateid,city) values ( 29 ,'Sikar');
insert into cities (stateid,city) values ( 29 ,'Sirohi');
insert into cities (stateid,city) values ( 29 ,'Tonk');
insert into cities (stateid,city) values ( 29 ,'Udaipur');

insert into cities (stateid,city) values ( 30 ,'East Sikkim');
insert into cities (stateid,city) values ( 30 ,'North Sikkim');
insert into cities (stateid,city) values ( 30 ,'South Sikkim');
insert into cities (stateid,city) values ( 30 ,'West Sikkim');

insert into cities (stateid,city) values ( 31 ,'Ariyalur');
insert into cities (stateid,city) values ( 31 ,'Chennai');
insert into cities (stateid,city) values ( 31 ,'Coimbatore');
insert into cities (stateid,city) values ( 31 ,'Cuddalore');
insert into cities (stateid,city) values ( 31 ,'Dharmapuri');
insert into cities (stateid,city) values ( 31 ,'Dindigul');
insert into cities (stateid,city) values ( 31 ,'Erode');
insert into cities (stateid,city) values ( 31 ,'Kanchipuram');
insert into cities (stateid,city) values ( 31 ,'Kanyakumari');
insert into cities (stateid,city) values ( 31 ,'Karur');
insert into cities (stateid,city) values ( 31 ,'Krishnagiri');
insert into cities (stateid,city) values ( 31 ,'Madurai');
insert into cities (stateid,city) values ( 31 ,'Nagapattinam');
insert into cities (stateid,city) values ( 31 ,'Namakkal');
insert into cities (stateid,city) values ( 31 ,'Nilgiris');
insert into cities (stateid,city) values ( 31 ,'Perambalur');
insert into cities (stateid,city) values ( 31 ,'Pudukkottai');
insert into cities (stateid,city) values ( 31 ,'Ramanathapuram');
insert into cities (stateid,city) values ( 31 ,'Salem');
insert into cities (stateid,city) values ( 31 ,'Sivaganga');
insert into cities (stateid,city) values ( 31 ,'Thanjavur');
insert into cities (stateid,city) values ( 31 ,'Theni');
insert into cities (stateid,city) values ( 31 ,'Thoothukudi');
insert into cities (stateid,city) values ( 31 ,'Tiruchirappalli');
insert into cities (stateid,city) values ( 31 ,'Tirunelveli');
insert into cities (stateid,city) values ( 31 ,'Tiruppur');
insert into cities (stateid,city) values ( 31 ,'Tiruvallur');
insert into cities (stateid,city) values ( 31 ,'Tiruvannamalai');
insert into cities (stateid,city) values ( 31 ,'Tiruvarur');
insert into cities (stateid,city) values ( 31 ,'Vellore');
insert into cities (stateid,city) values ( 31 ,'Viluppuram');
insert into cities (stateid,city) values ( 31 ,'Virudhunagar');


insert into cities (stateid,city) values ( 32 ,'Adilabad');
insert into cities (stateid,city) values ( 32 ,'Bhadradri Kothagudem');
insert into cities (stateid,city) values ( 32 ,'Hyderabad');
insert into cities (stateid,city) values ( 32 ,'Jagtial');
insert into cities (stateid,city) values ( 32 ,'Jangaon');
insert into cities (stateid,city) values ( 32 ,'Jayashankar');
insert into cities (stateid,city) values ( 32 ,'Jogulamba');
insert into cities (stateid,city) values ( 32 ,'Kamareddy');
insert into cities (stateid,city) values ( 32 ,'Karimnagar');
insert into cities (stateid,city) values ( 32 ,'Khammam');
insert into cities (stateid,city) values ( 32 ,'Komaram Bheem');
insert into cities (stateid,city) values ( 32 ,'Mahabubabad');
insert into cities (stateid,city) values ( 32 ,'Mahbubnagar');
insert into cities (stateid,city) values ( 32 ,'Mancherial');
insert into cities (stateid,city) values ( 32 ,'Medak');
insert into cities (stateid,city) values ( 32 ,'Medchal');
insert into cities (stateid,city) values ( 32 ,'Nagarkurnool');
insert into cities (stateid,city) values ( 32 ,'Nalgonda');
insert into cities (stateid,city) values ( 32 ,'Nirmal');
insert into cities (stateid,city) values ( 32 ,'Nizamabad');
insert into cities (stateid,city) values ( 32 ,'Peddapalli');
insert into cities (stateid,city) values ( 32 ,'Rajanna Sircilla');
insert into cities (stateid,city) values ( 32 ,'Ranga Reddy');
insert into cities (stateid,city) values ( 32 ,'Sangareddy');
insert into cities (stateid,city) values ( 32 ,'Siddipet');
insert into cities (stateid,city) values ( 32 ,'Suryapet');
insert into cities (stateid,city) values ( 32 ,'Vikarabad');
insert into cities (stateid,city) values ( 32 ,'Wanaparthy');
insert into cities (stateid,city) values ( 32 ,'Warangal Rural');
insert into cities (stateid,city) values ( 32 ,'Warangal Urban');
insert into cities (stateid,city) values ( 32 ,'Yadadri Bhuvanagiri');

insert into cities (stateid,city) values ( 33 ,'Dhalai');
insert into cities (stateid,city) values ( 33 ,'Gomati');
insert into cities (stateid,city) values ( 33 ,'Khowai');
insert into cities (stateid,city) values ( 33 ,'North Tripura');
insert into cities (stateid,city) values ( 33 ,'Sepahijala');
insert into cities (stateid,city) values ( 33 ,'South Tripura');
insert into cities (stateid,city) values ( 33 ,'Unakoti');
insert into cities (stateid,city) values ( 33 ,'West Tripura');

insert into cities (stateid,city) values ( 34 ,'Agra');
insert into cities (stateid,city) values ( 34 ,'Aligarh');
insert into cities (stateid,city) values ( 34 ,'Allahabad');
insert into cities (stateid,city) values ( 34 ,'Ambedkar Nagar');
insert into cities (stateid,city) values ( 34 ,'Amethi');
insert into cities (stateid,city) values ( 34 ,'Amroha');
insert into cities (stateid,city) values ( 34 ,'Auraiya');
insert into cities (stateid,city) values ( 34 ,'Azamgarh');
insert into cities (stateid,city) values ( 34 ,'Baghpat');
insert into cities (stateid,city) values ( 34 ,'Bahraich');
insert into cities (stateid,city) values ( 34 ,'Ballia');
insert into cities (stateid,city) values ( 34 ,'Balrampur');
insert into cities (stateid,city) values ( 34 ,'Banda');
insert into cities (stateid,city) values ( 34 ,'Barabanki');
insert into cities (stateid,city) values ( 34 ,'Bareilly');
insert into cities (stateid,city) values ( 34 ,'Basti');
insert into cities (stateid,city) values ( 34 ,'Bhadohi');
insert into cities (stateid,city) values ( 34 ,'Bijnor');
insert into cities (stateid,city) values ( 34 ,'Budaun');
insert into cities (stateid,city) values ( 34 ,'Bulandshahr');
insert into cities (stateid,city) values ( 34 ,'Chandauli');
insert into cities (stateid,city) values ( 34 ,'Chitrakoot');
insert into cities (stateid,city) values ( 34 ,'Deoria');
insert into cities (stateid,city) values ( 34 ,'Etah');
insert into cities (stateid,city) values ( 34 ,'Etawah');
insert into cities (stateid,city) values ( 34 ,'Faizabad');
insert into cities (stateid,city) values ( 34 ,'Farrukhabad');
insert into cities (stateid,city) values ( 34 ,'Fatehpur');
insert into cities (stateid,city) values ( 34 ,'Firozabad');
insert into cities (stateid,city) values ( 34 ,'Gautam Buddha Nagar');
insert into cities (stateid,city) values ( 34 ,'Ghaziabad');
insert into cities (stateid,city) values ( 34 ,'Ghazipur');
insert into cities (stateid,city) values ( 34 ,'Gonda');
insert into cities (stateid,city) values ( 34 ,'Gorakhpur');
insert into cities (stateid,city) values ( 34 ,'Hamirpur');
insert into cities (stateid,city) values ( 34 ,'Hapur');
insert into cities (stateid,city) values ( 34 ,'Hardoi');
insert into cities (stateid,city) values ( 34 ,'Hathras');
insert into cities (stateid,city) values ( 34 ,'Jalaun');
insert into cities (stateid,city) values ( 34 ,'Jaunpur');
insert into cities (stateid,city) values ( 34 ,'Jhansi');
insert into cities (stateid,city) values ( 34 ,'Kannauj');
insert into cities (stateid,city) values ( 34 ,'Kanpur Dehat');
insert into cities (stateid,city) values ( 34 ,'Kanpur Nagar');
insert into cities (stateid,city) values ( 34 ,'Kasganj');
insert into cities (stateid,city) values ( 34 ,'Kaushambi');
insert into cities (stateid,city) values ( 34 ,'Kheri');
insert into cities (stateid,city) values ( 34 ,'Kushinagar');
insert into cities (stateid,city) values ( 34 ,'Lalitpur');
insert into cities (stateid,city) values ( 34 ,'Lucknow');
insert into cities (stateid,city) values ( 34 ,'Maharajganj');
insert into cities (stateid,city) values ( 34 ,'Mahoba');
insert into cities (stateid,city) values ( 34 ,'Mainpuri');
insert into cities (stateid,city) values ( 34 ,'Mathura');
insert into cities (stateid,city) values ( 34 ,'Mau');
insert into cities (stateid,city) values ( 34 ,'Meerut');
insert into cities (stateid,city) values ( 34 ,'Mirzapur');
insert into cities (stateid,city) values ( 34 ,'Moradabad');
insert into cities (stateid,city) values ( 34 ,'Muzaffarnagar');
insert into cities (stateid,city) values ( 34 ,'Pilibhit');
insert into cities (stateid,city) values ( 34 ,'Pratapgarh');
insert into cities (stateid,city) values ( 34 ,'Raebareli');
insert into cities (stateid,city) values ( 34 ,'Rampur');
insert into cities (stateid,city) values ( 34 ,'Saharanpur');
insert into cities (stateid,city) values ( 34 ,'Sambhal');
insert into cities (stateid,city) values ( 34 ,'Sant Kabir Nagar');
insert into cities (stateid,city) values ( 34 ,'Shahjahanpur');
insert into cities (stateid,city) values ( 34 ,'Shamli');
insert into cities (stateid,city) values ( 34 ,'Shravasti');
insert into cities (stateid,city) values ( 34 ,'Siddharthnagar');
insert into cities (stateid,city) values ( 34 ,'Sitapur');
insert into cities (stateid,city) values ( 34 ,'Sonbhadra');
insert into cities (stateid,city) values ( 34 ,'Sultanpur');
insert into cities (stateid,city) values ( 34 ,'Unnao');
insert into cities (stateid,city) values ( 34 ,'Varanasi');

insert into cities (stateid,city) values ( 35 ,'Almora');
insert into cities (stateid,city) values ( 35 ,'Bageshwar');
insert into cities (stateid,city) values ( 35 ,'Chamoli');
insert into cities (stateid,city) values ( 35 ,'Champawat');
insert into cities (stateid,city) values ( 35 ,'Dehradun');
insert into cities (stateid,city) values ( 35 ,'Haridwar');
insert into cities (stateid,city) values ( 35 ,'Nainital');
insert into cities (stateid,city) values ( 35 ,'Pauri');
insert into cities (stateid,city) values ( 35 ,'Pithoragarh');
insert into cities (stateid,city) values ( 35 ,'Rudraprayag');
insert into cities (stateid,city) values ( 35 ,'Tehri');
insert into cities (stateid,city) values ( 35 ,'Udham Singh Nagar');
insert into cities (stateid,city) values ( 35 ,'Uttarkashi');


insert into cities (stateid,city) values ( 36 ,'Alipurduar');
insert into cities (stateid,city) values ( 36 ,'Bankura');
insert into cities (stateid,city) values ( 36 ,'Birbhum');
insert into cities (stateid,city) values ( 36 ,'Cooch Behar');
insert into cities (stateid,city) values ( 36 ,'Dakshin Dinajpur');
insert into cities (stateid,city) values ( 36 ,'Darjeeling');
insert into cities (stateid,city) values ( 36 ,'Hooghly');
insert into cities (stateid,city) values ( 36 ,'Howrah');
insert into cities (stateid,city) values ( 36 ,'Jalpaiguri');
insert into cities (stateid,city) values ( 36 ,'Jhargram');
insert into cities (stateid,city) values ( 36 ,'Kalimpong');
insert into cities (stateid,city) values ( 36 ,'Kolkata');
insert into cities (stateid,city) values ( 36 ,'Malda');
insert into cities (stateid,city) values ( 36 ,'Murshidabad');
insert into cities (stateid,city) values ( 36 ,'Nadia');
insert into cities (stateid,city) values ( 36 ,'North 24 Parganas');
insert into cities (stateid,city) values ( 36 ,'Paschim Bardhaman');
insert into cities (stateid,city) values ( 36 ,'Paschim Medinipur');
insert into cities (stateid,city) values ( 36 ,'Purba Bardhaman');
insert into cities (stateid,city) values ( 36 ,'Purba Medinipur');
insert into cities (stateid,city) values ( 36 ,'Purulia');
insert into cities (stateid,city) values ( 36 ,'South 24 Parganas');
insert into cities (stateid,city) values ( 36 ,'Uttar Dinajpur');


select * from cities;
