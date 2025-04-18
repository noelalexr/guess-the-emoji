//RANDOM FUNNY MESSAGES
const loadingPageMessages = [
    "Loading... Summoning the data gods! ⏳",
    "Please wait... Thinking really hard 🤓",
    "Loading... Faster than a snail! 🐌",
    "Loading... Giving you time to stretch! 🏋️",
    "Almost done... Just one more snack break 🍕",
    "Loading... Too lazy to load fast 🐢",
    "Loading... Brb, petting a cat 🐱",
    "Loading... Adding extra pixels for fun! 🎨",
    "Loading... Stuck in traffic. 🚗💨",
    "Loading... Searching for cheat codes... ⏳",
    "Loading... Herding cats. 🐱🐱🐱",
    "Loading... Respawning in 3…2…1… ⏳",
];
const correctAnswerMessages = [
    "🔥 You're on fire! (Not literally, I hope.) 🔥🔥🔥",
    "🎉 Winner winner, virtual chicken dinner! 🍗",
    "🚀 You did it! NASA just called—they want to study your brain. 🧠🚀",
    "💰 Jackpot! You win… uh… my respect! (And maybe a cookie 🍪)",
    "🦸 You crushed it! Superheroes are now taking notes from you. 🦸‍♂️🔥",
    "🕶 Too good. Too smooth. Too LEGENDARY. 😎",
    "🏆 Awesome! That was cleaner than my search history. 🏆✨",
    "🎯 Bullseye! You just hit the jackpot of awesomeness. 🎯🔥",
    "💥 Boom! Nailed it! 👌",
    "🎮 You're the reason 'Game Over' is afraid to show up. 🎮"
]
const giveUpMessages = [
    "🤷 You surrender? Alright, try not to forget it in 3 seconds!<br>Here's the answer:",
    "📞 Hello? Is this Google? No need,<br>I got the answer:",
    "🐔 Bawk bawk! That's the sound of you chickening out! 🐔<br>Here's the answer:",
    "🏳 Wave that white flag!<br>The answer you seek is:",
    "🎯 A for effort! Actually, no... C- for effort.<br>The answer is:",
    "🚀 You've abandoned the mission, captain!<br>The answer is:",
    "🤡 Quitting, huh? Alright, clown,<br>the answer is:",
    "🥊 Ting ting ting! Knocked out by a tough question! The answer is:",
    "🚑 We have a code red: player down!<br>Answer? Here:",
    "🌍 And the world record for fastest surrender goes to... YOU!<br>The answer is:",
];
const wrongAnswerMessages = [
    "🎭 A+ for effort, F for accuracy.",
    "🐌 That was slower than a snail running a marathon. Try again!",
    "❌ Oops! Did your brain take a coffee break? ☕",
    "🤷‍♂️ Close... but not even in the same emoji universe! 🌌",
    "🚨 Emoji police are on their way to arrest you! 🚔",
    "🤷 You were close! Just… in a parallel universe.",
    "🏚 That was so wrong, ghosts are haunting this game now.",
    "📞 Hello? NASA? We have a failed launch here.",
    "🧐 Hmm… are you playing a different game? 🎮",
    "🔄 Try again! Your brain just needs a little reboot! 💻",
];

//local data

const localData = {
    "Random 1 Word" : [
        {"word": "sunshine", "emoji": "🌞☀️", "hint": "This is what you feel when bright light warms your skin on a clear day."},
        {"word": "coffee", "emoji": "☕️🍩", "hint": "A popular drink that many people consume to start their day or boost energy."},
        {"word": "mountain", "emoji": "⛰️🏔️", "hint": "A large, steep landform that rises prominently above its surroundings."},
        {"word": "ocean", "emoji": "🌊🌊", "hint": "A vast body of water covering most of the Earth's surface."},
        {"word": "robot", "emoji": "🤖🔧", "hint": "A machine designed to carry out a series of tasks, often autonomously."},
        {"word": "snowflake", "emoji": "❄️🌨️", "hint": "A small, delicate ice crystal that falls during winter storms."},
        {"word": "pizza", "emoji": "🍕🍕", "hint": "A round dish with a bread crust, topped with cheese, sauce, and various ingredients."},
        {"word": "hurricane", "emoji": "🌪️💨", "hint": "A powerful tropical storm characterized by strong winds and heavy rain."},
        {"word": "tree", "emoji": "🌳🌲", "hint": "A tall, woody plant with branches and leaves, essential for the environment."},
        {"word": "guitar", "emoji": "🎸🎶", "hint": "A stringed instrument that produces music when strummed or plucked."},
        {"word": "astronaut", "emoji": "👩‍🚀👨‍🚀", "hint": "A person trained for space travel and exploration."},
        {"word": "bicycle", "emoji": "🚲🚴‍♂️", "hint": "A two-wheeled vehicle powered by pedaling."},
        {"word": "umbrella", "emoji": "☂️🌧️", "hint": "A portable device used to protect from rain or sunlight."},
        {"word": "lion", "emoji": "🦁👑", "hint": "A large, carnivorous animal known for its mane and royal reputation."},
        {"word": "pencil", "emoji": "✏️📝", "hint": "A writing tool with a graphite core, often used for drawing or writing."},
        {"word": "music", "emoji": "🎶🎧", "hint": "Sound created through instruments or voices, often in rhythm or melody."},
        {"word": "cloud", "emoji": "☁️🌥️", "hint": "A mass of tiny water droplets or ice crystals suspended in the atmosphere."},
        {"word": "camera", "emoji": "📷📸", "hint": "A device used to capture images or videos."},
        {"word": "cake", "emoji": "🍰🎂", "hint": "A sweet dessert made from flour, sugar, and other ingredients, often decorated."},
        {"word": "volcano", "emoji": "🌋🔥", "hint": "A mountain that erupts with lava, ash, and gases from beneath the Earth's surface."},
        {"word": "football", "emoji": "⚽️🏆", "hint": "A team sport where players kick a ball into the opponent's goal to score points."},
        {"word": "butterfly", "emoji": "🦋🌸", "hint": "A colorful insect known for its delicate wings and metamorphosis."},
        {"word": "phone", "emoji": "📱📞", "hint": "A device used for communication, either via voice or text."},
        {"word": "skyscraper", "emoji": "🏙️🌆", "hint": "A tall, multi-story building often found in large cities."},
        {"word": "icecream", "emoji": "🍦🍧", "hint": "A sweet, frozen dessert made from milk, cream, and sugar."},
        {"word": "paint", "emoji": "🎨🖌️", "hint": "A colored substance used to create images on surfaces like canvas or walls."},
        {"word": "rocket", "emoji": "🚀🌟", "hint": "A vehicle designed to travel through space or launch into orbit."},
        {"word": "harvest", "emoji": "🌾🍂", "hint": "The process of gathering mature crops from the fields."},
        {"word": "jungle", "emoji": "🌳🌿", "hint": "A dense, tropical forest that is home to various plants and animals."},
        {"word": "castle", "emoji": "🏰⚔️", "hint": "A large, fortified building often associated with royalty and defense."},
        {"word": "planet", "emoji": "🌍🪐", "hint": "A celestial body that orbits a star, including Earth, Mars, and others."},
        {"word": "wizard", "emoji": "🧙‍♂️🔮", "hint": "A magical person skilled in casting spells and using mystical powers."},
        {"word": "yoga", "emoji": "🧘‍♀️🧘‍♂️", "hint": "A practice that combines physical postures, breathing exercises, and meditation."}
    ],
    "Movies" : [
        {"word": "The Godfather", "emoji": "🍝🔫👨‍👩‍👧‍👦", "hint": "Released in 1972, the film follows the powerful Corleone family, led by patriarch Vito Corleone (Marlon Brando), and the drama that unfolds as his son Michael (Al Pacino) becomes involved in the family's criminal empire."},
        {"word": "The Dark Knight", "emoji": "🦇💰💣", "hint": "Released in 2008, Batman (Christian Bale) faces off against the Joker (Heath Ledger), a criminal mastermind who seeks to create chaos in Gotham City, in this action-packed, morally complex superhero film."},
        {"word": "The Lord of the Rings: The Return of the King", "emoji": "⚔️👑💍", "hint": "Released in 2003, this epic conclusion to the trilogy follows Frodo Baggins (Elijah Wood) and his companions as they prepare for the final battle to destroy the One Ring and defeat the Dark Lord Sauron."},
        {"word": "Forrest Gump", "emoji": "🏃‍♂️🍫💚", "hint": "Released in 1994, the film tells the life story of Forrest Gump (Tom Hanks), a man with low intelligence but an incredible impact on historical events, and his love for his childhood sweetheart, Jenny (Robin Wright)."},
        {"word": "Inception", "emoji": "💭🌀⏳", "hint": "Released in 2010, this mind-bending sci-fi thriller, starring Leonardo DiCaprio, delves into the world of dream manipulation and the struggle to plant an idea deep within someone's subconscious."},
        {"word": "The Matrix", "emoji": "💻🧠🖤", "hint": "Released in 1999, Keanu Reeves stars as Neo, a hacker who discovers that the reality he knows is a simulated world controlled by machines, and joins a rebellion to overthrow the system."},
        {"word": "The Lion King", "emoji": "🦁👑🌍", "hint": "Released in 1994, the animated classic follows Simba, a young lion prince who overcomes personal struggles and learns about responsibility and leadership in the African savanna."},
        {"word": "Star Wars: Episode IV - A New Hope", "emoji": "🌌⚔️🚀", "hint": "Released in 1977, Luke Skywalker (Mark Hamill) embarks on a journey to fight the Empire, discovering his destiny as a Jedi Knight, with iconic characters like Princess Leia (Carrie Fisher) and Han Solo (Harrison Ford)."},
        {"word": "Schindler's List", "emoji": "🕊️🇩🇪📜", "hint": "Released in 1993, this historical drama directed by Steven Spielberg tells the true story of Oskar Schindler (Liam Neeson), a German businessman who saves the lives of over a thousand Polish Jews during the Holocaust."},
        {"word": "The Silence of the Lambs", "emoji": "😷🍴🔪", "hint": "Released in 1991, FBI trainee Clarice Starling (Jodie Foster) seeks the help of incarcerated serial killer Hannibal Lecter (Anthony Hopkins) to catch another killer on the loose."},
        {"word": "Se7en", "emoji": "7️⃣🔪☠️", "hint": "Released in 1995, two detectives, played by Brad Pitt and Morgan Freeman, track down a serial killer who uses the seven deadly sins as inspiration for his gruesome murders."},
        {"word": "Interstellar", "emoji": "🚀🌌⏳", "hint": "Released in 2014, this sci-fi film directed by Christopher Nolan follows a team of astronauts, led by Matthew McConaughey, who travel through a wormhole in search of a new home for humanity."},
        {"word": "The Prestige", "emoji": "🎩🔮🔪", "hint": "Released in 2006, directed by Christopher Nolan, the film explores the intense rivalry between two magicians (Hugh Jackman and Christian Bale) in the late 19th century as they try to outdo each other's illusions."},
        {"word": "Goodfellas", "emoji": "🍝💰🔫", "hint": "Released in 1990, this gangster film directed by Martin Scorsese follows Henry Hill (Ray Liotta) as he navigates the dangerous world of organized crime, with memorable performances from Robert De Niro and Joe Pesci."},
        {"word": "The Terminator", "emoji": "🤖🔫🚨", "hint": "Released in 1984, this sci-fi classic stars Arnold Schwarzenegger as a cyborg assassin sent from the future to kill Sarah Connor (Linda Hamilton), whose son will become a future leader in a war against machines."},
        {"word": "Back to the Future", "emoji": "⏳🚗💡", "hint": "Released in 1985, Marty McFly (Michael J. Fox) travels back in time in a DeLorean invented by Doc Brown (Christopher Lloyd), leading to hilarious and unexpected consequences that change the future."},
        {"word": "Gladiator", "emoji": "🛡️⚔️👑", "hint": "Released in 2000, Maximus (Russell Crowe) seeks revenge against the corrupt emperor Commodus (Joaquin Phoenix) in this epic story set in Ancient Rome."},
        {"word": "The Matrix Reloaded", "emoji": "💻🧠⚔️", "hint": "Released in 2003, Neo (Keanu Reeves) continues his fight against the Matrix, as he discovers more about his powers and the war between humans and machines intensifies."},
        {"word": "Toy Story", "emoji": "🤠🚀🧸", "hint": "Released in 1995, Woody (Tom Hanks) and Buzz Lightyear (Tim Allen) are toys that come to life when their owner, Andy, is not around, learning about friendship and loyalty."},
        {"word": "Jurassic Park", "emoji": "🦖🌴🚶‍♂️", "hint": "Released in 1993, scientists clone dinosaurs to populate an island amusement park, but chaos ensues when the creatures escape and threaten the visitors."},
        {"word": "Avatar", "emoji": "🌍👽🌱", "hint": "Released in 2009, Jake Sully (Sam Worthington) is sent to the alien planet Pandora, where he becomes involved with the indigenous Na'vi people in a battle against human exploitation."},
        {"word": "The Social Network", "emoji": "📱💻👨‍💻", "hint": "Released in 2010, this drama tells the story of Facebook's creation and the legal battles that ensue, starring Jesse Eisenberg as Mark Zuckerberg."},
        {"word": "The Incredibles", "emoji": "🦸‍♂️💥👨‍👩‍👧‍👦", "hint": "Released in 2004, this animated film follows a family of superheroes who must come out of retirement to save the world from a new villain."},
        {"word": "The Shining", "emoji": "🔪🏨❄️", "hint": "Released in 1980, Jack Torrance (Jack Nicholson) moves his family to a remote hotel where he slowly loses his sanity and becomes a danger to his wife and son."},
        {"word": "The Grand Budapest Hotel", "emoji": "🏨🎨💼", "hint": "Released in 2014, directed by Wes Anderson, this quirky comedy follows the adventures of a hotel concierge (Ralph Fiennes) and his protégé as they become embroiled in a priceless art heist."},
        {"word": "Casablanca", "emoji": "🇲🇦✈️💔", "hint": "Released in 1942, this classic romance set during World War II stars Humphrey Bogart as Rick, a nightclub owner who must choose between love and doing what is right to help defeat the Nazis."},
        {"word": "Blade Runner", "emoji": "🤖🌌💔", "hint": "Released in 1982, this sci-fi thriller stars Harrison Ford as a cop tasked with hunting down rogue androids in a dystopian future."},
        {"word": "The Breakfast Club", "emoji": "🥞🎒💭", "hint": "Released in 1985, this teen drama follows five high school students from different cliques who are forced to spend a Saturday together in detention, leading to surprising revelations about their lives."},
        {"word": "One Flew Over the Cuckoo's Nest", "emoji": "🏥🎭🦅", "hint": "Released in 1975, this drama stars Jack Nicholson as a man who feigns insanity to avoid prison time and ends up clashing with the oppressive mental institution staff."},
        {"word": "Jaws", "emoji": "🦈🚤⚠️", "hint": "Released in 1975, this thriller directed by Steven Spielberg tells the story of a great white shark terrorizing a small beach town, as the local police chief, marine biologist, and fisherman work to stop it."}
    ],
    "Holidays & Events" : [
        {"word": "New Year's Day", "emoji": "🎆🎉🎇", "hint": "Celebrated every January 1st, marking the first day of the year with fireworks, parties, and festivities."},
        {"word": "Maundy Thursday", "emoji": "⛪🙏💔", "hint": "Observed on the Thursday before Easter Sunday, this day commemorates the Last Supper of Jesus Christ."},
        {"word": "Good Friday", "emoji": "✝️🙏💔", "hint": "Observed on the Friday before Easter, it commemorates the crucifixion and death of Jesus Christ."},
        {"word": "Araw ng Kagitingan", "emoji": "🇵🇭⛓️🪖", "hint": "Held every April 9th, this day honors the courage and sacrifices of Filipino soldiers during World War II."},
        {"word": "Labor Day", "emoji": "💼👷‍♂️⚒️", "hint": "Observed on May 1st, it celebrates the contributions of Filipino workers and the labor movement."},
        {"word": "Independence Day", "emoji": "🇵🇭🕊️🎆", "hint": "Celebrated on June 12th, it marks the declaration of Philippine independence from Spanish rule in 1898."},
        {"word": "National Heroes Day", "emoji": "🇵🇭🦸‍♂️💪", "hint": "Observed on the last Monday of August, it honors Filipino national heroes and their sacrifices for the country."},
        {"word": "Eid al-Fitr", "emoji": "🌙🕌🍽️", "hint": "A Muslim holiday celebrated after the end of Ramadan, marking the end of fasting, with special prayers and feasts."},
        {"word": "Eid al-Adha", "emoji": "🌙🕌🐏", "hint": "Celebrated by Muslims, this holiday honors the willingness of Ibrahim to sacrifice his son, with prayers and the offering of animals."},
        {"word": "Bonifacio Day", "emoji": "🇵🇭👨‍🏭🛡️", "hint": "Observed on November 30th, it honors the birth of Andres Bonifacio, a national hero and leader of the Philippine revolution."},
        {"word": "Christmas Day", "emoji": "🎄🎅🎁", "hint": "Celebrated on December 25th, this day commemorates the birth of Jesus Christ, marked with gift-giving, parties, and festive decorations."},
        {"word": "Rizal Day", "emoji": "🇵🇭🦸‍♂️📚", "hint": "Observed on December 30th, it honors the life and contributions of Dr. José Rizal, the national hero of the Philippines."},
        {"word": "Chinese New Year", "emoji": "🐉🎆🍊", "hint": "Celebrated in January or February, this marks the beginning of the lunar new year, with festivities such as dragon dances and fireworks."},
        {"word": "All Saints' Day", "emoji": "💀🕯️⛪", "hint": "Observed on November 1st, this day is dedicated to all saints and is commonly spent visiting the graves of departed loved ones."},
        {"word": "All Souls' Day", "emoji": "💀🕯️💐", "hint": "Observed on November 2nd, it is a day of prayer for the souls of the departed, particularly those in purgatory."},
        {"word": "National Women's Day", "emoji": "👩‍🦰💪🌸", "hint": "Celebrated on March 8th, this day honors women’s achievements and their contributions to society."},
        {"word": "National Teachers' Day", "emoji": "👩‍🏫🍎📚", "hint": "Celebrated every October 5th, this day acknowledges the contributions of teachers in shaping young minds and society."},
        {"word": "Fiesta de San Juan", "emoji": "🎉🌊⛪", "hint": "Held on June 24th in various towns, particularly in San Juan, this festival celebrates the feast of St. John the Baptist with water-related games and dances."},
        {"word": "Kadayawan Festival", "emoji": "🌻🎶🥁", "hint": "Held every August in Davao City, this festival celebrates the culture, harvest, and people of Davao with dancing, music, and a colorful parade."},
        {"word": "Sinulog Festival", "emoji": "💃🕺🎉", "hint": "Held every January in Cebu, this festival honors the Santo Niño (Holy Child) with a grand parade, street dancing, and religious activities."},
        {"word": "Panagbenga Festival", "emoji": "🌸🎉🎶", "hint": "Held every February in Baguio, this flower festival celebrates the beauty of flowers and the city's cultural heritage with floats and street dancing."},
        {"word": "Pahiyas Festival", "emoji": "🌾🎉🏠", "hint": "Held every May in Lucban, Quezon, this colorful festival celebrates the harvest season with elaborate decorations and displays in homes."},
        {"word": "Banggus Festival", "emoji": "🐟🎉🍽️", "hint": "Held every May in Dagupan City, this festival celebrates the abundance of Bangus (milkfish) with various cooking competitions and events."},
        {"word": "Higantes Festival", "emoji": "🎭🎉🏠", "hint": "Held every November in Angono, Rizal, this festival features giant paper-mâché figures parading through the streets, celebrating the town's rich history."},
        {"word": "Easter Sunday", "emoji": "✝️🐣🌸", "hint": "Observed on the first Sunday after the first full moon following the vernal equinox, it celebrates the resurrection of Jesus Christ."},
        {"word": "Christmas Eve", "emoji": "🌙🎄🎁", "hint": "Observed on December 24th, it marks the evening before Christmas Day, celebrated with family gatherings, a 'Noche Buena' feast, and midnight Mass."},
        {"word": "Holy Week", "emoji": "✝️🕯️📖", "hint": "A week of religious observances leading to Easter, including Maundy Thursday and Good Friday, commemorating the Passion, Death, and Resurrection of Jesus."},
        {"word": "Valentine's Day", "emoji": "❤️💌🌹", "hint": "Celebrated on February 14th, it honors love and affection between couples, with gift-giving, flowers, and romantic gestures."},
        {"word": "Mother's Day", "emoji": "🌷👩‍👧‍👦💐", "hint": "Observed on the second Sunday of May, this day honors mothers for their love, sacrifices, and contributions to families."},
        {"word": "Father's Day", "emoji": "👨‍👧‍👦🎉💐", "hint": "Observed on the third Sunday of June, this day celebrates fathers and their role in nurturing and guiding families."},
        {"word": "Undas", "emoji": "🕯️💐⚰️", "hint": "Observed on November 1st and 2nd, it is a time to honor and remember departed loved ones by visiting their graves."},
    ],
    "Places" : [
        {"word": "Eiffel Tower", "emoji": "🗼🇫🇷✨", "hint": "Located in Paris, France, this iconic iron lattice tower is one of the most recognizable landmarks in the world, offering stunning views of the city."},
        {"word": "Great Wall of China", "emoji": "🧱🏯🌏", "hint": "A series of fortifications that stretch over 13,000 miles, the Great Wall is a UNESCO World Heritage Site and a testament to China's ancient engineering."},
        {"word": "Sydney Opera House", "emoji": "🎭🎶🇦🇺", "hint": "Located in Sydney, Australia, the Opera House is known for its unique sail-like architecture and serves as a hub for performing arts and cultural events."},
        {"word": "Taj Mahal", "emoji": "🏰🌹🇮🇳", "hint": "A stunning white marble mausoleum in Agra, India, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it’s a symbol of eternal love."},
        {"word": "Grand Canyon", "emoji": "⛰️🌄🏜️", "hint": "A massive, awe-inspiring canyon carved by the Colorado River in Arizona, USA, known for its immense size, breathtaking views, and geological history."},
        {"word": "Mount Everest", "emoji": "⛰️🌏🗺️", "hint": "The highest mountain on Earth, located in the Himalayas, on the border between Nepal and China, Everest is a major destination for mountaineers and adventurers."},
        {"word": "Santorini", "emoji": "🏖️🏙️🇬🇷", "hint": "A picturesque Greek island known for its whitewashed buildings, blue domes, stunning sunsets, and crystal-clear waters, making it a popular travel destination."},
        {"word": "Stonehenge", "emoji": "🪓⛺🌄", "hint": "A prehistoric monument in England, Stonehenge is composed of massive stone circles and is shrouded in mystery regarding its construction and purpose."},
        {"word": "Pyramids of Giza", "emoji": "🛖⛺🏜️", "hint": "Located in Egypt, the Pyramids of Giza are some of the most famous ancient structures in the world, built as tombs for the Pharaohs."},
        {"word": "Niagara Falls", "emoji": "💦🌊🇺🇸🇨🇦", "hint": "A famous waterfall on the border between Canada and the United States, Niagara Falls is a spectacular sight, known for its immense flow and scenic beauty."},
        {"word": "Venice", "emoji": "🚤🏙️🌊", "hint": "A city in Italy known for its canals, historic architecture, and art, Venice is built on more than 100 small islands and is famous for gondola rides."},
        {"word": "Mount Fuji", "emoji": "⛰️🌸🇯🇵", "hint": "Japan’s highest peak, Mount Fuji is a symbol of the country and a popular destination for hikers, offering a stunning view especially during cherry blossom season."},
        {"word": "Dubai Burj Khalifa", "emoji": "🏢🌆🇦🇪", "hint": "The tallest building in the world, located in Dubai, UAE, the Burj Khalifa stands at a staggering height of 828 meters, offering panoramic city views."},
        {"word": "Amazon Rainforest", "emoji": "🌳🌿🐒", "hint": "The world’s largest tropical rainforest, covering much of South America, the Amazon is home to vast biodiversity and plays a critical role in Earth’s climate."},
        {"word": "Victoria Falls", "emoji": "💦🌍🦁", "hint": "Located on the border between Zimbabwe and Zambia, Victoria Falls is one of the largest and most famous waterfalls in the world."},
        {"word": "Galápagos Islands", "emoji": "🐢🌋🦎", "hint": "A remote group of islands off the coast of Ecuador, known for their unique wildlife and natural beauty, the Galápagos were instrumental in Charles Darwin’s theory of evolution."},
        {"word": "Easter Island", "emoji": "🗿🌴🇨🇱", "hint": "A remote island in the Pacific Ocean, Easter Island is famous for its mysterious moai statues, which were created by the Rapa Nui people."},
        {"word": "Kyoto", "emoji": "🏯🇯🇵🌸", "hint": "A city in Japan, known for its traditional temples, historic shrines, beautiful gardens, and breathtaking views of cherry blossoms in spring."},
        {"word": "New York City", "emoji": "🗽🏙️🌆", "hint": "The largest city in the U.S., known for its iconic landmarks like the Statue of Liberty, Central Park, Times Square, and the Empire State Building."},
        {"word": "Rome", "emoji": "🏛️🇮🇹🍝", "hint": "The capital city of Italy, Rome is a historical hub, home to landmarks such as the Colosseum, Roman Forum, and Vatican City."},
        {"word": "Santorini", "emoji": "🏝️🇬🇷🍷", "hint": "A stunning island in Greece known for its whitewashed houses with blue domes, breathtaking sunsets, and crystal-clear waters."},
        {"word": "Bora Bora", "emoji": "🏖️🌊🐠", "hint": "A tropical island in French Polynesia, Bora Bora is famous for its turquoise lagoons, overwater bungalows, and vibrant marine life."},
        {"word": "Amsterdam", "emoji": "🚲🌷🇳🇱", "hint": "The capital city of the Netherlands, Amsterdam is known for its canals, museums like the Van Gogh Museum, and its laid-back cultural atmosphere."},
        {"word": "London", "emoji": "🎡🇬🇧🏙️", "hint": "The capital city of the United Kingdom, London is home to iconic landmarks like the London Eye, Big Ben, and Buckingham Palace."},
        {"word": "Dubai", "emoji": "🏙️🛥️🏖️", "hint": "A luxurious city in the UAE, Dubai is famous for its modern architecture, extravagant shopping malls, and world-renowned hotels like the Burj Al Arab."},
        {"word": "Hawaii", "emoji": "🏖️🌊🌴", "hint": "An idyllic state in the U.S., Hawaii is known for its tropical beaches, volcanic landscapes, and unique Polynesian culture."},
        {"word": "Milan", "emoji": "🛍️🏙️🎨", "hint": "Known for its high fashion and cultural landmarks, Milan is a global center for art, design, and style."},
        {"word": "Las Vegas", "emoji": "🎰🌆💃", "hint": "Known for its vibrant nightlife, casinos, and entertainment, Las Vegas is a popular destination for visitors seeking excitement and luxury."},
        {"word": "Bali", "emoji": "🌴🏖️🐚", "hint": "An Indonesian island known for its beautiful beaches, cultural traditions, and stunning temples, Bali is a popular destination for tourists seeking relaxation and adventure."},
        {"word": "Yellowstone National Park", "emoji": "🐻🌲🌄", "hint": "The first national park in the U.S., located across Wyoming, Montana, and Idaho, Yellowstone is famous for its geysers, wildlife, and geothermal features."},
        {"word": "Lake Geneva", "emoji": "🏞️🚤🇨🇭", "hint": "A stunning lake shared by Switzerland and France, Lake Geneva is known for its picturesque towns, vineyards, and beautiful surrounding mountains."}
    ],
    "Video Games" : [
        {"word": "The Legend of Zelda: Breath of the Wild", "emoji": "🗺️🧝‍♂️⚔️", "hint": "Released in 2017, an open-world action-adventure game where players explore Hyrule to defeat Calamity Ganon and save Princess Zelda."},
        {"word": "Super Mario Bros.", "emoji": "🍄👦🎮", "hint": "First released in 1985, a classic platformer where Mario sets out to rescue Princess Peach from Bowser across various levels."},
        {"word": "Minecraft", "emoji": "⛏️🌍🧱", "hint": "Launched in 2011, a sandbox game where players build and explore blocky worlds, mine resources, and survive hostile environments."},
        {"word": "The Witcher 3: Wild Hunt", "emoji": "🧙‍♂️⚔️🐺", "hint": "Released in 2015, an open-world RPG where Geralt of Rivia hunts monsters and searches for his adopted daughter in a dark fantasy universe."},
        {"word": "Tetris", "emoji": "🟦🟩🟨", "hint": "First released in 1984, a puzzle game where players arrange falling tetrominoes to clear lines and score points."},
        {"word": "Grand Theft Auto V", "emoji": "🚗💰💥", "hint": "Launched in 2013, an open-world action-adventure game set in the fictional city of Los Santos, focusing on crime and heists."},
        {"word": "Dark Souls", "emoji": "🗡️💀🔥", "hint": "Released in 2011, an action RPG known for its challenging difficulty, intricate world design, and deep lore."},
        {"word": "Call of Duty: Modern Warfare", "emoji": "🔫💥🎮", "hint": "Launched in 2007, a first-person shooter with a gripping single-player campaign and intense multiplayer combat."},
        {"word": "Fortnite", "emoji": "🛡️💣🤪", "hint": "Released in 2017, a battle royale game where players fight to be the last one standing, featuring building mechanics and ever-changing seasons."},
        {"word": "Final Fantasy VII", "emoji": "⚔️🌍💫", "hint": "Launched in 1997, an RPG where Cloud Strife and his team of rebels fight against the megacorporation Shinra and the destructive Sephiroth."},
        {"word": "Red Dead Redemption 2", "emoji": "🐎💰🤠", "hint": "Launched in 2018, an open-world action-adventure game set in the Wild West where players experience the life of Arthur Morgan, an outlaw."},
        {"word": "The Elder Scrolls V: Skyrim", "emoji": "🧙‍♂️❄️⚔️", "hint": "Released in 2011, an open-world fantasy RPG where players explore the land of Skyrim, fighting dragons and pursuing personal quests."},
        {"word": "The Last of Us", "emoji": "🧟‍♂️💔🎮", "hint": "Released in 2013, an action-adventure game set in a post-apocalyptic world where Joel and Ellie fight for survival while navigating emotional challenges."},
        {"word": "Animal Crossing: New Horizons", "emoji": "🏝️🐻🎮", "hint": "Released in 2020, a life simulation game where players build and customize their island while forming relationships with cute animal villagers."},
        {"word": "League of Legends", "emoji": "⚔️🌍👾", "hint": "Launched in 2009, a multiplayer online battle arena (MOBA) where teams of champions compete in tactical combat to destroy the enemy's Nexus."},
        {"word": "The Sims", "emoji": "👩‍👩‍👧🏡🎮", "hint": "Released in 2000, a life simulation game where players create and control virtual people, designing their homes, careers, and relationships."},
        {"word": "Assassin's Creed II", "emoji": "🗡️🏛️🇮🇹", "hint": "Released in 2009, an action-adventure game set in Renaissance Italy where players control Ezio Auditore, an assassin on a quest for justice."},
        {"word": "World of Warcraft", "emoji": "🧙‍♂️⚔️🌍", "hint": "Launched in 2004, an MMORPG where players create characters and embark on quests in the vast world of Azeroth, fighting monsters and other players."},
        {"word": "Resident Evil 4", "emoji": "🧟‍♂️🔫🚨", "hint": "Released in 2005, a survival horror game where Leon S. Kennedy fights mutated creatures and uncovers a terrifying conspiracy in rural Spain."},
        {"word": "Super Mario Odyssey", "emoji": "🌍🍄👦", "hint": "Launched in 2017, a 3D platformer where Mario embarks on a global adventure to rescue Princess Peach, using his new ally, Cappy, to possess objects."},
        {"word": "Fallout 4", "emoji": "💥⚙️🔫", "hint": "Released in 2015, an open-world RPG set in a post-apocalyptic world, where players explore the wasteland, build settlements, and fight against mutants."},
        {"word": "Street Fighter II", "emoji": "🥊👊🎮", "hint": "Launched in 1991, a classic 2D fighting game where players select characters with unique moves and compete to become the world champion."},
        {"word": "Final Fantasy XV", "emoji": "⚔️🗡️🌍", "hint": "Released in 2016, an action RPG where Noctis and his friends journey through a fantastical world filled with magic, monsters, and political intrigue."},
        {"word": "Crash Bandicoot", "emoji": "🐾🌀🎮", "hint": "Released in 1996, a platformer where players control the mischievous bandicoot, Crash, as he navigates levels to thwart Dr. Neo Cortex's evil plans."},
        {"word": "Uncharted 4: A Thief's End", "emoji": "🏴‍☠️💎🗺️", "hint": "Released in 2016, an action-adventure game where Nathan Drake embarks on one last adventure to find a pirate treasure, facing challenges from his past."},
        {"word": "Kingdom Hearts", "emoji": "🗝️❤️✨", "hint": "Released in 2002, an action RPG that blends Disney and Final Fantasy characters as Sora, Donald, and Goofy fight to stop the darkness from consuming worlds."},
        {"word": "Counter-Strike: Global Offensive", "emoji": "💣🔫🎮", "hint": "Released in 2012, a competitive first-person shooter where two teams of terrorists and counter-terrorists face off in objective-based rounds."},
        {"word": "Metal Gear Solid", "emoji": "🎮🔫🐍", "hint": "Released in 1998, a stealth action game where Solid Snake attempts to stop a nuclear threat, featuring a complex narrative and cutting-edge gameplay."},
        {"word": "The Last of Us Part II", "emoji": "🧟‍♂️💔⚔️", "hint": "Released in 2020, a sequel to The Last of Us, following Ellie as she seeks revenge in a brutal, post-apocalyptic world."},
        {"word": "Monster Hunter: World", "emoji": "🦖🔨⚔️", "hint": "Released in 2018, an action RPG where players hunt gigantic monsters in a vast world, crafting weapons and armor from their remains."},
        {"word": "Sonic the Hedgehog", "emoji": "🐦💨🎮", "hint": "Launched in 1991, a fast-paced platformer where players control Sonic, the blue hedgehog, as he battles Dr. Robotnik and saves animals trapped in robots."}
    ],
};


const oneWordLocal = [
    {"word": "sunshine", "emoji": "🌞☀️", "hint": "This is what you feel when bright light warms your skin on a clear day."},
    {"word": "coffee", "emoji": "☕️🍩", "hint": "A popular drink that many people consume to start their day or boost energy."},
    {"word": "mountain", "emoji": "⛰️🏔️", "hint": "A large, steep landform that rises prominently above its surroundings."},
    {"word": "ocean", "emoji": "🌊🌊", "hint": "A vast body of water covering most of the Earth's surface."},
    {"word": "robot", "emoji": "🤖🔧", "hint": "A machine designed to carry out a series of tasks, often autonomously."},
    {"word": "snowflake", "emoji": "❄️🌨️", "hint": "A small, delicate ice crystal that falls during winter storms."},
    {"word": "pizza", "emoji": "🍕🍕", "hint": "A round dish with a bread crust, topped with cheese, sauce, and various ingredients."},
    {"word": "hurricane", "emoji": "🌪️💨", "hint": "A powerful tropical storm characterized by strong winds and heavy rain."},
    {"word": "tree", "emoji": "🌳🌲", "hint": "A tall, woody plant with branches and leaves, essential for the environment."},
    {"word": "guitar", "emoji": "🎸🎶", "hint": "A stringed instrument that produces music when strummed or plucked."},
    {"word": "astronaut", "emoji": "👩‍🚀👨‍🚀", "hint": "A person trained for space travel and exploration."},
    {"word": "bicycle", "emoji": "🚲🚴‍♂️", "hint": "A two-wheeled vehicle powered by pedaling."},
    {"word": "umbrella", "emoji": "☂️🌧️", "hint": "A portable device used to protect from rain or sunlight."},
    {"word": "lion", "emoji": "🦁👑", "hint": "A large, carnivorous animal known for its mane and royal reputation."},
    {"word": "pencil", "emoji": "✏️📝", "hint": "A writing tool with a graphite core, often used for drawing or writing."},
    {"word": "music", "emoji": "🎶🎧", "hint": "Sound created through instruments or voices, often in rhythm or melody."},
    {"word": "cloud", "emoji": "☁️🌥️", "hint": "A mass of tiny water droplets or ice crystals suspended in the atmosphere."},
    {"word": "camera", "emoji": "📷📸", "hint": "A device used to capture images or videos."},
    {"word": "cake", "emoji": "🍰🎂", "hint": "A sweet dessert made from flour, sugar, and other ingredients, often decorated."},
    {"word": "volcano", "emoji": "🌋🔥", "hint": "A mountain that erupts with lava, ash, and gases from beneath the Earth's surface."},
    {"word": "football", "emoji": "⚽️🏆", "hint": "A team sport where players kick a ball into the opponent's goal to score points."},
    {"word": "butterfly", "emoji": "🦋🌸", "hint": "A colorful insect known for its delicate wings and metamorphosis."},
    {"word": "phone", "emoji": "📱📞", "hint": "A device used for communication, either via voice or text."},
    {"word": "skyscraper", "emoji": "🏙️🌆", "hint": "A tall, multi-story building often found in large cities."},
    {"word": "icecream", "emoji": "🍦🍧", "hint": "A sweet, frozen dessert made from milk, cream, and sugar."},
    {"word": "paint", "emoji": "🎨🖌️", "hint": "A colored substance used to create images on surfaces like canvas or walls."},
    {"word": "rocket", "emoji": "🚀🌟", "hint": "A vehicle designed to travel through space or launch into orbit."},
    {"word": "harvest", "emoji": "🌾🍂", "hint": "The process of gathering mature crops from the fields."},
    {"word": "jungle", "emoji": "🌳🌿", "hint": "A dense, tropical forest that is home to various plants and animals."},
    {"word": "castle", "emoji": "🏰⚔️", "hint": "A large, fortified building often associated with royalty and defense."},
    {"word": "planet", "emoji": "🌍🪐", "hint": "A celestial body that orbits a star, including Earth, Mars, and others."},
    {"word": "wizard", "emoji": "🧙‍♂️🔮", "hint": "A magical person skilled in casting spells and using mystical powers."},
    {"word": "yoga", "emoji": "🧘‍♀️🧘‍♂️", "hint": "A practice that combines physical postures, breathing exercises, and meditation."}
];

//game options variables
const categoryBtn = document.querySelector('.categoryBtn');
const categoryContent = document.querySelector('.categoryContent');
const roundCountBtn = document.querySelector('.roundCountBtn');
const roundCountContent = document.querySelector('.roundCountContent');
 
//dropdown button toggle
categoryBtn.addEventListener("click", function() {
    categoryContent.style.display = categoryContent.style.display === "block" ? "none" : "block";
});
roundCountBtn.addEventListener("click", function() {
    roundCountContent.style.display = roundCountContent.style.display === "block" ? "none" : "block";
});
window.addEventListener("click", function(event) {
    if (!categoryBtn.contains(event.target) && !categoryContent.contains(event.target)) {
        categoryContent.style.display = "none";
    }
    if (!roundCountBtn.contains(event.target) && !roundCountContent.contains(event.target)) {
        roundCountContent.style.display = "none";
    }
});


function selectCategory(option) {
    categoryBtn.textContent = option;
    categoryContent.style.display = "none";
};
function selectRoundCount(option) {
    roundCountBtn.textContent = option;
    roundCountContent.style.display = 'none';
};

//pages variables
const homePage = document.querySelector(".homePage")
const gamePage = document.querySelector(".gamePage")
const scorePage = document.querySelector(".scorePage")
const loadingPage = document.querySelector(".loadingPage");
const loadingText = document.querySelector(".loadingText"); //loading page text

//start game variables
const startBtn = document.querySelector(".startBtn")
let wordData = [];
let roundValue = 0; //current round value
let scoreValue = 0; 
let maxRound = 0; //selected rounds by user
const gamePageSelectedCategory = document.querySelector(".gamePageSelectedCategory");
const gamePageSelectedRoundCount = document.querySelector(".gamePageSelectedRoundCount");

//execute game
startBtn.addEventListener("click", () => {

    let  rounds = {
        "1 Round": 1,
        "5 Rounds": 5,
        "10 Rounds": 10,
        "15 Rounds": 15,
        "20 Rounds": 20,
    };

    maxRound = rounds[roundCountBtn.textContent];

    gamePageSelectedCategory.textContent = categoryBtn.textContent;
    gamePageSelectedRoundCount.textContent = roundCountBtn.textContent;
    
    getData();

    roundValue = 0;
    scoreValue = 0;

});

//fetch data API
const url = "https://api.groq.com/openai/v1/chat/completions";
const apiKey = "Z3NrX0ZPbDIzcURlbGVBenVwODFyelQ3V0dkeWIzRllmQnZyRTZzVHdlSUI3SmtDdlBPbFlES3g=";

async function getData() {
    
    let prompts = {
        "Random 1 Word": `Give me 30 random words along with a related 2 emojis and a description (1 whole sentence) about the word (without telling the word itself). STRICTLY USE THIS FORMAT: "[{"word": "example", "emoji": "🔥🔥", "hint": "description"}]" **MUST BE A VALID JSON FORMATTING**`,
        "Movies": `Give me 30 random popular movie titles of all time along with a related 3 different emojis and a description about the movie which include the date, some popular characters and story (without telling the movie title). STRICTLY USE THIS FORMAT: "[{"word": "example", "emoji": "🔥🔥🔥", "hint": "hint"}]" **MUST BE A VALID JSON FORMATTING**`,
        "Holidays & Events": `Give me 30 random popular Holidays in the Philippines along with a related 3 different emojis and a description about the word which include the date (without telling the holiday itself). STRICTLY USE THIS FORMAT: "[{"word": "example", "emoji": "🔥🔥🔥", "hint": "hint"}]" **MUST BE A VALID JSON FORMATTING**`,
        "Places": `Give me 30 random popular places along with a related 3 different emojis and a description about the place (without telling the place itself). STRICTLY USE THIS FORMAT: "[{"word": "example", "emoji": "🔥🔥🔥", "hint": "hint"}]" **MUST BE A VALID JSON FORMATTING**`,
        "Video Games": `Give me 30 random popular video games of all time along with a related 3 different emojis and a description about the game which include date and type of game (without telling the game name). STRICTLY USE THIS FORMAT: "[{"word": "example", "emoji": "🔥🔥🔥", "hint": "hint"}]" **MUST BE A VALID JSON FORMATTING**`,
    };

    let prompt = prompts[categoryBtn.textContent]

    let requestData = {
        model: "llama-3.3-70b-versatile",    
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
    };
 
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${atob(apiKey)}`,
        },
        body: JSON.stringify(requestData),
    };
 
    //show loading page
    homePage.classList.add("hidden");
    loadingPage.classList.remove("hidden");

    try {
        let result = await fetch(url, options);
        let data = await result.json();
 
        wordData = JSON.parse(data.choices[0].message.content);

        loadingPage.classList.add("hidden");
        gamePage.classList.remove("hidden");

        nextRound();
    } catch (error) {

        //use local data incase fetch failed
        wordData = localData[categoryBtn.textContent];

        loadingPage.classList.add("hidden");
        gamePage.classList.remove("hidden");

        nextRound();

    }  finally {

    }

}

//loading page text
function updateLoadingPageText() {
    loadingText.textContent = loadingPageMessages[Math.floor(Math.random() * loadingPageMessages.length)];
};
const messageInterval = setInterval(updateLoadingPageText, 1500);

//game rounds variables
const roundNumber = document.querySelector(".roundNumber");
const emojiDisplay = document.querySelector(".emojiDisplay");
const answerInput = document.querySelector(".answerInput");
const submitAnswerBtn = document.querySelector(".submitAnswerBtn");
const hintContent = document.querySelector(".hintContent");
const feedbackDisplay = document.querySelector(".feedbackDisplay");
const nextRoundBtn = document.querySelector(".nextRoundBtn");
const showAnswerBtn = document.querySelector(".showAnswerBtn");
const correctAnswerDisplay = document.querySelector(".correctAnswerDisplay");
const answerSection = document.querySelector(".answerSection");
const showResultBtn = document.querySelector(".showResultBtn");

//next rounds
async function nextRound() {
 
    roundValue++;
    roundNumber.textContent = roundValue;

    let randomIndex = Math.floor(Math.random() * wordData.length);
    let { word, emoji, hint } = wordData.splice(randomIndex, 1)[0]; // Remove used emoji

    //reset values
    answerInput.value = "";
    correctAnswerDisplay.textContent = "";

    //display emoji and hint that is stored in wordData
    emojiDisplay.textContent = emoji;
    hintContent.textContent = hint;

    //store correct answer
    answerInput.dataset.answer = word.toUpperCase();

    feedbackDisplay.style.color = "aqua"
    feedbackDisplay.textContent = "Guess the Word!";

    //hide access buttons 1st (until user submits an answer)
    answerSection.classList.remove("hidden");
    nextRoundBtn.classList.add("hidden");
    showAnswerBtn.classList.add("hidden");
    showResultBtn.classList.add("hidden");

    //show answer in console log HAHAHAHAHAHAHA!
    // console.log(answerInput.dataset.answer);
};

//submit answer
submitAnswerBtn.addEventListener("click", checkAnswer);
answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkAnswer();
});

//check answer
function checkAnswer() {

    let userAnswer = answerInput.value.trim().toUpperCase();
    let correctAnswer = answerInput.dataset.answer.trim().toUpperCase();

    if (userAnswer === correctAnswer) { //user answer is CORRECT

        scoreValue++;

        //show correct answer messages and next round button and hide input
        feedbackDisplay.innerHTML = correctAnswerMessages[Math.floor(Math.random() * correctAnswerMessages.length)] + "<br>The answer is:";
        feedbackDisplay.style.color = "aqua"

        correctAnswerDisplay.textContent = correctAnswer;

        answerSection.classList.add("hidden");
        showAnswerBtn.classList.add("hidden");

        //show "show result btn" instead of "next round btn" if last round
        if(roundValue >= maxRound) {
            showResultBtn.classList.remove("hidden");
        } else {
            nextRoundBtn.classList.remove("hidden");
        }
        
    } else { //user answer is WRONG
        //show wrong answer messages and give up btn
        feedbackDisplay.innerHTML = wrongAnswerMessages[Math.floor(Math.random() * wrongAnswerMessages.length)];
        feedbackDisplay.style.color = "red"

        showAnswerBtn.classList.remove("hidden");
    }

};

//give up btn
showAnswerBtn.addEventListener("click", () => {
    //show give up messages and next round btn and hide input
    feedbackDisplay.innerHTML = giveUpMessages[Math.floor(Math.random() * giveUpMessages.length)];
    feedbackDisplay.style.color = "red"
    correctAnswerDisplay.textContent = answerInput.dataset.answer.toUpperCase();

    answerSection.classList.add("hidden");
    showAnswerBtn.classList.add("hidden");

    //show "show result btn" instead of "next round btn" if last round
    if(roundValue >= maxRound) {
        showResultBtn.classList.remove("hidden");
    } else {
        nextRoundBtn.classList.remove("hidden");
    }
});

//next round btn
nextRoundBtn.addEventListener("click", nextRound);

//score page variables
const scorePageTitle = document.querySelector(".scorePageTitle");
const scoreDisplay = document.querySelector(".scoreDisplay");
const scoreFeedbackDisplay = document.querySelector(".scoreFeedbackDisplay");
const playAgainBtn = document.querySelector(".playAgainBtn");
const scorePageEmoji = document.querySelector(".scorePageEmoji");

//score page
showResultBtn.addEventListener("click", () => {
    gamePage.classList.add("hidden");
    scorePage.classList.remove("hidden");

    scoreDisplay.textContent = `${scoreValue}/${maxRound}`;

    //pass or fail font color and messages
    if(scoreValue >= maxRound*0.7) { //WIN
        scorePageEmoji.src = "./images/win-gif.gif";
        scorePageTitle.textContent = "Victory!"
        scoreDisplay.style.color = "#32CD32";
        scoreFeedbackDisplay.style.color = "#28a745";
        scoreFeedbackDisplay.textContent = correctAnswerMessages[Math.floor(Math.random() * correctAnswerMessages.length)];
    } else { //LOSE
        scorePageEmoji.src = "./images/lose-gif.gif";
        scorePageTitle.textContent = "Game Over!"
        scoreDisplay.style.color = "orangered";
        scoreFeedbackDisplay.style.color = "red";
        scoreFeedbackDisplay.textContent = wrongAnswerMessages[Math.floor(Math.random() * wrongAnswerMessages.length)];
    }
    
});

//play again
playAgainBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});