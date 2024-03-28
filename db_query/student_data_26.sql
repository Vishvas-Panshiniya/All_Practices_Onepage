create database all_table_database;

use all_table_database;

create table student_master1(
    studentid int not null primary key auto_increment,
    firstname varchar(255),
    lastname varchar(255),
    dob date,
    contact_no varchar(10),
    email varchar(255),
    address varchar(255),
    city varchar(255),
    state varchar(255),
    country varchar(255),
    zipcode varchar(20),
    created_at timestamp default current_timestamp
    );
    
select*from student_master1;
