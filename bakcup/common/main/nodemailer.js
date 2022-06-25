//  nodemailer 기능 시작
const nodemailer = require('nodemailer');
const email = {
    "host" : "smtp.mailtrap.io",
    "port" : "2525",
    "secure" : false,
    "auth" : {
        user: "d44d9085d0f317",
        pass: "956d7374cd5321"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){ 
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
}; 

let email_data = {
    from: 's48005623@gmai.com',
    to : 's48005623@gmai.com',
    subject : 'nodemailer 테스트입니다.',
    text : 'nodejs 프로젝트 nodemailer 테스트'
}

send(email_data);
//  nodemailer 기능 종료