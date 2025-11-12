// spread oparator
const bros1: string[] = ["nahid","rahin","rahat"];
const bros2: string[] = ["joy","muna","fahim"];

bros1.push(...bros2);

// rest oparator
const greetFriends = (...friends : string[]) =>
{
    friends.forEach((friend : string) => console.log(`hi ${friend}`))
}

greetFriends("joy","roy","samir");