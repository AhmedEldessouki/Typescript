let message;
message = "abc";

//type assertions
let endsWithC = (<string>message).endsWith("c");
let alternativeWay = (message as string).endsWith("c");

//arrowFunction

let doLog = (message) => console.log(message);
