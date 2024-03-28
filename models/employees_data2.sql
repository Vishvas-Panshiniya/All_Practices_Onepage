create database all_table_database;

use all_table_database;

CREATE TABLE basic_details(
empid int primary key auto_increment,
fname varchar(255),
lname varchar(255),
designation varchar(50),
address1 varchar(255),
address2 varchar(255),
email varchar(50),
mobileno varchar(10),
city varchar(50),
state varchar(50),
zipcode varchar(10),
gender varchar(20),
rstatus varchar(20),
dob date);

select * from basic_details;

create table education_details(
courseid int primary key auto_increment,
empid int,
foreign key (empid) references basic_details(empid),
coursename varchar(50),
passing_year year,
percantage float);

select * from education_details;

create table work_expreience(
workid int primary key auto_increment,
empid int,
foreign key (empid) references basic_details(empid),
company_name varchar(255),
com_designation varchar(255),
start_date date,
end_date date);

select * from work_expreience;

create table language_known(
languageid int primary key auto_increment,
empid int,
foreign key (empid) references basic_details(empid),
l_name varchar(255),
l_read  varchar(100),
l_write varchar(100),
l_speak varchar(100));

select * from language_known;

create table technologies_details(
technologiid int primary key auto_increment,
empid int,
foreign key (empid) references basic_details(empid),
tech_name varchar(255),
tech_level varchar(100));

select*from technologies_details;

create table preferances_details(
preferid int primary key auto_increment,
empid int,
foreign key (empid) references basic_details(empid),
location varchar(100),
department varchar(100),
notice varchar(255),
expacted_ctc varchar(255),
current_ctc varchar(255));

select * from preferances_details;

create table referance_contact(
rid int primary key auto_increment,
empid int,
foreign key (empid) references basic_details(empid),
r_name varchar(255),
r_no varchar(10),
r_relation varchar(255));

select*from referance_contact;

select * from basic_details,education_details,work_expreience,language_known,technologies_details,preferances_details,referance_contact;
update education_details set coursename = "hsc" ,passing_year = 2018, percantage = 77.23 where empid = 1 and courseid = 2;
