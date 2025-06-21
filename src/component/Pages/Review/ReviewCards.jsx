import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ajay Bhudaniya',
    rating: '4.2',
    role: 'Senior Software Engineer',
    image: 'https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg',
    comment:
      'Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.',
    link: '',
  },
  {
    name: 'Tim Cook',
    rating: '4',
    role: 'CEO of Apple',
    image: 'https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg',
    comment:
      'Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.',
    link: 'https://twitter.com/tim_cook',
  },
  {
    name: 'Parag Agrawal',
    rating: '5',
    role: 'CEO of Twitter',
    image: 'https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg',
    comment:
      'Enim neque volutpat ac tincidunt vitae semper. Mattis aliquam faucibus purus in massa tempor.',
    link: 'https://twitter.com/paraga',
  },
  {
    name: 'Satya Nadella',
    rating: '3',
    role: 'CEO of Microsoft',
    image: 'https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg',
    comment:
      'Tortor dignissim convallis aenean et tortor at. At ultrices mi tempus imperdiet nulla malesuada.',
    link: 'https://twitter.com/satyanadella',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

// ⭐ Star rating component
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1 mt-1">
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
        ))}
    </div>
  );
};

const ReviewCards = () => {
  return (
    <section id="testimonies" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-6 md:mx-10 lg:mx-20 xl:mx-auto mt-10">
        <div className="mb-12 text-center space-y-4">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#b728ff] rounded-full shadow-md hover:scale-105 transition-transform duration-300">
            What People Say
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Real Feedback from Real People
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Our community speaks volumes about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="relative p-6 rounded-xl border border-[#b728ff]/30 bg-[#0e0e0e] transition-transform duration-300 hover:scale-[1.03] shadow-lg hover:shadow-[0_0_20px_#b728ff40]"
            >
              <a href={t.link || '#'} target="_blank" rel="noreferrer">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border-2 border-[#b728ff] object-cover"
                    onClick={() => {
                      if (!t.link) alert('Coming Soon');
                    }}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{t.name}</h3>
                    <p className="text-sm text-gray-400">{t.role}</p>
                    {renderStars(parseFloat(t.rating))}
                  </div>
                </div>
                <p className="text-gray-300">{t.comment}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;
