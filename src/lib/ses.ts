// import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// The mongodb.com domain must be verified in SES for this to work, so this implementation is blocked until
// the DNS records can be updated to allow this.

export const sendEmail = async () => {
  // const client = new SESClient({
  //   region: 'us-east-1',
  //   credentials: {
  //     accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
  //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  //   },
  // });
  // const command = new SendEmailCommand({
  //   Source: 'devhubplatform@mongodb.com',
  //   Destination: { ToAddresses: ['academia@mongodb.com'] },
  //   Message: {
  //     Body: {
  //       Html: {
  //         Charset: 'UTF-8',
  //         //   Data: `
  //         //   <h1>DevHub: New Academia Registration</h1>
  //         //   <p><strong>First Name:</strong> ${first_name}</p>
  //         //   <p><strong>Last Name:</strong> ${last_name}</p>
  //         //   <p><strong>Email:</strong> ${email}</p>
  //         //   <p><strong>Institution Name:</strong> ${institution_name}</p>
  //         //   <p><strong>Institution Type:</strong> ${institution_type}</p>
  //         //   <p><strong>I am a:</strong> ${instructor_type}</p>
  //         //   <p><strong>I am :</strong> ${instructor_interests}</p>
  //         //   <p><strong>Country</strong>${country}</p>
  //         //   <p><strong>Course Name</strong>${course_name}</p>
  //         //   <p><strong>Course Syllabus</strong>${course_syllabus}</p>
  //         //   <p><strong>Submitted At:</strong> ${submit_date}</p>
  //         //   <p><strong>Agree to Email:</strong> ${agree_to_email}</p>
  //         //   `
  //         Data: '<h1>Matt testing AWS Stuff</h1>',
  //       },
  //     },
  //     Subject: {
  //       Charset: 'UTF-8',
  //       // Data: '[DevHub] Academia Registration',
  //       Data: 'Testing AWS Stuff',
  //     },
  //   },
  // });
  // const resp = await client.send(command);
};
