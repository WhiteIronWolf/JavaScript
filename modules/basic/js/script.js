var text = document.getElementById("demo");

//import {default as lorem } from "./third.mjs"
import lorem from "./third.mjs"
import { dogAge, name as dogName } from "./main.mjs";
import * as Person from "./second.mjs";

console.log(dogAge(3));
console.log(dogName == "Jessica");
lorem();

text.innerHTML = Person.owner.firstname + " " + Person.owner.lastname + " was thinking about Jessica again. Jessica was a clever dog that he could not take care of anymore. James walked over to the window and reflected on his beautiful surroundings. He had always loved magical Yarnham, It was a place that encouraged his tendency to feel relaxed. Then he saw something in the distance, or rather someone. It was the reflection of himself, his friends always saw him as a screeching, skinny saint. Once, he had even saved a defeated puppy that was stuck in a drain. But not even a person who had once saved a defeated puppy that was stuck in a drain, was prepared for what was in store for today. " + Person.owner.firstname + " " + Person.owner.lastname + " had to give his " + Person.pet + " named " + dogName + " away since old James Hatteway was getting to old.";
