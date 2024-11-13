// *** Person type *** //
let personType = "subscriber";
let isMember = false;
let isSubscribed = true;
let userMessage;

if (isMember) {
    userMessage = "Welcome Member. You are entitled to: Dietary Services PLUS 1-on-1 interaction with a dietician";
} else if (personType === "employee") {
    userMessage = "Welcome Employee. You are entitled to: Dietary Services";
} else if (personType === "subscriber") {
    userMessage = "Welcome Subsciber. You have limited access to Dietary Services";
}
  else {
    userMessage = "Thanks for visiting. You will reqiure either a membership for Dietary Services and 1-on-1 dietician access. Or a subscription limited for Dietary Service"
  }

console.log("User Message:", userMessage);
