import caves1 from './caves1.png';
import caves2 from './caves2.png';
import caves3 from './caves3.png';
import ALAM1 from './ALAM1.png';
import ALAM2 from './ALAM2.png';
import ALAM3 from './ALAM3.png';
import ALAM4 from './ALAM4.png';

export const projects = [
  {
    id: 1,
    title: 'CAVES ',
    description: 'A website containing curated culture collection strains and its environmental information. This research project will provide a collection and inventory of the microbiome metadata of gut and guano of bat species present in caves in CALABARZON.',
    images: [caves1, caves2, caves3],
    link: 'https://isolationsources-caves.netlify.app/',
    date: '2024',
    github: 'https://example.com/project1',
    deliverables: [
      'Research',
      'Web Design',
      'Web Development',
      'Database Management'
    ]
  },
  {
    id: 2,
    title: 'ALAM',
    description: 'Annual Literary Academic and Musical Contest is a scholastic competition for junior and senior high school students in Isabela.',
    images: [ALAM1, ALAM2, ALAM3, ALAM4],
    link: '',
    date: '2020',
    github: '',
    deliverables: [
      'Visual Identity',
      'Event Design',
      'Publications',
    ]
  }
];