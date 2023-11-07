'use strict';

const veryifyPasswordLength = require('./constraints/verifyPasswordLength');
const veryifyPasswordStrength = require('./constraints/verifyPasswordStrength');


module.exports.password = async (event, context) => {
  try{
    const { password } = event.pathParameters;
    await veryifyPasswordLength(password);
    await veryifyPasswordStrength(password);
    const {score} = await veryifyPasswordStrength(password);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Password score: ${score}`,
      }),
    };
  } catch (e){
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Error: ${e.message}`,
        score: e.score
      }),
    };
  }
};
