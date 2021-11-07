function startGame() {
    let goToParty = confirm('As an ongoing Developer you hacked into the facebook account of Mark Zuckerberg, there you learned about a secret party hosted by THE Larry Page himself. The most famous engineers and entrepreneurs are going to be there. Do you want to go to this party?');
    if (goToParty) {


        alert(`But first things first. Since you woke up at 11 am and started coding after your morning cup of coffee, you are still in your spiderman pyjamas.`);
        let chooseClothes = ""
        do {
            chooseClothes = prompt(`So... what are you going to wear to Larry's Party? You open your Closet and look at the three different outfits you have. 
        (Outfit 1): Your fancy suit from prom night and a plain white shirt and a tie.
        (Outfit 2): Your work uniform: A grey T-shirt and some nice blue-jeans.
        (Outfit 3): Or you don't even bother to get dressed. The pyjama is just fine. 
        The Choose wisely, this event could change your life.`);
        
        } while (
            chooseClothes !== 'Outfit 1' && chooseClothes !== 'Outfit 2' && chooseClothes !== 'Outfit 3' && chooseClothes !== null
        )
        switch (chooseClothes) {
            case 'Outfit 1':
                alert('Nice choice: I see you dress to impress!');
                let talkToBouncer = prompt(`As you arrive at the location, feeling good because of your choice of clothing, you see a grumpy looking, buffed bouncer at the door.
            Just as you were about to enter the party, he stops you and asks for the entrycode. What do you say?
            Option (1) "Oh of course the password, well it must have slipped my mind. Give me a minute."
            Option (2) "I dont know any entrycode, but could you please let me in?"
            Option (3) "Sure, the entrycode is 26031973"`);

                if(talkToBouncer === null) {
                    alert('OK bye')
                } 
                else if (talkToBouncer === '1') {
                    let acceptOffer = confirm(`The bouncer lets you think for a minute, and then it seems like he pittied you because he sees how well dressed you are for this occasion. He offers to let you in if you promise not to tell anyone. (Press OK to accept his offer)`);

                    if (acceptOffer) {
                        alert('You enter the main hall, and immediatelly recognised that you are very overdressed for this event. Not a single person is wearing a suit like you. You feel like an alien.');
                        let goHome = confirm(`Since you are clearly wrong dressed for the occasion, no one really wants to talk to you and listen to your ideas because they think you're some kind of snob. You are very bored, not even the music is good. Do you want to leave? (Press OK to leave)`);
                        if (goHome) {
                            alert('Outside the bouncer laughs at you. You are going home, pondering about the life lesson you learned today');
                            alert('"Always remember to check for the dresscode if you go to an event, which you only know of because you hacked into Mark Zuckerbergs facebook account." FIN')
                        } else {
                            alert(`A person of the catering company mistakes you for another waiter, and hands you a plate of hors d'oevres. You start offering them to the guest, but since you are an IT student and not a waiter, you drop everything and get fired immediately.`)
                            alert('Outside the bouncer laughs at you. You are going home, pondering about the life lesson you learned today');
                            alert(`"Always remember to check for the dresscode if you go to an event, which you only know of because you hacked into Mark Zuckerbergs facebook account."
                                FIN`);
                        }
                    } else {
                        alert('What? Now you get the chance to meet your role model and then you decide to leave? Well ok then. Live your life full of regrets. FIN');
                    }

                } else if (talkToBouncer === '2') {
                    alert('The bouncer tells you no and you go home feeling miserable about your failed mission.');
                } else {
                    alert('The bouncer is clearly surprised that you know the correct answer. You are sure he saw your little panic attack, when he asked for the entrycode, but you had never thought that Larry Page himself would make the mistake to use his own date of birth as password. Lucky you!');
                    alert('You enter the main hall, and immediatelly recognised that you are very overdressed for this event. Not a single person is wearing a suit like you. You feel like an alien.');
                    let goHome = confirm(`Since you are clearly wrong dressed for the occasion, no one really wants to talk to you and listen to your ideas because they think you're some kind of snob. You are very bored, not even the music is good. Do you want to leave?`);
                    if (goHome) {
                        alert('Outside the bouncer laughs at you. You are going home, pondering about the life lesson you learned today');
                        alert(`"Always remember to check for the dresscode if you go to an event, which you only know of because you hacked into Mark Zuckerbergs facebook account." 
                                FIN`)
                    } else {
                        alert(`A person of the catering company mistakes you for another waiter, and hands you a plate of hors d'oevres. You start offering them to the guest, but since you are an IT student and not a waiter, you drop everything and get fired immediately.`)
                        alert('Outside the bouncer laughs at you. You are going home, pondering about the life lesson you learned today');
                        alert(`"Always remember to check for the dresscode if you go to an event, which you only know of because you hacked into Mark Zuckerbergs facebook account."
                                FIN`);
                    }
                }
                break;

            case 'Outfit 2':

                alert(`Well, that's at least something. I would have picked something more festive.`);


                let talkToBouncerO2 = prompt(`As you arrive at the location, not sure if it was the right choice of clothing, you see a grumpy looking, buffed bouncer at the door.
            Just as you were about to enter the party, he stops you and asks for the entrycode. What do you say?
            Option (1) "Oh of course the password, well it must have slipped my mind. Give me a minute."
            Option (2) "I dont know any entrycode, but could you please let me in?"
            Option (3) "Sure, the entrycode is 26031973"`);


                if (talkToBouncerO2 === '1') {
                    let acceptOffer = confirm(`The bouncer lets you think for a minute, but then he recognized that you knew the secret dresscode for today. He offers to let you in if you promise not to tell anyone. (Press OK to accept his offer)`);

                    if (acceptOffer) {
                        alert('You enter the main hall, and immediately blended in with everybody. Just the members of the catering staff wore suits and you felt a strong relieve that you picked the right outfit today.');
                        let meetMark = confirm(`You see Mark Zuckerberg standing 5 feet in front of you. Wearing the exact same gray T-shirt and some blue jeans. Do you want to talk to him?`);
                        if (meetMark) {
                            alert('You approach Mark Zuckerberg with sweaty hands, thinking about what to say. Then you greeted him with the words: "Hi Mark, did you know that I do not have a facebook account?"');
                            alert(`Internally you facepalmed yourself, but then Mark Zuckerberg starts laughing and asks: "What can I offer you, so you would create a facebook account?" `);
                            alert(`Immediately you reply: "Be my only Facebook friend for ever"`);
                            alert(`That was the day you befriended Mark Zuckerberg on Facebook and you and him lived happily ever after. FIN`);
                        } else {
                            alert('Since you obiously do not want to talk to anyone here, you decided to leave the party and live your life full of regrets. FIN');
                        }
                    } else {
                        alert('What? Now you get the chance to meet your role model and then you decide to leave? Well ok then. Live your life full of regrets. FIN');
                    }

                } else if (talkToBouncerO2 === '2') {
                    alert('The bouncer tells you no and you go home feeling miserable about your failed mission.');
                } else {
                    alert('The bouncer is clearly surprised that you know the correct answer. You are sure he saw your little panic attack, when he asked for the entrycode, but you had never thought that Larry Page himself would make the mistake to use his own date of birth as password. Lucky you!');
                    alert('You enter the main hall, and immediately blended in with everybody. Just the members of the catering staff wore suits and you felt a strong relieve that you picked the right outfit today.');
                    let meetMark = confirm(`You see Mark Zuckerberg standing 5 feet in front of you. Wearing the exact same gray T-shirt and some blue jeans. Do you want to talk to him?`);
                    if (meetMark) {
                        alert('You approach Mark Zuckerberg with sweaty hands, thinking about what to say. Then you greeted him with the words: "Hi Mark, did you know that I do not have a facebook account?"');
                        alert(`Internally you facepalmed yourself, but then Mark Zuckerberg starts laughing and asks: "What can I offer you, so you would create a facebook account?" `);
                        alert(`Immediately you reply: "Be my only Facebook friend for ever"`);
                        alert(`That was the day you befriended Mark Zuckerberg on Facebook and you and him lived happily ever after. FIN`);
                    } else {
                        alert('Since you obiously do not want to talk to anyone here, you decided to leave the party and live your life full of regrets. FIN');

                    }
                }

                break;


            case 'Outfit 3':
                alert('Since you do not seem to care about anything, why bother and play this game?');
                alert('This game was ended. Error 404: Effort not found')
                break;
        }

    } else {
        alert('Who needs to go out to socialize? I have got enough friends on the internet. FIN');
    }
}