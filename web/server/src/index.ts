import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Dev Skills API is running',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/challenges', (_req, res) => {
  res.json([
    {
      id: 1,
      title: 'Hello World',
      description: 'Write a program that prints "Hello, World!" to the console.',
      difficulty: 'easy',
      language: 'any',
    },
    {
      id: 2,
      title: 'FizzBuzz',
      description:
        'Print numbers 1 to 100. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for multiples of both print "FizzBuzz".',
      difficulty: 'easy',
      language: 'any',
    },
    {
      id: 3,
      title: 'Palindrome Checker',
      description: 'Write a function that checks whether a given string is a palindrome.',
      difficulty: 'medium',
      language: 'any',
    },
  ]);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
