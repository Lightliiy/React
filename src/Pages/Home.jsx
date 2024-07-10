/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import book1 from '../assets/Image/book1.png';
import The1984 from '../assets/Image/The1984.png';
import themorking from '../assets/Image/themorking.png';
import Pride from '../assets/Image/Pride.png';
import thecacher from '../assets/Image/thecacher.png';
import ems from '../assets/Image/ems.png';
import moby from '../assets/Image/moby.png'; // Add the new image paths
import war from '../assets/Image/war.png';
import odyssey from '../assets/Image/odyssey.png';
import crime from '../assets/Image/crime.png';

const Home = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: '1925',
      description: 'The Great Gatsby is a novel that captures the decadence and excess of the Jazz Age in 1920s New York. It follows the story of the enigmatic millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan, a married woman from his past. The novel explores themes of wealth, class, love, and the American Dream. As the story unfolds, the characters navigate a complex web of relationships and societal expectations, ultimately revealing the tragic consequences of Gatsby\'s relentless pursuit of his dream.',
      image: book1,
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      year: '1949',
      description: '1984 is a dystopian novel that depicts a totalitarian society where the government exercises complete control over the lives of its citizens. The story follows the protagonist, Winston Smith, as he navigates this oppressive world and struggles to maintain his individuality and free thought. The novel serves as a chilling warning about the dangers of governmental overreach and the loss of personal freedoms. Through Winston\'s eyes, readers witness the pervasive surveillance, propaganda, and brutal repression that characterize the regime, highlighting the profound impact on human spirit and society.',
      image: The1984,
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: '1960',
      description: 'To Kill a Mockingbird is a coming-of-age story set in the American South during the Great Depression. It follows the perspective of Scout Finch, a young girl who witnesses the trial of a black man falsely accused of a crime, and explores themes of racial injustice, moral courage, and the loss of innocence. The novel is widely regarded as a classic of American literature. Through Scout\'s experiences, readers are introduced to the deep-seated prejudices and complexities of the time, as well as the powerful impact of her father, Atticus Finch, who stands as a moral beacon in the face of overwhelming societal pressure.',
      image: themorking,
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: '1813',
      description: 'Pride and Prejudice is a romantic novel that follows the Bennet family as they navigate the social customs and expectations of 19th-century England. The story centers around the relationship between Elizabeth Bennet and Mr. Darcy, as they overcome their initial prejudices and learn to appreciate each other. The novel explores themes of love, marriage, and the role of women in a patriarchal society. Austen\'s keen observations and wit provide a rich, detailed portrayal of the characters\' struggles and triumphs, ultimately offering a critique of the social structures and expectations of the time.',
      image: Pride,
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      year: '1951',
      description: 'The Catcher in the Rye is a coming-of-age novel that follows the rebellious teenage protagonist, Holden Caulfield, as he navigates the adult world. Disillusioned with the phoniness and hypocrisy he sees around him, Holden embarks on a journey of self-discovery and reflection on the loss of innocence. The novel has become a classic in American literature, known for its candid and introspective portrayal of adolescence. Through Holden\'s narrative, readers gain insight into his complex psyche, marked by deep-seated loneliness, confusion, and a desperate search for authenticity and meaning in a seemingly superficial world.',
      image: thecacher,
    },
    {
      id: 6,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      year: '1954-1955',
      description: 'The Lord of the Rings is an epic fantasy novel that follows the journey of Frodo Baggins and his companions as they attempt to destroy a powerful ring and defeat the dark lord Sauron. Set in the fantastical world of Middle-earth, the story blends elements of myth, adventure, and heroism, exploring themes of good versus evil, the nature of power, and the importance of friendship and courage. Tolkien\'s richly detailed narrative and world-building have captivated readers for generations, offering a timeless tale of hope, resilience, and the enduring power of camaraderie and sacrifice in the face of overwhelming darkness.',
      image: ems,
    },
    {
      id: 7,
      title: 'Moby Dick',
      author: 'Herman Melville',
      year: '1851',
      description: 'Moby Dick is a novel that follows the obsessive quest of Captain Ahab to hunt down the white whale, Moby Dick. The story is narrated by Ishmael, a sailor on Ahab\'s ship, the Pequod. Through Ishmael\'s narrative, readers are introduced to a diverse cast of characters and the complexities of the whaling industry. The novel explores themes of obsession, revenge, and the struggle between man and nature. Melville\'s richly detailed prose and profound philosophical insights have cemented Moby Dick as one of the great American novels, offering readers a deep and multifaceted exploration of the human condition.',
      image: moby,
    },
    {
      id: 8,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      year: '1869',
      description: 'War and Peace is an epic novel that intertwines the lives of several aristocratic families in Russia during the Napoleonic Wars. The story delves into the personal and political struggles of its characters, exploring themes of love, fate, and the impact of historical events on individual lives. Tolstoy\'s masterful storytelling and deep philosophical insights offer a panoramic view of Russian society and the human condition. Through its vast scope and intricate character development, War and Peace remains a monumental work of literature, reflecting the complexities and contradictions of life during times of upheaval.',
      image: war,
    },
    {
      id: 9,
      title: 'The Odyssey',
      author: 'Homer',
      year: '8th century BC',
      description: 'The Odyssey is an ancient Greek epic poem that recounts the adventures of Odysseus as he attempts to return home to Ithaca after the Trojan War. The story is filled with encounters with mythical creatures, gods, and goddesses, as Odysseus faces numerous trials and tribulations. The poem explores themes of heroism, loyalty, and the enduring human spirit. Homer\'s timeless narrative and poetic brilliance have made The Odyssey a cornerstone of Western literature, offering readers a glimpse into the values and beliefs of ancient Greek culture while providing a captivating tale of adventure and resilience.',
      image: odyssey,
    },
    {
      id: 10,
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      year: '1866',
      description: 'Crime and Punishment is a psychological novel that delves into the mind of its protagonist, Rodion Raskolnikov, as he grapples with guilt and moral dilemmas after committing a murder. The story explores themes of redemption, justice, and the complexities of human nature. Dostoevsky\'s profound psychological insights and exploration of existential questions have made Crime and Punishment a landmark work of Russian literature. Through Raskolnikov\'s internal struggles and interactions with other characters, the novel offers a compelling examination of the human psyche and the consequences of one\'s actions.',
      image: crime,
    },
  ];

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => handleBookSelect(book)}
          >
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p className="text-gray-600 font-medium">{book.author}</p>
              <p className="text-gray-500 text-sm">{book.year}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedBook && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{selectedBook.title}</h2>
          <div className="flex">
            <img src={selectedBook.image} alt={selectedBook.title} className="w-48 h-72 object-cover mr-4" />
            <div>
              <p className="text-gray-600 font-medium mb-2">Author: {selectedBook.author}</p>
              <p className="text-gray-500 text-sm mb-2">{selectedBook.year}</p>
              <p>{selectedBook.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
