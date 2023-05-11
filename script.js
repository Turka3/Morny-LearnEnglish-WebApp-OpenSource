let counter = 0; // sayacı tanımla

function changeText() {
    const buttonTexts = [
        "Artificial Intelligence (AI) is a rapidly advancing field of technology that has the potential to revolutionize many aspects of our lives. AI involves the development of intelligent machines that can perform tasks that typically require human intelligence, such as recognizing speech, interpreting images, and making decisions. The future of AI looks promising, with the potential to transform many industries, from healthcare to finance to transportation. In healthcare, for example, AI can assist doctors in diagnosing diseases, predicting patient outcomes, and developing personalized treatment plans. In finance, AI can help detect fraud, analyze market trends, and make investment decisions. In transportation, AI can enable self-driving cars that reduce accidents and traffic congestion. However, there are also concerns about the potential negative effects of AI, such as job displacement and privacy violations. To address these challenges, it is essential to invest in education and training programs that prepare people for the jobs of the future and develop regulations that ensure AI is developed and used responsibly. Despite these challenges, the future of AI looks promising, and it has the potential to transform many aspects of our lives for the better.",
        "The future of medicine holds immense promise as technology continues to advance and research expands. Emerging treatments such as gene editing, nanotechnology, and stem cell therapies are changing the landscape of healthcare. These cutting-edge technologies have the potential to revolutionize how we treat diseases and improve overall health outcomes. Additionally, the development of artificial intelligence (AI) and machine learning has the potential to transform the way medical diagnoses are made, and how healthcare is delivered. AI can help healthcare professionals to diagnose diseases more accurately and quickly, predict the likelihood of certain diseases, and create personalized treatment plans for individual patients. Advancements in medical technology will also continue to improve patient outcomes and reduce healthcare costs. Telemedicine and remote patient monitoring are becoming increasingly popular, which means that patients can receive medical care from the comfort of their own homes. In conclusion, the future of medicine is bright, with a focus on personalized treatments, precision medicine, and the integration of technology to improve healthcare outcomes. As medical research and technology continue to advance, we can expect to see even more groundbreaking treatments and cures for diseases.",
        "Draco Malfoy is one of the most prominent characters in the Harry Potter series. He is a complex character, whose personality is shaped by his upbringing, values, and social status. Malfoy is portrayed as arrogant, cunning, and prejudiced against Muggle-borns and those who are not purebloods. Malfoy's personality is largely shaped by his family's beliefs and values. He is taught from a young age that being a pureblood is superior, and he adopts this belief as his own. His arrogance and entitlement are a result of his privileged upbringing, which leads him to look down on those who are not of his social status. However, as the series progresses, Malfoy's character becomes more nuanced. He is forced to confront the reality of the world he lives in and the actions of those around him. Malfoy's internal struggle is exemplified in his decision to not identify Harry Potter during the Battle of Hogwarts, despite being given the opportunity to do so. This act suggests that Malfoy is not entirely committed to his family's beliefs and may have a conscience that is at odds with his upbringing. In conclusion, Malfoy is a character that embodies the complexities of human nature. He is a product of his upbringing, but his character is not entirely defined by his family's beliefs. Malfoy's journey throughout the series illustrates how individuals can struggle with their identity and beliefs, and how they can ultimately choose their own path.",
        "Harry Potter is a series of seven novels written by British author J.K. Rowling. The story follows the life of a young orphan boy, Harry Potter, who discovers that he is a wizard and attends Hogwarts School of Witchcraft and Wizardry. Along with his friends Ron Weasley and Hermione Granger, Harry embarks on many adventures as he tries to stop the evil Lord Voldemort from taking over the wizarding world. The Harry Potter series has become a cultural phenomenon, selling over 500 million copies worldwide and inspiring a successful film franchise. The books have been translated into 80 languages, making it one of the most widely-read series in history. One of the reasons for the series' success is its relatable characters and themes. Despite being set in a magical world, the books deal with universal themes such as love, friendship, and the struggle between good and evil. The series has also been praised for its diverse cast of characters and its portrayal of complex social issues. Overall, the Harry Potter series has captivated readers of all ages and has left a lasting impact on popular culture. With its unforgettable characters and thrilling plot twists, the books are a must-read for anyone who enjoys a good adventure.",
        "Lord of the Rings is a trilogy of epic fantasy novels written by J.R.R. Tolkien. Set in the fictional world of Middle-earth, the story follows a hobbit named Frodo Baggins who is tasked with destroying a powerful ring that has the potential to bring about the end of the world. The Lord of the Rings series is known for its intricate world-building and complex characters. From the brave and honorable Aragorn to the manipulative and treacherous Gollum, the characters in the series are both captivating and unforgettable. The series has been adapted into several successful films, directed by Peter Jackson. The films have won multiple Academy Awards and have become cultural touchstones in their own right. One of the most impressive aspects of the Lord of the Rings series is Tolkien's attention to detail. From the languages spoken in Middle-earth to the intricate history of the different races, every aspect of the world feels real and fleshed out. The themes of the series are also timeless and resonate with readers of all ages. Friendship, sacrifice, and the battle between good and evil are just a few of the many themes explored in the books. Overall, the Lord of the Rings series is a must-read for anyone who loves epic fantasy. Tolkien's meticulous world-building and unforgettable characters make for a truly immersive reading experience that will stay with readers long after they finish the last page.",
        "Fast and Furious is a popular film franchise that revolves around the world of illegal street racing, heists, and espionage. The series began in 2001 with the release of the first movie, The Fast and the Furious, and has since spawned nine sequels. The series has become known for its high-speed chases, intense action scenes, and ensemble cast. The films feature a diverse cast of characters, including street racers, ex-convicts, and government agents. Fans have grown to love the series for its over-the-top stunts and thrilling action sequences. In addition to the adrenaline-pumping action, the Fast and Furious series also explores themes of family, loyalty, and redemption. The characters often find themselves at odds with each other, but ultimately come together as a team to take on bigger threats. Despite the series' success, it has not been without controversy. The franchise has faced criticism for its portrayal of street racing and its use of harmful stereotypes. Nevertheless, the series continues to attract a large following and has become a cultural phenomenon. Overall, the Fast and Furious series is an exciting and entertaining film franchise that has something for everyone. Whether you're a fan of high-speed chases or just enjoy a good action movie, the series is sure to deliver.",
        "Air pollution is a major global issue that affects millions of people every day. It occurs when harmful substances such as particulate matter, nitrogen oxides, and sulfur dioxide are released into the air, often as a result of human activity. One of the biggest contributors to air pollution is the burning of fossil fuels for transportation and energy production. This not only releases harmful pollutants into the air, but also contributes to climate change. Air pollution has a number of negative effects on both human health and the environment. It can cause respiratory problems such as asthma and lung cancer, and is also linked to heart disease and stroke. In addition, air pollution can harm wildlife and damage ecosystems. To combat air pollution, there are a number of steps that individuals and governments can take. These include promoting the use of public transportation and electric vehicles, investing in renewable energy sources, and implementing regulations on industrial emissions."
    ];

    const button = document.getElementById("metin-main");

    button.innerHTML = buttonTexts[counter % buttonTexts.length];
    counter++;

}