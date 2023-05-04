-- db_name 'grubhub'

-- user_detail to store information of user registration 

CREATE TABLE user_detail ( User_Id bigint not null auto_increment, 
	Firts_Name varchar(150) not null,
    Last_Name varchar(150) not null,
    Mobile bigint not null,
	Email	varchar(255) not null,
	User_Name varchar(50) not null,
	Password_Hash varchar(255) not null,
	Date_Of_Birth date not null,
	Created_Date date not null, 
	PRIMARY KEY (`User_Id`),
  UNIQUE INDEX `uq_mobile` (`Mobile` ASC),
  UNIQUE INDEX `uq_email` (`Email` ASC) 
);
