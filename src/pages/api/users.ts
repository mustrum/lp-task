import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '../../interfaces'



function generateSampleData(): Array<User> {
  const locations = ['Sofia', 'San Francisco', 'Amsterdam', 'Singapore'];
  const YEAR_MS = 365*24*60*60*1000;
  const NOW = Date.now();

  return new Array(100).fill(0).map((_, i) => ({
    id: 'usr_' + i,
    isDeveloper: i%5 === 0,
    devices: i % 3 + 1,
    sessions: new Array((i % 5) * 3 + 2).fill({}),
    location: locations[i%locations.length],
    created: new Date(NOW - (i % 5) * YEAR_MS).toLocaleString('bg'),
    events: i*3 % 7,
    bucket: i%100,
    channels: {
      push: false,
      email: true,
      webhook: true,
      appInbox: true
    },
    attributes: {
      email: `usr_${i}@example.com`
    },
  }));
}

// Fake users data
const users: User[] = generateSampleData();

export default function handler(
    _req: NextApiRequest,
    res: NextApiResponse<User[]>
) {
  // Get data from your database
  res.status(200).json(users)
}
