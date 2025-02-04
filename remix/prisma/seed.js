import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

async function seed() {
    
    await db.note.deleteMany();

  await Promise.all(
    getNotes().map(note => {
      return db.note.create({ data: note });
    })
  );
}

seed();

function getNotes(){
    return [
            {
              title: "Exploring the Universe",
              body: "The universe is vast and full of mysteries waiting to be uncovered. From the infinite galaxies to the tiniest particles, there's always something new to discover."
            },
            {
              title: "The Art of Cooking",
              body: "Cooking is both an art and a science. Mastering the perfect dish requires creativity, knowledge of ingredients, and a lot of practice. Let’s explore the beauty of flavors."
            },
            {
              title: "The Future of Technology",
              body: "As we continue to innovate, technology is shaping our future in unimaginable ways. From AI to quantum computing, the possibilities are limitless. It’s exciting to think about what’s next."
            },
            {
              title: "Traveling the World",
              body: "Traveling is a journey of self-discovery. It opens your mind to different cultures, traditions, and landscapes. Each destination offers a unique experience, and it’s worth exploring the unknown."
            },
            {
              title: "Sustainable Living",
              body: "Living sustainably is about making choices that are better for the environment. It’s about reducing waste, conserving resources, and making small changes that add up to a big difference for the planet."
            }
    ]
}