create database all_table_database;

use all_table_database;

create table student_master(
 studentid int primary key auto_increment,
 firstname varchar(255),
 lastname varchar(255),
 dob date,
 contact_no varchar(10),
 email varchar(255),
 city varchar(255),
 state varchar(255),
 country varchar(255),
 zipcode varchar(20)
 );
select*from student_master; 

create table attendence_master(
	atte_id int primary key auto_increment,
    studentid int,
    foreign key(studentid) references student_master(studentid),
    atten_date date,
    stu_status varchar(50)
    )
select*from attendence_master;

create table subject_master (
subjectid int primary key auto_increment,
subjectname varchar(255)
);

select*from subject_master;

create table exam_master(
examid int primary key auto_increment,
examname varchar(50)
);

select*from exam_master;

create table exam_record(
resultid int primary key auto_increment,
studentid int, 
foreign key (studentid) references student_master(studentid),
subjectid int, 
foreign key (subjectid) references subject_master(subjectid),
examid int,  
foreign key (examid) references exam_master(examid),
total_theroymark int,
obtained_theroymark int,
total_pramark int,
obtained_pramark int
);
select*from exam_record;



